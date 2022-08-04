import React, { useCallback, useEffect, useState } from "react";
function Card({ weather }) {
  return (
    <section className="weather-card">
      <div className="top-section">
        <p>{weather.day}</p>
        <p>{weather.date}</p>
      </div>
      <div className="middle-section">
        <p>
          <span className="timezone-time">{weather.time}</span>{" "}
          {weather.isDay ? "AM" : "PM"}
        </p>
        <div className="weather-icon"></div>
      </div>
      <div className="bottom-section"></div>
    </section>
  );
}

export default Card;
