const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import routes here routes`

const noticeRoutes = require("./routes/notice");
const authRoutes = require("./routes/auth");
const roomAllotRoutes = require("./routes/roomAllot");

const app = express();

app.use(cors());
app.use((req, res, next) => {
  // setting up headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next();
});
app.use(express.json());

//configure routes  here

app.use("/api", noticeRoutes);
app.use("/api", authRoutes);
app.use("/api", roomAllotRoutes);

const PORT = process.env.PORT || 5000;
const dbURI =
  process.env.MONGO_DB_URI ||
  "mongodb+srv://paras:paras@cluster0.p009i.mongodb.net/ITW2?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));
