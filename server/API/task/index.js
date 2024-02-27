import express from "express";

import { TaskModel } from "../../Database/task";

const Router = express.Router();


/*
Route       /
Descrip     Get all tasks
Params      None
Access      Public
Method      GET
*/

Router.get("/",async (req,res) => {
    try{
        const tasks = await  TaskModel.find();

        return res.json({ tasks });
    }catch(error)
    {
        return res.status(500).json({error: error.message});
    }
});


/*
Route       /
Descrip     Get a specific task
Params      name
Access      Public
Method      GET
*/

Router.get("/:title",async (req,res) => {
    try{
        const { title } = req.params;
        const task = await  TaskModel.find({ 
            title : { $regex: title, $options: "i" },
        });
        return res.json({ task });
    }catch(error)
    {
        return res.status(500).json({error: error.message});
    }
});


/*
Route       /new
Descrip     Add new task
Params      None
Access      Public
Method      POST
*/

Router.post("/new",async (req,res) => {
    try{
        const tasks = req.body;
        await TaskModel.create(tasks);

        return res.json({  task : "Succesfully Created Task" });
    }catch(error)
    {
        return res.status(500).json({error: error.message});
    }
});


/*
Route       /update/
Descrip     Update a specific task
Params      title
Access      Public
Method      PUT
*/

Router.put("/update/:_id",async (req,res) => {
    try{
        const { _id } = req.params;
        const { taskData } = req.body;
        const updateTaskData = await  TaskModel.findOneAndUpdate(
            {
               _id: _id,
            },
            {
                $set: taskData,
            },
            {
                new: true
            }
        );

        return res.json({task: updateTaskData});
    }catch(error)
    {
        return res.status(500).json({error: error.message});
    }
});


/*
Route       /delete/
Descrip     Delete a specific task
Params      title
Access      Public
Method      DELETE
*/

Router.delete("/delete/:_id",async (req,res) => {
    try{
        const { _id } = req.params;

        const deleteTaskData = await  TaskModel.findOneAndDelete(
            {
               _id: _id,
            },
        );

        return res.json({task: deleteTaskData});
    }catch(error)
    {
        return res.status(500).json({error: error.message});
    }
});

export default Router;