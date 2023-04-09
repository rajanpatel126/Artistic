const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const { isValidObjectId } = require("mongoose");
const nodemailer = require("nodemailer");
const sendMail = require("../nodemailer");
const Artist = require("../models/ArtistSchema");

//Route1: creating Artist
router.post("/createArtist", async (req, res) => {
  try {
    const { phone, password, name, emailAddress } = req.body;
    let success = false;
    let artist = await Artist.find({
      $or: [{ emailAddress: { $eq: emailAddress } }, { phone: { $eq: phone } }],
    });
    if (artist[0]) {
      console.log(artist[0]);
      return res.status(400).json({
        success,
        errors: "Artist with this email or Phone already exists",
      });
    }
    if (req.body.password === "") {
      return res.status(400).json({
        success,
        errors: "Password can not be blank",
      });
    }
    if (req.body.emailAddress === "") {
      return res.status(400).json({
        success,
        errors: "Email address can not be blank",
      });
    }
    if (req.body.name === "") {
      return res.status(400).json({
        success,
        errors: "Name can not be blank",
      });
    }
    if (req.body.phone === "") {
      return res.status(400).json({
        success,
        errors: "Phone number can not be blank",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hash(password, salt);

    const newArtist = new Artist({
      phone,
      password: secPass,
      name,
      emailAddress,
    });
    await newArtist.save();
    res.json({
      success: true,
      artist: {
        id: newArtist._id,
        phone,
        name,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(600).send("Intenal Server Error\n" + error.message);
  }
});

//Route2: checking for signin of Artist using "/api/artist/signinArtist"
router.post("/signinArtist", async (req, res) => {
  let success = false;
  // If there are error then return the bad request and error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { emailAddress, password } = req.body;
  try {
    let artist = await Artist.findOne({ emailAddress });
    if (!artist) {
      success = false;
      return res
        .status(400)
        .json({ errors: "Please try to login with correct credentials" });
    }
    if (req.body.password === "") {
      return res.status(400).json({
        success,
        errors: "Password can not be blank",
      });
    }

    const passwordCompare = bcrypt.compare(password, artist.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({
        success,
        errors: "Please try to login with correct credentials",
      });
    }
    const data = {
      artist: {
        id: artist._id,
      },
    };
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route3: delete artist detail from database using "/api/artist/deleteArtist"
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

//Route4: finding artist using "/api/artist/findArtist"
router.get("/findArtist/:id", async (req, res) => {
  try {
    const prmId = req.params.id;
    if (!isValidObjectId(prmId)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let data = await Artist.findById(prmId);
    if (!data) {
      return res.status(404).send("Member not found");
    }
    res.json({ data: data });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route5: updating artist using: "/api/artist/updateArtist"
router.put("/updateArtist/:id", async (req, res) => {
  try {
    const { name, emailAddress, phone } = req.body;
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }

    let artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).send("Member not found");
    }
    artist.name = name;
    artist.emailAddress = emailAddress;
    artist.phone = phone;

    await artist.save();
    res.json({ artist: artist });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});

//Route6: fetching the image uploded by artist using "api/artist/fetchingImage"
router.put("/addDesignDetails/:id", async (req, res) => {
  try {
    const { name, description, patternImg, price } = req.body;
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }

    let artist = await Artist.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          Pattern: {
            name: name[0],
            description: description[0],
            patternImg: patternImg,
            price: price[0],
          },
        },
      }
    );
    res.json({ artist: artist });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error\n" + error.message);
  }
});

router.get("/getArtDesigns/:id", async (req, res) => {
  let artist = await Artist.findById(req.params.id);

  return res.json(artist.Pattern);
});

router.get("/getAllArtDesigns", async (req, res) => {
  let artists = await Artist.find({}).exec(); // Wait for the query to complete and get the documents
  let patterns = artists.flatMap(artist => artist.Pattern); // Combine the "Pattern" arrays from all documents into a single array
  return res.json(patterns);
});

//deleting specific art
router.put("/deleteArt/:id/:pId", async (req, res) => {
  try {
    const { id, pId } = req.params;
    if (!validationResult(id))
      return res.status(401).json({ error: "Invalid Request" });

    await Artist.findOneAndUpdate(
      { _id: id, "Pattern._id": pId },
      {
        $pull: { Pattern: { _id: pId } },
      },
      { new: true }
    )
      .then((result) => {
        return res.json({ success: true, data: result });
      })
      .catch((err) => {
        return res.json({ success: false, err });
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

router.get("/getArtDesign/:id/:artId", async (req, res) => {
  let artist = await Artist.findById(req.params.id);

  artist.Pattern.map((item) => {
    if (item._id === req.params.artId) {
      return res.json(item);
    }
  });

  return res.json({ success: false, msg: "Can't find Pattern" });
});

router.get("/getArtofArtist/:id", async (req, res) => {
  let artist = await Artist.findById(req.params.id);
});

//Forgot Password
router.post("/forgetPassword", async (req, res) => {
  try {
    const { emailAddress, subject, text } = req.body;
    let data = await Artist.findOne({ emailAddress: emailAddress });
    console.log(data);
    if (!data) {
      return res.status(200).send("Email Id doesn't exist");
    }
    // const to = emailAddress;
    sendMail(emailAddress, subject, text);
    return res.status(200).send("Check your Mail\n");
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error\n" + error.message);
  }
});

//Reset Password for
router.put("/resetPassword", async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hash(password, salt);
    const artistData = Artist.findOneAndUpdate(
      { emailAddress: email },
      { $set: { password: secPass } },
      { new: true }
    );
    return res.status(200).send("Password has been reset", artistData);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error\n" + error.message);
  }
});

module.exports = router;
