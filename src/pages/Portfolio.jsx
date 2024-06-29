import React from "react";
import PortfolioContainer from "../components/portfolio/PortfolioContainer";
import ContactUs from "../components/contact-us/ContactUs";
import CallToAction from "../components/call-to-action/CallToAction";

export default function Portfolio() {
  return (
    <div>
      <PortfolioContainer />
      <CallToAction />
      <ContactUs />
    </div>
  );
}
