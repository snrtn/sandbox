import PropTypes from "prop-types";

const Button = ({ onClick, children, color, styles }) => {
  const isColor = color ? `${color} text-cWhite` : "bg-bgWhite text-cBlack";
  const isStyles = styles ? `${styles}` : "text-xs";

  return (
    <button
      className={`rounded-main p-btn capitalize ${isColor} ${isStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  styles: PropTypes.string,
};

export default Button;
