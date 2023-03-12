const { default: mongoose } = require("mongoose");
const moment = require("moment");
const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  emailAddress: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  Pattern: {
    type: [
      mongoose.Schema({
        name: String,
        description: String,
        patternImg: String,
        price: { type: Number, default: 0 },
        date: {
          type: String,
          default: moment(Date.now()).format("DD-MM-YYYY"),
        },
      }),
    ],
  },
});

const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;
