import { useState, useEffect, useRef } from "react";
import SlideControl from "./SlideControl";
import slideView from "./slideView.styles";
import useMediaQuery from "@hooks/useMediaQuery";
import slides from "./slideView.data";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SlideView = () => {
  const isMobile = useMediaQuery(480);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4200);
  };

  useEffect(() => {
    if (isPlaying) {
      startSlideshow();
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    if (isPlaying) startSlideshow();
  };

  const nextSlide = () => {
    resetInterval();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    resetInterval();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      startSlideshow();
    }
    setIsPlaying(!isPlaying);
  };

  const setSlide = (index) => {
    resetInterval();
    setCurrentSlide(index);
  };

  const getSlideImage = (index) => {
    const correctIndex = (index + slides.length) % slides.length;
    return isMobile
      ? slides[correctIndex].mobileImage
      : slides[correctIndex].desktopImage;
  };

  const getSlideContent = (index) => {
    const correctIndex = (index + slides.length) % slides.length;
    return slides[correctIndex];
  };

  return (
    <div className={slideView.container}>
      <div className="flex justify-center overflow-hidden gap-2">
        {!isMobile && (
          <div className={slideView.slideImageWrapperHalf} onClick={prevSlide}>
            <div className={slideView.darkOverlay}>
              <button
                aria-label="Previous Slide"
                className={slideView.arrowLeft}
              >
                <FaChevronLeft color="white" />
              </button>
            </div>

            <img
              src={getSlideImage(currentSlide - 1)}
              alt={getSlideContent(currentSlide - 1).title || "Previous slide"}
              className={slideView.slideImage}
              style={{ width: "100%" }}
            />
          </div>
        )}

        <Link
          className={slideView.slideImageWrapper}
          to={getSlideContent(currentSlide).link}
          aria-label={`Current slide: ${getSlideContent(currentSlide).title}`}
        >
          <div className={slideView.darkCenterOverlay}></div>
          <img
            src={getSlideImage(currentSlide)}
            alt={getSlideContent(currentSlide).title || "Current slide"}
            className={slideView.slideImage}
            style={{ height: "100%" }}
          />
          <div className={slideView.slideOverlay}>
            <div
              className={`p-pd-sm text-white text-[10px] rounded-md ${
                getSlideContent(currentSlide).keywordColor
              }`}
            >
              {getSlideContent(currentSlide).keyword.toUpperCase()}
            </div>
            <h2 className={slideView.slideTitle}>
              {getSlideContent(currentSlide).title}
            </h2>
            <p className={slideView.slideDescription}>
              {getSlideContent(currentSlide).description}
            </p>
          </div>
        </Link>

        {!isMobile && (
          <div className={slideView.slideImageWrapperHalf} onClick={nextSlide}>
            <div className={slideView.darkOverlay}>
              <button aria-label="Next Slide" className={slideView.arrowRight}>
                <FaChevronRight color="white" />
              </button>
            </div>

            <img
              src={getSlideImage(currentSlide + 1)}
              alt={getSlideContent(currentSlide + 1).title || "Next slide"}
              className={slideView.slideImage}
              style={{ width: "100%" }}
            />
          </div>
        )}
      </div>

      <SlideControl
        currentSlide={currentSlide}
        totalSlides={slides.length}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        slides={slides}
        setSlide={setSlide}
      />
    </div>
  );
};

export default SlideView;
