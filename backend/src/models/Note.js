import mongoose from "mongoose";

//Step 1: Create a Schema
//Step 2: Create a model based of that schema

const noteSchema= new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },
    { timestamps:true}
);

const Note=mongoose.model("Note", noteSchema)

export default Note;