import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSection />
      <Outlet />
    </>
  );
}
export default Home;
