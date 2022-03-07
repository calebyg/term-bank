const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const entrySchema = new Schema(
  {
    term: {
      type: String,
      required: true,
      unique: false,
      trim: false,
      minlength: 3,
    },
    definition: {
      type: String,
      required: true,
      unique: false,
      trim: false,
      minlength: 3,
    },
    category: {
      type: String,
      required: true,
      unique: false,
      trim: false,
      minlength: 1,
    },
  },
  { timestamps: true }
);

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
