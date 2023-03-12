const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const { isValidObjectId } = require("mongoose");
const Artist = require("../models/ArtistSchema");
const User = require("../models/UserSchema");
const cloudinary = require("../cloud");
const { default: Admin } = require("../../client/src/Admin");

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

//verify Artist
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

//Reset Password
router.post("/resetPassword", async (req, res) => {
  try {
    const password = req.body;
    const salt = bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hash(password, salt);
    const adminData = User.findByIdAndUpdate(
      { _id: tokenData._id },
      { $set: { password: secPass } },
      { new: true }
    );
    res.status(200).send("Password has been reset", adminData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error\n" + error.message);
  }
});

//Forfot Password
router.post("/forgetPassword", async (req, res) => {
  try {
    const { emailAddress, subject, text } = req.body;
    console.log(emailAddress);
    // let data = await User.findOne({ emailAddress: emailAddress });
    // if (!data) {
    //   res.status(200).send("Email Id doesn't exist");
    // }
    // const to = emailAddress;
    // sendMail(to, subject, text);
    res.status(200).send("Check your Mail\n");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error\n" + error.message);
  }
});

router.get("/addProductDetails", async (req, res) => {
  // let admin = await User.find();
});

module.exports = router;
