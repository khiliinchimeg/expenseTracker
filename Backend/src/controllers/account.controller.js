const fs = require("fs");
const path = require("path");

const getAllAccounts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "Data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " internal server error" });
  }
};

const createAccounts = async (req, res) => {
    console.log(req.body, "www");
  try {
    const filePath = path.join(__dirname, "..", "Data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const newAccount = req.body;
    console.log(newAccount);
    accounts.push(newAccount);
    fs.writeFileSync(filePath, JSON.stringify(accounts));
    res.json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " internal server error" });
  }
};
module.exports = { getAllAccounts, createAccounts };
