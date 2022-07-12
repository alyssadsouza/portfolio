import { useEffect, useState } from "react";

export default function Project({ project }) {
  const icons = project.images.map((image) => (
    <div
      key={image}
      className="p-[1.5%] mr-4 my-4 rounded-full bg-white transition-all w-8 h-8"
    >
      <img
        src={require(`../images/${image}.svg`)}
        alt="Icon"
        className="w-full h-full project-img"
      />
    </div>
  ));
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={`flex flex-row justify-between items-center my-4 p-[5%] w-full h-full bg-beige-400 ${mounted && 'animate-appear'}`}>
      <div className="flex flex-col w-1/2 pr-[10%] animate-appear">
        <h2 className="text-3xl font-display">{project.title}</h2>
        <div className="flex flex-row justify-start">{icons}</div>
        <hr className="border-neutral-700" />
        <h3 className="text-xl py-4 font-display font-bold">Description</h3>
        <p>{project.content.DESCRIPTION}</p>
        <h3 className="text-xl py-4 font-display font-bold">How I Built It</h3>
        <p>{project.content.HOW_I_BUILT_IT}</p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center">
        <iframe
          title={`project-video-${project.project}`}
          className="w-full h-3/5 rounded-xl"
          frameBorder={0}
          src={project.video}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}