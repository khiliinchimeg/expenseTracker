const fs = require("fs");
const path = require("path");

const getAllRecord = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "Data", "record.json");
    const rawData = fs.readFileSync(filePath);
    const record = JSON.parse(rawData);
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " internal server error" });
  }
};

const createRecord = async (req, res) => {
    console.log(req.body, "www");
  try {
    const filePath = path.join(__dirname, "..", "Data", "record.json");
    const rawData = fs.readFileSync(filePath);
    const record = JSON.parse(rawData);

    const newRecord = req.body;
    console.log(newRecord);
    record.push(newRecord);
    fs.writeFileSync(filePath, JSON.stringify(record));
    res.json(newRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " internal server error" });
  }
};
module.exports = { getAllRecord, createRecord };
