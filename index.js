const express = require("express")
require("dotenv").config();
const {connection} = require("./configs/db");
const {userRouter} = require("./routes/User.route");
const cors=require("cors");
const app = express();

app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});
app.use("/users", userRouter);

app.listen(8080, async()=>{
  try {
    await connection
    console.log("Connected to DB")
  } catch (err) {
    console.log("Error connecting to DB")
    console.log(err)
  }
  console.log("server is running on port 8080");
})