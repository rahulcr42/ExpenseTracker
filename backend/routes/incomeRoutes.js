const express = require("express");
const {
  addIncome,
  getAllIncome,
  deleteIncome,
<<<<<<< HEAD
  downloadIncomeExcel
} = require("../controllers/incomeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);


=======
  downloadIncomeExcel // ❌ Fix: No space in function name
} = require("../controllers/incomeController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router(); // ❌ Fix: was written incorrectly

// Routes
router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel); // ❌ Fix: no space in function name
router.delete("/:id", protect, deleteIncome);

>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
module.exports = router;
