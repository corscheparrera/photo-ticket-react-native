// import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'
import stringSimilarity from 'string-similarity'

export const useGoogleVision = base64image => {
  return axios.post(
    `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCAzY_-ph4ukwBkvEbEcmKmTDXMZUIjw5k`,
    {
      requests: [
        {
          image: {
            content: base64image,
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    }
  )
}

export const parseData = res => {
  const resultArray = res.data.responses['0'].fullTextAnnotation.text.split('\n')
  console.log(resultArray)

  // stringSimilarity: Finds degree of similarity between two strings, based on Dice's Coefficient, which is mostly better than Levenshtein distance.
  // Why use the function? In order too find the correct index of 'Description de l'infraction' string, if we use the ===, we would not always find the index because sometimes,
  // b/c of a bad focus on the photo, the string can be mispelled, thus, return an error undfined.

  const matches = stringSimilarity.findBestMatch("Description de l'infraction:", resultArray)
  const descriptionString = matches.bestMatch.target
  console.log(matches.bestMatch)
  // Index # of "Description de l'infraction"
  const indexDescription = resultArray.findIndex(x => x == descriptionString)

  // Index # of "Art." Title
  const indexArticle = resultArray.findIndex(x => x.includes('Art: '))

  // Description de l'infraction (titre)
  const descriptionTitre = resultArray[indexDescription].toString()

  // Description de l'infraction (paragraphe)
  const descriptionPar = resultArray.slice(indexDescription + 1, indexArticle).toString()

  // Article enfreint
  const articleEnfreint = resultArray[indexArticle]

  // Object contenant les informations contenu sur le ticket

  const dataObject = {
    descriptionTitre: descriptionTitre,
    descriptionPar: descriptionPar,
    articleEnfreint: articleEnfreint,
  }
  if (matches.bestMatch.rating < 0.7) {
    // if focus is bad
    return null
  } else {
    // if focus is good
    return dataObject
  }
}
