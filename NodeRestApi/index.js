const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");

const port = 8800;
dotenv.config();

//connecting with the database
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB");
});

//middlewares
app.use(express.json()); //it is body parser which parsers during post requests
app.use(helmet());
app.use(morgan("common"));

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
    console.log(`Connected to http://localhost:${port}`);
});
