import React from "react";
import ProjectCard from "./ProjectCard";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import project1 from "../../assets/images/portfolio/project1.png";
import project2 from "../../assets/images/portfolio/project2.png";
import project3 from "../../assets/images/portfolio/project3.png";
import project4 from "../../assets/images/portfolio/project4.png";

export default function PortfolioContainer() {
  const projects = [
    {
      title: "Brown Mystery Movie Poster",
      description:
        "Ready to Go! is an engaging and educational TV show by PrisManimation. Delightful, educational, and safe entertainment for your little ones!",
      mainImage: project1,
      images: [project1, project1, project1],
      technologies: [
        {
          name: "Adobe Photoshop",
        },
        {
          name: "Adobe Illustrator",
        },
      ],
      link: "",
      date: "2023-02-15",
    },
    {
      title: "Blue Modern No Smoking Day Template (Poster)",
      description:
        "Break free from smoking: choose health, choose life. Your future deserves a smoke-free start.",
      mainImage: project2,
      images: [project2, project2, project2],
      technologies: [
        {
          name: "Figma",
          icon: faFigma,
        },
        {
          name: "Adobe Illustrator",
        },
      ],
      link: "",
      date: "2023-04-10",
    },
    {
      title: "Black And White Horror Movie Poster",
      description:
        "Behind the facade of fatherly warmth lies a chilling secret. Uncover the darkness in 'The Dad', where every smile masks a deadly truth.",
      mainImage: project3,
      images: [project3, project3, project3],
      technologies: [
        {
          name: "Adobe Photoshop",
        },
        {
          name: "Adobe Illustrator",
        },
      ],
      link: "",
      date: "2023-08-20",
    },
    {
      title: "Black And Red Horror Movie Poster",
      description: "In solidarity, strength echoes louder than silence.",
      mainImage: project4,
      images: [project4, project4, project4],
      technologies: [
        {
          name: "Adobe Photoshop",
        },
        {
          name: "Adobe Illustrator",
        },
      ],
      link: "",
      date: "2022-01-01",
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
