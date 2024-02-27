import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
},
{
    timestamps: true,
}
);

export const TaskModel = mongoose.model("Tasks", TaskSchema);
