import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardCarousel = (props) => {
  // console.log(props.data);
  const swiper = useSwiper();
  console.log(swiper);

  return (
    <div className="flex w-full max-h-96 px-10">
      <div className="flex justify-between">
        <div className="absolute left-[7%]">
          <h1 className="font-bold">New Products</h1>
        </div>
        <div className="hidden flex-row justify-around w-16 absolute right-[7%] ">
          <button className="btn btn-square btn-sm mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="btn btn-square btn-sm mx-1"
            // onClick={() => swiper.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* product section */}
      <div
        className="flex flex-row my-20 h-96 overflow-auto"
        style={styles.product_section}
      >
        <Swiper
          // spaceBetween={50}
          // slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {props.data.length > 0 ? (
            <>
              {props.data.map((item, index) => {
                if (index < 10) {
                  return (
                    <SwiperSlide key={index}>
                      <div className="card w-56 h-72 shadow-xl hover:cursor-pointer">
                        <figure>
                          <img src={item.images[0]} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h5 className="font-bold">{item.title}</h5>
                          <p>${item.price}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </>
          ) : null}
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarousel;

const styles = {
  product_section: {
    backgroundColor: "white",
    scrollbarWidth: "none",
    cursor: "grab",
  },
};
