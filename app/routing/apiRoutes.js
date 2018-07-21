// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
var friends = require('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {

    res.json(friends)

  })

  app.post('/api/friends', function (req, res) {
    //req.body is your data obj
    console.log(req.body);
    console.log("yo");
    res.send(req.body)

    var data = req.body;
    var scores = data.scores;
    var difference;

    // loop through all of the friends
    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];
      difference = 0;
   
      console.log(friend.name);

    // loop through all friends scores
      for (var j = 0; j < friends.scores.length; j++) {
        var friendScore = friends.scores[j];
        var scores = friendScore[j]

        console.log(friendScore[j])
      }

    
    }
  })
}