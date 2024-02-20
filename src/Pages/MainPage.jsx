import React, { useState } from "react";
import OurCourses from "../Components/OurCourses";
import CourseCart from "../Components/CourseCart";

const MainPage = () => {
  const [selectData, setSelectData] = useState([]);
  const [credit, setCredit] = useState(0);

  //handleAddToCart
  const handleAddToCart = (course) => {
    //condition Existing item
    const existingData = selectData.find((newData) => course.id === newData.id);
    if (existingData === undefined) {
      const cartCourse = [...selectData, course];
      setSelectData(cartCourse);
    } else {
      console.log("Alreadys");
    }
  };
  return (
    <div className="md:flex gap-4 max-w-7xl mx-auto mt-4 px-2">
      <OurCourses handleAddToCart={handleAddToCart} />
      <CourseCart selectData={selectData} />
    </div>
  );
};

export default MainPage;
