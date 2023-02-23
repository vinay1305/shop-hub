import React from "react";
import HomeTopMiddle from "../../components/homecomps/HomeTopMiddle";
import HomeCategories from "../../components/homecomps/HomeCategories";
import HomeMarque from "../../components/homecomps/HomeMarque";
import HomeBlogs from "../../components/homecomps/HomeBlogs";
import FeaturedCollections from "../../components/homecomps/FeaturedCollections";
import SpecialCollections from "../../components/homecomps/SpecialCollections";
import PopularProduct from "../../components/homecomps/PopularProduct";
import FamousProducts from "../../components/homecomps/FamousProducts";

export default function HomeMiddleWrapper() {
  return (
    <>
      {/* <HomeTopMiddle />
      <HomeCategories />
      <HomeMarque />
      <HomeBlogs />
      <FeaturedCollections /> */}
      <HomeTopMiddle />
      <HomeCategories />
      <FeaturedCollections />
      <FamousProducts />
      <SpecialCollections />
      <PopularProduct />
      <HomeMarque />
      <HomeBlogs />
    </>
  );
}
