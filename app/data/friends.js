var friends = [{
    name: "Captain Sandy Yawn",
    photo: "http://www.bravotv.com/sites/nbcubravotv/files/field_blog_image/2017/04/dish-042717-captain-sandy.jpg",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Hannah Ferrier",
    photo: "https://2paragraphs.com/wp-content/uploads/2018/05/Hannah-Below-Deck-Med-Bravo-620x375.jpg",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    name: "Malia White",
    photo: "http://integratedhealthoflewiston.com/sites/nbcubravotv/files/styles/cast-head-shot-square--computer-1_5x/public/field_person_cover_photo/2017/03/blog-headshots-_malia.jpg?itok=H9ce6O2K&timestamp=1489439344",
    scores: [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    name: "Wesley Walton",
    photo: "http://www.bravotv.com/sites/nbcubravotv/files/styles/cast-detail--mobile-1_5x/public/field_person_full_photo/2017/03/cast-images-_wes.jpg?itok=-q-jSFYW&timestamp=1489439242",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name: "Adam Glick",
    photo: "https://static.wixstatic.com/media/962f35_850a7ae8954a4b7b91164505025d628e~mv2.jpg/v1/fill/w_447,h_838,al_c,q_85,usm_0.66_1.00_0.01/962f35_850a7ae8954a4b7b91164505025d628e~mv2.webp",
    scores: [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    name: "Jamie Jason",
    photo: "https://www.monstersandcritics.com/wp-content/uploads/2018/05/jamie-jason-below-deck-med.jpg",
    scores: [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  },
  {
    name: "Ben Robinson",
    photo: "https://heavyeditorial.files.wordpress.com/2015/10/chef-ben-robinson.jpg?quality=65&strip=all&w=768",
    scores: [
      "3",
      "4",
      "1",
      "3",
      "2",
      "2",
      "3",
      "3",
      "4",
      "5"
    ]
  },
  {
    name: "Joao Franco",
    photo: "http://cdn2-www.realitytea.com/assets/uploads/gallery/below-deck-med-cast-bios-and-pics-2018/nup_179948_0948.jpg",
    scores: [
      "5",
      "4",
      "4",
      "2",
      "2",
      "1",
      "3",
      "3",
      "2",
      "5"
    ]
  },
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;


// * Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

// * Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.