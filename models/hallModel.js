const mongoose = require("mongoose");

const hallSchema = mongoose.Schema(
  {
    // date: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "Date",
    // },
    hall: {
        type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hall", hallSchema);
