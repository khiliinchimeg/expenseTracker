const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
} = require("../controllers/record.controller");

const recordRouter = Router();

recordRouter.get("/", getAllRecord).post("/", createRecord);

module.exports = { recordRouter };