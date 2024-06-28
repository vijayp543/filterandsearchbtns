import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image, badgeText, title, description }) => {
  return (
    <div className="card">
      <div className="course-card">
        <div className="image-container">
          <img src={image} alt="Course" />
          <div className="badge">
            {badgeText}
          </div>
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
