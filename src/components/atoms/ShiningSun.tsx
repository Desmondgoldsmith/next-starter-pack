import React from "react";

export const ShiningSun = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-32 h-32 md:w-48 md:h-48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="40" fill="#FCD34D" className="animate-pulse" />
    {/* Sun rays */}
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="100"
        y1="100"
        x2={100 + Math.cos((i * Math.PI) / 6) * 60}
        y2={100 + Math.sin((i * Math.PI) / 6) * 60}
        stroke="#F59E0B"
        strokeWidth="4"
        className="animate-ping"
        style={{
          transformOrigin: "center",
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
  </svg>
);
