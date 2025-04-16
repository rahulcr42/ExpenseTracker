const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
<<<<<<< HEAD
  icon: { type: String }, 
  category: { type: String, required: true }, // Example: Food, Rent, Groceries
=======
  icon: { type: String },
  category:{type: String, required: true},
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Expense", ExpenseSchema);
