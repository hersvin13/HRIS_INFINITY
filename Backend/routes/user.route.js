const router = require("express").Router();
const { where } = require("sequelize");

//User Model
const User = require("../db/models/user.model");

const session = require("express-session");

router.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

//Change Password
router.route("/updatePass").put(async (req, res) => {
  const newPass = req.body.newPassword;

  const userId =
    req.session.userId === undefined ? req.body.userId : req.session.userId;
  console.log("Session Id (updatePass): " + userId);

  if (userId !== undefined) {
    await User.update(
      {
        password: newPass,
      },
      {
        where: {
          // id: req.body.userId
          id: userId,
        },
      }
    )
      .then((result) => {
        console.log(Number(result));
        if (Number(result) === 1) {
          res.status(200).json({ succeed: true }); //if succeed
        } else {
          res.status(200).json({ succeed: false }); //if failed
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(401).json({ errorMessage: err });
      });
  } else {
    res
      .status(401)
      .json({
        message: "Undefined session ID/ Session Expired",
        succeed: false,
      });
  }
});

//READ:
router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;
  await User.findAll({
    attributes: ["username", "password"],
    where: {
      username: username,
      password: password,
    },
  })
    .then((user) => {
      console.log(user);
      if (user && user.length > 0) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error" });
    });
});

//authenticate user:
router.route("/auth").get(async (req, res) => {
  const { username, password } = req.body;
  await User.findOne({
    where: {
      username: username,
      password: password,
    },
  })
    .then((result) => {
      console.log(username);
      console.log(password);
      console.log(result);
      if (result) {
        req.session.userId = result.id;
        console.log("Session userId: " + req.session.userId);
        res.json({ auth: true, result: result }); //true if user exists
      } else {
        res.json({ auth: false }); //false if not found
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(404).json({ errorMessage: err });
    });
});

module.exports = router;
