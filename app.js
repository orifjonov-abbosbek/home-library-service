const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const userRouter = require("./routes/userRouter");
const trackRouter = require("./routes/trackRouter");
const artistRouter = require("./routes/artistRouter");
const albumRouter = require("./routes/albumRouter");
const favoritesRouter = require("./routes/favoritesRouter");

app.use("/user", userRouter);
app.use("/track", trackRouter);
app.use("/artist", artistRouter);
app.use("/album", albumRouter);
app.use("/favorites", favoritesRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
