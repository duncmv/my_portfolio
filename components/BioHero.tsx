import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const BioHero = () => {
  return (
    <div className=" responsive hero bg-inherit py-12">
      <div className="hero-content flex-col lg:flex-row lg:gap-12">
        {/* Image Container */}
        <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
          <Image
            src="/potrait-enhanced.png"
            alt="Landing Image"
            width={500}
            height={400}
            className="rounded-lg shadow-2xl w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left lg:mr-8 mt-8 lg:mt-0">
          <h1 className="text-5xl lg:text-7xl text-center font-extrabold text-gray-800">
            Duncan Tindiwensi Asiimwe
          </h1>
          <p className="py-6 text-lg lg:text-xl text-center text-gray-600 leading-relaxed">
            A passionate Full-Stack Software Engineer with a strong focus on
            crafting seamless digital experiences. From building robust backend
            systems to designing intuitive front-end interfaces, I bring ideas
            to life through code. Let's create something amazing together.
          </p>
          <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <a href="#projects">
              <button className="btn btn-outline text-gray-600">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className="btn btn-outline text-gray-600">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioHero;
