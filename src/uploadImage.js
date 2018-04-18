import RNFetchBlob from 'react-native-fetch-blob'

export default uploadImage => {
  let body = {
    requests: [
      {
        image: {
          content: uploadImage,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
          },
        ],
      },
    ],
  }
  return new Promise((resolve, reject) => {
    RNFetchBlob.fetch(
      'POST',
      `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCAzY_-ph4ukwBkvEbEcmKmTDXMZUIjw5k`,
      {
        'Content-Type': 'application/json',
      },
      JSON.stringify(body),
      RNFetchBlob.wrap(uploadImage)
    )
      .then(res => {
        console.log(res.text())
      })
      .catch(err => {
        // error handling ..
      })
  })
}
