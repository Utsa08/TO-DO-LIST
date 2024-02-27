import React from "react";
import Search from "../components/search";
import Task from "../components/tasks";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskLayout = () => {
  const [task, setTask] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    console.log(title)
    const getallTasks = async () => {
      if (title){
        const searchTask = await axios.get(`/task/${title}`)
        setTask(searchTask.data.task);
      }
      else{
        const allTasks = await axios.get("/task");
        setTask(allTasks.data.tasks);
      }
      
    };
    getallTasks();
  }, []);

  return (
    <>
      <div className="w-60 ml-24 md:w-full md:mx-12 md:ml-24 lg:mx-60">
        <Search />
        <div>
          <div className="flex flex-col mt-8 lg:mt-16 lg:mx-8">
            {task.map((eachTask) => (
              <Task title={eachTask.title} desc={eachTask.description} _id={eachTask._id}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskLayout;
