import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

const getRandomDate = () => {
  const dates = [
    "1.1.2024",
    "15.2.2024",
    "3.3.2024",
    "10.4.2024",
    "20.5.2024",
    "5.6.2024",
    "18.6.2024",
    "29.6.2024",
    "1.2.2024",
    "15.3.2024",
    "3.4.2024",
    "10.5.2024",
    "20.6.2024",
    "5.7.2024",
    "18.1.2024",
    "29.11.2024",
    "1.2.2024",
    "15.1.2024",
    "3.4.2024",
    "10.5.2024",
    "20.12.2024",
    "5.9.2024",
    "18.10.2024",
    "29.1.2024",
    "1.2.2024",
    "15.4.2024",
    "3.5.2024",
    "10.9.2024",
    "20.10.2024",
    "5.12.2024",
    "18.11.2024",
    "29.4.2024",
    "29.4.2023",
  ];
  return dates[Math.floor(Math.random() * dates.length)];
};

const generateProducts = (count) =>
  Array(count)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
      date: getRandomDate(),
    }));

const initialProducts = generateProducts(50);

const SideMenu = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.date]) {
      acc[product.date] = [];
    }
    acc[product.date].push(product);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedProducts).sort((a, b) => {
    const dateA = new Date(a.split(".").reverse().join("-")).getTime();
    const dateB = new Date(b.split(".").reverse().join("-")).getTime();
    return dateB - dateA;
  });

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="absolute left-[-15px] h-full w-full bg-bgBlack bg-opacity-30 cursor-pointer"
        onClick={onClose}
      />
      <div className="absolute right-0 h-full w-80 bg-cWhite shadow-lg md:w-96">
        <nav className="flex items-center justify-between border-b p-4 py-8">
          <div className="flex items-center gap-4">
            <h2 className="font-medium">Recently Viewed</h2>
            <Link
              to="/wishlist"
              className="flex items-center gap-1"
              onClick={onClose}
            >
              <span className="text-xs">Wishlist</span>
              <IoIosArrowForward className="text-sm" />
            </Link>
          </div>
          <button onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </nav>
        <div className="h-[85vh] overflow-y-auto p-4">
          {sortedDates.map((date) => (
            <div key={date} className="mb-6">
              <h3 className="mb-2 font-semibold text-cBlack">{date}</h3>
              <div className="grid grid-cols-3 gap-4">
                {groupedProducts[date]
                  .slice(0, Math.random() < 0.5 ? 10 : 16)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="h-30 w-30 group relative flex cursor-pointer flex-col items-center justify-between border hover:border-black"
                    >
                      <Link to="/slug">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover"
                          onClick={onClose}
                        />
                      </Link>
                      <button
                        className="absolute right-2 top-2 text-cLightBlack opacity-0 group-hover:opacity-100"
                        onClick={() => handleRemove(product.id)}
                      >
                        <IoMdClose size={24} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideMenu;
