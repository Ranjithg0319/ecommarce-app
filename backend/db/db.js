const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017").then(() => {
      console.log("DB Connected...!");
    });
  } catch (error) {
    console.log("DB Connection ERROR...!", error);
  }
};

module.exports = DBConnect;
