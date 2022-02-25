const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

function mongoConnect(callback){
    MongoClient.connect(
        "mongodb+srv://aesthetic:productions@ap.m6pjd.mongodb.net/aesthetic-productions?retryWrites=true&w=majority"
      )
        .then((res) => {
          console.log('Connected to DB');
          db = res.db();
          callback();
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
}

function getDb() {
  if(db){
    return db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
