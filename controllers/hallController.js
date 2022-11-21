const Hall = require("../models/hallModel");
const asyncHandler = require("express-async-handler");

const createHall = asyncHandler(async (req, res) => {
  const { hall, date } = req.body;
  const list = await Hall.create({
    date: date,
    hall: hall,
  });

  if (list) {
    res.status(200).json({ list });
  } else {
    res.status(400).json({ message: "Error in created" });
  }
});

const getHall = asyncHandler(async (req, res) => {
  const list = await Hall.find({}).exec();
  if (list) {
    res.status(200).json({ list });
  } else {
    res.status(400).json({ message: "Error in fetching data" });
  }
});

const deleteHall = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const list = await Hall.deleteOne({ _id: id });
  if (list) {
    res.status(200).json({ list });
  } else {
    res.status(400).json({ message: "Error in deleting" });
  }
});

module.exports = {
  createHall,
  getHall,
  deleteHall,
};
