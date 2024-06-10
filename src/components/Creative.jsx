import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Creative = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",

        scrub: 1,
      },
    });

    // Add animations to the timeline
    timeline.to(
      ".creative",
      {
        x: 200,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=3"
    );

    timeline.to(
      ".developer",
      {
        x: -200,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=3"
    );
    timeline.to(
      ".inspire",
      {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=3"
    );
    timeline.to(
      ".abstract",
      {
        x: -100,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=3"
    );

    timeline.to(
      ".last",
      {
        x: 200,
        duration: 2,
        ease: "power1.inOut",
      },
      "-=3"
    );

    // Offset the developer animation by 3 seconds to make them happen simultaneously
  }, []);

  return (
    <div>
      <div className="section font-bold">
        <p className="creative -ms-16 md:ms-auto text-[6rem] md:text-[15rem] ">
          CREATIVE
        </p>
        <p className="developer bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-center text-[4rem] md:text-[10rem] -mt-10 md:-mt-32 md:ps-0 ">
          developer
        </p>
        <p className="inspire text-[1.5rem] md:text-[5rem] md:-mt-16">
          inspired by the
        </p>
        <p className="abstract -mb-10 text-center text-[4rem] md:text-[12rem] ms-24 md:ms-72 md:-my-20">
          ABSTRACTION
        </p>
        <div className="last my-6 md:-my-20 flex flex-col -ms-96 md:-ms-72">
          <p className="text-[2rem] md:text-[4rem] text-center">of</p>
          <p className="-mt-6 md:-mt-28 text-[7rem] md:text-[20rem] creative bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            NATURE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creative;
