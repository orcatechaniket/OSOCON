const Agenda = require("../models/agendaModel");

const asyncHandler = require("express-async-handler");

const createAgenda = asyncHandler(async (req, res) => {
  const { title, hallno, speaker, info, detail, date, session } = req.body;

  if (!title || !hallno || !speaker || !info || !detail || !date) {
    res.status(400).json({ message: "Please fill the form carefully" });
    return;
  }

  const agenda = await Agenda.create({
    date,
    title,
    hallno,
    speaker,
    info,
    session,
    detail,
  });

  if (agenda) {
    res.status(201).json(agenda);
  } else {
    res.status(400).json({ message: "Error in creating agenda" });
  }
});

const getAgenda = asyncHandler(async (req, res) => {
  const list = await Agenda.find({})
    .sort({ createdAt: -1 })
    .populate("date")
    .exec();

  if (list) {
    res.status(200).json({ list });
  } else {
    res.status(400).json({ message: "Unable to fetch the data" });
  }
});

// const deleteAgenda = asyncHandler(async (req, res) => {
//   const list = await Agenda.findOneAndDelete({ _id: req.params.id });
//   if eted" });
//   } else {
//     res.status(400).json({ message: "Error in deleteing" });
//   }
// });

const fileterdAgenda = asyncHandler(async (req,res) => {
  const {date , hallno , session} = req.body
  const list = await Agenda.find({date : date , hallno : hallno , session : session })

  if(list){
    res.status(200).json({list})
  }else{
    res.status(400).json({message : "No agenda found"})
  }
})

const bulkUpload = asyncHandler(async(req,res) => {
  const bulk = await Agenda.insertMany(
    [{
      "title": "Dev web",
      "hallno": "a",
      "speaker": "aniket",
      "info": "andjkshda",
      "detail": "web development"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "DSEAK or DMEK-PEARLS TO TRANSITION SUCCESSFULLY",
      "speaker": "DR ANSHU ARUNDHATI"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "FAILING BLEB AND ITS MANAGEMENT-BLEB NEEDLING",
      "speaker": "DR ANUP DAS"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "LACRIMAL SAC SURGERY",
      "speaker": "DR SURYASNAT RATH"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "INTRAOCULAR FOREIGN BODY-A CHASE",
      "speaker": "DR G N RAO"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "SCLERITIS-PRACTICAL MANAGEMENT",
      "speaker": "DR SOMASHIELAMURTHY"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "TISSUE ADHESIVE IN CORNEAL ULCER",
      "speaker": "DR ANITA PANDA"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "MANUAL SMALL INCISION CATARACT SURGERY-WAYS TO REDUCE ASTIGMATISM",
      "speaker": "DR PARIKSHIT GAGOTE"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "9.00 - 10.30 AM",
      "titile": "NATIONAL SYMPOSIUM - 1",
      "detail": "ANTERION: AN OPTICAL BIOMETRY MACHINEAS AN ANTERIOR SEGMENT IMAGING TOOL",
      "speaker": "DR KUMAR DOCTOR"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Important snippets in biometry",
      "speaker": "Dr R. Krishnaprasad"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Basics of chopping",
      "speaker": "Prof Ashok Kumar Nanda"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Approach to sutureless SFIOL",
      "speaker": "Dr Srinibas Joshi"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Safety and consistency of rock hard cataracts",
      "speaker": "Dr Sudeep Das"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Intervention in a pseudophakic eye by an anterior segment surgeon- situations and management",
      "speaker": "Dr Anurag Mishra"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Tinkle for capsular wrinkle",
      "speaker": "Dr Kumar Doctor"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Phaco in small pupils",
      "speaker": "Prof Gopal  Das"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "The Domino effect- Intra operative challenges",
      "speaker": "Dr Shivani Patnaik nanda"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "10.30-12.00 AM",
      "titile": "NATIONAL SYMPOSIUM - 2",
      "detail": "Advantages of a true MICS PLATFORM IOL- NANEX multisert",
      "speaker": "Prof Ashok Kumar Nanda"
    },{
      "date": "26-11-2022",
      "hallno": "B",
      "session": "12.00-1.30 AM",
      "titile": "RECENT ADVANCES",
      "detail": "ROLE OF IMAGING IN ANTERIOR SEGMENT DISORDERS ",
      "speaker": "DR ANSHU ARUNDHATI "
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "12.00-1.30 AM",
      "titile": "RECENT ADVANCES",
      "detail": "MICROSCOPE INTEGRATED OCT: IS IT WORTHY",
      "speaker": "DR PRAFULLA MAHARANA"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "12.00-1.30 AM",
      "titile": "RECENT ADVANCES",
      "detail": "FIVE PEARLS IN ANTERIOR UVEITIS",
      "speaker": "DR SOMASHIELA MURTHY"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "12.00-1.30 AM",
      "titile": "RECENT ADVANCES",
      "detail": "NEWER TECHNIQUES IN HANDLING RECURRENT MACULAR HOLES",
      "speaker": "DR SARVANAN V"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "12.00-1.30 AM",
      "titile": "RECENT ADVANCES",
      "detail": "AGV JUGAAD- VDO BASED TALK ON AGV TROUBLESHOOTING",
      "speaker": "DR R KRISHNAPRASAD"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "12.00-1.30 AM",
      "titile": "RECENT ADVANCES",
      "detail": "WIDENING OUR UNDERSTANDING IN UVEITIS WITH WIDE FIELD ANGIOGRAPHY",
      "speaker": "DR ANUP KELGAONKAR"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "2.00-3.00 PM",
      "titile": "TAKE THE EDGE OFF THE FLAMING DIABETIC RETINOPATHY",
      "detail": "Keynote Address- In search of India specific supplement to reduce the burden of Diabetic retinopathy",
      "speaker": "DR TARAPRASAD DAS"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "2.00-3.00 PM",
      "titile": "TAKE THE EDGE OFF THE FLAMING DIABETIC RETINOPATHY",
      "detail": "ITS NOT ALWAYS DIABETIC RETINOPATHY",
      "speaker": "DR SANGHAMITRA KANUNGO"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "2.00-3.00 PM",
      "titile": "TAKE THE EDGE OFF THE FLAMING DIABETIC RETINOPATHY",
      "detail": "ROLE OF RED FREE IMAGING IN DIABETIC RETINOPATHY/ VASCULOPATHY",
      "speaker": "Dr Tapas Padhi"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "2.00-3.00 PM",
      "titile": "TAKE THE EDGE OFF THE FLAMING DIABETIC RETINOPATHY",
      "detail": "current concepts in managing DME- a case based discussion",
      "speaker": "DR ST MURLIDHAR"
    },{
      "date": "26-11-2022",
      "hallno": "A",
      "session": "2.00-3.00 PM",
      "titile": "TAKE THE EDGE OFF THE FLAMING DIABETIC RETINOPATHY",
      "detail": "Diabetic vitrectomy- way to go",
      "speaker": "Dr Santosh Mahapatra"
    }]
    
  )
  if(bulk){
    res.status(200).json({message: "uploaded "})
  }
  else {
    res.status(400).json({message : "error in uploading"})
  }
})

module.exports = {
  createAgenda,
  getAgenda,

  fileterdAgenda,
  bulkUpload
};
