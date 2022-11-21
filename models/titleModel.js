const mongoose = require("mongoose");

const titleSchema = mongoose.Schema(
  {
    date: {
      type: String,
    },
    hall: {
      type: String,
    },
    session: {
      type: String,
    },
    title: {
      type: String,
    },
    moderator: [String],
    panelist: [String],
    judges: [String],
    papers: [
      {
        paperTitle: String,
        author: String,
      },
    ],
    convenor: [String],
    chairperson: [String],
    topic: [
      {
        topicTitle: [String],
        speaker: [String],
      
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Title", titleSchema);
