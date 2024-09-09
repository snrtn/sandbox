"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import group from "./groupView.styles";
import slides from "./groupView.data";

const GroupView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const nextSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 3,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 3,
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
    <div className={group.container}>
      <div className={group.header}>
        <div>
          <h2 className={group.headerTitle}>Discover Your Style</h2>
          <p className={group.headerSubtitle}>
            Explore Our Curated Fashion Collections
          </p>
        </div>
      </div>
      <div className={group.controlsContainer}>
        <div className={group.fingerScroll}>
          <MdSwipe />
        </div>
        <div className={group.buttonContainer}>
          <button
            onClick={prevSlide}
            className={`${group.button} ${
              isAtStart ? group.buttonDisabled : ""
            }`}
            disabled={isAtStart}
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={nextSlide}
            className={`${group.button} ${isAtEnd ? group.buttonDisabled : ""}`}
            disabled={isAtEnd}
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
      <div ref={containerRef} className={group.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${group.slide} ${
              index === 0 || index === slides.length - 1
                ? group.invisibleSlide
                : index % 2 === 0
                ? group.evenSlide
                : group.oddSlide
            }`}
          >
            <div className={group.mainImageContainer}>
              <div className="relative h-full w-full">
                {slide.collectionLink && (
                  <Link href={slide.collectionLink} passHref>
                    <Image
                      src={slide.image}
                      alt={`Collection ${index}`}
                      layout="fill"
                      className={group.mainImage}
                    />
                    <div className={group.overlay}>
                      <FaSearchPlus className={group.overlayIcon} />
                    </div>
                  </Link>
                )}
              </div>
            </div>
            <div className={group.subImageContainer}>
              {slide.productLinks && slide.productLinks[0] && (
                <div className={group.subImage}>
                  <div className="relative h-full w-full">
                    <Link href={slide.productLinks[0]} passHref>
                      <Image
                        src={slide.images[0]}
                        alt={`Product ${index}-1`}
                        layout="fill"
                        className={group.subImageContent}
                      />
                      <div className={group.overlay}>
                        <FaSearchPlus className={group.overlayIcon} />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              {slide.productLinks && slide.productLinks[1] && (
                <div className={group.subImage}>
                  <div className="relative h-full w-full">
                    <Link href={slide.productLinks[1]} passHref>
                      <Image
                        src={slide.images[1]}
                        alt={`Product ${index}-2`}
                        layout="fill"
                        className={group.subImageContent}
                      />
                      <div className={group.overlay}>
                        <FaSearchPlus className={group.overlayIcon} />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupView;
