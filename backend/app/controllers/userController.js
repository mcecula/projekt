const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
    login: (req, res) => {
        User.findOne({username: req.body.username}) 
        .then((user)=>{
            res.json(user)
            res.redirect('/');

            /* if (!user) {
                res.render("../login", {
                  error: true,
                  message: "That user not exist",
                  user: req.body,
                });
                return;
              }
         
              bcrypt.compare(req.body.password, user.password, (err, logged) => {
                if (err) {
                  res.render("../login", {
                    error: true,
                    message: "Login error",
                    user: { username: req.body.username, password: "" },
                  });
                  return;
                }
         
                if (logged) {
                  const token = user.generateAuthToken(user);
                  res.cookie("AuthToken", token);
                  res.redirect("/");
                } else {
                  res.render("../login", {
                    error: true,
                    message: "Login data do not match",
                    user: { username: req.body.username, password: "" },
                  });
                  return;
                }
              }); */
              
            })
            .catch((err) => {
              res.send(err);
            });
        },}