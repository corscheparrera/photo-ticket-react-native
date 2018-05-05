import React from 'react'
import { View, StyleSheet, Text, ScrollView, Button, ActivityIndicator } from 'react-native'
import { material, iOSColors, systemWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'

import Header from '../components/Header'


const storage = firebase.storage()

export default class Cam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  uploadTicketToFireBase = async (uri, mime = 'image/jpg') => {
    this.setState({ isLoading: true });
    const sessionId = new Date().getTime()
    const imageRef = storage.ref('images').child(`${sessionId}`)
    await imageRef.put(uri, { contentType: mime })
    this.setState({ isLoading: false });
    // fs.readFile(uploadUri, 'base64')
    //   .then((data) => {
    //     return Blob.build(data, { type: `${mime};BASE64` })
    //   })
    //   .then((blob) => {
    //     uploadBlob = blob
    //     return imageRef.put(blob, { contentType: mime })
    //   })
    //   .then(() => {
    //     uploadBlob.close()
    //     return imageRef.getDownloadURL()
    //   })
    //   .then((url) => {
    //     resolve(url)
    //   })
    //   .catch((error) => {
    //     reject(error)
    //   })

  }
  renderLoadingView = () => {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <Text>Analyse en cours</Text>
          <ActivityIndicator size="large" />
        </View>
      )
    }
  }
  renderInfraction = () => {
    let { navigation, data } = this.props
    if (!this.state.isLoading) {
      return (
        <View >
          <Header title="Infraction" navigation={navigation} />
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.paragraph}>
                <Text style={styles.title}>{data.art}</Text>
                <Text style={styles.title}>{data.règlement}</Text>
              </View>

              <View style={styles.paragraph}>
                <Text style={styles.title}>Résumé:
              </Text>
                <Text style={styles.text}>{data.résumé}</Text>
              </View>
              <View style={styles.paragraph}>
                <Text style={styles.title}>Conditions:</Text>
                <View style={styles.text}>{data.conditions}</View>
                <View style={styles.saveOrDiscard}>
                  <Icon style={styles.icon} name="save" size={34} onPress={() => this.uploadTicketToFireBase(this.props.imagePath)} />
                  <Icon style={styles.icon} name="trash-o" size={34} onPress={() => { }} />
                </View>
                <Button
                  title="Consulter un avocat gratuitement"
                  onPress={() => navigation.navigate('ChatContainer')} />
              </View>
            </View>
          </ScrollView>
        </View>

      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderLoadingView()}
        {this.renderInfraction()}
      </View>

    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  paragraph: {
    paddingBottom: 25
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    // alignItems: 'center',
  },
  text: {
    // ...material.titleObject,
    color: iOSColors.black,
    // ...systemWeights.light,
    fontSize: 14
  },
  title: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.semibold,
    fontSize: 16
  },
  icon: {
    color: '#05E085'
  },
  saveOrDiscard: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
