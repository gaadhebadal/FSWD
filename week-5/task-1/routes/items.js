// import required essentials
const express = require("express");
// create new router
const router = express.Router();

// create a JSON data array
let data = [
  {
    id: 1,
    name: "Badal",
  },
  {
    id: 2,
    name: "raj",
  },
  {
    id: 3,
    name: "jay",
  },
  {
    id: 4,
    name: "abdul",
  },
  {
    id: 5,
    name: "shubh",
  },
];

// Middleware to parse JSON in the request body
router.use(express.json());

// GET all items
router.get("/", function (req, res) {
  res.status(200).json(data);
});

// GET an item by ID
router.get("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

// POST: Create a new item
router.post("/", function (req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Name is required." });
  } else {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newItem = { id: newId, name: name };
    data.push(newItem);
    res.status(201).json(newItem);
  }
});

// PUT: Update an item by ID
router.put("/:id", function (req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Name is required." });
  } else {
    const itemId = parseInt(req.params.id);
    const foundIndex = data.findIndex((item) => item.id === itemId);
    if (foundIndex !== -1) {
      data[foundIndex].name = name;
      res.status(200).json(data[foundIndex]);
    } else {
      res.sendStatus(404);
    }
  }
});

// DELETE: Delete an item by ID
router.delete("/:id", function (req, res) {
  const itemId = parseInt(req.params.id);
  const foundIndex = data.findIndex((item) => item.id === itemId);
  if (foundIndex !== -1) {
    const deletedItem = data.splice(foundIndex, 1);
    res.status(200).json(deletedItem[0]);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
