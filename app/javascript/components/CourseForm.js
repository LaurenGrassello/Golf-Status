import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

const CourseForm = ({ onSave, courses }) => {
  const { id } = useParams();

  const defaults = {
    name: "",
    holes: "",
    player_one: "",
    player_two: "",
    player_three: "",
    p_one_s_one: "",
    p_one_s_two: "",
    p_one_s_three: "",
    p_one_s_four: "",
    p_one_s_five: "",
    p_one_s_six: "",
    p_one_s_seven: "",
    p_one_s_eight: "",
    p_one_s_nine: "",
    p_one_s_ten: "",
    p_one_s_eleven: "",
    p_one_s_twelve: "",
    p_one_s_thirteen: "",
    p_one_s_fourteen: "",
    p_one_s_fifteen: "",
    p_one_s_sixteen: "",
    p_one_s_seventeen: "",
    p_one_s_eighteen: "",
    p_two_s_one: "",
    p_two_s_two: "",
    p_two_s_three: "",
    p_two_s_four: "",
    p_two_s_five: "",
    p_two_s_six: "",
    p_two_s_seven: "",
    p_two_s_eight: "",
    p_two_s_nine: "",
    p_two_s_ten: "",
    p_two_s_eleven: "",
    p_two_s_twelve: "",
    p_two_s_thirteen: "",
    p_two_s_fourteen: "",
    p_two_s_fifteen: "",
    p_two_s_sixteen: "",
    p_two_s_seventeen: "",
    p_two_s_eighteen: "",
    p_three_s_one: "",
    p_three_s_two: "",
    p_three_s_three: "",
    p_three_s_four: "",
    p_three_s_five: "",
    p_three_s_six: "",
    p_three_s_seven: "",
    p_three_s_eight: "",
    p_three_s_nine: "",
    p_three_s_ten: "",
    p_three_s_eleven: "",
    p_three_s_twelve: "",
    p_three_s_thirteen: "",
    p_three_s_fourteen: "",
    p_three_s_fifteen: "",
    p_three_s_sixteen: "",
    p_three_s_seventeen: "",
    p_three_s_eighteen: "",
  };

  const currCourse = id ? courses.find((e) => e.id === Number(id)) : {};
  const initialCourseState = { ...defaults, ...currCourse };
  const [course, setCourse] = useState(initialCourseState);

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setCourse({ ...course, [name]: value });
  };

  const validateCourse = () => {
    const errors = {};

    if (course.name === "") {
      errors.name = "You must enter a course name";
    }

    if (course.holes === "") {
      errors.holes = "You must enter courses hole total";
    }

    if (course.player_one === "") {
      errors.player_one = "You must enter player one";
    }

    if (course.player_two === "") {
      errors.player_two = "You must enter player two";
    }

    if (course.player_three === "") {
      errors.player_three = "You must enter player three";
    }

    return errors;
  };

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;

  const renderErrors = () => {
    if (isEmptyObject(formErrors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3>The following errors prohibited the course from being saved:</h3>
        <ul>
          {Object.values(formErrors).map((formError) => (
            <li key={formError}>{formError}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateCourse(course);

    if (!isEmptyObject(errors)) {
      setFormErrors(errors);
    } else {
      onSave(course);
    }
  };

  return (
    <section>
      {renderErrors()}

      <h2>New ScoreCard</h2>
      <form className="courseForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <strong>Course Name:</strong>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={course.name}
            />
          </label>
        </div>
        <div>
          <label htmlFor="holes">
            <strong>Total Holes:</strong>
            <input
              type="number"
              id="holes"
              name="holes"
              onChange={handleInputChange}
              value={course.holes}
            />
          </label>
        </div>
        <div>
          <label htmlFor="player_one">
            <strong>Player One:</strong>
            <textarea
              type="text"
              id="player_one"
              name="player_one"
              onChange={handleInputChange}
              value={course.player_one}
            />
          </label>
        </div>
        <div>
          <label htmlFor="player_two">
            <strong>Player Two:</strong>
            <textarea
              type="text"
              id="player_two"
              name="player_two"
              onChange={handleInputChange}
              value={course.player_two}
            />
          </label>
        </div>
        <div>
          <label htmlFor="player_three">
            <strong>Player Three:</strong>
            <textarea
              type="text"
              id="player_three"
              name="player_three"
              onChange={handleInputChange}
              value={course.player_three}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_one">
            <strong>Player One Score Hole One:</strong>
            <textarea
              type="number"
              id="p_one_s_one"
              name="p_one_s_one"
              onChange={handleInputChange}
              value={course.p_one_s_one}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_two">
            <strong>Player One Score Hole Two:</strong>
            <textarea
              type="number"
              id="p_one_s_two"
              name="p_one_s_two"
              onChange={handleInputChange}
              value={course.p_one_s_two}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_three">
            <strong>Player One Score Hole Three:</strong>
            <textarea
              type="number"
              id="p_one_s_three"
              name="p_one_s_three"
              onChange={handleInputChange}
              value={course.p_one_s_three}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_four">
            <strong>Player One Score Hole Four:</strong>
            <textarea
              type="number"
              id="p_one_s_four"
              name="p_one_s_four"
              onChange={handleInputChange}
              value={course.p_one_s_four}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_five">
            <strong>Player One Score Hole Five:</strong>
            <textarea
              type="number"
              id="p_one_s_six"
              name="p_one_s_six"
              onChange={handleInputChange}
              value={course.p_one_s_six}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_seven">
            <strong>Player One Score Hole Seven:</strong>
            <textarea
              type="number"
              id="p_one_s_seven"
              name="p_one_s_seven"
              onChange={handleInputChange}
              value={course.p_one_s_seven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_seven">
            <strong>Player One Score Hole Seven:</strong>
            <textarea
              type="number"
              id="p_one_s_seven"
              name="p_one_s_seven"
              onChange={handleInputChange}
              value={course.p_one_s_seven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_eight">
            <strong>Player One Score Hole Eight:</strong>
            <textarea
              type="number"
              id="p_one_s_eight"
              name="p_one_s_eight"
              onChange={handleInputChange}
              value={course.p_one_s_eight}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_nine">
            <strong>Player One Score Hole Nine:</strong>
            <textarea
              type="number"
              id="p_one_s_nine"
              name="p_one_s_nine"
              onChange={handleInputChange}
              value={course.p_one_s_nine}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_ten">
            <strong>Player One Score Hole Ten:</strong>
            <textarea
              type="number"
              id="p_one_s_ten"
              name="p_one_s_ten"
              onChange={handleInputChange}
              value={course.p_one_s_ten}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_eleven">
            <strong>Player One Score Hole Eleven:</strong>
            <textarea
              type="number"
              id="p_one_s_eleven"
              name="p_one_s_eleven"
              onChange={handleInputChange}
              value={course.p_one_s_eleven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_twelve">
            <strong>Player One Score Hole Twelve:</strong>
            <textarea
              type="number"
              id="p_one_s_twelve"
              name="p_one_s_twelve"
              onChange={handleInputChange}
              value={course.p_one_s_twelve}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_thirteen">
            <strong>Player One Score Hole Thirteen:</strong>
            <textarea
              type="number"
              id="p_one_s_thirteen"
              name="p_one_s_thirteen"
              onChange={handleInputChange}
              value={course.p_one_s_thirteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_fourteen">
            <strong>Player One Score Hole Fourteen:</strong>
            <textarea
              type="number"
              id="p_one_s_fourteen"
              name="p_one_s_fourteen"
              onChange={handleInputChange}
              value={course.p_one_s_fourteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_fifteen">
            <strong>Player One Score Hole Fifteen:</strong>
            <textarea
              type="number"
              id="p_one_s_fifteen"
              name="p_one_s_fifteen"
              onChange={handleInputChange}
              value={course.p_one_s_fifteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_sixteen">
            <strong>Player One Score Hole Sixteen:</strong>
            <textarea
              type="number"
              id="p_one_s_sixteen"
              name="p_one_s_sixteen"
              onChange={handleInputChange}
              value={course.p_one_s_sixteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_seventeen">
            <strong>Player One Score Hole Seventeen:</strong>
            <textarea
              type="number"
              id="p_one_s_seventeen"
              name="p_one_s_seventeen"
              onChange={handleInputChange}
              value={course.p_one_s_seventeen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_eighteen">
            <strong>Player One Score Hole Eighteen:</strong>
            <textarea
              type="number"
              id="p_one_s_eighteen"
              name="p_one_s_eighteen"
              onChange={handleInputChange}
              value={course.p_one_s_eighteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_one">
            <strong>Player Two Score Hole One:</strong>
            <textarea
              type="number"
              id="p_two_s_one"
              name="p_two_s_one"
              onChange={handleInputChange}
              value={course.p_two_s_one}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_two">
            <strong>Player Two Score Hole Two:</strong>
            <textarea
              type="number"
              id="p_two_s_two"
              name="p_two_s_two"
              onChange={handleInputChange}
              value={course.p_two_s_two}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_three">
            <strong>Player Two Score Hole Three:</strong>
            <textarea
              type="number"
              id="p_two_s_three"
              name="p_two_s_three"
              onChange={handleInputChange}
              value={course.p_two_s_three}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_four">
            <strong>Player Two Score Hole Four:</strong>
            <textarea
              type="number"
              id="p_two_s_four"
              name="p_two_s_four"
              onChange={handleInputChange}
              value={course.p_two_s_four}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_five">
            <strong>Player Two Score Hole Five:</strong>
            <textarea
              type="number"
              id="p_two_s_six"
              name="p_two_s_six"
              onChange={handleInputChange}
              value={course.p_two_s_six}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_seven">
            <strong>Player Two Score Hole Seven:</strong>
            <textarea
              type="number"
              id="p_two_s_seven"
              name="p_two_s_seven"
              onChange={handleInputChange}
              value={course.p_two_s_seven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_seven">
            <strong>Player Two Score Hole Seven:</strong>
            <textarea
              type="number"
              id="p_two_s_seven"
              name="p_two_s_seven"
              onChange={handleInputChange}
              value={course.p_two_s_seven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_eight">
            <strong>Player Two Score Hole Eight:</strong>
            <textarea
              type="number"
              id="p_two_s_eight"
              name="p_two_s_eight"
              onChange={handleInputChange}
              value={course.p_two_s_eight}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_nine">
            <strong>Player Two Score Hole Nine:</strong>
            <textarea
              type="number"
              id="p_two_s_nine"
              name="p_two_s_nine"
              onChange={handleInputChange}
              value={course.p_two_s_nine}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_ten">
            <strong>Player Two Score Hole Ten:</strong>
            <textarea
              type="number"
              id="p_two_s_ten"
              name="p_two_s_ten"
              onChange={handleInputChange}
              value={course.p_two_s_ten}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_eleven">
            <strong>Player Two Score Hole Eleven:</strong>
            <textarea
              type="number"
              id="p_two_s_eleven"
              name="p_two_s_eleven"
              onChange={handleInputChange}
              value={course.p_two_s_eleven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_twelve">
            <strong>Player Two Score Hole Twelve:</strong>
            <textarea
              type="number"
              id="p_two_s_twelve"
              name="p_two_s_twelve"
              onChange={handleInputChange}
              value={course.p_two_s_twelve}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_thirteen">
            <strong>Player Two Score Hole Thirteen:</strong>
            <textarea
              type="number"
              id="p_two_s_thirteen"
              name="p_two_s_thirteen"
              onChange={handleInputChange}
              value={course.p_two_s_thirteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_fourteen">
            <strong>Player Two Score Hole Fourteen:</strong>
            <textarea
              type="number"
              id="p_two_s_fourteen"
              name="p_two_s_fourteen"
              onChange={handleInputChange}
              value={course.p_two_s_fourteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_fifteen">
            <strong>Player Two Score Hole Fifteen:</strong>
            <textarea
              type="number"
              id="p_two_s_fifteen"
              name="p_two_s_fifteen"
              onChange={handleInputChange}
              value={course.p_two_s_fifteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_sixteen">
            <strong>Player Two Score Hole Sixteen:</strong>
            <textarea
              type="number"
              id="p_two_s_sixteen"
              name="p_two_s_sixteen"
              onChange={handleInputChange}
              value={course.p_two_s_sixteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_seventeen">
            <strong>Player Two Score Hole Seventeen:</strong>
            <textarea
              type="number"
              id="p_two_s_seventeen"
              name="p_two_s_seventeen"
              onChange={handleInputChange}
              value={course.p_two_s_seventeen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_eighteen">
            <strong>Player Two Score Hole Eighteen:</strong>
            <textarea
              type="number"
              id="p_two_s_eighteen"
              name="p_two_s_eighteen"
              onChange={handleInputChange}
              value={course.p_two_s_eighteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_one">
            <strong>Player Three Score Hole One:</strong>
            <textarea
              type="number"
              id="p_three_s_one"
              name="p_three_s_one"
              onChange={handleInputChange}
              value={course.p_three_s_one}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_two">
            <strong>Player Three Score Hole Two:</strong>
            <textarea
              type="number"
              id="p_three_s_two"
              name="p_three_s_two"
              onChange={handleInputChange}
              value={course.p_three_s_two}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_three">
            <strong>Player Three Score Hole Three:</strong>
            <textarea
              type="number"
              id="p_three_s_three"
              name="p_three_s_three"
              onChange={handleInputChange}
              value={course.p_three_s_three}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_four">
            <strong>Player Three Score Hole Four:</strong>
            <textarea
              type="number"
              id="p_three_s_four"
              name="p_three_s_four"
              onChange={handleInputChange}
              value={course.p_three_s_four}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_five">
            <strong>Player Three Score Hole Five:</strong>
            <textarea
              type="number"
              id="p_three_s_six"
              name="p_three_s_six"
              onChange={handleInputChange}
              value={course.p_three_s_six}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_seven">
            <strong>Player Three Score Hole Seven:</strong>
            <textarea
              type="number"
              id="p_three_s_seven"
              name="p_three_s_seven"
              onChange={handleInputChange}
              value={course.p_three_s_seven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_seven">
            <strong>Player Three Score Hole Seven:</strong>
            <textarea
              type="number"
              id="p_three_s_seven"
              name="p_three_s_seven"
              onChange={handleInputChange}
              value={course.p_three_s_seven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_eight">
            <strong>Player Three Score Hole Eight:</strong>
            <textarea
              type="number"
              id="p_three_s_eight"
              name="p_three_s_eight"
              onChange={handleInputChange}
              value={course.p_three_s_eight}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_nine">
            <strong>Player Three Score Hole Nine:</strong>
            <textarea
              type="number"
              id="p_three_s_nine"
              name="p_three_s_nine"
              onChange={handleInputChange}
              value={course.p_three_s_nine}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_ten">
            <strong>Player Three Score Hole Ten:</strong>
            <textarea
              type="number"
              id="p_three_s_ten"
              name="p_three_s_ten"
              onChange={handleInputChange}
              value={course.p_three_s_ten}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_eleven">
            <strong>Player Three Score Hole Eleven:</strong>
            <textarea
              type="number"
              id="p_three_s_eleven"
              name="p_three_s_eleven"
              onChange={handleInputChange}
              value={course.p_three_s_eleven}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_twelve">
            <strong>Player Three Score Hole Twelve:</strong>
            <textarea
              type="number"
              id="p_three_s_twelve"
              name="p_three_s_twelve"
              onChange={handleInputChange}
              value={course.p_three_s_twelve}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_thirteen">
            <strong>Player Three Score Hole Thirteen:</strong>
            <textarea
              type="number"
              id="p_three_s_thirteen"
              name="p_three_s_thirteen"
              onChange={handleInputChange}
              value={course.p_three_s_thirteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_fourteen">
            <strong>Player Three Score Hole Fourteen:</strong>
            <textarea
              type="number"
              id="p_three_s_fourteen"
              name="p_three_s_fourteen"
              onChange={handleInputChange}
              value={course.p_three_s_fourteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_fifteen">
            <strong>Player Three Score Hole Fifteen:</strong>
            <textarea
              type="number"
              id="p_three_s_fifteen"
              name="p_three_s_fifteen"
              onChange={handleInputChange}
              value={course.p_three_s_fifteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_sixteen">
            <strong>Player Three Score Hole Sixteen:</strong>
            <textarea
              type="number"
              id="p_three_s_sixteen"
              name="p_three_s_sixteen"
              onChange={handleInputChange}
              value={course.p_three_s_sixteen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_seventeen">
            <strong>Player Three Score Hole Seventeen:</strong>
            <textarea
              type="number"
              id="p_three_s_seventeen"
              name="p_three_s_seventeen"
              onChange={handleInputChange}
              value={course.p_three_s_seventeen}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_eighteen">
            <strong>Player Three Score Hole Eighteen:</strong>
            <textarea
              type="number"
              id="p_three_s_eighteen"
              name="p_three_s_eighteen"
              onChange={handleInputChange}
              value={course.p_three_s_eighteen}
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
};

export default CourseForm;

CourseForm.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      holes: PropTypes.number.isRequired,
      player_one: PropTypes.string.isRequired,
      player_two: PropTypes.string.isRequired,
      player_three: PropTypes.string.isRequired,
    })
  ),
  onSave: PropTypes.func.isRequired,
};
