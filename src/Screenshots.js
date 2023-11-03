import React from "react";
import "./Screenshots.css";

const ChildScreenshots = ({ screenshots }) => {
  return (
    <div className="screenshot-list">
      {screenshots.map((screenshot) => (
        <div key={screenshot.id} className="screenshot-card">
          <img src={screenshot.thumbnail} alt={`Screenshot ${screenshot.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ChildScreenshots;
