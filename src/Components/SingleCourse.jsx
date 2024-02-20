import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

const SingleCourse = ({ course, handleAddToCart }) => {
  const { image, title, description, price, credit } = course;
  // handle selecet button and set data to mainPage

  return (
    <div className="flex flex-col justify-between border border-gray-300 mb-4 ">
      <div className="p-2 ">
        <img
          className="md:w-80 md:h-54  rounded-2xl "
          src={image}
          alt={`course image ${title}`}
        />
        <h1 className="text-xl font-bold my-2"> {title}</h1>
        <h1>{description}</h1>
      </div>
      <div className="flex justify-between mx-2">
        <h1 className="flex items-center">
          <MdOutlineAttachMoney /> Price: {price}
        </h1>
        <h1 className="flex justify-center items-center gap-2">
          Credit:
          <IoBookOutline /> {credit}
        </h1>
      </div>
      <button
        onClick={() => handleAddToCart(course)}
        className="bg-slate-600  rounded-lg  flex justify-center items-center  py-2 w-11/12 my-2 mx-auto  text-white text-xl focus:bg-slate-800"
      >
        Select
      </button>
    </div>
  );
};

export default SingleCourse;
