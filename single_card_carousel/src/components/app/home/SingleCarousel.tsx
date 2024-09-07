"use client";

import React from "react";
import itemView from "./singleCarousel.styles";
import slides from "./singleCarousel.data";
import SingleCard from "./SingleCard";

const SingleCarousel: React.FC = () => {
  return (
    <div className={itemView.container}>
      <div className={itemView.header}>
        <h2 className={itemView.title}>Style starts here</h2>
        <p className={itemView.description}>
          Discover the latest trends and elevate your wardrobe with our curated
          selections.
        </p>
      </div>
      <SingleCard slides={slides} />
    </div>
  );
};

export default SingleCarousel;
