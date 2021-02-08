require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./connectDB/db_connection");
const movieRoute = require("./routes/movie");
const authentication = require("./routes/auth");
const cookieParser = require("cookie-parser");
const PORT = 8800 || process.env.PORT

const app = express();

// initiate db
dbConnection();

// cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Local Host connected",
  });
});

// routes
app.use("/movies", movieRoute);
app.use("/auth/", authentication);

app.listen(PORT, console.log(`server running on port:${process.env.PORT}`));
