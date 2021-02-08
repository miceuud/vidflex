require("dotenv").config();
const mongoose = require("mongoose");

let dbConnection = async () => {
  try {
    let connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    // console.log(connect);
    if (connect) {
      console.log(`connect to DB successful`);
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
