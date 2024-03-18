const express = require("express");
const { auth } = require("../middleware/authMiddleware");
const router = new express.Router();

const {
  getLoanStatus,
  getUserLoans,
  fetchPastDueLoans,
} = require("../controller/loanController");


const {
  userLogin,
  userLogout,
} = require("../controller/userController");

router.post("/users/login", userLogin);

router.post("/users/logout", auth, userLogout);

router.get("/users/status", auth, getLoanStatus);

router.get("/users/Loans", auth, getUserLoans);

router.get("/users/expired", auth, fetchPastDueLoans)