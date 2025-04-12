const express = require("express");
const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel // ❌ Fix: No space in function name
} = require("../controllers/expenseController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router(); // ❌ Fix: was written incorrectly

// Routes
router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
  router.get("/downloadexcel", protect, downloadExpenseExcel); // ❌ Fix: no space in function name
router.delete("/:id", protect, deleteExpense);

module.exports = router;
