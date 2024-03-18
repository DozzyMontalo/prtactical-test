require("dotenv").config();
const express = require("express");
const userRouter = require("./routers/users");
const adminRouter = require("./routers/admin");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(adminRouter);

module.exports = app;

console.log(process.env.PORT);
