import stringSimilarity from "string-similarity";
var levenshtein = require("fast-levenshtein");
import polyglot from "./translator";
import {
  arrayOfInfractionNumbers,
  infractionsArray
} from "../utils/infractionsList";
//  the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions)
// required to change one word into the other.
// Why use the function? In order too find the correct index of 'Description de l'infraction' string, if we use the ===, we would not always find the index because sometimes,
// b/c of a bad focus on the photo, the string can be mispelled, thus, return an error undfined.

let lang = polyglot.locale; // 'en' or 'fr'

// Google Vision API response formattated in an array of strings, string is a line on the ticket.
formatGoogleVisionResponse = res => {
  let formatted = res["data"]["responses"]["0"]["fullTextAnnotation"][
    "text"
  ].split("\n");
  console.log("formatted", formatted);
  return formatted;
};

populateArray = (array, article, score) => {
  array.push({
    score: score,
    art: article
  });
};

// build an array containing object composed of each article and its similarity score with the user's input
buildArrayOfScores = (arr1, arr2) => {
  let arrayOfScores = [];
  arr1.forEach(article => {
    arr2.forEach(input => {
      let score = levenshtein.get(input, article);
      if (score < 4) {
        populateArray(arrayOfScores, article, score);
      }
    });
  });
  console.log("arrayOfScores", arrayOfScores);
  return arrayOfScores;
};

// reduce the array of scores to identify the lowest score AKA the article with the highest similarity of the user's input
getMinScore = arr => {
  let minScore = arr.reduce((min, b) => Math.min(min, b.score), arr[0].score);
  console.log("min score is ", minScore);
  return minScore;
};

// find the article that has the score (the lowest) identified using getMinScore()
getArtWithMinScore = (arr, minScore) => {
  let obj = arr.find(obj => {
    return obj.score === minScore;
  });
  console.log("getArtWithMinScore", obj.art);
  return obj.art;
};

scoreIsSatisfying = score => {
  return score < 2 ? true : false;
};

ticketIsFrench = input => {
  console.log("input", input);
  return input.includes("Art:") ? true : false;
};

articlesAreMatching = (input, article) => {
  if (ticketIsFrench(input)) {
    console.log("ticket is in french");
    return input === article.fr.art ? true : false;
  } else {
    console.log("ticket is in english");
    return input === article.en.art ? true : false;
  }
};

getInfractionInfos = (arr, input, lang) => {
  let matchArticle;
  console.log("arr", arr);
  arr.forEach(obj => {
    console.log("obj", obj);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let article = obj[key];
        if (articlesAreMatching(input, article)) {
          matchArticle = article[lang];
          // return true;
        }
      }
    }
  });
  return matchArticle;
};

export const parseData = res => {
  const formattedResponse = formatGoogleVisionResponse(res);
  const arrayOfScores = buildArrayOfScores(
    arrayOfInfractionNumbers,
    formattedResponse
  );
  const minScore = getMinScore(arrayOfScores);
  const bestMatch = getArtWithMinScore(arrayOfScores, minScore);
  const infraction = getInfractionInfos(infractionsArray, bestMatch, lang); // { type: 'Circulation', Règlement: 'C-24.2', ...
  // check if if there's a similar article (visual similarity)
  console.log("infraction", infraction);

  return scoreIsSatisfying(minScore)
    ? infraction
    : console.log("No article found, check resolution.");
};
