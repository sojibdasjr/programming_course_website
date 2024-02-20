import React, { useState } from "react";

const CourseCart = ({ selectData, credit, price }) => {
  return (
    <div className=" md:w-1/4  border ps-2 sticky  ">
      <h1 className="font-bold text-black-400 text-2xl  ">
        Credit Hour Remaining: {credit <= 20 && 20 - credit}
      </h1>
      <hr className="my-2" />
      <h1 className="text-2xl font-bold mb-4">Course Name</h1>
      <div>
        {selectData.map((course) => (
          <li key={course.id}>{course.title}</li>
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
