import React from "react";
import ProjectCard from "./ProjectCard";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function PortfolioContainer() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      mainImage: "https://via.placeholder.com/400",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      technologies: [
        {
          name: "React",
          icon: faReact,
        },
        {
          name: "Tailwind CSS",
        },
        {
          name: "Firebase",
        },
        {
          name: "Illustrator",
        },
      ],
      link: "",
      date: "2022-01-01",
    },
    {
      title: "Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      mainImage: "https://via.placeholder.com/400",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      technologies: [
        {
          name: "React",
          icon: faReact,
        },
        {
          name: "Tailwind CSS",
        },
        {
          name: "Firebase",
        },
        {
          name: "Illustrator",
        },
      ],
      link: "",
      date: "2022-02-01",
    },
    {
      title: "Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      mainImage: "https://via.placeholder.com/400",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      technologies: [
        {
          name: "React",
          icon: faReact,
        },
        {
          name: "Tailwind CSS",
        },
        {
          name: "Firebase",
        },
        {
          name: "Illustrator",
        },
      ],
      link: "",
      date: "2022-03-01",
    },
    {
      title: "Project 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      mainImage: "https://via.placeholder.com/400",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      technologies: [
        {
          name: "React",
          icon: faReact,
        },
        {
          name: "Tailwind CSS",
        },
        {
          name: "Firebase",
        },
        {
          name: "Illustrator",
        },
      ],
      link: "",
      date: "2022-04-01",
    },
  ];

  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-1 gap-8 mb-28">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
