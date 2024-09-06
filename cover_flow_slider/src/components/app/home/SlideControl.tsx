import { useRef, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import slideControl from "./slideControl.styles";

interface SlideControlProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  togglePlay: () => void;
  isPlaying: boolean;
  slides: { title: string; description: string }[];
  setSlide: (index: number) => void;
}

const SlideControl = ({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  togglePlay,
  isPlaying,
  slides,
  setSlide,
}: SlideControlProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const adjustScrollPosition = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const activeSlide = container.querySelector(".active-slide");
      if (activeSlide) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeSlide.getBoundingClientRect();
        const scrollLeft =
          container.scrollLeft +
          (activeRect.left - containerRect.left) -
          containerRect.width / 2 +
          activeRect.width / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    adjustScrollPosition();
  }, [currentSlide, adjustScrollPosition]);

  return (
    <div className={slideControl.container}>
      <div className={slideControl.controlWrapper}>
        <div className={slideControl.controlGroup}>
          <div className={slideControl.controlInfo}>
            <span>{currentSlide + 1}</span>
            <span>
              <RxSlash />
            </span>
            <span>{totalSlides}</span>
          </div>

          <div className={slideControl.controlButton}>
            <button onClick={prevSlide} aria-label="Previous slide">
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <FaPause className="text-xs" />
              ) : (
                <FaPlay className="text-xs" />
              )}
            </button>
            <button onClick={nextSlide} aria-label="Next slide">
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className={slideControl.slideContainer}>
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`${slideControl.slideButton} ${
                index === currentSlide
                  ? slideControl.activeSlide
                  : slideControl.inactiveSlide
              }`}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideControl;
