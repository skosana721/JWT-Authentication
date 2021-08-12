const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/api/user");
require("dotenv/config");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
userRoutes(app);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
