const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

User.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            res.send(err);
        }

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                res.send(err);
            }

            user.password = hash;
            next();
        })
    })
})

User.methods.generateAuthToken = (user) => {
    const token = jwt.sign({ id: user.id }, "secretKey", { expiresIn: "1h" });
    return token;
}

module.exports = mongoose.model('User', User)