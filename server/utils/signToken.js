// sign token and create cookie
const signToken = (user, res, message) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json({ status: "success", message, token });
};

module.exports = signToken
