const express =  require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from server for Test");
})

app.listen(3000,()=>{
    console.log("Server Started at 4000")
})
