import React, { useState } from "react";
import OurCourses from "../Components/OurCourses";
import CourseCart from "../Components/CourseCart";
import { toast } from "react-toastify";

const MainPage = () => {
  const [selectData, setSelectData] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  //handleAddToCart
  const handleAddToCart = (course) => {
    //condition Existing item
    const existingData = selectData.find((newData) => course.id === newData.id);
    if (existingData === undefined) {
      //credit
      const newCredit = credit + course.credit;
      if (newCredit <= 20) {
        setCredit(newCredit);
        //upadting price
        const neWPrice = price + course.price;
        setPrice(neWPrice);
      } else {
        toast.error("Your credit is over ");
      }
      //price

      //copy all data
      const cartCourse = [...selectData, course];
      setSelectData(cartCourse);
    } else {
      toast.error("Course is Already existing");
    }
  };
  return (
    <div className="md:flex gap-4 max-w-7xl mx-auto mt-4 px-2">
      <OurCourses handleAddToCart={handleAddToCart} />
      <CourseCart selectData={selectData} credit={credit} price={price} />
    </div>
  );
};

export default MainPage;
