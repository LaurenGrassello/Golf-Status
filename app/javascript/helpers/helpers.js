import { error } from './notifications';

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

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

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.error(err);
};
