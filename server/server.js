const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import routes here routes

const app = express();

app.use(express.json());
app.use(cors());

//configure routes  here

app.use("/api",(req,res)=>{
    res.send("Let's gooooo.....");
})

const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGO_DB_URI || "mongodb+srv://paras:paras@cluster0.p009i.mongodb.net/ITW2?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));
