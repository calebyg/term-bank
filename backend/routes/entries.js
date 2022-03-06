const router = require("express").Router();
let Entry = require("../models/entry.model");

// API GET endpoint
router.route("/").get((req, res) => {
  Entry.find()
    .then((entries) => res.json(entries))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const term = req.body.term;
  const definition = req.body.definition;
  const category = req.body.category;
  const date_added = Date.parse(req.body.date_added);

  const newEntry = new Entry({
    term,
    definition,
    category,
    date_added,
  });

  newEntry
    .save()
    .then(() => res.json("Entry added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
