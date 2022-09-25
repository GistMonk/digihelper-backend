const mongoose = require("mongoose");

module.exports = () => {
  const mongoURL = process.env.MONGODB_URL_PROD || process.env.MONGODB_URL_DEV;
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("💿 MongoDB connected 👍🏻 "))
    .catch((err) => console.log("❌ MongoDB connection failed 👍🏻 "));
};
