import React, { useState } from "react";

export const TodoForm = ({ handleAddTodoProps }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInput = (value) => {
    setInputVal(value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    handleAddTodoProps(inputVal);
    setInputVal(""); //  clear after add or already exists
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="grid grid-cols-4 p-6 w-full max-w-sm min-w-[200px]">
          <input
            type="text"
            autoComplete="off"
            value={inputVal}
            onChange={(e) => handleInput(e.target.value)}
            className="w-full col-span-3 bg-transparent placeholder:text-slate-700 text-slate-900 text-sm border border-orange-100 hover:border-orange-300 rounded-md py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 shadow-sm focus:shadow"
            placeholder="Your Todo items name"
          />
          <button
            className="w-full rounded-md bg-slate-800 py-2 border border-transparent text-center text-sm text-red transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
