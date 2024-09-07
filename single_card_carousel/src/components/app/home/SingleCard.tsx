"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import itemView from "./singleCarousel.styles";
import CarouselControl from "./CarouselControl";

interface Slide {
  image: string;
  title: string;
  link: string;
}

interface SingleCardProps {
  slides: Slide[];
}

const SingleCard: React.FC<SingleCardProps> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

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
              <Link href={slide.link} passHref>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className={itemView.image}
                  width={500}
                  height={300}
                />
                <div className={itemView.overlay}>
                  <h3 className={itemView.overlayText}>{slide.title}</h3>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <CarouselControl
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        isAtStart={isAtStart}
        isAtEnd={isAtEnd}
      />
    </div>
  );
};

export default SingleCard;
