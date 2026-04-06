const express=require("express")
const cookieparser=require("cookie-parser")
const morgan=require("morgan")
const cors=require("cors")

const app=express();

const authRouter=require("./routes/user.routes")

app.use(cookieparser())
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRouter)
module.exports=app;

