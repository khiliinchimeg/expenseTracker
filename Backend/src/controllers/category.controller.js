const fs =  require("fs");
const path = require("path");

const getAllCategory = async (req, res) => {
    try{
        const filePath = path.join(__dirname, "..", "Data", "category.json");
        const rawData = fs.readFileSync(filePath);
        const category = JSON.parse(rawData);
        res.json(category);
    }catch (error) {
        console.error(error);
        res.status(500).json({error:" internal server error"});
    }
};

const  createCategory = async (req, res) => {
    console.log(req.body, "hii");
    try{
        const filePath = path.join(__dirname,  "..", "Data", "category.json");
        const rawData = fs.readFileSync(filePath);
        const category = JSON.parse(rawData);

        const newCategory = req.body;
        console.log(newCategory)
        category.push(newCategory);
        fs.writeFileSync(filePath, JSON.stringify(category));
        res.json(newCategory);
    }catch (error){
        console.error(error);
        res.status(500).json({error:" internal server error"});

    }
};
module.exports =  {getAllCategory, createCategory};