import React from "react";
import { FcTodoList } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = async () => {
    if (title === "" || description==="") {
      alert("Enter The Fields");
    } else {
      const postData = {
        title,
        description,
      };

      await axios.post("/task/new", postData);

      console.log(postData);
      setTitle("");
      setDescription("");
      alert("Task Posted");
    }
    
  };

  return (
    <>
      <div>
        <div class="relative flex items-top justify-center min-h-screen bg-todo-900 sm:items-center sm:pt-0">
          <div class="max-w-6xl sm:px-6 lg:px-8">
            <div class="mt-24 overflow-hidden md:-mt-20 lg:mt-4">
              <div class="grid grid-cols-1 md:grid-cols-2 ">
                <div class="p-6 m-2 bg-indigo-200 dark:bg-gray-800 sm:rounded-lg lg:p-8 lg:w-96">
                  <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    To-Do-List
                  </h1>

                  <div className="flex pl-4 mt-2 md:mt-8">
                    <FcTodoList className="text-2xl m-2 mt-2.5 md:mt-3.5" />
                    <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                      Task
                    </p>
                  </div>

                  <div class="flex items-center mt-2 text-gray-600">
                    <div class="ml-4 text-sm w-40 md:text-lg md:w-60 md:pt-6 lg:w-60 lg:mt-2 pl-4">
                      Success is never getting to the bottom of your to-do list.
                    </div>
                  </div>
                </div>

                <div class="p-6 flex flex-col justify-center">
                  <div class="flex flex-col">
                    <label for="title" class="text-white text-sm m-2">
                      Title
                    </label>
                    <input
                      type="title"
                      name="title"
                      id="title"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      class="w-120 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div class="flex flex-col mt-2">
                    <label for="description" class="text-white text-sm m-2">
                      Description
                    </label>
                    <textarea
                      type="description"
                      name="description"
                      id="desc"
                      placeholder="Description"
                      rows="3"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
