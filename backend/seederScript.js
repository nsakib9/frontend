require('dotenv').config()

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Products');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Import Successful");
        process.exit();
    } catch (error) {
        console.error("Error on data import");
        process.exit(1);
    }
}

importData();
