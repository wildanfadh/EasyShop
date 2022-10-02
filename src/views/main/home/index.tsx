import React from "react";

// assets
import heroVector from "../../../assets/vector1.svg";
import Image1 from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";

export const HomeMainViews = () => {
  return (
    <div>
      <div className="flex w-full h-[700px] bg-slate-100">
        <img
          src={heroVector}
          alt="vector1"
          className="absolute top-[-40px] lg:top-0 right-0 w-[620px] h-[800px] z-0"
        />
        <img
          src={Image1}
          alt="image 1"
          className="hidden lg:block absolute right-0 top-[90px] w-5/12"
        />
        <img
          src={Image2}
          alt="image 2"
          className="hidden lg:block absolute right-[15%] top-[60px] w-6/12"
        />
      </div>
    </div>
  );
};
