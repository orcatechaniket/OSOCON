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
    session :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Session",
    },
    title : {
        type: String
    },
    moderator : [String] ,
    panelist : [String],
    judges : [String],
    papers : [
        {
            paperTitle : String,
            author : String
        }
    ],
    convenor: [String],
    chairperson : [String],
    topic : [
        {
            topicTitle : String,
            speaker : String
        }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Title", titleSchema);
