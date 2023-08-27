import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortCategory, setSortCategory] = useState("Electronics");
  const [sortPrice, setSortPrice] = useState("1000");
  const [sortRating, setSortRating] = useState("5.0");

  useEffect(() => {
    fetch(
      `http://localhost:5000/products/${sortCategory}/${sortPrice}/${sortRating}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [sortCategory, sortPrice, sortRating]);

  return (
    <div className="mb-10">
      <div className="text-center py-8 mt-5">
        <h2 className="font-bold text-4xl mb-4 our-chefs-heading">
          Our Products
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner ease-linear rounded-full border-8 border-t-8 border-red-500 h-32 w-32"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-start gap-5 text-red-500 font-semibold mt-3 ml-2 mr-3 md:ml-5 mb-10">
            <select
              value={sortCategory}
              onChange={(e) => setSortCategory(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="Electronics">
                Sort by Category (Electronics)
              </option>
              <option value="Fashion and Apparel">
                Sort by Category (Fashion and Apparel)
              </option>
              <option value="Sports and Outdoors">
                Sort by Category (Sports and Outdoors)
              </option>
            </select>
            <select
              value={sortPrice}
              onChange={(e) => setSortPrice(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="1000">Sort by Price (Max:1000)</option>
              <option value="600">Sort by Price (Max:600)</option>
              <option value="300">Sort by Price (Max:300)</option>
            </select>
            <select
              value={sortRating}
              onChange={(e) => setSortRating(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="5.00">Sort by Rating (Max:5.00)</option>
              <option value="3.5">Sort by Rating (Max:3.5)</option>
              <option value="2.00">Sort by Rating (Max:2.00)</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {products.map((products) => (
              <div
                key={products._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <LazyLoadImage
                  className="w-full h-64 object-cover object-center"
                  src={products.image_url}
                />

                <div className="p-4">
                  <h2 className="font-bold text-2xl mb-2">{products.name}</h2>
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
                  {/* <Link to={`/productsdetails/${chef.id}`}> */}
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                    View Profile
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OurProducts;
