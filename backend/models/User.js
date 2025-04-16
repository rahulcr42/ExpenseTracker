<<<<<<< HEAD
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImageUrl: { type: String, default: null },
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
=======
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: {type: String, required: true, unique: true, },
    password: { type: String, required: true, },
    profileImageUrl: { type: String,default: null,},
  },
  { timestamps: true,}
);

//  Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

<<<<<<< HEAD
// Compare passwords
=======
//  Compare passwords for login
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

<<<<<<< HEAD
module.exports = mongoose.model('User', UserSchema);
=======
module.exports = mongoose.model("User", UserSchema);
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
