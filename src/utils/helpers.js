// import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'
import stringSimilarity from 'string-similarity'
import React from 'react'
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native'

const Bold = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

const infractions = {
  fr: {
    328: {
      art: 'Article 328',
      type: 'Circulation',
      règlement: 'Code de la sécurité routière, C-24.2',
      résumé: 'Circuler à une vitesse supérieure à la limite',
      descriptif:
        'Sauf sur les chemins où une signalisation contraire apparaît et sans restreindre la portée de l’article 327, nul ne peut conduire un véhicule routier à une vitesse :1°  inférieure à 60 km/h et supérieure à 100 km/h sur les autoroutes, sauf: a)  si une signalisation comportant un message lumineux et variable vient indiquer, selon les circonstances et les temps de la journée, dont les conditions climatiques ou les périodes de pointe, la vitesse minimale ou maximale autorisée sur la partie de l’autoroute visée par cette signalisation; b)  si un permis spécial de circulation établit comme condition, pour l’utilisation d’un véhicule routier hors normes, de circuler à une vitesse inférieure; 2°  excédant 90 km/h sur les chemins à surface en béton de ciment, en béton bitumineux et autres surfaces du même genre; 3°  excédant 70 km/h sur les chemins en gravier; 4°  excédant 50 km/h dans une agglomération, sauf sur les autoroutes; 5°  excédant celle indiquée par une signalisation comportant un message lumineux ou non, variable ou non, qui précise, selon les circonstances et les temps de la journée, dont les périodes d’activité scolaire, la vitesse maximale autorisée sur la partie du chemin public visée par cette signalisation. Sur les chemins d’accès à une agglomération, le paragraphe 4° du premier alinéa s’applique dès que le conducteur atteint l’endroit où la signalisation indique la limite de vitesse de 50 km/h. Les paragraphes 2°, 3° et 4° du premier alinéa s’appliquent sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci. Le ministre, sur recommandation du ministre des Ressources naturelles et de la Faune, peut, par arrêté, modifier la limite de vitesse sur tout ou partie de ces chemins. ',
      conditions: (
        <Text>
          L’infraction est commise lorsque ces trois conditions sont remplies:
          {'\n\n'}
          <Bold>1- </Bold>Vous êtes conducteur d’un véhicule
          {'\n\n'}
          <Bold>2- </Bold>Vous circulez dans une zone où la vitesse est limitée
          {'\n\n'}
          <Bold>3- </Bold>Vous circulez à une vitesse supérieure à cette limite.
        </Text>
      ),
      point:
        'Cette infraction comporte des points d’inaptitude. Nous pouvons vous aider. Ce type de contravention comprend généralement un rapport policier. Il est recommandé d’en prendre connaissance avec toute chose.',
      image: '',
      analyse: '',
    },
    368: {
      art: 'Article 368',
      type: 'Circulation',
      règlement: 'Code de la sécurité routière, C-24.2',
      résumé: "Ne pas immobiliser  son véhicule face à un panneau d'arrêt.",
      descriptif:
        'Le conducteur d’un véhicule routier ou d’une bicyclette qui fait face à un panneau d’arrêt doit immobiliser son véhicule et se conformer à l’article 360. À un passage à niveau, il ne peut poursuivre sa route qu’après s’être assuré qu’il peut franchir ce passage sans danger. L’article 360 : À moins d’une signalisation contraire, face à un feu rouge clignotant, le conducteur d’un véhicule routier ou d’une bicyclette doit immobiliser son véhicule et céder le passage à tout véhicule qui, circulant sur une autre chaussée, s’engage dans l’intersection ou se trouve à une distance telle qu’il y a danger d’accident.',
      conditions: (
        <Text>
          L’infraction est commise lorsque ces trois conditions sont remplies:
          {'\n\n'}
          <Bold>1- </Bold>Vous êtes conducteur d’un véhicule routier<Bold> OU </Bold>Vous conduisez
          une bicyclette
          {'\n\n'}
          <Bold>2- </Bold>Vous faites face à un panneau d’arrêt
          {'\n\n'}
          <Bold>3- </Bold>Vous n’immobilisez pas votre véhicule<Bold> OU </Bold>Vous omettez de
          céder le passage à tout véhicule déjà engagé dans l’intersection, sans danger.
        </Text>
      ),

      point:
        '3 points d’inaptitude. Nous pouvons vous aider. Ce type de contravention comprend généralement un rapport policier. Il est recommandé d’en prendre connaissance avec toute chose.',
      image: '',
      analyse: '',
    },
  },
}

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
// stringSimilarity: Finds degree of similarity between two strings, based on Dice's Coefficient, which is mostly better than Levenshtein distance.
// Why use the function? In order too find the correct index of 'Description de l'infraction' string, if we use the ===, we would not always find the index because sometimes,
// b/c of a bad focus on the photo, the string can be mispelled, thus, return an error undfined.

export const parseData = res => {
  const resultArray = res.data.responses['0'].fullTextAnnotation.text.split('\n')
  console.log(resultArray)
  const matchArticle368 = stringSimilarity.findBestMatch('Art: ', resultArray)
  const articleString = matchArticle368.bestMatch.target
  const indexDescription = resultArray.findIndex(x => x == articleString) //21
  const article = resultArray[indexDescription] // 'Art: 368'
  const number = article.match(/\d+/g).toString() // 368
  const infraction = infractions.fr[number] // { type: 'Circulation', Règlement: 'C-24.2', ...

  if (matchArticle368.bestMatch.rating < 0.7) {
    // if focus is bad
    return null
  } else {
    // if focus is good
    return infraction
  }
}
