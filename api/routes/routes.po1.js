const express = require("express");
const router = express.Router();
const API = require("../controllers/po1.api");
const multer = require('multer');

//multer middleware
let storage = multer.diskStorage({ 
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("video");

router.get("/", API.fetchAllPo1);
router.get("/:id", API.fetchPo1ByID);
router.post("/", upload, API.createPo1);
router.patch("/:id", upload, API.updatePo1);
router.delete("/:id", API.deletePo1);

module.exports = router;