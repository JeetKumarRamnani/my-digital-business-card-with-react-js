import React from "react";
import mine from "../assets/my-image.jpg";

export default function Image() {
  return (
    <img src={mine} alt="i am playing guitar on stage" className="my-image" />
  );
}
