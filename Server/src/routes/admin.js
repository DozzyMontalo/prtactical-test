const express = require("express");
const router = new express.Router();

const {auth, isAdmin, superAdmin } = require("../middleware/authMiddleware");

const {
  userLogin,
  userLogout,
} = require("../controller/userController");


const {
  getTotalLoan,
  deleteLoan
} = require("../controller/loanController");

router.post("/admin/login", userLogin);

router.post("/admin/logout", auth, userLogout);

router.get("/admin/:id", auth, isAdmin, getTotalLoan)

router.post("admin/del", auth, superAdmin, deleteLoan )