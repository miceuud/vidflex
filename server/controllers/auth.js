const UserModel = require("../Models/User");
const signToken = require("../utils/signToken");

// @desc      Register a user
// @route     POST /auth/register
// @access    PUBLIC
exports.signup = async (req, res) => {
  const { email, password, repeat_password } = req.body;
  let user;
  try {
    user = await UserModel.findOne({ email });

    if (!user) {
      if (password === repeat_password) {
        user = await UserModel.create({ email, password });

        // get signed token and create cookie
        signToken(user, res, 'user has been created');
      } else {
        return res.status(400).json({
          status: "fail",
          message: `password doesn't match`,
        });
      }
    } else {
      return res.status(400).json({
        status: "fail",
        message: `existing user`,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// @desc      login user
// @route     POST /auth/login
// @access    PUBLIC
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
       return res.status(400).json({
        status: "fail",
        message: `invalid username or password`,
      });
    }
    let result = user.matchPassword(password);

    if (!result)
      return res.status(400).json({
        status: "fail",
        message: `invalid username or password`,
      });
    // login, sign token and create cookie
    signToken(user, res);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      status: "fail",
      message: error.message,
    });   
  }
};
