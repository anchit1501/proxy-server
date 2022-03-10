const express = require("express");
const cors = require("cors");
require("dotenv").config();
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 5001;

const app = express();

//Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 50,
});

app.use(limiter);
app.set("trust proxy", 1);

// Set static filder
app.use(express.static("public"));

// Routes
app.use("/api", require("./routes"));

app.use(cors());

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));
