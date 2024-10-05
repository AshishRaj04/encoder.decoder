import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>

      <div className="max-w-4xl text-gray-600 text-lg leading-relaxed text-center">
        <p className="mb-4">
          I'm passionate about machine learning and deep learning. I love
          solving complex problems and working with large datasets, especially
          when it involves training deep neural networks.
        </p>
        <p className="mb-4">
          In my free time, I enjoy exploring new technologies, contributing to
          open-source projects, and continuously expanding my knowledge in the
          field of AI and data science.
        </p>
        <p>
          At the moment, you can usually find me thinking about the mysteries of
          the universe, especially those related to the number{" "}
          <span className="font-bold">42</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
