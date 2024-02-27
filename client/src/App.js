import Navbar from "./components/navbar"
import HomeLayout from "./layout/Home.Layout";
import { Route, Routes } from "react-router-dom";
import TaskLayout from "./layout/Task.Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.params = {};


const App=() => {
  return (
    <>
    <div className="flex gap-8 bg-todo-900 text-white lg:gap-80">
      <Navbar />
      <Routes>
        <Route path="/" element = {<HomeLayout />} />
        <Route path="/task" element = { <TaskLayout /> } />
        <Route path="/task/:title" element = { <TaskLayout /> } />
      </Routes>
    </div>  
    </>
  );
}

export default App;
