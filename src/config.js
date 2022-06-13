require("dotenv").config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27018/taskcli",
};
