const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

// create new task

router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ The_error: error.message });
  }
});

// get all tasks 
router.get("/",async(req,res)=>{

    try {
        const tasks = await Task.find()

        res.status(200).json({tasks})
        
    } catch (error) {

        res.status(500).json({ The_error: error.message });
        
    }
})

// get single task 

router.get("/:id",async(req,res)=>{

    try {

        const task = await Task.findById(req.params.id)

        if(!task) return res.status(404).json({error:"task not found "})
            res.status(200).json(task)
        
    } catch (error) {
        res.status(500).json({ The_error: error.message });

    }
 
})

router.put("/:id",async (req,res)=>{

    try {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})

        if(!task) return res.status(404).json({error:"Task not found"})
            res.status(200).json(task)

        
    } catch (error) {
        res.status(500).json({ The_error: error.message });

    }
})


router.delete("/:id",async (req,res)=>{

    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task) return res.status(404).json({error:"Task not found"})
            res.status(200).json({message:"the task has been deleted"})

        
    } catch (error) {
        res.status(500).json({ The_error: error.message });

    }
})

module.exports=router ; 

