import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

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

      <h2>ScoreCard</h2>
      <form className="courseForm" onSubmit={handleSubmit}>
        <div className="leftScoreCard">
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
            <input
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
            <input
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
            <input
              type="text"
              id="player_three"
              name="player_three"
              onChange={handleInputChange}
              value={course.player_three}
            />
          </label>
        </div>
         </div>
         <div className="row">
            <h2>Player Scores</h2>
        <div className="column">
        <div>
          <label htmlFor="p_one_s_one">
            <div>
            <strong>Player One Hole One:</strong>
            </div>
            <input
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
            <div>
                <strong>Player One Hole Two:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Three:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Four:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Five:</strong>
            </div>
            <input
              type="number"
              id="p_one_s_five"
              name="p_one_s_five"
              onChange={handleInputChange}
              value={course.p_one_s_five}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_one_s_six">
            <div>
            <strong>Player One Hole Six:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Seven:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Eight:</strong>
            </div>
            <input
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
<div>
            <strong>Player One Hole Nine:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Ten:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Eleven:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Twelve:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Thirteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Fourteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Fifteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Sixteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Seventeen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player One Hole Eighteen:</strong>
            </div>
            <input
              type="number"
              id="p_one_s_eighteen"
              name="p_one_s_eighteen"
              onChange={handleInputChange}
              value={course.p_one_s_eighteen}
            />
          </label>
        </div>
        </div>
        <div className="column">
        <div>
          <label htmlFor="p_two_s_one">
            <div>
            <strong>Player Two Hole One:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Two:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Three:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Four:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Five:</strong>
            </div>
            <input
              type="number"
              id="p_two_s_five"
              name="p_two_s_five"
              onChange={handleInputChange}
              value={course.p_two_s_five}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_two_s_six">
            <div>
            <strong>Player Two Hole Six:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Seven:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Eight:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Nine:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Ten:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Eleven:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Twelve:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Thirteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Fourteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Fifteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Sixteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Seventeen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Two Hole Eighteen:</strong>
            </div>
            <input
              type="number"
              id="p_two_s_eighteen"
              name="p_two_s_eighteen"
              onChange={handleInputChange}
              value={course.p_two_s_eighteen}
            />
          </label>
        </div>
        </div>
        <div className="column">
        <div>
          <label htmlFor="p_three_s_one">
            <div>
            <strong>Player Three Hole One:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Two:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Three:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Four:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Five:</strong>
            </div>
            <input
              type="number"
              id="p_three_s_five"
              name="p_three_s_five"
              onChange={handleInputChange}
              value={course.p_three_s_five}
            />
          </label>
        </div>
        <div>
          <label htmlFor="p_three_s_six">
            <div>
            <strong>Player Three Hole Six:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Seven:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Eight:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Nine:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Ten:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Eleven:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Twelve:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Thirteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Fourteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Fifteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Sixteen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Seventeen:</strong>
            </div>
            <input
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
            <div>
            <strong>Player Three Hole Eighteen:</strong>
            </div>
            <input
              type="number"
              id="p_three_s_eighteen"
              name="p_three_s_eighteen"
              onChange={handleInputChange}
              value={course.p_three_s_eighteen}
            />
          </label>
        </div>
        </div>
        </div>
        <div className="form-actions">
          <button className="save" type="submit">Save</button>
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
