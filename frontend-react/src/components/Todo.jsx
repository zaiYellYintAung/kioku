import React from "react";

const Todo = () => {
  return (
    <div className="flex">
      <div className="max-w-md w-full px-8 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-gray-800 font-semibold mb-4">Add Task</h2>
        <form className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="text-gray-700 font-medium block mb-2">
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter task name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="text-gray-700 font-medium block mb-2">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Select due date"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="text-gray-700 font-medium block mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter task description"></textarea>
          </div>
          <button
            type="submit"
            className="w-1/2 mx-auto py-2 px-4 bg-white border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white hover:border-transparent">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
