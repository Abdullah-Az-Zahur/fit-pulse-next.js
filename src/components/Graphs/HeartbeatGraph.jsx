"use client";
import React, { useEffect, useRef } from "react";

const HeartbeatGraph = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let position = 0;

    const interval = setInterval(() => {
      position -= 1; // Shift the graph left
      container.style.backgroundPosition = `${position}px 0`;
    }, 16); // Approximately 60 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-32  overflow-hidden relative">
      {/* ECG Line */}
      <div
        ref={containerRef}
        className="absolute w-[200%] h-full bg-repeat-x"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"%3E%3Cpath d="M0,50 C10,40 20,40 30,50 L40,60 L50,40 L60,50 C70,60 80,60 90,50 L100,40 L110,60 L120,50 C130,40 140,40 150,50 L160,60 L170,40 L180,50 C190,60 200,60 210,50" stroke="lime" stroke-width="2" fill="none"/%3E%3C/svg%3E')`,
          backgroundSize: "200px 100px", // Adjust based on your SVG size
        }}
      />
    </div>
  );
};

export default HeartbeatGraph;
