import express from "express"
import cors from "cors"

const app = express();

app.use(cors());

const port = 3001;

app.get("/acceptHeader",(req, res)=>{
    if(req.headers.accept.includes("application/json")){
        res.send({mesg:"this is json"})
    }
    else{
        res.send("this is plain text")
    }
})

app.listen(port, () => {
    console.log("server is running on the port:",port)
})