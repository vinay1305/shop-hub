import React from "react";

// import HomeCategories from "./homemiddle/HomeCategories";
// import HomeMarque from "./homemiddle/HomeMarque";
// import HomeTopMiddle from "./homemiddle/HomeTopMiddle";
import HomeCategories from "./homemiddle/HomeCategories";
import HomeMarque from "./homemiddle/HomeMarque"
import HomeTopMiddle from "./homemiddle/HomeTopMiddle";
export default function HomeMiddleWrapper() {
  return (
    <>
      <HomeTopMiddle />
      <HomeCategories />
      <HomeMarque />
    </>
  );
}
