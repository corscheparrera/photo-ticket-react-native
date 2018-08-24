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

let watchList = [["Art: 55", , "Art: 65"], ["Sect: 55", "Sect: 65"]];

// Google Vision API response formattated in an array of strings, string is a line on the ticket.
function formatGoogleVisionResponse(res) {
  let formatted = res["data"]["responses"]["0"]["fullTextAnnotation"][
    "text"
  ].split("\n");
  console.log("formatted", formatted);
  return formatted;
}

function populateArray(array, article, score) {
  array.push({
    score: score,
    art: article
  });
}

// build an array containing object composed of each article and its similarity score with the user's input
function buildArrayOfScores(arr1, arr2) {
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
}

// reduce the array of scores to identify the lowest score AKA the article with the highest similarity of the user's input
function getMinScore(arr) {
  let minScore = arr.reduce((min, b) => Math.min(min, b.score), arr[0].score);
  console.log("min score is ", minScore);
  return minScore;
}

// find the article that has the score (the lowest) identified using getMinScore()
function getArtWithMinScore(arr, minScore) {
  let obj = arr.find(obj => {
    return obj.score === minScore;
  });
  console.log("getArtWithMinScore", obj.art);
  return obj.art;
}

function scoreIsSatisfying(score) {
  return score < 1 ? true : false;
}

function ticketIsFrench(input) {
  console.log("input", input);
  return input.includes("Art:") ? true : false;
}

function articlesAreMatching(input, article) {
  if (ticketIsFrench(input)) {
    console.log("ticket is in french");
    return input === article.fr.art ? true : false;
  } else {
    console.log("ticket is in english");
    return input === article.en.art ? true : false;
  }
}

function getInfractionInfos(arr, input, lang) {
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
}
// function isOnWatchList(input, arr) {
//   return list.includes(input) ? true : false;
//   if (arr.includes(input)) {
//     if ((input = arr[0])) {
//       problematicArticle = arr[1];
//     } else {
//       problematicArticle = arr[0];
//     }
//   }
// }

function finProblematicArticle(input, list) {
  let problematicArticle;
  //checkre si l'input fait parti de la list a surveiller
  list.forEach(arr => {
    if (i.includes(input)) {
      if (input === arr[0]) {
        problematicArticle = arr[1];
      } else {
        problematicArticle = arr[0];
      }
    }
  });
  return problematicArticle;

  // si oui, renvoyer au USER deux possiblités
  // il aura a cliquer sur une des deux pour consulter la bonne
}

export const parseData = res => {
  const formattedResponse = formatGoogleVisionResponse(res);
  const arrayOfScores = buildArrayOfScores(
    arrayOfInfractionNumbers,
    formattedResponse
  );
  const minScore = getMinScore(arrayOfScores);
  const bestMatch = getArtWithMinScore(arrayOfScores, minScore);
  const infraction = getInfractionInfos(infractionsArray, bestMatch, lang); // { type: 'Circulation', Règlement: 'C-24.2', ...
  return scoreIsSatisfying(minScore)
    ? infraction
    : console.log("No article found, check resolution.");
};
