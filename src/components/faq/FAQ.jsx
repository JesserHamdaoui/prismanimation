import React, { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What is Prismanimation?",
      answer:
        "Prismanimation is an animation production company that specializes in creating captivating 2D and 3D animation videos. Our team of talented animators is dedicated to bringing your ideas to life through high-quality animations that engage and inspire your audience. Whether you're looking to explain a complex concept, entertain, or promote your brand, our animations are crafted to convey your message effectively and creatively.",
    },
    {
      id: 2,
      question: "What services does Prismanimation offer?",
      answer:
        "Prismanimation offers a wide range of 2D and 3D animation services to meet your specific needs. Our services include character animation, visual effects, motion graphics, explainer videos, and more. We partner closely with you throughout the production process to ensure every detail aligns with your goals and objectives.",
    },
    {
      id: 3,
      question:
        "What sets Prismanimation apart from other animation production companies?",
      answer:
        "At Prismanimation, we are committed to delivering exceptional quality and customer satisfaction. Our dedicated team consistently achieves a 98% success rate in delivering projects on schedule and within budget. With a revision rate of less than 5%, we ensure your vision is realized with precision and efficiency in our 2D and 3D animation services.",
    },
    {
      id: 4,
      question: "How can I get started with Prismanimation?",
      answer:
        "Getting started with Prismanimation is easy! Simply contact us through our website or email us at",
    },
  ];
  const [activeFAQ, setActiveFAQ] = useState(1);

  const handleFAQClick = (id) => {
    setActiveFAQ(id);
  };

  return (
    <div className="mx-auto flex justify-between max-w-[1200px] gap-28 min-h-[800px] py-28">
      <div className="">
        <h2 className="text-3xl font-boldmt-20 mb-10 col-span-3">FAQ</h2>
        <p className="text-sm max-w-2xl text-justify">
          Curious about our animation services? Here are answers to some common
          questions. At our animation production company, we specialize in
          creating captivating 2D and 3D animation videos that breathe life into
          your ideas. Whether you're wondering about our process, turnaround
          times, or the types of animations we offer—from dynamic 2D character
          animations to immersive 3D visual effects—we're here to provide
          clarity.
          <br />
          <br />
          Explore how our talented team, backed by cutting-edge technology, can
          tailor animations to meet your specific needs. Dive into our FAQ to
          learn more about bringing your vision to animated reality.
        </p>
      </div>
      <ul className="max-w-xl">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            active={activeFAQ === faq.id}
            question={faq.question}
            answer={faq.answer}
            handdler={() => handleFAQClick(faq.id)}
          />
        ))}
      </ul>
    </div>
  );
}
