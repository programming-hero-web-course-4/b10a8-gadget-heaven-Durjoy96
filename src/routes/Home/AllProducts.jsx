import React, { useEffect, useState } from "react";
import Products from "../../components/header/DisplayProducts/Products";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const data = useLoaderData();
  console.log("allproducts:", data);
  return (
    <div>
      <Products data={data}></Products>
    </div>
  );
};

export default AllProducts;