import React, { useState } from "react";

const CourseCart = ({ selectData }) => {
  return (
    <div className=" md:w-1/4  border ps-2 ">
      <h1 className="font-bold text-slate-700 text-2xl ">
        Credit Hour Remaining:
      </h1>
      <hr className="my-2" />
      <h1 className="text-2xl font-bold mb-4">Course Name</h1>
      <div>
        {selectData.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </div>
      <hr className="my-4" />
      <h1>Total Creadit Hour : </h1>
      <hr className="my-4" />
      <h1>Total Price: $ </h1>
    </div>
  );
};

export default CourseCart;
