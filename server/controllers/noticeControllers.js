const Notice = require("../models/Notice");
require("dotenv").config();

module.exports.getNotice =async (req, res) =>{
    try {
        const notice = await Notice.find({});
        res.status(200).send({notices:notice});

    }catch(err){
        res.status(500).send({err:err});
    }
}

module.exports.postNotice = async (req, res) =>{
    try{
        
        const notice = req.body.notice;
        const notices = new Notice({notice: notice});
        await notices.save();
        console.log(notices);
        res.status(200).send("Notice Saved SuccessFully");
    }catch(err){
        res.status(400).send(err);
    }
}
module.exports.deleteNotice = async (req, res) =>{
    try{
        const id = req.params.id;
        console.log(req.body);
        const notice = await Notice.findOne({_id:id});
        await notice.remove();

        res.status(200).send("Notice Deleted Successfully");
        
    }catch(err){
        res.status(400).send(err);
    }
}