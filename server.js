const express = require("express");
const connectDB = require("./db/connection");
const bookRouter = require("./routes/bookRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api/books", bookRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server: ", error);
  }
};

startServer();