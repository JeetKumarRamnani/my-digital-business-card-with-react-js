import React from "react";

import Footer from "./Footer";
import Image from "./Image";
import Info from "./Info";
import About from "./About";

export default function Card() {
  return (
    <div className="Whole-Card">
      <Image />
      <About />
      <Info />
      <Footer />
    </div>
  );
}
