const getTasks = (req, res) => {
  res.json([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Node.js" }
  ]);
};

module.exports = { getTasks };