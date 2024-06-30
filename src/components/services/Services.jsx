import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faFilm,
  faVideo,
  faPalette,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./ServiceCard";
import logo from "../../images/logo.svg";

export default function Services() {
  return (
    <div className="max-w-[1200px] mx-auto pb-36">
      <div className="grid grid-cols-4 gap-9 mt-8">
        <ServiceCard
          icon={faPencilAlt}
          title="Illustration"
          description="Our illustrators create stunning illustrations for various purposes."
          link="illustration"
        />
        <ServiceCard
          icon={faFilm}
          title="Animation"
          description="Our animators bring life to your ideas with stunning animations."
          link="animation"
        />
        <ServiceCard
          icon={faVideo}
          title="Video Editing"
          description="Our video editors create stunning videos that captivate your audience."
          link="video-editing"
        />
        <ServiceCard
          icon={faPalette}
          title="Graphic Design"
          description="Our graphic designers create stunning designs that captivate your audience."
          link="graphic-design"
        />
      </div>
      <section className="mt-20 text-center flex gap-4 flex-col">
        <img
          src={logo}
          alt="prismanimation logo"
          className="text-blue-500 w-10 m-auto"
        />
        <h1 className="text-sm">Prismanimation</h1>
        <h2 className="text-3xl font-bold">
          Captivating Animation Services for Your Needs
        </h2>
        <p className="text-sm text-wrap w-[60em] m-auto">
          Our animation production company specializes in creating high-quality
          2D and 3D animation videos that bring your ideas to life. With our
          team of talented animators, we deliver captivating visuals and
          engaging storytelling to captivate your audience.
        </p>
        <div className="btns flex gap-3 justify-center items-center">
          <a href="/about">
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Learn More
            </button>
          </a>
          <a href="#contact-us">
            <button className="text-blue-500 px-4 py-2 mt-4 ">
              Contact us
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="text-blue-500 ml-2"
              />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
