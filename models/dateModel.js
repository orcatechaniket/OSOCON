const mongoose = require("mongoose");

const dateSchema = mongoose.Schema(
  {
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Date", dateSchema);
