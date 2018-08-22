import stringSimilarity from "string-similarity";
var levenshtein = require("fast-levenshtein");
import polyglot from "./translator";
import { infractionsArray } from "../utils/infractionsList";
//  the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions)
// required to change one word into the other.
// Why use the function? In order too find the correct index of 'Description de l'infraction' string, if we use the ===, we would not always find the index because sometimes,
// b/c of a bad focus on the photo, the string can be mispelled, thus, return an error undfined.

let lang = polyglot.locale; // 'en' or 'fr'
const arrayOfInfractionNumbers = [
  "Art: 6",
  "Art: 27",
  "Art: 30",
  "Art: 34",
  "Art: 35",
  "Art: 37",
  "Art: 54",
  "Art: 65",
  "Art: 95",
  "Art: 97",
  "Art: 98",
  "Art: 99",
  "Art: 100",
  "Art: 105",
  "Art: 106",
  "Art: 168",
  "Art: 170",
  "Art: 171",
  "Art: 211",
  "Art: 212",
  "Art: 213",
  "Art: 215",
  "Art: 232",
  "Art: 233",
  "Art: 237",
  "Art: 238",
  "Art: 239",
  "Art: 247",
  "Art: 256",
  "Art: 258",
  "Art: 265",
  "Art: 270",
  "Art: 299",
  "Art: 310",
  "Art: 311",
  "Art: 312",
  "Art: 327",
  "Art: 328",
  "Art: 330",
  "Art: 335",
  "Art: 341",
  "Art: 342",
  "Art: 345",
  "Art: 346",
  "Art: 349",
  "Art: 350",
  "Art: 359",
  "Art: 360",
  "Art: 361",
  "Art: 364",
  "Art: 366",
  "Art: 368",
  "Art: 370",
  "Art: 371",
  "Art: 372",
  "Art: 381",
  "Art: 382",
  "Art: 388",
  "Art: 391",
  "Art: 395",
  "Art: 396",
  "Art: 401",
  "Art: 406",
  "Art: 410",
  "Art: 411",
  "Art: 418",
  "Art: 422",
  "Art: 424",
  "Art: 433",
  "Art: 434",
  "Art: 435",
  "Art: 440",
  "Art: 442",
  "Art: 444",
  "Art: 445",
  "Art: 448",
  "Art: 450",
  "Art: 451",
  "Art: 452",
  "Art: 460",
  "Art: 471",
  "Art: 478",
  "Art: 484",
  "Art: 487",
  "Art: 488",
  "Art: 498",
  "Art: 523",
  "Art: 531",
  "Art: 534",
  "Art: 636",
  "Art: 31.1",
  "Art: 32 al. 2",
  "Art: 39.1",
  "Art: 93.1",
  "Art: 161.1",
  "Art: 202.2",
  "Art: 303.2",
  "Art: 326.1",
  "Art: 406.1 al. 1",
  "Art: 406.1 al. 2",
  "Art: 406.1 al. 4",
  "Art: 439.1",
  "Art: 440.1",
  "Art: 443.1",
  "Art: 443.2",
  "Art: 484.1",
  "Art: 492.1",
  "Art: 498.1",
  "Art: 519.2",
  "Art: 638.1",
  "Art: 383 al. 1",
  "Art: 383 al. 2",
  "Art: 386 par. 1",
  "Art: 386 par. 2",
  "Art: 386 par. 4",
  "Art: 386 par. 4.1",
  "Art: 386 par. 5",
  "Art: 386 par. 7.1",
  "Art: 386 par. 8",
  "Art: 386 par. 9",
  "Art: 388.1",
  "Art: 12",
  "Art: 14",
  "Art: 15",
  "Art: 22",
  "Art: 26",
  "Art: 29",
  "Art: 32",
  "Art: 37",
  "Art: 38",
  "Art: 42",
  "Art: 43",
  "Art: 49",
  "Art: 51",
  "Art: 55",
  "Art: 58",
  "Art: 60",
  "Art: 30 par. 1",
  "Art: 30 par. 3",
  "Art: 30 par. 4",
  "Art: 30 par. 8",
  "Art: 30 par. 9",
  "Art: 31 par. 1",
  "Art: 31 par. 3",
  "Art: 31 par. 4",
  "Art: 61.7",
  "Art: 61.9",
  "Art: 4.1",
  "Art: 8.6",
  "Art: 8.20",
  "Art: 8.24.1",
  "Art: 8.24.16",
  "Art: 8.24.24",
  "Art: 8.26",
  "Art: 31 par. 20",
  "Art: 31 par. 23",
  "Art: 22 par. 2",
  "Art: 22 par. 4",
  "Art: 22 par. 9",
  "Art: 38",
  "Art: 29 al. 1",
  "Art: 33.1",
  "Art: 36 al. 1",
  "Art: 49",
  "Art: 51",
  "Art: 52.13",
  "Art: 52.14",
  "Art: 52.15",
  "Art: 52.16",
  "Art: 198",
  "Art: 194.2",
  "Art: 195 par. 7",
  "Art: 195 par. 27",
  "Art: 195 par. 28",
  "Art: 195 par. 39",
  "Art: 225-k",
  "Art: 6 par. 2",
  "Art: 25 al. 1",
  "Art: 28 par. 1",
  "Art: 33 al. 1",
  "Art: 60",
  "Art: 62",
  "Art: 10",
  "Art: 132",
  "Art: 118 par. 17",
  "Art: 121 par. 4",
  "Art: 6 par. 2 "
];

// Google Vision API response formattated in an array of strings, string is a line on the ticket.
function formatGoogleVisionResponse(res) {
  return res["data"]["responses"]["0"]["fullTextAnnotation"]["text"].split(
    "\n"
  );
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
  return score < 4 ? true : false;
}

function articlesAreMatching(lang, input, art) {
  return input === art[lang].art ? true : false;
}

function getInfractionInfos(input, arr, lang) {
  let matchArticle;
  arr.forEach(obj => {
    for (let key in obj) {
      let art = obj[key];
      if (articlesAreMatching(lang, input, art)) {
        matchArticle = art[lang];
        break;
      }
    }
  });
  return matchArticle;
}

export const parseData = res => {
  const formattedResponse = formatGoogleVisionResponse(res);
  const arrayOfScores = buildArrayOfScores(
    arrayOfInfractionNumbers,
    formattedResponse
  );
  const minScore = getMinScore(arrayOfScores);
  const bestMatch = getArtWithMinScore(arrayOfScores, minScore);
  const infraction = getInfractionInfos(bestMatch, infractionsArray, lang); // { type: 'Circulation', Règlement: 'C-24.2', ...
  return scoreIsSatisfying(minScore)
    ? infraction
    : console.log("No article found, check resolution.");
};
