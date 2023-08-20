const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// app.use(notFound);
// app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`server started on port ${process.env.PORT}`)
);
