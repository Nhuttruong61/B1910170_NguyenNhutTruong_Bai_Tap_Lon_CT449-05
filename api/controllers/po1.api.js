const Po1 = require("../models/po1");
const fs = require("fs");



module.exports = class API {

    //fetch all po1s
    static async fetchAllPo1(req, res){
        try{
            const po1s = await Po1.find();
            res.status(200).json(po1s);
        }catch(err){
            res.status(404).json({ message: err.message});
        }
    }

    //fetch po1 by ID
    static async fetchPo1ByID(req, res){
        const id = req.params.id;
        try{
            const po1 = await Po1.findById(id);
            res.status(200).json(po1);
        }catch(err){
            res.status(404).json({message: `the id:${id} does not exist`});
        }
    }

    //create po1
    static async createPo1(req, res){
        const po1 = req.body;
        const videoname = req.file.filename;
        po1.video = videoname;
        try{
            await Po1.create(po1);
            res.status(201).json({ message: 'Po1 create successfully !!!'})
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }

    //update po1
    static async updatePo1(req, res){
        const id = req.params.id;
        let new_video = "";
        if(req.file){
            new_video = req.file.filename;
            try{
                fs.unlinkSync("./uploads/" + req.body.old_video);
            }catch(err){
                console.log(err);
            }
        }else {
            new_video = req.body.old_video;
        }
        const newPo1= req.body;
        newPo1.video = new_video;

        try{
            await Po1.findByIdAndUpdate(id, newPo1);
            res.status(200).json({ message: "Po1 update successfully !!!"})
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }

    //delete po1
    static async deletePo1(req, res){
        const id = req.params.id;
        try{
            const result = await Po1.findByIdAndDelete(id);
            if(result.video != ''){
                try{
                    fs.unlinkSync("./uploads/" + result.video);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message: "Po1 deleted successfully !"});
        }catch(err){
            res.status(404).json({ message: err.message});
        }
    }


    

}