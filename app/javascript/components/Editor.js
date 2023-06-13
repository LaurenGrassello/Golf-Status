import React, { useState, useEffect } from "react";
import Header from "./Header";
import CourseList from "./CourseList";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Course from "./Course";
import CourseForm from "./CourseForm";
import { handleAjaxError } from '../helpers/helpers';

const Editor = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/courses");
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        handleAjaxError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const addCourse = async (newCourse) => {
    try {
      const response = await window.fetch("/api/courses", {
        method: "POST",
        body: JSON.stringify(newCourse),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw Error(response.statusText);

      const savedCourse = await response.json();
      const newCourses = [...courses, savedCourse];
      setCourses(newCourses);
      success('Course Added!');;
      navigate(`/courses/${savedCourse.id}`);
    } catch (error) {
      handleAjaxError(error);
    }
  };

  const deleteCourse = async (courseId) => {
    const sure = window.confirm("Are you sure?");

    if (sure) {
      try {
        const response = await window.fetch(`/api/courses/${courseId}`, {
          method: "DELETE",
        });

        if (!response.ok) throw Error(response.statusText);

        success('Course Deleted!');;
        navigate("/courses");
        setCourses(courses.filter((course) => course.id !== courseId));
      } catch (error) {
        handleAjaxError(error);
      }
    }
  };

  const updateCourse = async (updatedCourse) => {
    try {
      const response = await window.fetch(`/api/courses/${updatedCourse.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedCourse),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw Error(response.statusText);

      const newCourses = courses;
      const idx = newCourses.findIndex(
        (course) => course.id === updatedCourse.id
      );
      newCourses[idx] = updatedCourse;
      setCourses(newCourses);

      success("Score Updated!");
      navigate(`/courses/${updatedCourse.id}`);
    } catch (error) {
      handleAjaxError(error);
    }
  };

  return (
    <>
      <Header />
      <div className="grid">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <CourseList courses={courses} />

            <Routes>
              <Route
                path=":id/edit"
                element={<CourseForm courses={courses} onSave={updateCourse} />}
              />
              <Route path="new" element={<CourseForm onSave={addCourse} />} />
              <Route
                path=":id"
                element={<Course courses={courses} onDelete={deleteCourse} />}
              />
              <Route
                path=":id/edit"
                element={<CourseForm courses={courses} onSave={updateCourse} />}
              />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default Editor;
