const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
