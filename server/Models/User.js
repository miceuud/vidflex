const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    // required: ["password is required", true],
    select: false,
  },
  repeat_password: {
    type: String,
    // required: ["password is required", true],
    select: false,
  },
});

// match password
UserSchema.methods.matchPassword = function (pwd) {
  return bcrypt.compareSync(pwd, this.password);
};

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};     
// password hash
UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

module.exports = mongoose.model("UserModel", UserSchema);
