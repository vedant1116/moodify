const express=require("express")
const cookieparser=require("cookie-parser")
const morgan=require("morgan")
const cors=require("cors")

const app=express();

const authRouter=require("./routes/user.routes")
const songRouter=require("../src/routes/song.routes")

app.use(cookieparser())
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRouter)
app.use('/api/songs',songRouter)
module.exports=app;

