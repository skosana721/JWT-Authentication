const userRoutes = (app) => {
  app.get("/user", (req, res) => {
    res.send("Users");
  });
  app.post("/user", (req, res) => {
    res.send("post");
  });
};

module.exports = userRoutes;
