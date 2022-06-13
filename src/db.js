const { connect, connection } = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectDB = async () => {
  await connect(MONGODB_URI);
  //await connect("mongodb://localhost:27018/taskcli");
  //console.log('MongoDB Connected')
};

connection.on("error", (err) => console.log(err));

module.exports = {
  connectDB,
  connection,
};
