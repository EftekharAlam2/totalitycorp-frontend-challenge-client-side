import { useContext, useEffect, useState } from "react";
import { Context } from "../../AuthProviders/Providers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(Context);

  const [productData, setproductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalPrice = productData.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleIncrease = (product) => {
    const userName = user?.displayName;
    const email = user?.email;
    const productName = product.productName;
    const category = product.category;
    const price = product.price;
    const rating = product.rating;
    const image = product.image;

    const newProduct = {
      userName,
      email,
      productName,
      category,
      price,
      rating,
      image,
    };

    fetch(
      "https://totalitycorp-frontend-challenge-server-side.vercel.app/addproduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product Increase Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setproductData((prevProductData) => [...prevProductData, newProduct]);
        }
      });
  };

  const handleRemove = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(
        `https://totalitycorp-frontend-challenge-server-side.vercel.app/product/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successful");
            const remaining = productData.filter(
              (products) => products._id !== id
            );
            setproductData(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(
      `https://totalitycorp-frontend-challenge-server-side.vercel.app/product/${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setproductData(data);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="mb-10">
      <Helmet>
        <title>Uniqueness | My Cart</title>
      </Helmet>
      <div className="py-8 mt-5 mx-5">
        <h2 className="font-bold text-3xl mb-4 ">Added poducts</h2>
        <h3 className="font-semibold text-2xl mb-4 ">
          Items: {productData.length}
        </h3>
        <h3 className="font-semibold text-2xl mb-4 ">
          Total Cost: ${totalPrice.toFixed(2)}
        </h3>
        <Link to="/checkout">
          <button className="bg-blue-300 text-xl text-white rounded-lg py-4 px-6 hover:bg-blue-700">
            Checkout Process
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner ease-linear rounded-full border-8 border-t-8 border-red-500 h-32 w-32"></div>
        </div>
      ) : (
        <>
          <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {productData.map((products) => (
              <div
                key={products._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <LazyLoadImage
                  className="w-full h-64 object-cover object-center"
                  src={products.image}
                />

                <div className="p-4">
                  <h2 className="font-bold text-2xl mb-2">
                    {products.productName}
                  </h2>
                  <p className="text-gray-600 mb-4">{products.category}</p>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-gray-600">Price</p>
                      <p className="font-bold">{products.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rating</p>
                      <p className="font-bold">{products.rating}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleIncrease(products);
                      }}
                      className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-700"
                    >
                      Increase
                    </button>
                    <button
                      onClick={() => handleRemove(products._id)}
                      className="bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;
