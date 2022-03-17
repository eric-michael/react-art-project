const artModel = require("../models/art").Art;

exports.test = (req, res) => {
  res.send({ message: "Server is working" });
};

exports.getAllArt = (req, res) => {
  artModel.getAllArt().then((art) => {
    res.send({
      art,
    });
  });
};

exports.addArt = (req, res) => {
  const secret = req.body.secret;

  // If secret key was not posted with the form, don't complete the request.
  if (secret != process.env.POST_SECRET) {
    return res.send({ message: "Please post correct secret key." });
  }

  const imageUrl = req.body.url;
  const title = req.body.title;
  const medium = req.body.medium;
  const artist = req.body.artist;
  const description = req.body.description;
  const movement = req.body.movement;
  const city = req.body.city;
  const year = req.body.year;

  post_data = new artModel(
    imageUrl,
    title,
    medium,
    artist,
    description,
    movement,
    city,
    year
  );

  post_data.addNewArt().then((art) => {
    res.send({ message: "You have uploaded artwork!" });
  });
};

exports.searchArt = (req, res) => {
  const query = req.body.query;
  artModel.searchArt(query).then((art) => {
    res.send({
      art,
    });
  });
};
