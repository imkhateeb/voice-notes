const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;

module.exports = { PORT, MONGODB_URL, JWT_SECRET, NODE_ENV };
