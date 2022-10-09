import React, { useState, useEffect, useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCategories } from "../../../redux/actions/category.action";
import { CLEAR_STATE_CATEGORY } from "../../../redux/types/category.types";

// assets
import heroVector from "../../../assets/vector1.svg";
import Image1 from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";

const HomeMainViews = ({ categoryState, dispatch }: any) => {
  const [dataCategories, setDataCategories] = useState([]);
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
    }
    return () => {
      subscribe = false;
    };
  }, [dataCategories, categoryState]);
  // console.log(dataCategories, categoryState);

  return (
    <div>
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
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    categoryState: state.categories,
  };
};

export default connect(mapStateToProps)(HomeMainViews);
// export default HomeMainViews;
