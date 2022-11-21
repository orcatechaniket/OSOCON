const Title = require("../models/titleModel")

const asyncHandler = require("express-async-handler");

const createTitle = asyncHandler(async(req,res) => {
    const {title , date , hall , session}  =req.body

    const list = await Title.create({
        title : title ,
        date : date,
        hall : hall,
        session : session
    })
    if(list){
        res.status(200).json({list})
    }else {
        res.status(400).json({message : "Error in creating title"})
    }
})

const getTitle = asyncHandler(async(req,res) => {
    const list = await Title.find({}).populate("date").populate("hall").populate("session").exec()
    if(list){
        res.status(200).json({list})
    }else {
        res.status(400).json({message: "Error in fetching Title"})
    }
})

const deleteTitle = asyncHandler(async(req,res) => {
    const id = req.params._id

    const list = await Title.deleteOne({_id : id})
    if(list){
        res.status(200).json({list})
    }else {
        res.status(400).json({message : "Error in deleting"})
    }
})

const filter = asyncHandler(async (req,res) => {
    const {date , hall , session} = req.body
    const list = await Title.find({date : date , hall : hall , session : session })
  
    if(list){
      res.status(200).json({list})
    }else{
      res.status(400).json({message : "No agenda found"})
    }
  })

  const getOneTitle = asyncHandler(async(req,res) => {
    const id = req.params.id
    // console.log(id)
    const list = await Title.find({_id: id}).populate("papers").exec()
    if(list){
        // console.log(list)
        res.status(200).json({list})
    }else{
        res.status(400).json({message : "Not found"})
    }
  })
module.exports = {
    createTitle,
    getTitle,
    deleteTitle,
    filter,
    getOneTitle
}