const mongoose = require("mongoose");

const agendaSchema = mongoose.Schema(
  {
    // date: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "Date",
    // },
    date : {
      type : String,
    },
    title: {
      type: String,
    },
    hallno: {
      type: String,
    },
    speaker: {
      type: String,
    },
    info: {
      type: String,
    },
    detail: {
      type: String,
    },
    session : {
      type : String
    }
  },
  {
    timesatamps: true,
  }
);

module.exports = mongoose.model("Agenda", agendaSchema);
