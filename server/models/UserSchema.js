const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    order: {
      type: [
        mongoose.Schema({
          fname: String,
          lname: String,
          email: String,
          address: String,
          city: String,
          products: [Object],
          total: Number,
        }),
      ],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    resetLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
