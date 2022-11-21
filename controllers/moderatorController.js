const Title = require("../models/titleModel")

const asyncHandler = require("express-async-handler");

const updateModerator = asyncHandler(async(req,res) =>{
    const id = req.params.id
   const {moderator} = req.body
   const update = await Title.findOneAndUpdate({_id : id} ,
    {
        $addToSet:{
            moderator : moderator
        }
    })

    if(update){
        res.status(200).json({update})
    }else{
        res.status(400).json("Error in updating moderators")
    }
})

const updatePanelist = asyncHandler(async(req,res) =>{
    const id = req.params.id
   const {panelist} = req.body
   const update = await Title.findOneAndUpdate({_id : id} ,
    {
        $addToSet:{
            panelist : panelist
        }
    })

    if(update){
        res.status(200).json({update})
    }else{
        res.status(400).json("Error in updating panelist")
    }
})

const updateJudges = asyncHandler(async(req,res) => {
    const id = req.params.id
    const {judges} = req.body
    const update = await Title.findOneAndUpdate({_id : id} ,
        {
            $addToSet:{
                judges : judges
            }
        })
    
        if(update){
            res.status(200).json({update})
        }else{
            res.status(400).json("Error in updating judges")
        }
})

const updatePaper = asyncHandler(async(req,res) => {
    const id = req.params.id
    const {paper , author} = req.body
    const update = await Title.findOneAndUpdate({_id : id} ,
        {
           
                papers : {
                    $addToSet:{ paperTitle : paper ,
                author : author}
                }
            
        })
    
        if(update){
            res.status(200).json({update})
        }else{
            res.status(400).json("Error in updating judges")
        }
})

module.exports = {
    updateJudges,
    updateModerator,
    updatePanelist,
    updatePaper
}