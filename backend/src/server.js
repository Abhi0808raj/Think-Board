import express from "express"
import notesRoutes from "./routes/notesRoutes.js";

const app=express();

app.use("/api/notes", notesRoutes);

app.listen(5001, ()=>{
    console.log("Server Started on PORT: 5001");
});



// mongodb+srv://abhi0808raj:J4SsNMRrkWZ33Bxg@mern-thinkboard.vdcikiw.mongodb.net/?retryWrites=true&w=majority&appName=Mern-Thinkboard