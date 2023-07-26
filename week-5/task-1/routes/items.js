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

// this end-point of an API returns JSON data array
router.get("/", function (req, res) {
  res.status(200).json(data);
});

// this end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get("/:id", function (req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", function (req, res) {
    // Assuming the user sends a JSON object with the "name" property in the request body
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Name is required." });
    } else {
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const newItem = { id: newId, name: name };
      data.push(JSON.stringify(newItem));

      res.status(201).json(newItem);
    }
  });

module.exports = router;
