import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name : {
        type : String,
        maxlength : 50,
        trim : true,
        required : true,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
}, { timestamps : true})

const Category = mongoose.model("Category", CategorySchema);

export default Category;