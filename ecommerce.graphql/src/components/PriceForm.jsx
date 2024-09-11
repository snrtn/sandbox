// components/PriceForm.jsx
import { useState } from "react";

const PriceForm = () => {
  const [prices, setPrices] = useState([
    { currency_code: "USD", amount: 0, discount: 0 },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPrices = [...prices];
    updatedPrices[index][name] = value;
    setPrices(updatedPrices);
  };

  const addPrice = () => {
    setPrices((prev) => [
      ...prev,
      { currency_code: "", amount: 0, discount: 0 },
    ]);
  };

  return (
    <div className="p-4 bg-white">
      <h3 className="text-lg font-semibold mb-4">Prices</h3>
      {prices.map((price, index) => (
        <div key={index} className="mb-6">
          <p className="text-red-500">{index + 1}</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Currency Code:
            </label>
            <select
              name="currency_code"
              value={price.currency_code}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              {/* More currencies */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              value={price.amount}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Discount:
            </label>
            <input
              type="number"
              name="discount"
              value={price.discount}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addPrice}
        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Price
      </button>
    </div>
  );
};

export default PriceForm;
