require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
<<<<<<< HEAD
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
=======
const incomeRoutes= require("./routes/incomeRoutes");
const expenseRoutes= require("./routes/expenseRoutes");


>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e

const app = express();

// Middleware to handle CORS
<<<<<<< HEAD
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use(express.json());

=======
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173", // adjust as needed
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});

>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
<<<<<<< HEAD
app.use("/api/v1/dashboard", dashboardRoutes);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======


// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
