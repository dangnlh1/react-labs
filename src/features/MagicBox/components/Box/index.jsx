import "./Box.scss";
import PropTypes from "prop-types";

const sizeMap = {
  small: "40px",
  medium: "60px",
  large: "80px",
};

function Box({ box, onClick }) {
  const { color = "black", luckyNumber, size = "medium" } = box;
  const height = sizeMap[size];

  const handRemoveClick = () => {
    if (onClick) onclick(box);
  };

  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}

      <button onClick={handRemoveClick}>Romove</button>
    </div>
  );
}

Box.propTypes = {
  box: PropTypes.object,
};

Box.defaultProps = {
  box: {},
  onClick: null,
};

export default Box;
