process.env.NODE_ENV = process.env.NODE_ENV || "development";

const dotenv = require("dotenv");
const environment = require("./environment");

module.exports = environment.toWebpackConfig();
dotenv.config();
