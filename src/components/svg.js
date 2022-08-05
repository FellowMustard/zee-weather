import React, { useState } from "react";
function SvgContainer({ svgID }) {
  return (
    <section style={{ height: "100%", width: "100%" }}>
      {svgID === "0001" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <defs>
            <linearGradient
              id="a"
              x1="23.73"
              y1="19.16"
              x2="39.18"
              y2="45.93"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#515a69" stopOpacity="0.05" />
              <stop offset="0.45" stopColor="#6b7280" stopOpacity="0.05" />
              <stop offset="1" stopColor="#384354" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="23.48"
              y1="18.73"
              x2="39.43"
              y2="46.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#d4d7dd" />
              <stop offset="0.45" stopColor="#d4d7dd" />
              <stop offset="1" stopColor="#bec1c6" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="42" r="4.5" fill="#ef4444" />
          <path
            d="M32,27V42"
            fill="none"
            stroke="#ef4444"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 1; 0 0"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M39,41.9a7,7,0,1,1-14,0,7.12,7.12,0,0,1,3-5.83v-17a4,4,0,1,1,8,0v17A7.12,7.12,0,0,1,39,41.9ZM32.5,25H36m-3.5-4H36m-3.5,8H36"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#a)"
            stroke="url(#b)"
          />
        </svg>
      )}
    </section>
  );
}

export default SvgContainer;
