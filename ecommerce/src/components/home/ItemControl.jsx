import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import itemControl from "./itemControl.styles";

const ItemControl = ({ nextSlide, prevSlide, isAtStart, isAtEnd }) => {
  return (
    <div className={itemControl.container}>
      <button
        onClick={prevSlide}
        className={`${itemControl.button} ${
          isAtStart ? itemControl.disabledButton : ""
        }`}
        disabled={isAtStart}
      >
        <FaChevronLeft className="text-xs" />
      </button>
      <button
        onClick={nextSlide}
        className={`${itemControl.button} ${
          isAtEnd ? itemControl.disabledButton : ""
        }`}
        disabled={isAtEnd}
      >
        <FaChevronRight className="text-xs" />
      </button>
    </div>
  );
};

ItemControl.propTypes = {
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  isAtStart: PropTypes.bool.isRequired,
  isAtEnd: PropTypes.bool.isRequired,
};

export default ItemControl;
