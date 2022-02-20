/**
 * File: user.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-19
 */

let mongoose = require("mongoose");
let crypto = require("crypto");

// Create a model class
let UserSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    },
    username: {
      type: String,
      unique: true,
      required: "Username is required",
      trim: true,
    },
    password: {
      type: String,
      validate: [
        (password) => {
          return password && password.length > 6;
        },
        "Password should be longer",
      ],
    },
    salt: String,
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "user",
  }
);

UserSchema.virtual("fullName")
  .get(function () {
    return this.firstName + " " + this.lastName;
  })
  .set(function (fullName) {
    let splitName = fullName.split(" ");
    this.firstName = splitName[0] || "";
    this.lastName = splitName[1] || "";
  });

UserSchema.pre("save", function (next) {
  if (this.password) {
    this.salt = Buffer.from(
      crypto.randomBytes(16).toString("base64"),
      "base64"
    );
    this.password = this.hashPassword(this.password);
  }
  next();
});

UserSchema.post("save", function (next) {
  console.log('The user "' + this.username + '" details were saved.');
});

UserSchema.methods.hashPassword = function (password) {
  return crypto
    .pbkdf2Sync(password, this.salt, 10000, 64, "sha512")
    .toString("base64");
};

UserSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password);
};

module.exports = mongoose.model("user", UserSchema);
