const nodemailer = require("nodemailer");

const sendMail = (to, subject, text) => {
  let mailTranspotar = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "raajaanaa1263@gmail.com",
      pass: "ipnnlyyjwegvvqrb",
    },
  });

  let details = {
    from: "raajaanaa1263@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };
  mailTranspotar.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mail has been sent");
    }
  });
};

module.exports = sendMail;
