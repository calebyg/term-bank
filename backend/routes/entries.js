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
    .then(() => res.json("Entry added successfully."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API DELETE by ID endpoint
router.route("/delete/:id").delete((req, res) => {
  if (!req.params.id) {
    return res
      .status(400)
      .json({ status: 400, message: "Id must be present." });
  }
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json("Entry deleted successfully."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// API UPDATE by ID endpoint
router.route("/update/:id").put((req, res) => {
  if (!req.params.id) {
    return res
      .status(400)
      .json({ status: 400, message: "Id must be present." });
  }

  // findByIdAndUpdate
  Entry.findByIdAndUpdate(req.params.id, {
    term: req.body.term || "Untilted term",
    definition: req.body.definition || "Untitled definition",
    category: req.body.category || "Untitled category",
  })
    .then((entry) => {
      if (!entry) {
        return res.status(404).send({
          message: "Entry not found with id: " + req.params.id,
        });
      }
      res.send(entry);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error updating entry with id: " + req.params.id,
      });
    });
});

module.exports = router;
