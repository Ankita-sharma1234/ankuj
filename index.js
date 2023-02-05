const connection = require("./Modal/connection")

const express = require("express")
const app = express();
app.use(express.json())

const route1 = require("./Routes/employee.routes")
app.use("/",route1)
app.use("/",route1)

app.get("/hii",(req, res)=>{
    res.send("hii friends")
})

app.listen(3999,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server starting")
    }
})