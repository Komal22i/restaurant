import React from "react";
import Navbar from "../Components/common/Navbar";
import Banner from "../Components/home/Banner";
import ContactFooter from "../Components/home/ContactFooter";
import OnlineBook from "../Components/home/OnlineBook";
import SecondSection from "../Components/home/SecondSection";
import Dine from "../Components/home/Dine";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <Dine />
      <SecondSection />
      <OnlineBook />
      <ContactFooter />
    </div>
  );
};

export default HomePage;
