import React from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import Modal from "../modal";

const Task = (props) => {
  const deleteTask = async (_id) => {
    await axios.delete(`/task/delete/${_id}`);
    window.location.reload();
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateForm = async(_id) => {
    if (title === "" || description==="") {
      alert("Enter The Fields");
    } else {
    const updateData = {
      taskData:{
        title:title,
        description:description,
      }
    };

    await axios.put(`/task/update/${_id}`,updateData);

    console.log(updateData);
    setTitle("");
    setDescription("");
    window.location.reload();
  }
}

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            >
              Title
            </label>
            <input
              id="email"
              required
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="message"
              required
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={() => updateForm(props._id)}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:ml-6 "
          >
            Close Modal
          </button>
        </form>
      </Modal>

      <div class="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-blue-800 rounded-xl mb-8">
        <p class="w-full text-2xl font-semibold text-white">{props.title}</p>
        <p class="w-full pb-8 text-sm tracking-wide leading-tight text-white">
          {props.desc}
        </p>
        <div className=" md:ml-96">
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            type="button"
            class=" text-xl lg:ml-96 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={openModal}
          >
            <BsPencilSquare />
          </button>
          <button
            type="button"
            class=" text-xl focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => deleteTask(props._id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
