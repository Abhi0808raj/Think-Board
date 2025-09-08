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

noteSchema.index({createdAt:1},{expireAfterSeconds:151200});
const Note=mongoose.model("Note", noteSchema);


export default Note;