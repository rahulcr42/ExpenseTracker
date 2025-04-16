const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
<<<<<<< HEAD
  icon: { type: String }, 
  source: { type: String, required: true }, // Example: Salary, Freelance, etc.
=======
  icon: { type: String },
  source: { type: String, required: true },
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Income", IncomeSchema);
