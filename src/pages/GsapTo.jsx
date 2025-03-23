import React, { useEffect } from "react";
import { gsap } from "gsap";

const GsapTo = () => {
  useEffect(() => {
    // Rotate the box forever
    gsap.to("#red-box", {
      rotation: 720, // Rotate 360 degrees
      duration: 2, // Duration of one rotation
      repeat: -1, // Infinite repetition
      ease: "linear", // Smooth linear rotation
    });

    // Flickering fire effect
    gsap.to("#blue-box", {
      boxShadow: "0 0 30px 10px rgba(255, 69, 0, 0.8)", // Fire-like glow
      duration: 0.5,
      repeat: -1,
      yoyo: true, // Flicker effect
      ease: "power1.inOut",
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;