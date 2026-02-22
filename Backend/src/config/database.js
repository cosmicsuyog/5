const mongoose = require("mongoose");

function ConnectToDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to db");
  });
}


module.exports = ConnectToDB