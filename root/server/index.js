const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// dotenv is a library that adds the contents of your '.env' file to 'process.env'
const dotenv = require("dotenv");
dotenv.config();

// This is required to parse json request bodies
app.use(express.json());

const mongoConnect = require("./database");

const routes = require("./routes");

mongoConnect.mongoConnect(() => {
  // This displays message that the server running and listening to specified port
  app.listen(port, console.log(`Listening on port ${port}`));
});

// create a GET route
app.get("/api", routes.test);

app.get("/api/art", routes.getAllArt);

app.post("/api/addart", routes.addArt);

app.post("/api/searchart", routes.searchArt);

/*  https://expressjs.com/en/guide/routing.html
Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
 */

/* app.get('/art', (req, res) =>{
  res.send({
    art: {
      id: "0",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gustave_Moreau_-_La_chim%C3%A8re.jpg/800px-Gustave_Moreau_-_La_chim%C3%A8re.jpg",
      title: "The Chimera",
      width: "737",
      height: "887",
      medium: "",
      artist: ""
    }
  });
}) */

module.exports = app;
