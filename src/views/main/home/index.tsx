import React, { useState, useEffect, useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCategories } from "../../../redux/actions/category.action";
import { getAllProducts } from "../../../redux/actions/product.action";
import { CLEAR_STATE_CATEGORY } from "../../../redux/types/category.types";
import { CLEAR_STATE_PRODUCT } from "../../../redux/types/product.types";

// components
import CardCategory from "../../../components/CardCategory";
import CardCarousel from "../../../components/CardCarousel";

// assets
import heroVector from "../../../assets/vector1.svg";
import Image1 from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";
import vegetables_sb from "../../../assets/vegetables_sb.svg";

const HomeMainViews = ({ categoryState, productState, dispatch }: any) => {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      if (dataCategories.length < 1) {
        setIsLoading(true);
        dispatch(getAllCategories());
      }
      if (categoryState.status) {
        setDataCategories(categoryState.data);
        dispatch({ type: CLEAR_STATE_CATEGORY });
        setIsLoading(false);
      }
      if (dataProducts.length < 1) {
        setIsLoading(true);
        dispatch(getAllProducts());
      }
      if (productState.status) {
        setDataProducts(productState.data);
        dispatch({ type: CLEAR_STATE_PRODUCT });
        setIsLoading(false);
      }
    }
    return () => {
      subscribe = false;
    };
  }, [dataCategories, categoryState]);
  // console.log(dataCategories, categoryState);
  // console.log(dataProducts, productState);

  return (
    <div className="overflow-hidden">
      {/* hero section */}
      <div className="flex w-full h-[700px] bg-slate-100">
        <div className="flex flex-col space-y-3 absolute top-36 p-10 lg:top-80 lg:left-16 z-10">
          <h5 className="text-2xl">GET YOURS</h5>
          <h3 className="font-bold text-black font-sans text-3xl">
            YOUR DREAM ITEM QUICKLY
          </h3>
          <NavLink to="/auth/register" className="btn btn-secondary lg:w-40">
            Sign Up
          </NavLink>
        </div>
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

      {/* categories section */}
      <div className="flex w-full h-auto my-40 flex-wrap justify-center">
        {dataCategories.length > 0 ? (
          <>
            {dataCategories.map((item, index) => {
              if (index < 5) {
                return (
                  <div key={index} className="my-5">
                    <CardCategory item={item} />
                  </div>
                );
              }
            })}
          </>
        ) : null}
      </div>

      {/* products section */}
      <div className="flex w-full h-auto my-20 justify-center">
        {dataProducts.length > 0 ? (
          <>
            <CardCarousel data={dataProducts} />
          </>
        ) : null}
      </div>

      {/* subscribetion section */}
      <div className="flex flex-row gap-9 w-full h-auto bg-slate-100">
        <div className="hidden lg:block w-[40rem]">
          <img src={vegetables_sb} alt="vegetables" />
        </div>
        <div className="flex flex-col gap-7 justify-center p-5">
          <p className="font-bold text-xl whitespace-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>Subscribe to get 10% Discount and promotion</p>

          <form className="flex flex-row gap-3">
            <input
              type="text"
              className="input input-md rounded-lg w-8/12"
              placeholder="Email Address"
            />
            <button
              type="button"
              className="btn btn-secondary rounded-md text-neutral"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer section */}
      <div className="block width-full h-auto bg-secondary mt-10 pt-20 pb-2">
        <div className="flex flex-col-reverse gap-5 text-center lg:flex-row justify-evenly items-center w-full h-2/3">
          <div className="flex-col text-neutral">
            <h3 className="text-orange-300">Services</h3>
            <h3>Email Marketing</h3>
            <h3>Campaigns</h3>
            <h3>Branding</h3>
            <h3>Offline</h3>
          </div>
          <div className="flex-col text-neutral">
            <h3 className="text-orange-300">About</h3>
            <h3>Our Story</h3>
            <h3>Benefits</h3>
            <h3>Team</h3>
            <h3>Careers</h3>
          </div>
          <div className="flex-col text-neutral">
            <h3 className="text-orange-300">Help</h3>
            <h3>FAQs</h3>
            <h3>Contact Us</h3>
          </div>
          <div className="block">
            <h2 className="font-bold text-4xl">EasyShop</h2>
          </div>
        </div>
        <div className="flex flex-row w-ful gap-2 justify-center my-5">
          <p>Made by </p>
          <a href="https://github.com/wildanfadh" className="font-bold">
            {" "}
            WildanFadh
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    categoryState: state.categories,
    productState: state.products,
  };
};

export default connect(mapStateToProps)(HomeMainViews);
