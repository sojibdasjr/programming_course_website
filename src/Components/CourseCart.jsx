import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const CourseCart = ({
  selectData,
  credit,
  price,
  setSelectData,
  setCredit,
  setPrice,
}) => {
  const handleDeleteCourse = (course) => {
    const oldData = selectData.filter(
      (filterData) => filterData.id !== course.id
    );
    if (oldData) {
      toast.warning("Course Delete");
      setSelectData(oldData);
      setCredit(credit - course.credit);
      setPrice(price - course.price);
    }
  };
  return (
    <div className=" md:w-1/4  border ps-2 sticky  ">
      <h1 className="font-bold text-black-400 text-2xl  ">
        Credit Hour Remaining: {credit <= 20 && 20 - credit}
      </h1>
      <hr className="my-2" />
      <h1 className="text-2xl font-bold mb-4">Course Name</h1>
      <div>
        {selectData.map((course) => (
          <li
            className="flex justify-between mr-2 items-center gap-6"
            key={course.id}
          >
            <span>{course.title}</span>
            <button onClick={() => handleDeleteCourse(course)}>
              <RiDeleteBin6Fill className="text-red-500  " />
            </button>
          </li>
        ))}
      </div>
      <hr className="my-4" />
      <h1>Total Creadit Hour : {credit} </h1>
      <hr className="my-4" />
      <h1>Total Price: $ {price} </h1>
    </div>
  );
};

export default CourseCart;
