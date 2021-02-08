const MovieModel = require("../Models/Movies");

// @desc      Create a movies
// @route     POST /movies
// @access    PRIVATE
exports.createMovie = async (req, res) => {
  try {
    const movie = await MovieModel.create(req.body);
    if (movie)
      res.status(200).json({
        status: "succesful",
        message: ` Movie has been created`,
        data: movie
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
