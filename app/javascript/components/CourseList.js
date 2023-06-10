import React from 'react';
import PropTypes, { number } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const CourseList = ({ courses }) => {
  const renderCourses = (courseArray) => {

    return courseArray.map((course) => (
      <li key={course.id}>
    <NavLink to={`/courses/${course.id}`}>
        {course.name}
      </NavLink>

      </li>
    ));
  };

  return (
    <section className='courseList'>
      <h2>
        Courses
        <Link to="/courses/new">Add new game</Link>
      </h2>
      <ul>{renderCourses(courses)}</ul>
    </section>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    holes: PropTypes.number
  })).isRequired,
};

export default CourseList;