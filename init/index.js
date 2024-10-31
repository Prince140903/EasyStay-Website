const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const monogoUrl = "mongodb://127.0.0.1:27017/EasyStay";

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(monogoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data Initialized");
};

initDB();
