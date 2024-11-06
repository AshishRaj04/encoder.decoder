import React from "react";

const Project = ({
  title,
  description,
  techStack,
  image,
  liveLink,
  repoLink,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <img src={image} alt={title} className="rounded-lg shadow-md mb-4" />

      <div className="flex gap-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            View Project
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
