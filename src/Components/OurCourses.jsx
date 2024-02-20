import React, { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";

const OurCourses = ({ handleAddToCart }) => {
  const [ourCourse, setOurCourse] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setOurCourse(data));
  }, []);
  return (
    <div className=" md:flex md:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {ourCourse.map((course) => (
          <SingleCourse
            course={course}
            handleAddToCart={handleAddToCart}
            key={course.id}
          ></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
