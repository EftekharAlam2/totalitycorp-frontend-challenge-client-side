import { useContext, useEffect, useState } from "react";
import { Context } from "../../AuthProviders/Providers";

const Checkout = () => {
  const { user } = useContext(Context);

  const [productData, setproductData] = useState([]);
  const totalPrice = productData.reduce(
    (total, product) => total + product.price,
    0
  );

  useEffect(() => {
    fetch(`http://localhost:5000/product/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setproductData(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
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
  };

  return (
    <div className="mx-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 justify-center mt-5 mb-5">
      <div className="overflow-x-auto">
        <h3 className="font-semibold text-2xl mb-4 ">
          Total Cost: ${totalPrice.toFixed(2)}
        </h3>
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4">Product Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Rating</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="py-2 px-4">{product.productName}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.rating}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" p-6 border rounded-lg shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="addressLine1"
          >
            Address Line 1
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="addressLine1"
            name="addressLine1"
            placeholder="123 Main St"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="city">
            City
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="city"
            name="city"
            placeholder="City"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="state">
            State/Province/Region
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="state"
            name="state"
            placeholder="State/Province/Region"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="postalCode"
          >
            ZIP/Postal Code
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="ZIP/Postal Code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="country">
            Country
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="country"
            name="country"
            placeholder="Country"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="p-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="cardholderName"
          >
            Cardholder Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="cardholderName"
            name="cardholderName"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="expirationDate"
          >
            Expiration Date
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="cvv">
            CVV/CVC
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="billingAddress"
          >
            Billing Address
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            type="text"
            id="billingAddress"
            name="billingAddress"
            placeholder="123 Main St, City, State, ZIP, Country"
          />
        </div>

        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
