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
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
    },
    phone: {
      type: Number,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    order: [String],
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