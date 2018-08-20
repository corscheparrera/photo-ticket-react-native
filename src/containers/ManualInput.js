import React, { Component } from "react";
import SearchableDropdown from "react-native-searchable-dropdown";

const items = [
  { id: 0, name: "Art: 6 Code de la sécurité routière, C-24.2" },
  { id: 1, name: "Art: 27 Code de la sécurité routière, C-24.2" },
  { id: 2, name: "Art: 30 Code de la sécurité routière, C-24.2" },
  { id: 3, name: "Art: 34 Code de la sécurité routière, C-24.2" },
  { id: 4, name: "Art: 35 Code de la sécurité routière, C-24.2" },
  { id: 5, name: "Art: 37 Code de la sécurité routière, C-24.2" },
  { id: 6, name: "Art: 54 Code de la sécurité routière, C-24.2" },
  { id: 7, name: "Art: 65 Code de la sécurité routière, C-24.2" },
  { id: 8, name: "Art: 95 Code de la sécurité routière, C-24.2" },
  { id: 9, name: "Art: 97 Code de la sécurité routière, C-24.2" },
  { id: 10, name: "Art: 98 Code de la sécurité routière, C-24.2" },
  { id: 11, name: "Art: 99 Code de la sécurité routière, C-24.2" },
  { id: 12, name: "Art: 100 Code de la sécurité routière, C-24.2" },
  { id: 13, name: "Art: 105 Code de la sécurité routière, C-24.2" },
  { id: 14, name: "Art: 106 Code de la sécurité routière, C-24.2" },
  { id: 15, name: "Art: 168 Code de la sécurité routière, C-24.2" },
  { id: 16, name: "Art: 170 Code de la sécurité routière, C-24.2" },
  { id: 17, name: "Art: 171 Code de la sécurité routière, C-24.2" },
  { id: 18, name: "Art: 211 Code de la sécurité routière, C-24.2" },
  { id: 19, name: "Art: 212 Code de la sécurité routière, C-24.2" },
  { id: 20, name: "Art: 213 Code de la sécurité routière, C-24.2" },
  { id: 21, name: "Art: 215 Code de la sécurité routière, C-24.2" },
  { id: 22, name: "Art: 232 Code de la sécurité routière, C-24.2" },
  { id: 23, name: "Art: 233 Code de la sécurité routière, C-24.2" },
  { id: 24, name: "Art: 237 Code de la sécurité routière, C-24.2" },
  { id: 25, name: "Art: 238 Code de la sécurité routière, C-24.2" },
  { id: 26, name: "Art: 239 Code de la sécurité routière, C-24.2" },
  { id: 27, name: "Art: 247 Code de la sécurité routière, C-24.2" },
  { id: 28, name: "Art: 256 Code de la sécurité routière, C-24.2" },
  { id: 29, name: "Art: 258 Code de la sécurité routière, C-24.2" },
  { id: 30, name: "Art: 265 Code de la sécurité routière, C-24.2" },
  { id: 31, name: "Art: 270 Code de la sécurité routière, C-24.2" },
  { id: 32, name: "Art: 299 Code de la sécurité routière, C-24.2" },
  { id: 33, name: "Art: 310 Code de la sécurité routière, C-24.2" },
  { id: 34, name: "Art: 311 Code de la sécurité routière, C-24.2" },
  { id: 35, name: "Art: 312 Code de la sécurité routière, C-24.2" },
  { id: 36, name: "Art: 327 Code de la sécurité routière, C-24.2" },
  { id: 37, name: "Art: 328 Code de la sécurité routière, C-24.2" },
  { id: 38, name: "Art: 330 Code de la sécurité routière, C-24.2" },
  { id: 39, name: "Art: 335 Code de la sécurité routière, C-24.2" },
  { id: 40, name: "Art: 341 Code de la sécurité routière, C-24.2" },
  { id: 41, name: "Art: 342 Code de la sécurité routière, C-24.2" },
  { id: 42, name: "Art: 345 Code de la sécurité routière, C-24.2" },
  { id: 43, name: "Art: 346 Code de la sécurité routière, C-24.2" },
  { id: 44, name: "Art: 349 Code de la sécurité routière, C-24.2" },
  { id: 45, name: "Art: 350 Code de la sécurité routière, C-24.2" },
  { id: 46, name: "Art: 359 Code de la sécurité routière, C-24.2" },
  { id: 47, name: "Art: 360 Code de la sécurité routière, C-24.2" },
  { id: 48, name: "Art: 361 Code de la sécurité routière, C-24.2" },
  { id: 49, name: "Art: 364 Code de la sécurité routière, C-24.2" },
  { id: 50, name: "Art: 366 Code de la sécurité routière, C-24.2" },
  { id: 51, name: "Art: 368 Code de la sécurité routière, C-24.2" },
  { id: 52, name: "Art: 370 Code de la sécurité routière, C-24.2" },
  { id: 53, name: "Art: 371 Code de la sécurité routière, C-24.2" },
  { id: 54, name: "Art: 372 Code de la sécurité routière, C-24.2" },
  { id: 55, name: "Art: 381 Code de la sécurité routière, C-24.2" },
  { id: 56, name: "Art: 382 Code de la sécurité routière, C-24.2" },
  { id: 57, name: "Art: 388 Code de la sécurité routière, C-24.2" },
  { id: 58, name: "Art: 391 Code de la sécurité routière, C-24.2" },
  { id: 59, name: "Art: 395 Code de la sécurité routière, C-24.2" },
  { id: 60, name: "Art: 396 Code de la sécurité routière, C-24.2" },
  { id: 61, name: "Art: 401 Code de la sécurité routière, C-24.2" },
  { id: 62, name: "Art: 406 Code de la sécurité routière, C-24.2" },
  { id: 63, name: "Art: 410 Code de la sécurité routière, C-24.2" },
  { id: 64, name: "Art: 411 Code de la sécurité routière, C-24.2" },
  { id: 65, name: "Art: 418 Code de la sécurité routière, C-24.2" },
  { id: 66, name: "Art: 422 Code de la sécurité routière, C-24.2" },
  { id: 67, name: "Art: 424 Code de la sécurité routière, C-24.2" },
  { id: 68, name: "Art: 433 Code de la sécurité routière, C-24.2" },
  { id: 69, name: "Art: 434 Code de la sécurité routière, C-24.2" },
  { id: 70, name: "Art: 435 Code de la sécurité routière, C-24.2" },
  { id: 71, name: "Art: 440 Code de la sécurité routière, C-24.2" },
  { id: 72, name: "Art: 442 Code de la sécurité routière, C-24.2" },
  { id: 73, name: "Art: 444 Code de la sécurité routière, C-24.2" },
  { id: 74, name: "Art: 445 Code de la sécurité routière, C-24.2" },
  { id: 75, name: "Art: 448 Code de la sécurité routière, C-24.2" },
  { id: 76, name: "Art: 450 Code de la sécurité routière, C-24.2" },
  { id: 77, name: "Art: 451 Code de la sécurité routière, C-24.2" },
  { id: 78, name: "Art: 452 Code de la sécurité routière, C-24.2" },
  { id: 79, name: "Art: 460 Code de la sécurité routière, C-24.2" },
  { id: 80, name: "Art: 471 Code de la sécurité routière, C-24.2" },
  { id: 81, name: "Art: 478 Code de la sécurité routière, C-24.2" },
  { id: 82, name: "Art: 484 Code de la sécurité routière, C-24.2" },
  { id: 83, name: "Art: 487 Code de la sécurité routière, C-24.2" },
  { id: 84, name: "Art: 488 Code de la sécurité routière, C-24.2" },
  { id: 85, name: "Art: 498 Code de la sécurité routière, C-24.2" },
  { id: 86, name: "Art: 523 Code de la sécurité routière, C-24.2" },
  { id: 87, name: "Art: 531 Code de la sécurité routière, C-24.2" },
  { id: 88, name: "Art: 534 Code de la sécurité routière, C-24.2" },
  { id: 89, name: "Art: 636 Code de la sécurité routière, C-24.2" },
  { id: 90, name: "Art: 31.1 Code de la sécurité routière, C-24.2" },
  { id: 91, name: "Art: 32 al. 2 Code de la sécurité routière, C-24.2" },
  { id: 92, name: "Art: 39.1 Code de la sécurité routière, C-24.2" },
  { id: 93, name: "Art: 93.1 Code de la sécurité routière, C-24.2" },
  { id: 94, name: "Art: 161.1 Code de la sécurité routière, C-24.2" },
  { id: 95, name: "Art: 202.2 Code de la sécurité routière, C-24.2" },
  { id: 96, name: "Art: 303.2 Code de la sécurité routière, C-24.2" },
  { id: 97, name: "Art: 326.1 Code de la sécurité routière, C-24.2" },
  { id: 98, name: "Art: 406.1 al. 1 Code de la sécurité routière, C-24.2" },
  { id: 99, name: "Art: 406.1 al. 2 Code de la sécurité routière, C-24.2" },
  { id: 100, name: "Art: 406.1 al. 4 Code de la sécurité routière, C-24.2" },
  { id: 101, name: "Art: 439.1 Code de la sécurité routière, C-24.2" },
  { id: 102, name: "Art: 440.1 Code de la sécurité routière, C-24.2" },
  { id: 103, name: "Art: 443.1 Code de la sécurité routière, C-24.2" },
  { id: 104, name: "Art: 443.2 Code de la sécurité routière, C-24.2" },
  { id: 105, name: "Art: 484.1 Code de la sécurité routière, C-24.2" },
  { id: 106, name: "Art: 492.1 Code de la sécurité routière, C-24.2" },
  { id: 107, name: "Art: 498.1 Code de la sécurité routière, C-24.2" },
  { id: 108, name: "Art: 519.2 Code de la sécurité routière, C-24.2" },
  { id: 109, name: "Art: 638.1 Code de la sécurité routière, C-24.2" },
  { id: 110, name: "Art: 383 al. 1 Code de la sécurité routière, C-24.2" },
  { id: 111, name: "Art: 383 al. 2 Code de la sécurité routière, C-24.2" },
  { id: 112, name: "Art: 386 par. 1 Code de la sécurité routière, C-24.2" },
  { id: 113, name: "Art: 386 par. 2 Code de la sécurité routière, C-24.2" },
  { id: 114, name: "Art: 386 par. 4 Code de la sécurité routière, C-24.2" },
  { id: 115, name: "Art: 386 par. 4.1 Code de la sécurité routière, C-24.2" },
  { id: 116, name: "Art: 386 par. 5 Code de la sécurité routière, C-24.2" },
  { id: 117, name: "Art: 386 par. 7.1 Code de la sécurité routière, C-24.2" },
  { id: 118, name: "Art: 386 par. 8 Code de la sécurité routière, C-24.2" },
  { id: 119, name: "Art: 386 par. 9 Code de la sécurité routière, C-24.2" },
  { id: 120, name: "Art: 388.1 Code de la sécurité routière, C-24.2" },
  { id: 121, name: "Art: 12 R.R.V.M. C-4.1" },
  { id: 122, name: "Art: 14 R.R.V.M. C-4.1" },
  { id: 123, name: "Art: 15 R.R.V.M. C-4.1" },
  { id: 124, name: "Art: 22 R.R.V.M. C-4.1" },
  { id: 125, name: "Art: 26 R.R.V.M. C-4.1" },
  { id: 126, name: "Art: 29 R.R.V.M. C-4.1" },
  { id: 127, name: "Art: 32 R.R.V.M. C-4.1" },
  { id: 128, name: "Art: 37 R.R.V.M. C-4.1" },
  { id: 129, name: "Art: 38 R.R.V.M. C-4.1" },
  { id: 130, name: "Art: 42 R.R.V.M. C-4.1" },
  { id: 131, name: "Art: 43 R.R.V.M. C-4.1" },
  { id: 132, name: "Art: 49 R.R.V.M. C-4.1" },
  { id: 133, name: "Art: 51 R.R.V.M. C-4.1" },
  { id: 134, name: "Art: 55 R.R.V.M. C-4.1" },
  { id: 135, name: "Art: 58 R.R.V.M. C-4.1" },
  { id: 136, name: "Art: 60 R.R.V.M. C-4.1" },
  { id: 137, name: "Art: 30 par. 1 R.R.V.M. C-4.1" },
  { id: 138, name: "Art: 30 par. 3 R.R.V.M. C-4.1" },
  { id: 139, name: "Art: 30 par. 4 R.R.V.M. C-4.1" },
  { id: 140, name: "Art: 30 par. 8 R.R.V.M. C-4.1" },
  { id: 141, name: "Art: 30 par. 9 R.R.V.M. C-4.1" },
  { id: 142, name: "Art: 31 par. 1 R.R.V.M. C-4.1" },
  { id: 143, name: "Art: 31 par. 3 R.R.V.M. C-4.1" },
  { id: 144, name: "Art: 31 par. 4 R.R.V.M. C-4.1" },
  { id: 145, name: "Art: 61.7 R.M. 878 St-Laurent" },
  { id: 146, name: "Art: 61.9 R.M. 878 St-Laurent" },
  { id: 147, name: "Art: 4.1 R.M. 2398 Côte Saint-Luc" },
  { id: 148, name: "Art: 8.6 R.M. 1171 Outremont" },
  { id: 149, name: "Art: 8.20 R.M. 1171 Outremont" },
  { id: 150, name: "Art: 8.24.1 R.M. 1171 Outremont" },
  { id: 151, name: "Art: 8.24.16 R.M. 1171 Outremont" },
  { id: 152, name: "Art: 8.24.24 R.M. 1171 Outremont" },
  { id: 153, name: "Art: 8.26 R.M. 1171 Outremont" },
  { id: 154, name: "Art: 31 par. 20 R.M. 1530 Montréal-Nord" },
  { id: 155, name: "Art: 31 par. 23 R.M. 1530 Montréal-Nord" },
  { id: 156, name: "Art: 22 par. 2 R.M. 2227 Saint-Léonard" },
  { id: 157, name: "Art: 22 par. 4 R.M. 2227 Saint-Léonard" },
  { id: 158, name: "Art: 22 par. 9 R.M. 2227 Saint-Léonard" },
  { id: 159, name: "Art: 38 RCA06 210012 Verdun" },
  { id: 160, name: "Art: 29 al. 1 RCA06 210012 Verdun" },
  { id: 161, name: "Art: 33.1 RCA06 210012 Verdun" },
  { id: 162, name: "Art: 36 al. 1 RCA06 210012 Verdun" },
  { id: 163, name: "Art: 49 R.M. 726 Westmount" },
  { id: 164, name: "Art: 51 R.M. 726 Westmount" },
  { id: 165, name: "Art: 52.13 R.M. 726 Westmount" },
  { id: 166, name: "Art: 52.14 R.M. 726 Westmount" },
  { id: 167, name: "Art: 52.15 R.M. 726 Westmount" },
  { id: 168, name: "Art: 52.16 R.M. 726 Westmount" },
  { id: 169, name: "Art: 198 R.M. 2030 LaSalle" },
  { id: 170, name: "Art: 194.2 R.M. 2030 LaSalle" },
  { id: 171, name: "Art: 195 par. 7 R.M. 2030 LaSalle" },
  { id: 172, name: "Art: 195 par. 27 R.M. 2030 LaSalle" },
  { id: 173, name: "Art: 195 par. 28 R.M. 2030 LaSalle" },
  { id: 174, name: "Art: 195 par. 39 R.M. 2030 LaSalle" },
  { id: 175, name: "Art: 225-k R.M. 2030 LaSalle" },
  { id: 176, name: "Art: 6 par. 2 R.M. 1498 Westmount" },
  { id: 177, name: "Art: 25 al. 1 R.M. 1384 Plateau-Mont-Royal" },
  { id: 178, name: "Art: 28 par. 1 R.M. 1384 Plateau-Mont-Royal" },
  { id: 179, name: "Art: 33 al. 1 R.M. 1384 Plateau-Mont-Royal" },
  { id: 180, name: "Art: 60 RCG09-029" },
  { id: 181, name: "Art: 62 RCG09-029" },
  { id: 182, name: "Art: 10 R.M. 685 Westmount" },
  { id: 183, name: "Art: 132 RCG10-009" },
  { id: 184, name: "Art: 118 par. 17 R.M. 1333 Anjou" },
  { id: 185, name: "Art: 121 par. 4 R.M. 1333 Anjou" },
  { id: 186, name: "Art: 6 par. 2  R.R.V.M. B-3" }
];
export default class ManualInput extends Component {
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
