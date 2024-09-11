// components/ColorForm.jsx
import { useState } from "react";

const ColorForm = () => {
  const [colors, setColors] = useState([
    {
      code: "#FF5733",
      images: { front: "", back: "", left: "", right: "" },
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedColors = [...colors];
    if (name.includes("image")) {
      const imageType = name.split(".")[1];
      updatedColors[index].images[imageType] = value;
    } else {
      updatedColors[index][name] = value;
    }
    setColors(updatedColors);
  };

  const addColor = () => {
    setColors((prev) => [
      ...prev,
      { code: "", images: { front: "", back: "", left: "", right: "" } },
    ]);
  };

  return (
    <div className="p-4 bg-white ">
      <h3 className="text-lg font-semibold mb-4">Colors</h3>
      {colors.map((color, index) => (
        <div key={index} className="mb-6">
          <p className="text-red-500">{index + 1}</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Color Code:
            </label>
            <input
              type="text"
              name="code"
              value={color.code}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["front", "back", "left", "right"].map((side) => (
              <div key={side}>
                <label className="block text-sm font-medium text-gray-700">
                  {side.charAt(0).toUpperCase() + side.slice(1)} Image:
                </label>
                <input
                  type="text"
                  name={`images.${side}`}
                  value={color.images[side]}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addColor}
        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Color
      </button>
    </div>
  );
};

export default ColorForm;
