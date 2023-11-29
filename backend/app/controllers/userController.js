const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  login: (req, res) => {
    /* console.log(req.body); */
    User.findOne({ username: req.body.username })
      .then((user) => {
        /*  res.json(user) */
        /* res.redirect('/'); */

        if (!user) {
          res.json({
            error: true,
            message: "That user not exist",
            user: req.body,
          });
          return;
        }

        if (bcrypt.compare(req.body.password, user.password)) {

          const token = user.generateAuthToken(user);
          res.cookie("AuthToken", token);
          /* res.redirect("/"); */
          return res.json({
            ...user,
            jwt_token: token
          })
        } else {
          res.json({
            error: true,
            message: "Login data do not match",
            user: { username: req.body.username, password: req.body.password },
          })
          return
        }

      })
      .catch((err) => {
        res.send(err);
      });
  }
}