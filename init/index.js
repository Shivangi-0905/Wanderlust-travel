const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main()
.then(() => {
    console.log("connected to DB");
})
.catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "67f29ff9a0c7e0c841fb71df"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();