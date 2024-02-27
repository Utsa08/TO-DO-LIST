require ("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import ConnectDb from "./Database/connection";

import Task from "./API/task";

const todo = express();

todo.use(express.json());
todo.use(express.urlencoded({extended: false}));
todo.use(helmet());
todo.use(cors());

todo.use("/task", Task);

todo.get("/", (req,res) => {
    res.json({message: "Setup Done"})
});

todo.listen(8080, ()=> 
ConnectDb().then(() => console.log("Server is up and running"))
.catch(() => console.log("DB connection Failed")));
