const mongoose = require("mongoose");

const connectDB = async () => {
<<<<<<< HEAD
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
=======
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB connected ✅");
    } catch(err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
};

module.exports = connectDB;
