const express = require('express');
const cors = require("cors");
const { accountRouter } = require("./src/routes/account.route");
const { categoryRouter } = require("./src/routes/category.route");
const { recordRouter } = require('./src/routes/record.route');

const app = express()
const port = 4000

app.use(cors());
app.use(express.json()) 

app.use("/accounts", accountRouter);
app.use("/category", categoryRouter);
app.use( "/record", recordRouter);

 app.get("/", (req, res) => {
    res.send("hello world!")
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

