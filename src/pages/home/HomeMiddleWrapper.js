import React from "react";
import HomeTopMiddle from "../../components/homecomps/HomeTopMiddle";
import HomeCategories from "../../components/homecomps/HomeCategories";
import HomeMarque from "../../components/homecomps/HomeMarque";
import HomeBlogs from "../../components/homecomps/HomeBlogs";
import FeaturedCollections from "../../components/homecomps/FeaturedCollections";
import SpecialCollections from "../../components/homecomps/SpecialCollections";

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
      <SpecialCollections />
      <HomeMarque />
      <HomeBlogs />
    </>
  );
}
