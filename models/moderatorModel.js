const mongoose = require("mongoose");

const titleSchema = mongoose.Schema(
  {
    date: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Date",
    },
    hall: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Hall",
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Session",
    },
    title: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Title",
    },
    moderator: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Title", titleSchema);
