// Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.
var express = require('express')
var bodyParser = require('body-parser')


var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// function wow (req, res, next) {
//   console.log("wow");
//   next()
// }
// app.use(wow)


require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function(){
  console.log(`app up and running on port ${PORT}`);
})