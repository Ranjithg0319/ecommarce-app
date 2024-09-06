const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const DBConnect = require("./db/db");
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://locaalhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 8000;
DBConnect();
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT} PORT`);
});
