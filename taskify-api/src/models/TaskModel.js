import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title : {
        type : String,
        maxlength : 100,
        trim : true,
        required : true
    },
    description : {
        type : String,
        maxlength : 500,
        required : false,
    },
    status : {
        type : String,
        enum : ["pending", "in progress", "completed"],
        default : "pending",
        required : false,
    },
    priority : {
        type: String,
        enum : ["low", "medium", "high"],
        default: "high",
        required : false,
    },
    dueDate : {
        type : Date,
        required : false,
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true,
    },
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category",
    }
}, {
    timestamps : true
})

const Task = mongoose.model("Task", TaskSchema);

export default Task;