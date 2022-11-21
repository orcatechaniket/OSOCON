const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema(
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
        type : String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", sessionSchema);
