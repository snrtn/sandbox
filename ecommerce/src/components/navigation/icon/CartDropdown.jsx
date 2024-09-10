import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartDropdown = ({
  isOpen,
  handleCartMouseEnter,
  handleCartMouseLeave,
}) => {
  const isTabletScreen = 760;

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 2,
      color: "Red",
      size: "M",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 1,
      color: "Blue",
      size: "L",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      quantity: 3,
      color: "Green",
      size: "S",
    },
    {
      id: 4,
      name: "Product 4",
      price: 12,
      quantity: 1,
      color: "Yellow",
      size: "M",
    },
    {
      id: 5,
      name: "Product 5",
      price: 18,
      quantity: 2,
      color: "Black",
      size: "XL",
    },
  ]);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      if (position <= 2600 && position > isTabletScreen) {
        handleCartMouseLeave();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleCartMouseLeave, isTabletScreen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed right-20 hidden tablet-lg:flex tablet-lg:w-[400px] h-[600px] shadow-main bg-bgWhite rounded-main  z-20"
      style={{ top: "6%" }}
      onMouseEnter={handleCartMouseEnter}
      onMouseLeave={handleCartMouseLeave}
    >
      <div className="flex flex-col w-full h-full pt-4">
        <ul className="p-4 flex-grow overflow-auto ">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center py-2 border-b cursor-pointer"
            >
              <img
                src={`https://via.placeholder.com/50`}
                alt={item.name}
                className="w-32 h-32 object-cover mr-4"
              />
              <div className="flex flex-col w-full">
                <div className="font-bold">{item.name}</div>
                <div className="flex mt-2 w-full h-full">
                  <div className="flex flex-col w-full h-full">
                    <div className="text-xs text-gray-600">
                      {item.color} / {item.size}
                    </div>

                    <div className="mt-2 text-md font-medium">
                      ${item.price * item.quantity}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-around w-full">
                    <div className="text-xs text-gray-600 h-full">
                      Qty:
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        className="ml-2 w-8 text-sm rounded-main cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      className="mt-2"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FaRegTrashCan className="text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div className="flex justify-center items-center m-auto h-20" />
        </ul>
        <Link to={"/cart"}>
          <h1 className="p-4 border-t flex items-center text-base justify-end font-bold">
            Total: ${totalAmount}
          </h1>
          <button className="w-full py-6 text-cWhite bg-bgBlack font-bold text-center rounded-b-main">
            View Cart ({cartItems.length})
          </button>
        </Link>
      </div>
    </div>
  );
};

CartDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCartMouseEnter: PropTypes.func.isRequired,
  handleCartMouseLeave: PropTypes.func.isRequired,
};

export default CartDropdown;
