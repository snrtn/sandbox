import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import itemView from "./itemView.styles";
import ItemControl from "./ItemControl";

const SlideShow = ({ slides }) => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const nextSlide = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: container.clientWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -(container.clientWidth / 4),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;

    const handleScroll = () => {
      if (currentContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = currentContainer;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={itemView.slidrcontainer}>
      <div ref={containerRef} className={itemView.scrollContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${itemView.slide} ${
              index === 0
                ? itemView.firstSlide
                : index % 2 === 0
                ? itemView.evenSlide
                : itemView.oddSlide
            } ${
              index === 0 || index === slides.length - 1
                ? itemView.hiddenSlide
                : ""
            }`}
          >
            {slide.image && (
              <Link to={slide.link}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={itemView.image}
                />
                <div className={itemView.overlay}>
                  <h3 className={itemView.overlayText}>{slide.title}</h3>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <ItemControl
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        isAtStart={isAtStart}
        isAtEnd={isAtEnd}
      />
    </div>
  );
};

SlideShow.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default SlideShow;
