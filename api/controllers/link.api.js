const Link = require("../models/links");

module.exports = class LinkAPI{
    // LINK

    //fetch all links
    static async fetchAllLink(req, res){
        try{
            const links = await Link.find();
            res.status(200).json(links);
        }catch(err){
            res.status(404).json({ message: err.message});
        }
    }

    //fetch link by ID
    static async fetchLinkByID(req, res){
        const id = req.params.id;
        try{
            const link = await Link.findById(id);
            res.status(200).json(link);
        }catch(err){
            res.status(404).json({message: `the id:${id} does not exist`});
        }
    }

    //create link
    static async createLink(req, res){
        const link = req.body;
        try{
            await Link.create(link);
            res.status(201).json({ message: 'Link create successfully !!!'})
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }

    //update Link
    static async updateLink(req, res){
        const id = req.params.id;
    
        const newLink= req.body;

        try{
            await Link.findByIdAndUpdate(id, newLink);
            res.status(200).json({ message: "Link update successfully !!!"})
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }

    //delete Link
    static async deleteLink(req, res){
        const id = req.params.id;
        try{
            const result = await Link.findByIdAndDelete(id);

            res.status(200).json({message: "Link deleted successfully !"});
        }catch(err){
            res.status(404).json({ message: err.message});
        }
    }
}