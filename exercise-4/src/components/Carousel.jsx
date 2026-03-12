import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* You will need to hanle the click on left and right button */
  function onPreviousClick() {
    setCurrentImageIndex((previousIndex) => {
      if (previousIndex === 0) {
        return images.length - 1;
      }

      return previousIndex - 1;
    });
  }

  function onNextClick() {
    setCurrentImageIndex((previousIndex) => {
      if (previousIndex === images.length - 1) {
        return 0;
      }

      return previousIndex + 1;
    });
  }

  /* You will need to manage the cases when we are on the last image or first image*/
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={onPreviousClick} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onNextClick} />
    </div>
  );
};
