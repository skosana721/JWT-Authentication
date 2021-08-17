const User = require("../../model/user");
const { registerValidation, loginValidation } = require("../../validation");
const bcrypt = require("bcrypt");

const userRoutes = (app) => {
  app.get("/user", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.post("/register", async (req, res) => {
    // valid before make a new user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if a user exists
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send(`Email already exists`);

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const newUser = await User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      }).save();

      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.post("/login", async (req, res) => {
    //validating user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(`Email or password is wrong`);

    // check if the password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("Invalid password");
    res.send("Logged in!");
  });
};

module.exports = userRoutes;
