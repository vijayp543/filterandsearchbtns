import React from 'react';
import CourseCard from './CourseCard';

const CourseGrid = ({ filteredCourses }) => {
  return (
    <div className="course-grid">
      {filteredCourses.map((course, index) => (
        <CourseCard
          key={index}
          image={course.image}
          badgeText={course.badgeText}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
