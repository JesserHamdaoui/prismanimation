import React from "react";
import CallToAction from "../components/call-to-action/CallToAction";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import { HeroScrollDemo } from "../components/container-scroll/ContainerScroll";
import ContactUs from "../components/contact-us/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CallToAction />
      <HeroScrollDemo />
      <ContactUs />
    </div>
  );
}
