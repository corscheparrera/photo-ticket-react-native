import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const uploadImage = uri => {
  return new Promise((resolve, reject) => {
    fs
      .readFile(uri, 'base64')
      .then(data => {
        console.log(data)
        let base64image = data
        useGoogleVision(base64image)
      })
      .catch(error => {
        console.error(error)
      })
  })
}

useGoogleVision = base64image => {
  axios
    .post(
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
    .then(data => {
      console.log(data)
      parseData(data)
    })
    .catch(error => {
      console.log(error)
    })
}
parseData = raw => {
  const resultArray = raw.data.responses['0'].fullTextAnnotation.text.split('\n')
  console.log(resultArray)

  // var isBanana = resultArray.some(pop => {
  //   return pop.description === 'banana' || pop.description === 'banana family'
  // })

  // if (isBanana) {
  //   return this.setState({ imageTitle: true })
  // } else {
  //   return this.setState({ imageTitle: false })
  // }
}
