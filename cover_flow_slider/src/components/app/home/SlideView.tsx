"use client";

import { useState, useEffect, useRef } from "react";
import SlideControl from "./SlideControl";
import slideView from "./slideView.style";
import useMediaQuery from "@hooks/useMediaQuery";
import slides from "./slideView.data";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SlideView = () => {
  const isMobile = useMediaQuery(500); // 500px 이하일 때 모바일 이미지 사용
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 슬라이드 쇼 시작
  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4200);
  };

  // 자동 재생 설정
  useEffect(() => {
    if (isPlaying) {
      startSlideshow();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // 화면 크기가 변할 때 슬라이드 이미지 변경 및 슬라이드 리셋
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  // 슬라이드 재생 시간 초기화
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
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
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      startSlideshow();
    }
    setIsPlaying(!isPlaying);
  };

  const setSlide = (index: number) => {
    resetInterval();
    setCurrentSlide(index);
  };

  // 화면 크기에 따라 이미지 경로 설정
  const getSlideImage = (index: number) => {
    const correctIndex = (index + slides.length) % slides.length;
    return isMobile
      ? slides[correctIndex].mobileImage // 모바일 이미지
      : slides[correctIndex].desktopImage; // 데스크탑 이미지
  };

  const getSlideContent = (index: number) => {
    const correctIndex = (index + slides.length) % slides.length;
    return slides[correctIndex];
  };

  // 화면 크기에 따라 동적으로 너비와 높이 설정
  const imageWidth = isMobile ? 800 : 1260;
  const imageHeight = isMobile ? 600 : 750;

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
            <Image
              src={getSlideImage(currentSlide - 1)}
              alt={getSlideContent(currentSlide - 1).title || "Previous slide"}
              width={imageWidth}
              height={imageHeight}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              priority
            />
          </div>
        )}

        <Link
          href={getSlideContent(currentSlide).link}
          className={slideView.slideImageWrapper}
          passHref
        >
          <div className={slideView.darkCenterOverlay}></div>
          <Image
            src={getSlideImage(currentSlide)}
            alt={getSlideContent(currentSlide).title || "Current slide"}
            width={imageWidth}
            height={imageHeight}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            priority
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
            <Image
              src={getSlideImage(currentSlide + 1)}
              alt={getSlideContent(currentSlide + 1).title || "Next slide"}
              width={imageWidth}
              height={imageHeight}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              priority
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
