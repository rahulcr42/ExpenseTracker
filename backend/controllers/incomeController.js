<<<<<<< HEAD
const xlsx = require('xlsx');
const Income = require("../models/Income");

// Add Income
exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    // Validation: Check for missing fields
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIncome = new Income({ 
      userId, 
      icon, 
      source, 
      amount, 
      date: new Date(date)
    });

=======

const path = require('path');
const User = require("../models/User");
const xlsx = require('xlsx');
const Income = require("../models/Income");

// Add Income Source
exports.addIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, source, amount, date } = req.body;
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newIncome = new Income({ userId, icon, source, amount, date: new Date(date) });
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

<<<<<<< HEAD
// Get All Income (For Logged-in User)
exports.getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.json(income);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Income
exports.deleteIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Download Income Details in Excel
exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    // Prepare data for Excel
    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date,
    }));
    
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");
    xlsx.writeFile(wb, 'income_details.xlsx');
    res.download('income_details.xlsx');
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
=======
// Get All Income Source
exports.getAllIncome = async (req, res) => {
  try {
    const income = await Income.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch income" });
  }
};

// Delete Income Source
exports.deleteIncome = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income || income.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: "Income not found or unauthorized" });
    }
    await income.deleteOne();
    res.status(200).json({ message: "Income deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete income" });
  }
};

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;
  
    try {
      const income = await Income.find({ userId }).sort({ date: -1 });
  
      // Prepare data for Excel
      const data = income.map((item) => ({
        Source: item.source,
        Amount: item.amount,
        Date: item.date.toISOString().split('T')[0], // Format the date
      }));
  
      // Create a new workbook and worksheet
      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.json_to_sheet(data);
      xlsx.utils.book_append_sheet(wb, ws, 'Income');
  
      // Define file path
      const filePath = path.join('income_details.xlsx');
      xlsx.writeFile(wb, filePath);
  
      // Send the file for download
      res.download(filePath, 'income_details.xlsx');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
