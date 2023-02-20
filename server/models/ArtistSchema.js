const { default: mongoose } = require("mongoose");
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
    type: [Object],
  },
});

const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;
