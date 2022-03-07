const router = require("express").Router();
let Entry = require("../models/entry.model");

// API GET endpoint
router.route("/").get((req, res) => {
  Entry.find()
    .then((entries) => res.json(entries))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API GET BY ID endpoint
router.route("/:id").get((req, res) => {
  Entry.findById(req.params.id)
    .then((entry) => res.json(entry))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API POST endpoint
router.route("/add").post((req, res) => {
  const term = req.body.term;
  const definition = req.body.definition;
  const category = req.body.category;

  const newEntry = new Entry({
    term,
    definition,
    category,
  });

  newEntry
    .save()
    .then(() => res.json("Entry added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API DELETE by ID endpoint
router.route("/delete/:id").delete((req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json("Entry deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API UPDATE by ID endpoint
router.route("/update/:id").post((req, res) => {
  Entry.findById(req.params.id).then((entry) => {
    entry.term = req.body.term;
    entry.definition = req.body.definition;
    entry.category = req.body.category;

    entry
      .save()
      .then(() => res.json("Entry updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
