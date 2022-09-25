import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      MainLayout <Outlet />
    </div>
  );
};
