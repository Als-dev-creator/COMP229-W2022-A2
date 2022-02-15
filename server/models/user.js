/**
 * File: user.js
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 * Last updated: 2022-02-14
 */

let mongoose = require('mongoose');
let crypto = require('crypto');
let Schema = mongoose.Schema;
let Model = mongoose.Model;

let userModel = Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    password: {
        type: String,
        validate: [(password) => {
            return password && password.length > 6;
        }, 'Password must be longer']
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});
userModel.virtual('fullName')
    .get(function() {
        return this.firstName + '' + this.lastName;
    })
    .set(function(fullName) {
        let splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
    })

userModel.pre('save', function(next) {
    if (this.password) {
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
});

//Can be delete late on. 
//Look for string interpolation for JS. Later. 02-14
userModel.post('save', function(next) {
    console.log('The user' + this.username + 'details were saved.');

});
//pbkdf2Sync instead?
//check bcrypt JAVA
userModel.methods.hashPassword = function(password) {
    return crypto.pbkdf2(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

userModel.methods.autheticate = function(password) {
    return this.password === this.hashPassword(password);
}


module.exports.Model = Model('User', userModel);