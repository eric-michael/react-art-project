const getDb = require("../database").getDb;

class Art {
  constructor(
    imageUrl,
    title,
    medium,
    artist,
    description,
    movement,
    city,
    year
  ) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.medium = medium;
    this.artist = artist;
    this.description = description;
    this.movement = movement;
    this.city = city;
    this.year = year;
  }

  // Must be static to call on a non-instantiated member of class. I.e, not a created object
  static getAllArt() {
    const db = getDb();
    return db
      .collection("art")
      .find({})
      .toArray()
      .then((art) => {
        return art;
      });
  }

  static searchArt(query) {
    const db = getDb();
    console.log(query);
    return db.collection("art").find({
      $or: [
        { "title":  new RegExp('.*' + query + '.*', 'i') },
        { "artist": new RegExp('.*' + query + '.*', 'i') },
        { "movement": new RegExp('.*' + query + '.*', 'i') },
        { "city": new RegExp('.*' + query + '.*', 'i') },
      ],
    }).toArray().then((art) => {
      return art;
    });
  }

  addNewArt() {
    console.log("addNewArt");
    console.log(this);
    const db = getDb();
    return db
      .collection("art")
      .insertOne(this)
      .then((art) => {
        return art;
      });
  }
}

exports.Art = Art;
