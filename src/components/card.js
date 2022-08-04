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
          {weather.isPM ? "PM" : "AM"}
        </p>
        <div className="weather-icon"></div>
      </div>
      <div className="bottom-section">
        <p className="place-name">
          <span className="location-name">{weather.location}</span>
          <span className="country-name">{weather.country}</span>
        </p>
        <div className="temperature-box">
          <div className="temperature">
            {weather.tempC}°<span className="temperature-scale">C</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
