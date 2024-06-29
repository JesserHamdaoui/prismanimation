import React from "react";
import AboutUs from "../components/about/AboutUs";
import CallToAction from "../components/call-to-action/CallToAction";
import FAQ from "../components/faq/FAQ";
import ContactUs from "../components/contact-us/ContactUs";

export default function About() {
  return (
    <>
      <AboutUs />
      <CallToAction />
      <FAQ />
      <ContactUs />
    </>
  );
}
