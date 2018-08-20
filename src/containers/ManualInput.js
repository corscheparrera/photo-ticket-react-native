import React, { Component } from "react";
import SearchableDropdown from "react-native-searchable-dropdown";
import infractionsArray from "../utils/infractionsList";
var items = [
  {
    id: 1,
    name: "Javascript"
  },
  {
    id: 2,
    name: "Java"
  },
  {
    id: 3,
    name: "Ruby"
  },
  {
    id: 4,
    name: "React Native"
  },
  {
    id: 5,
    name: "PHP"
  },
  {
    id: 6,
    name: "Python"
  },
  {
    id: 7,
    name: "Go"
  },
  {
    id: 8,
    name: "Swift"
  }
];
export default class ManualInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infractions: infractionsArray
    };

    this.createObject(infractionsArray);
  }
  createObject = infractionsArray => {
    empty = [
      { id: 0, name: "Art: 6 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 27 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 30 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 34 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 35 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 37 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 54 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 65 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 95 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 97 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 98 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 99 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 100 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 105 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 106 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 168 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 170 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 171 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 211 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 212 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 213 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 215 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 232 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 233 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 237 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 238 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 239 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 247 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 256 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 258 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 265 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 270 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 299 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 310 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 311 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 312 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 327 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 328 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 330 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 335 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 341 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 342 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 345 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 346 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 349 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 350 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 359 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 360 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 361 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 364 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 366 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 368 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 370 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 371 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 372 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 381 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 382 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 388 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 391 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 395 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 396 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 401 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 406 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 410 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 411 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 418 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 422 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 424 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 433 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 434 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 435 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 440 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 442 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 444 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 445 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 448 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 450 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 451 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 452 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 460 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 471 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 478 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 484 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 487 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 488 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 498 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 523 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 531 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 534 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 636 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 31.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 32 al. 2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 39.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 93.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 161.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 202.2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 303.2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 326.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 406.1 al. 1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 406.1 al. 2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 406.1 al. 4 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 439.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 440.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 443.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 443.2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 484.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 492.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 498.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 519.2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 638.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 383 al. 1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 383 al. 2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 2 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 4 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 4.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 5 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 7.1 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 8 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 386 par. 9 Code de la sécurité routière, C-24.2" },
      { id: 0, name: "Art: 388.1 Code de la sécurité routière, C-24.2" },
      { id: 1, name: "Art: 12 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 14 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 15 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 22 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 26 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 29 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 32 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 37 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 38 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 42 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 43 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 49 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 51 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 55 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 58 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 60 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 30 par. 1 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 30 par. 3 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 30 par. 4 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 30 par. 8 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 30 par. 9 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 31 par. 1 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 31 par. 3 R.R.V.M. C-4.1" },
      { id: 1, name: "Art: 31 par. 4 R.R.V.M. C-4.1" },
      { id: 2, name: "Art: 61.7 R.M. 878 St-Laurent" },
      { id: 2, name: "Art: 61.9 R.M. 878 St-Laurent" },
      { id: 3, name: "Art: 4.1 R.M. 2398 Côte Saint-Luc" },
      { id: 4, name: "Art: 8.6 R.M. 1171 Outremont" },
      { id: 4, name: "Art: 8.20 R.M. 1171 Outremont" },
      { id: 4, name: "Art: 8.24.1 R.M. 1171 Outremont" },
      { id: 4, name: "Art: 8.24.16 R.M. 1171 Outremont" },
      { id: 4, name: "Art: 8.24.24 R.M. 1171 Outremont" },
      { id: 4, name: "Art: 8.26 R.M. 1171 Outremont" },
      { id: 5, name: "Art: 31 par. 20 R.M. 1530 Montréal-Nord" },
      { id: 5, name: "Art: 31 par. 23 R.M. 1530 Montréal-Nord" },
      { id: 6, name: "Art: 22 par. 2 R.M. 2227 Saint-Léonard" },
      { id: 6, name: "Art: 22 par. 4 R.M. 2227 Saint-Léonard" },
      { id: 6, name: "Art: 22 par. 9 R.M. 2227 Saint-Léonard" },
      { id: 7, name: "Art: 38 RCA06 210012 Verdun" },
      { id: 7, name: "Art: 29 al. 1 RCA06 210012 Verdun" },
      { id: 7, name: "Art: 33.1 RCA06 210012 Verdun" },
      { id: 7, name: "Art: 36 al. 1 RCA06 210012 Verdun" },
      { id: 8, name: "Art: 49 R.M. 726 Westmount" },
      { id: 8, name: "Art: 51 R.M. 726 Westmount" },
      { id: 8, name: "Art: 52.13 R.M. 726 Westmount" },
      { id: 8, name: "Art: 52.14 R.M. 726 Westmount" },
      { id: 8, name: "Art: 52.15 R.M. 726 Westmount" },
      { id: 8, name: "Art: 52.16 R.M. 726 Westmount" },
      { id: 9, name: "Art: 198 R.M. 2030 LaSalle" },
      { id: 9, name: "Art: 194.2 R.M. 2030 LaSalle" },
      { id: 9, name: "Art: 195 par. 7 R.M. 2030 LaSalle" },
      { id: 9, name: "Art: 195 par. 27 R.M. 2030 LaSalle" },
      { id: 9, name: "Art: 195 par. 28 R.M. 2030 LaSalle" },
      { id: 9, name: "Art: 195 par. 39 R.M. 2030 LaSalle" },
      { id: 9, name: "Art: 225-k R.M. 2030 LaSalle" },
      { id: 10, name: "Art: 6 par. 2 R.M. 1498 Westmount" },
      { id: 11, name: "Art: 25 al. 1 R.M. 1384 Plateau-Mont-Royal" },
      { id: 11, name: "Art: 28 par. 1 R.M. 1384 Plateau-Mont-Royal" },
      { id: 11, name: "Art: 33 al. 1 R.M. 1384 Plateau-Mont-Royal" },
      { id: 12, name: "Art: 60 RCG09-029" },
      { id: 12, name: "Art: 62 RCG09-029" },
      { id: 13, name: "Art: 10 R.M. 685 Westmount" },
      { id: 14, name: "Art: 132 RCG10-009" },
      { id: 15, name: "Art: 118 par. 17 R.M. 1333 Anjou" },
      { id: 15, name: "Art: 121 par. 4 R.M. 1333 Anjou" },
      { id: 16, name: "Art: 6 par. 2  R.R.V.M. B-3" }
    ];

    // infractionsArray.map((element, index) => {
    //   for (var key in element) {
    //     if (element.hasOwnProperty(key)) {
    //       empty.push({
    //         id: index,
    //         name: element[key].fr.art + " " + element[key].fr.source
    //       });
    //     }
    //   }
    // });
    // console.log(JSON.stringify(empty));
  };

  render() {
    return (
      <SearchableDropdown
        // onTextChange={text => alert(text)}
        onItemSelect={item => alert(JSON.stringify(item))}
        containerStyle={{
          padding: 40
        }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: "#ddd",
          borderColor: "#bbb",
          borderWidth: 1,
          borderRadius: 5
        }}
        itemTextStyle={{
          color: "#222"
        }}
        itemsContainerStyle={{
          maxHeight: 140
        }}
        items={items}
        defaultIndex={2}
        placeholder="Placeholder."
        resetValue={false}
        underlineColorAndroid="transparent"
      />
    );
  }
}

