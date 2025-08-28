import React, { useState } from "react";
import { CurrentDateTime } from "./CurrentDateTime";
import { TodoForm } from "./TodoForm";
import List from "./List";

export const Todo = () => {
  const [task, setTask] = useState(() => {
    const savedTodos = localStorage.getItem("todoApp");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  localStorage.setItem("todoApp", JSON.stringify(task));

  const handleForm = (inputVal) => {
    if (!inputVal) {
      alert("Task cannot be empty ❌");
      return;
    } // if null not add any item in list
    console.log(task);
    console.log(inputVal);
    if (
      task.some(
        (todo) => todo.inputText.toLowerCase() === inputVal.toLowerCase().trim()
      )
    ) {
      alert("Already exists in list ⚠️");
      return;
    } // if exists in array not listed
    setTask((prevTask) => [
      ...prevTask,
      { inputText: inputVal.trim().toUpperCase(), highlighted: false },
    ]);
  };

  const handleDelete = (curElement) => {
    // console.log(task);
    // console.log(curElement);
    const updatedTodoList = task.filter(
      (curTodo) => curTodo.inputText !== curElement.inputText
    );
    setTask(updatedTodoList);
  };

  const handleCheck = (curElement) => {
    // console.log(task);
    // console.log(curElement);
    const updatedTodoList = task.map((curCheck) => {
      if (curCheck.inputText === curElement.inputText) {
        return { ...curCheck, highlighted: !curCheck.highlighted }; //defaultHighlight
      }
      return curCheck;
    });
    setTask(updatedTodoList);
  };

  const handleClearAll = () => setTask([]);

  return (
    <>
      <div
        className="container m-0 p-3 box-border w-screen h-full flex items-center justify-center flex-col shadow-sm border border-slate-200  rounded-2xl my-6 max-w-lg max-h-screen bg-gradient-to-br from-green-300 via-lime-400 to-yellow-300
 bg-white/80 backdrop-blur-md transition-all hover:shadow-2xl"
      >
        <h3 className="text-3xl font-bold text-center relative m-2.5 items-center flex justify-center text-white h-15 rounded-md bg-slate-800">
          <span className=" animate-bounce">Todo list</span>
        </h3>
        <CurrentDateTime />
        <TodoForm handleAddTodoProps={handleForm} />
        <div className="mt-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
          <ul className="space-y-2">
            {task.map((curElement, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  curList={curElement}
                  handleDeleteProps={handleDelete}
                  handleCheckProps={handleCheck}
                />
              );
            })}
          </ul>
        </div>
        <button
          className="px-5 py-2 rounded-full bg-red-500 text-black font-semibold shadow-md hover:bg-red-600 hover:scale-[1.05] transition-all"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </>
  );
};
