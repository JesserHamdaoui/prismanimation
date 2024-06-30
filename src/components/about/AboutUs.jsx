import React from "react";
import CardView from "../../UI/CardView";
import image from "../../assets/images/scroll-animation-image.jpg";
import logo from "../../assets/images/logo.svg";

export default function AboutUs() {
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-2 gap-10 pb-28">
      <CardView>
        <img src={logo} alt="logo" className="mb-5 w-10" />
        <h1 className="text-lg">Prismanimation</h1>
        <h2 className="text-6xl">
          About Us
          <br /> Get to know Who are we
        </h2>
        <p className="mt-52 text-sm text-justify">
          At our animation production company, we are dedicated to the art of
          storytelling through captivating 2D and 3D animation videos that bring
          your ideas to life. Our talented team of animators, equipped with
          cutting-edge technology, excels in creating a wide range of
          animations, from lively 2D character animations to immersive 3D visual
          effects. These high-quality animations are designed to engage and
          inspire your audience, leaving a lasting impression that resonates
          with viewers of all ages.
          <br />
          <br />
          Our collaborative approach ensures that your vision is not only met
          but exceeded. We partner closely with you throughout the production
          process, from initial concept development to final delivery, ensuring
          every detail aligns with your goals and objectives. Whether you're
          looking to explain a complex concept, entertain, or promote your
          brand, our animations are crafted to convey your message effectively
          and creatively. Experience the power of storytelling through our
          animations, where innovation meets artistry to transform ideas into
          compelling visual narratives.
        </p>
      </CardView>
      <div className="">
        <img src={image} alt="animation production" className="mb-5 masked" />
        <div className="grid grid-cols-2 gap-5">
          <CardView>
            <h3 className="text-xl">95% Customer Satisfaction</h3>
            <p className="text-sm mt-10">
              We offer a wide range of 2D and 3D animation services to meet your
              specific needs.
            </p>
          </CardView>
          <CardView bgColor="bg-blue-500" color="text-white">
            <h3 className="text-xl">Deliver 98% of Projects On Time</h3>
            <p className="text-sm mt-10">
              Our dedicated team consistently achieves a 98% success rate in
              delivering projects on schedule and within budget.
            </p>
          </CardView>
          <CardView>
            <h3 className="text-xl">Less Than 5% Revision Rate</h3>
            <p className="text-sm mt-10">
              Quality is our priority. With a revision rate of less than 5%, we
              ensure your vision is realized with precision and efficiency in
              our 2D and 3D animation services.
            </p>
          </CardView>
          <CardView>
            <h3 className="text-xl">4 Weeks Average completation rate</h3>
            <p className="text-sm mt-10">
              Time is of the essence. Benefit from our swift project delivery,
              averaging less than 4 weeks from start to finish.
            </p>
          </CardView>
        </div>
      </div>
    </div>
  );
}