// import Autocomplete from "react-native-autocomplete-input"; // 3.3.1
// import React, { Component } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import infractionsArray from "../utils/infractionsList";
// const API = "https://swapi.co/api";
// const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII"];

// class AutocompleteExample extends Component {
//   static renderFilm(film) {
//     const { title, director, opening_crawl, episode_id } = film;
//     const roman = episode_id < ROMAN.length ? ROMAN[episode_id] : episode_id;

//     return (
//       <View>
//         <Text style={styles.titleText}>
//           {roman}. {title}
//         </Text>
//         <Text style={styles.directorText}>({director})</Text>
//         <Text style={styles.openingText}>{opening_crawl}</Text>
//       </View>
//     );
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       films: [],
//       query: "",
//       infractions: infractionsArray
//     };
//   }

//   componentDidMount() {
//     fetch(`${API}/films/`)
//       .then(res => res.json())
//       .then(json => {
//         const { results: films } = json;
//         this.setState({ films });
//       });
//   }

//   findFilm(query) {
//     if (query === "") {
//       return [];
//     }

//     const { films } = this.state;
//     const regex = new RegExp(`${query.trim()}`, "i");
//     return films.filter(film => film.title.search(regex) >= 0);
//   }

//   render() {
//     const { query } = this.state;
//     const films = this.findFilm(query);
//     const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

//     return (
//       <View style={styles.container}>
//         <Autocomplete
//           autoCapitalize="none"
//           autoCorrect={false}
//           containerStyle={styles.autocompleteContainer}
//           data={films.length === 1 && comp(query, films[0].title) ? [] : films}
//           defaultValue={query}
//           onChangeText={text => this.setState({ query: text })}
//           placeholder="Enter Star Wars film title"
//           renderItem={({ title, release_date }) => (
//             <TouchableOpacity onPress={() => this.setState({ query: title })}>
//               <Text style={styles.itemText}>
//                 {title} ({release_date.split("-")[0]})
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//         <View style={styles.descriptionContainer}>
//           {films.length > 0 ? (
//             AutocompleteExample.renderFilm(films[0])
//           ) : (
//             <Text style={styles.infoText}>
//               Enter Title of a Star Wars movie
//             </Text>
//           )}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#F5FCFF",
//     flex: 1,
//     paddingTop: 25
//   },
//   autocompleteContainer: {
//     marginLeft: 10,
//     marginRight: 10
//   },
//   itemText: {
//     fontSize: 15,
//     margin: 2
//   },
//   descriptionContainer: {
//     // `backgroundColor` needs to be set otherwise the
//     // autocomplete input will disappear on text input.
//     backgroundColor: "#F5FCFF",
//     marginTop: 8
//   },
//   infoText: {
//     textAlign: "center"
//   },
//   titleText: {
//     fontSize: 18,
//     fontWeight: "500",
//     marginBottom: 10,
//     marginTop: 10,
//     textAlign: "center"
//   },
//   directorText: {
//     color: "grey",
//     fontSize: 12,
//     marginBottom: 10,
//     textAlign: "center"
//   },
//   openingText: {
//     textAlign: "center"
//   }
// });

// export default AutocompleteExample;
