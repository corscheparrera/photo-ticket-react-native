import { connectInfraction, infractions } from "./infractionsList";

import stringSimilarity from "string-similarity";
// stringSimilarity: Finds degree of similarity between two strings, based on Dice's Coefficient, which is mostly better than Levenshtein distance.
// Why use the function? In order too find the correct index of 'Description de l'infraction' string, if we use the ===, we would not always find the index because sometimes,
// b/c of a bad focus on the photo, the string can be mispelled, thus, return an error undfined.

export const parseData = res => {
  // Google Vision API response formattated in an array of strings, string is a line on the ticket.
  const resultArray = res.data.responses["0"].fullTextAnnotation.text.split(
    "\n"
  );

  // Find the string that contains the article number
  const matcheArticle = stringSimilarity.findBestMatch("Art: ", resultArray);
  console.log("matcheArticle", matcheArticle);
  // Isolate the best match
  const articleString = matcheArticle.bestMatch.target;
  console.log("articleString", articleString);
  // Find the index corresponding to the best match
  const indexDescription = resultArray.findIndex(x => x == articleString); //21

  // Retrieve the exact line in the ticket that states the infraction number
  const article = resultArray[indexDescription]; // 'Art: 368'
  console.log("article", article);
  // Isolate the infraction number only
  const number = article.match(/\d+/g).toString(); // 368

  // Retrieve all the infraction details from the infraction objects

  const infraction = connectInfraction(article); // { type: 'Circulation', Règlement: 'C-24.2', ...
  console.log(connectInfraction(article));

  // If there is no string with a similaroty score above 70 % with the string "Art: ", alert the user of the bad focus.
  // Otherwise, returns the infractions détails
  if (matcheArticle.bestMatch.rating < 0.58) {
    console.log(
      "matcheArticle.bestMatch.rating,",
      matcheArticle.bestMatch.rating
    );
    // if focus is bad
    return null;
  } else {
    // if focus is good
    return infraction;
    console.log("infraction", infraction);
  }
};
