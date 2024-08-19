const { Router } = require("express");
const {
  getAllAccounts,
  createAccounts,
} = require("../controllers/account.controller");

const accountRouter = Router();

accountRouter.get("/", getAllAccounts).post("/", createAccounts);

module.exports = { accountRouter };
