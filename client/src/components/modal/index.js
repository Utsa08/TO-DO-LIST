import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto focus:outline-none   ">
      <div className="relative w-96 max-w-md p-6 mx-auto my-8 ">
        {/* Modal content */}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none border-4 border-white-200">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-todo-700 ">
            <h3 className="text-3xl font-semibold">Update Task</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-15 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none text-white-200">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto bg-todo-900 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
