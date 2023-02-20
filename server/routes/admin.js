const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const { isValidObjectId } = require("mongoose");
const Artist = require("../models/ArtistSchema");
const cloudinary = require("../cloud");

//deleting artist request
router.post("/deleteArtist/:public_id", async (req, res) => {
  try {
    const prmId = res.params.id;
    if (!isValidObjectId(prmId))
      return res.status(401).json({ error: "Invalid Request" });

    let artist = await Artist.findById(prmId);
    if (!artist) {
      return res.status(404).send("artist not found");
    }
    deleting = await Artist.findByIdAndDelete(prmId);
    res.json({ success: "artist has been deleted", artist: artist });
  } catch (error) {
    console.error(error.message);
    return res.status(404).send("Member not found");
  }
});

//
router.put("/verifyArtist/:id", async (req, res) => {
  try {
    const aritstId = req.params.id;
    if (!isValidObjectId(aritstId)) {
      return res.status(401).json({ error: "Invalid Request" });
    }

    let artist = await Artist.findById(aritstId);
    if (!artist) {
      return res.status(404).send("Artist not found");
    }
    artist.isVerify = true;

    await artist.save();
    res.json({ artist: artist });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});

//getting pending artist
router.get("/getPendingArtist", async (req, res) => {
  try {
    let artists = await Artist.find({ isVerify: false });
    res.json({ artists: artists });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});
