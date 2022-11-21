const Title = require("../models/titleModel");

const asyncHandler = require("express-async-handler");

const updateModerator = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { moderator } = req.body;
  const update = await Title.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: {
        moderator: moderator,
      },
    }
  );

  if (update) {
    res.status(200).json({ update });
  } else {
    res.status(400).json("Error in updating moderators");
  }
});

const updatePanelist = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { panelist } = req.body;
  const update = await Title.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: {
        panelist: panelist,
      },
    }
  );

  if (update) {
    res.status(200).json({ update });
  } else {
    res.status(400).json("Error in updating panelist");
  }
});

const updateJudges = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { judges } = req.body;
  const update = await Title.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: {
        judges: judges,
      },
    }
  );

  if (update) {
    res.status(200).json({ update });
  } else {
    res.status(400).json("Error in updating judges");
  }
});

const updatePaper = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { paper, author } = req.body;
  const update = await Title.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        papers: {
          paperTitle: paper,
          author: author,
        },
      },
    }
  );

  if (update) {
    res.status(200).json({ update });
  } else {
    res.status(400).json("Error in updating judges");
  }
});

const updateTopic = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, speaker } = req.body;
  const update = await Title.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        topic: {
          topicTitle: name,
          speaker: speaker,
        },
      },
    }
  );

  if (update) {
    res.status(200).json({ update });
  } else {
    res.status(400).json("Error in updating judges");
  }
});

const updateConvenor = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { convenor } = req.body;
    const update = await Title.findOneAndUpdate(
      { _id: id },
      {
        $addToSet: {
            convenor: convenor,
        },
      }
    );
  
    if (update) {
      res.status(200).json({ update });
    } else {
      res.status(400).json("Error in updating convenor");
    }
  });

  const updateChairperson = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { chairperson } = req.body;
    console.log(req.body)
    console.log(id)
    const update = await Title.findOneAndUpdate(
      { _id: id },
      {
        $addToSet: {
            chairperson: chairperson,
        },
      }
    );
  
    if (update) {
      res.status(200).json({ update });
    } else {
      res.status(400).json("Error in updating convenor");
    }
  });

module.exports = {
  updateJudges,
  updateModerator,
  updatePanelist,
  updatePaper,
  updateTopic,
  updateConvenor,
  updateChairperson
};
