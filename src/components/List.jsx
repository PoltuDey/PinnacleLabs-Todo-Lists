import React from "react";
import { MdCheckBox, MdDelete } from "react-icons/md";

const List = ({ id, curList, handleCheckProps, handleDeleteProps }) => {
  return (
    <>
      <li
        className={`flex items-center justify-between bg-slate-100 px-4 py-2 mb-2 gap-5 rounded-lg shadow-sm hover:shadow-md transform duration-300 transition-all ${
          curList.highlighted
            ? "bg-gradient-to-r from-pink-500 to-red-500 text-white scale-[0.98] shadow-lg ring-2 ring-red-300"
            : "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:scale-[1.02] hover:shadow-lg"
        }`}
      >
        <span
          className={`font-medium text-lg transition-all ${
            curList.highlighted
              ? " opacity-80 line-through tracking-wide"
              : "opacity-100"
          }`}
        >
          {id + 1}. {curList.inputText}
        </span>
        <button
          onClick={() => handleCheckProps(curList)}
          size={20}
          className={`p-2 rounded-lg text-black transition-all duration-300 flex items-center justify-center ${
            curList.highlighted
              ? "bg-gray-500 hover:bg-gray-700"
              : "bg-green-500 hover:bg-green-700 shadow-sm hover:shadow-md"
          }`}
        >
          <MdCheckBox />
        </button>
        <button
          onClick={() => handleDeleteProps(curList)}
          className="p-2 bg-red-500 hover:bg-red-600  text-black rounded-lg transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
        >
          <MdDelete />
        </button>
      </li>
    </>
  );
};

export default List;
