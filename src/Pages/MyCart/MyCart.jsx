import { useContext, useEffect, useState } from "react";
import { Context } from "../../AuthProviders/Providers";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyCart = () => {
  const { user } = useContext(Context);

  const [productData, setproductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setproductData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-10">
      <div className="text-center py-8 mt-5">
        <h2 className="font-bold text-4xl mb-4 our-chefs-heading">My Cart</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner ease-linear rounded-full border-8 border-t-8 border-red-500 h-32 w-32"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
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
                        // notify();
                        // handleClick(value);
                      }}
                      className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-700"
                    >
                      Increase
                    </button>
                    <button
                      onClick={() => {
                        // notify();
                        // handleClick(value);
                      }}
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
