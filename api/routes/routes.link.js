const express = require("express");
const router = express.Router();
const LinkAPI = require("../controllers/link.api");

const Link = require("../models/links");




router.get("/", LinkAPI.fetchAllLink);
router.get("/:id", LinkAPI.fetchLinkByID);
router.post("/", LinkAPI.createLink);
router.patch("/:id", LinkAPI.updateLink);
router.delete("/:id", LinkAPI.deleteLink);

module.exports = router;