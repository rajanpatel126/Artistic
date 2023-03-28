const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const Product = require("../models/ProductSchema");
const { isValidObjectId } = require("mongoose");
const nodemailer = require("nodemailer");
const sendMail = require("../nodemailer");
require("dotenv").config;
const Jimp = require("jimp");
const moment = require("moment");
//Route:1 creating user
router.post("/createUser", async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    let user = await User.findOne({ phone: req.body.phone });
    if (user) {
      return res.status(400).json({
        success,
        errors: "User with this number already exists",
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
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      phone: req.body.phone,
      password: secPass,
      isAdmin: req.body.isAdmin,
      emailAddress: req.body.emailAddress,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    success = true;
    res.json({ success, data });
  } catch (error) {
    console.error(error.message);
    res.status(600).send("Intenal Server Error\n" + error.message);
  }
});

//Route2: Signin for user
router.post("/signinUser", async (req, res) => {
  let success = false;
  // If there are error then return the bad request and error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { emailAddress, password } = req.body;
  try {
    let user = await User.findOne({ emailAddress });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ errors: "Please try to login with correct credentials" });
    }

    // console.log(user);
    if (password === "") {
      return res.status(400).json({
        success,
        errors: "Password can not be blank",
      });
    }

    const passwordCompare = bcrypt.compare(password, user.password);

    console.log(user);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({
        success,
        errors: "Please try to login with correct credentials",
      });
    }

    success = true;
    res.json({ success, user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route3: get loginId user detail using: "/api/auth/getUser"
router.get("/getUsers", async (req, res) => {
  try {
    const data = await User.find({});
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error");
  }
});

//Route4: delete a member using : "/api/auth/deleteUser"
router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const prmId = req.params.id;
    console.log(prmId);
    if (!isValidObjectId(prmId))
      return res.status(401).json({ error: "Invalid Request" });

    let user = await User.findById(prmId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    deleting = await User.findByIdAndDelete(prmId);
    res.json({ success: "User has been deleted", user: user });
  } catch (error) {
    console.error(error.message);
    return res.status(404).send("Member not found");
  }
});

//Route5: finding user using : "/api/auth/findUser"
router.get("/findUser/:id", async (req, res) => {
  try {
    const prmId = req.params.id;
    if (!isValidObjectId(prmId)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    let data = await User.findById(prmId);
    if (!data) {
      return res.status(404).send("Member not found");
    }
    return res.json({ data: data });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error");
  }
});

//Route6: updating user using: "/api/auth/updateUser"
router.put("/updateUser/:id", async (req, res) => {
  try {
    const { name, emailAddress, phone } = req.body;
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }

    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Member not found");
    }
    user.name = name;
    user.emailAddress = emailAddress;
    user.phone = phone;

    await user.save();
    return res.json({ user: user });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal server Error\n" + error.message);
  }
});

//email-send using nodemailer
router.post("/emailSend/:id", async (req, res) => {
  try {
    const { emailAddress } = req.body;
    let data = await User.findOne({ emailAddress });
    console.log(data);
    const resposeType = {};
    if (!isValidObjectId(req.params.id)) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    if (!data) {
      return res.status(400).send("Email id not found");
    }
    let otpcode = Math.floor(Math.random * 10000 + 1);
    const otpData = new Otp({
      email: emailAddress,
      code: otpcode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    let otpResponse = await otpData.save();

    return res.json();
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error\n" + error.message);
  }
});

//reset password
router.post("/resetPassword", async (req, res) => {
  try {
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hash(password, salt);
    const userData = User.findByIdAndUpdate(
      { _id: tokenData._id },
      { $set: { password: secPass } },
      { new: true }
    );
    return res.status(200).send("Password has been reset", userData);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error\n" + error.message);
  }
});

//Forgot Password
router.post("/forgetPassword", async (req, res) => {
  try {
    const { emailAddress, subject, text } = req.body;
    let data = await User.findOne({ emailAddress: emailAddress });
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
    const adminData = User.findOneAndUpdate(
      { emailAddress: email },
      { $set: { password: secPass } },
      { new: true }
    );
    return res.status(200).send("Password has been reset", adminData);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error\n" + error.message);
  }
});

//getting the image from database
router.get("/getImage/:id", async (req, res) => {
  try {
    const newImage = await Product.findById(req.params.id);
    if (!newImage) {
      return res.status(404).send("Image not found");
    }
    return res.json(newImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal server error");
  }
});

router.post("/combineImage", async (req, res) => {
  try {
    const { img1, img2 } = req.body;

    if (!img1 || !img2) {
      return res.json({ error: "img can not null" });
    }

    const base64Image1 = img1;
    const base64Image2 = img2;
    let resultImg = "";

    // Load the two images using Jimp
    Promise.all([
      Jimp.read(Buffer.from(base64Image1.split(",")[1], "base64")),
      Jimp.read(Buffer.from(base64Image2.split(",")[1], "base64")),
    ])
      .then((images) => {
        // Combine the two images into a single image
        images[0].composite(images[1], 13, 45);

        // Convert the combined image to base64
        images[0].getBase64Async(Jimp.MIME_PNG).then((base64CombinedImage) => {
          // The combined image as a base64 string
          resultImg = base64CombinedImage;
          // console.log(base64CombinedImage);
        });
      })
      .catch((error) => {
        console.error(error);
      });
    setTimeout(() => {
      return res.json({ combineImg: resultImg });
    }, 5000);
  } catch (error) {
    console.log(error);
  }
});

router.post("/orders", async (req, res) => {
  try {
    const { userEmail } = req.query;
    const user = await User.findOne({ emailAddress: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { fname, lname, email, address, city, products, total } = req.body;

    user.order.push({
      fname: fname[0],
      lname: lname[0],
      email: email[0],
      address: address[0],
      city: city[0],
      products: products,
      total: total[0],
    });
    await user.save();

    const emailText = `Dear ${fname} ${lname},

    Thank you for your recent order with Artistic. Your order has been successfully processed and is on its way!
    
    Order details:
    
    Order Date: ${moment(Date.now()).format("DD-MM-YYYY")}

    
    Shipping Address:
    ${fname} ${lname}
    ${address}
    
    If you have any questions or concerns about your order, please contact our customer support team at help@artisitc@gmail.com or reply to this email.
    
    Thank you for choosing Artisitc!
    
    Best regards,
    Artisitc team`;

    sendMail(email, "Order Confirmation", emailText);

    res
      .status(201)
      .json({ success: true, message: "Order added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
