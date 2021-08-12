const express = require("express");
const app = express();
const userRoutes = require("./routes/api/user");

userRoutes(app);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));
