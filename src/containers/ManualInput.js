import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { material, iOSColors, systemWeights } from "react-native-typography";
import Header from "../components/Header";
import InfractionView from "./InfractionView";
import polyglot from "../utils/translator";
import infractionsArray from "../utils/infractionsList";

const itemsFR = [
  {
    id: 0,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 6",
    name: "6 Code de la sécurité routière, C-24.2"
  },
  {
    id: 1,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 27",
    name: "27 Code de la sécurité routière, C-24.2"
  },
  {
    id: 2,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 30",
    name: "30 Code de la sécurité routière, C-24.2"
  },
  {
    id: 3,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 34",
    name: "34 Code de la sécurité routière, C-24.2"
  },
  {
    id: 4,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 35",
    name: "35 Code de la sécurité routière, C-24.2"
  },
  {
    id: 5,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 37",
    name: "37 Code de la sécurité routière, C-24.2"
  },
  {
    id: 6,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 54",
    name: "54 Code de la sécurité routière, C-24.2"
  },
  {
    id: 7,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 65",
    name: "65 Code de la sécurité routière, C-24.2"
  },
  {
    id: 8,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 95",
    name: "95 Code de la sécurité routière, C-24.2"
  },
  {
    id: 9,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 97",
    name: "97 Code de la sécurité routière, C-24.2"
  },
  {
    id: 10,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 98",
    name: "98 Code de la sécurité routière, C-24.2"
  },
  {
    id: 11,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 99",
    name: "99 Code de la sécurité routière, C-24.2"
  },
  {
    id: 12,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 100",
    name: "100 Code de la sécurité routière, C-24.2"
  },
  {
    id: 13,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 105",
    name: "105 Code de la sécurité routière, C-24.2"
  },
  {
    id: 14,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 106",
    name: "106 Code de la sécurité routière, C-24.2"
  },
  {
    id: 15,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 168",
    name: "168 Code de la sécurité routière, C-24.2"
  },
  {
    id: 16,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 170",
    name: "170 Code de la sécurité routière, C-24.2"
  },
  {
    id: 17,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 171",
    name: "171 Code de la sécurité routière, C-24.2"
  },
  {
    id: 18,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 211",
    name: "211 Code de la sécurité routière, C-24.2"
  },
  {
    id: 19,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 212",
    name: "212 Code de la sécurité routière, C-24.2"
  },
  {
    id: 20,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 213",
    name: "213 Code de la sécurité routière, C-24.2"
  },
  {
    id: 21,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 215",
    name: "215 Code de la sécurité routière, C-24.2"
  },
  {
    id: 22,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 232",
    name: "232 Code de la sécurité routière, C-24.2"
  },
  {
    id: 23,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 233",
    name: "233 Code de la sécurité routière, C-24.2"
  },
  {
    id: 24,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 237",
    name: "237 Code de la sécurité routière, C-24.2"
  },
  {
    id: 25,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 238",
    name: "238 Code de la sécurité routière, C-24.2"
  },
  {
    id: 26,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 239",
    name: "239 Code de la sécurité routière, C-24.2"
  },
  {
    id: 27,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 247",
    name: "247 Code de la sécurité routière, C-24.2"
  },
  {
    id: 28,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 256",
    name: "256 Code de la sécurité routière, C-24.2"
  },
  {
    id: 29,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 258",
    name: "258 Code de la sécurité routière, C-24.2"
  },
  {
    id: 30,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 265",
    name: "265 Code de la sécurité routière, C-24.2"
  },
  {
    id: 31,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 270",
    name: "270 Code de la sécurité routière, C-24.2"
  },
  {
    id: 32,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 299",
    name: "299 Code de la sécurité routière, C-24.2"
  },
  {
    id: 33,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 310",
    name: "310 Code de la sécurité routière, C-24.2"
  },
  {
    id: 34,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 311",
    name: "311 Code de la sécurité routière, C-24.2"
  },
  {
    id: 35,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 312",
    name: "312 Code de la sécurité routière, C-24.2"
  },
  {
    id: 36,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 327",
    name: "327 Code de la sécurité routière, C-24.2"
  },
  {
    id: 37,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 328",
    name: "328 Code de la sécurité routière, C-24.2"
  },
  {
    id: 38,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 330",
    name: "330 Code de la sécurité routière, C-24.2"
  },
  {
    id: 39,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 335",
    name: "335 Code de la sécurité routière, C-24.2"
  },
  {
    id: 40,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 341",
    name: "341 Code de la sécurité routière, C-24.2"
  },
  {
    id: 41,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 342",
    name: "342 Code de la sécurité routière, C-24.2"
  },
  {
    id: 42,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 345",
    name: "345 Code de la sécurité routière, C-24.2"
  },
  {
    id: 43,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 346",
    name: "346 Code de la sécurité routière, C-24.2"
  },
  {
    id: 44,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 349",
    name: "349 Code de la sécurité routière, C-24.2"
  },
  {
    id: 45,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 350",
    name: "350 Code de la sécurité routière, C-24.2"
  },
  {
    id: 46,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 359",
    name: "359 Code de la sécurité routière, C-24.2"
  },
  {
    id: 47,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 360",
    name: "360 Code de la sécurité routière, C-24.2"
  },
  {
    id: 48,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 361",
    name: "361 Code de la sécurité routière, C-24.2"
  },
  {
    id: 49,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 364",
    name: "364 Code de la sécurité routière, C-24.2"
  },
  {
    id: 50,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 366",
    name: "366 Code de la sécurité routière, C-24.2"
  },
  {
    id: 51,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 368",
    name: "368 Code de la sécurité routière, C-24.2"
  },
  {
    id: 52,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 370",
    name: "370 Code de la sécurité routière, C-24.2"
  },
  {
    id: 53,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 371",
    name: "371 Code de la sécurité routière, C-24.2"
  },
  {
    id: 54,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 372",
    name: "372 Code de la sécurité routière, C-24.2"
  },
  {
    id: 55,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 381",
    name: "381 Code de la sécurité routière, C-24.2"
  },
  {
    id: 56,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 382",
    name: "382 Code de la sécurité routière, C-24.2"
  },
  {
    id: 57,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 388",
    name: "388 Code de la sécurité routière, C-24.2"
  },
  {
    id: 58,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 391",
    name: "391 Code de la sécurité routière, C-24.2"
  },
  {
    id: 59,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 395",
    name: "395 Code de la sécurité routière, C-24.2"
  },
  {
    id: 60,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 396",
    name: "396 Code de la sécurité routière, C-24.2"
  },
  {
    id: 61,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 401",
    name: "401 Code de la sécurité routière, C-24.2"
  },
  {
    id: 62,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 406",
    name: "406 Code de la sécurité routière, C-24.2"
  },
  {
    id: 63,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 410",
    name: "410 Code de la sécurité routière, C-24.2"
  },
  {
    id: 64,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 411",
    name: "411 Code de la sécurité routière, C-24.2"
  },
  {
    id: 65,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 418",
    name: "418 Code de la sécurité routière, C-24.2"
  },
  {
    id: 66,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 422",
    name: "422 Code de la sécurité routière, C-24.2"
  },
  {
    id: 67,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 424",
    name: "424 Code de la sécurité routière, C-24.2"
  },
  {
    id: 68,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 433",
    name: "433 Code de la sécurité routière, C-24.2"
  },
  {
    id: 69,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 434",
    name: "434 Code de la sécurité routière, C-24.2"
  },
  {
    id: 70,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 435",
    name: "435 Code de la sécurité routière, C-24.2"
  },
  {
    id: 71,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 440",
    name: "440 Code de la sécurité routière, C-24.2"
  },
  {
    id: 72,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 442",
    name: "442 Code de la sécurité routière, C-24.2"
  },
  {
    id: 73,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 444",
    name: "444 Code de la sécurité routière, C-24.2"
  },
  {
    id: 74,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 445",
    name: "445 Code de la sécurité routière, C-24.2"
  },
  {
    id: 75,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 448",
    name: "448 Code de la sécurité routière, C-24.2"
  },
  {
    id: 76,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 450",
    name: "450 Code de la sécurité routière, C-24.2"
  },
  {
    id: 77,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 451",
    name: "451 Code de la sécurité routière, C-24.2"
  },
  {
    id: 78,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 452",
    name: "452 Code de la sécurité routière, C-24.2"
  },
  {
    id: 79,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 460",
    name: "460 Code de la sécurité routière, C-24.2"
  },
  {
    id: 80,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 471",
    name: "471 Code de la sécurité routière, C-24.2"
  },
  {
    id: 81,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 478",
    name: "478 Code de la sécurité routière, C-24.2"
  },
  {
    id: 82,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 484",
    name: "484 Code de la sécurité routière, C-24.2"
  },
  {
    id: 83,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 487",
    name: "487 Code de la sécurité routière, C-24.2"
  },
  {
    id: 84,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 488",
    name: "488 Code de la sécurité routière, C-24.2"
  },
  {
    id: 85,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 498",
    name: "498 Code de la sécurité routière, C-24.2"
  },
  {
    id: 86,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 523",
    name: "523 Code de la sécurité routière, C-24.2"
  },
  {
    id: 87,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 531",
    name: "531 Code de la sécurité routière, C-24.2"
  },
  {
    id: 88,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 534",
    name: "534 Code de la sécurité routière, C-24.2"
  },
  {
    id: 89,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 636",
    name: "636 Code de la sécurité routière, C-24.2"
  },
  {
    id: 90,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 31.1",
    name: "31.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 91,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 32 al. 2",
    name: "32 al. 2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 92,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 39.1",
    name: "39.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 93,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 93.1",
    name: "93.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 94,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 161.1",
    name: "161.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 95,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 202.2",
    name: "202.2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 96,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 303.2",
    name: "303.2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 97,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 326.1",
    name: "326.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 98,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 406.1 al. 1",
    name: "406.1 al. 1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 99,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 406.1 al. 2",
    name: "406.1 al. 2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 100,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 406.1 al. 4",
    name: "406.1 al. 4 Code de la sécurité routière, C-24.2"
  },
  {
    id: 101,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 439.1",
    name: "439.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 102,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 440.1",
    name: "440.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 103,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 443.1",
    name: "443.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 104,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 443.2",
    name: "443.2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 105,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 484.1",
    name: "484.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 106,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 492.1",
    name: "492.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 107,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 498.1",
    name: "498.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 108,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 519.2",
    name: "519.2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 109,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 638.1",
    name: "638.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 110,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 383 al. 1",
    name: "383 al. 1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 111,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 383 al. 2",
    name: "383 al. 2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 112,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 1",
    name: "386 par. 1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 113,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 2",
    name: "386 par. 2 Code de la sécurité routière, C-24.2"
  },
  {
    id: 114,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 4",
    name: "386 par. 4 Code de la sécurité routière, C-24.2"
  },
  {
    id: 115,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 4.1",
    name: "386 par. 4.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 116,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 5",
    name: "386 par. 5 Code de la sécurité routière, C-24.2"
  },
  {
    id: 117,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 7.1",
    name: "386 par. 7.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 118,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 8",
    name: "386 par. 8 Code de la sécurité routière, C-24.2"
  },
  {
    id: 119,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 386 par. 9",
    name: "386 par. 9 Code de la sécurité routière, C-24.2"
  },
  {
    id: 120,
    source: "Code de la sécurité routière, C-24.2",
    art: "Art: 388.1",
    name: "388.1 Code de la sécurité routière, C-24.2"
  },
  {
    id: 121,
    source: "R.R.V.M. C-4.1",
    art: "Art: 12",
    name: "12 R.R.V.M. C-4.1"
  },
  {
    id: 122,
    source: "R.R.V.M. C-4.1",
    art: "Art: 14",
    name: "14 R.R.V.M. C-4.1"
  },
  {
    id: 123,
    source: "R.R.V.M. C-4.1",
    art: "Art: 15",
    name: "15 R.R.V.M. C-4.1"
  },
  {
    id: 124,
    source: "R.R.V.M. C-4.1",
    art: "Art: 22",
    name: "22 R.R.V.M. C-4.1"
  },
  {
    id: 125,
    source: "R.R.V.M. C-4.1",
    art: "Art: 26",
    name: "26 R.R.V.M. C-4.1"
  },
  {
    id: 126,
    source: "R.R.V.M. C-4.1",
    art: "Art: 29",
    name: "29 R.R.V.M. C-4.1"
  },
  {
    id: 127,
    source: "R.R.V.M. C-4.1",
    art: "Art: 32",
    name: "32 R.R.V.M. C-4.1"
  },
  {
    id: 128,
    source: "R.R.V.M. C-4.1",
    art: "Art: 37",
    name: "37 R.R.V.M. C-4.1"
  },
  {
    id: 129,
    source: "R.R.V.M. C-4.1",
    art: "Art: 38",
    name: "38 R.R.V.M. C-4.1"
  },
  {
    id: 130,
    source: "R.R.V.M. C-4.1",
    art: "Art: 42",
    name: "42 R.R.V.M. C-4.1"
  },
  {
    id: 131,
    source: "R.R.V.M. C-4.1",
    art: "Art: 43",
    name: "43 R.R.V.M. C-4.1"
  },
  {
    id: 132,
    source: "R.R.V.M. C-4.1",
    art: "Art: 49",
    name: "49 R.R.V.M. C-4.1"
  },
  {
    id: 133,
    source: "R.R.V.M. C-4.1",
    art: "Art: 51",
    name: "51 R.R.V.M. C-4.1"
  },
  {
    id: 134,
    source: "R.R.V.M. C-4.1",
    art: "Art: 55",
    name: "55 R.R.V.M. C-4.1"
  },
  {
    id: 135,
    source: "R.R.V.M. C-4.1",
    art: "Art: 58",
    name: "58 R.R.V.M. C-4.1"
  },
  {
    id: 136,
    source: "R.R.V.M. C-4.1",
    art: "Art: 60",
    name: "60 R.R.V.M. C-4.1"
  },
  {
    id: 137,
    source: "R.R.V.M. C-4.1",
    art: "Art: 30 par. 1",
    name: "30 par. 1 R.R.V.M. C-4.1"
  },
  {
    id: 138,
    source: "R.R.V.M. C-4.1",
    art: "Art: 30 par. 3",
    name: "30 par. 3 R.R.V.M. C-4.1"
  },
  {
    id: 139,
    source: "R.R.V.M. C-4.1",
    art: "Art: 30 par. 4",
    name: "30 par. 4 R.R.V.M. C-4.1"
  },
  {
    id: 140,
    source: "R.R.V.M. C-4.1",
    art: "Art: 30 par. 8",
    name: "30 par. 8 R.R.V.M. C-4.1"
  },
  {
    id: 141,
    source: "R.R.V.M. C-4.1",
    art: "Art: 30 par. 9",
    name: "30 par. 9 R.R.V.M. C-4.1"
  },
  {
    id: 142,
    source: "R.R.V.M. C-4.1",
    art: "Art: 31 par. 1",
    name: "31 par. 1 R.R.V.M. C-4.1"
  },
  {
    id: 143,
    source: "R.R.V.M. C-4.1",
    art: "Art: 31 par. 3",
    name: "31 par. 3 R.R.V.M. C-4.1"
  },
  {
    id: 144,
    source: "R.R.V.M. C-4.1",
    art: "Art: 31 par. 4",
    name: "31 par. 4 R.R.V.M. C-4.1"
  },
  {
    id: 145,
    source: "R.M. 878 St-Laurent",
    art: "Art: 61.7",
    name: "61.7 R.M. 878 St-Laurent"
  },
  {
    id: 146,
    source: "R.M. 878 St-Laurent",
    art: "Art: 61.9",
    name: "61.9 R.M. 878 St-Laurent"
  },
  {
    id: 147,
    source: "R.M. 2398 Côte Saint-Luc",
    art: "Art: 4.1",
    name: "4.1 R.M. 2398 Côte Saint-Luc"
  },
  {
    id: 148,
    source: "R.M. 1171 Outremont",
    art: "Art: 8.6",
    name: "8.6 R.M. 1171 Outremont"
  },
  {
    id: 149,
    source: "R.M. 1171 Outremont",
    art: "Art: 8.20",
    name: "8.20 R.M. 1171 Outremont"
  },
  {
    id: 150,
    source: "R.M. 1171 Outremont",
    art: "Art: 8.24.1",
    name: "8.24.1 R.M. 1171 Outremont"
  },
  {
    id: 151,
    source: "R.M. 1171 Outremont",
    art: "Art: 8.24.16",
    name: "8.24.16 R.M. 1171 Outremont"
  },
  {
    id: 152,
    source: "R.M. 1171 Outremont",
    art: "Art: 8.24.24",
    name: "8.24.24 R.M. 1171 Outremont"
  },
  {
    id: 153,
    source: "R.M. 1171 Outremont",
    art: "Art: 8.26",
    name: "8.26 R.M. 1171 Outremont"
  },
  {
    id: 154,
    source: "R.M. 1530 Montréal-Nord",
    art: "Art: 31 par. 20",
    name: "31 par. 20 R.M. 1530 Montréal-Nord"
  },
  {
    id: 155,
    source: "R.M. 1530 Montréal-Nord",
    art: "Art: 31 par. 23",
    name: "31 par. 23 R.M. 1530 Montréal-Nord"
  },
  {
    id: 156,
    source: "R.M. 2227 Saint-Léonard",
    art: "Art: 22 par. 2",
    name: "22 par. 2 R.M. 2227 Saint-Léonard"
  },
  {
    id: 157,
    source: "R.M. 2227 Saint-Léonard",
    art: "Art: 22 par. 4",
    name: "22 par. 4 R.M. 2227 Saint-Léonard"
  },
  {
    id: 158,
    source: "R.M. 2227 Saint-Léonard",
    art: "Art: 22 par. 9",
    name: "22 par. 9 R.M. 2227 Saint-Léonard"
  },
  {
    id: 159,
    source: "RCA06 210012 Verdun",
    art: "Art: 38",
    name: "38 RCA06 210012 Verdun"
  },
  {
    id: 160,
    source: "RCA06 210012 Verdun",
    art: "Art: 29 al. 1",
    name: "29 al. 1 RCA06 210012 Verdun"
  },
  {
    id: 161,
    source: "RCA06 210012 Verdun",
    art: "Art: 33.1",
    name: "33.1 RCA06 210012 Verdun"
  },
  {
    id: 162,
    source: "RCA06 210012 Verdun",
    art: "Art: 36 al. 1",
    name: "36 al. 1 RCA06 210012 Verdun"
  },
  {
    id: 163,
    source: "R.M. 726 Westmount",
    art: "Art: 49",
    name: "49 R.M. 726 Westmount"
  },
  {
    id: 164,
    source: "R.M. 726 Westmount",
    art: "Art: 51",
    name: "51 R.M. 726 Westmount"
  },
  {
    id: 165,
    source: "R.M. 726 Westmount",
    art: "Art: 52.13",
    name: "52.13 R.M. 726 Westmount"
  },
  {
    id: 166,
    source: "R.M. 726 Westmount",
    art: "Art: 52.14",
    name: "52.14 R.M. 726 Westmount"
  },
  {
    id: 167,
    source: "R.M. 726 Westmount",
    art: "Art: 52.15",
    name: "52.15 R.M. 726 Westmount"
  },
  {
    id: 168,
    source: "R.M. 726 Westmount",
    art: "Art: 52.16",
    name: "52.16 R.M. 726 Westmount"
  },
  {
    id: 169,
    source: "R.M. 2030 LaSalle",
    art: "Art: 198",
    name: "198 R.M. 2030 LaSalle"
  },
  {
    id: 170,
    source: "R.M. 2030 LaSalle",
    art: "Art: 194.2",
    name: "194.2 R.M. 2030 LaSalle"
  },
  {
    id: 171,
    source: "R.M. 2030 LaSalle",
    art: "Art: 195 par. 7",
    name: "195 par. 7 R.M. 2030 LaSalle"
  },
  {
    id: 172,
    source: "R.M. 2030 LaSalle",
    art: "Art: 195 par. 27",
    name: "195 par. 27 R.M. 2030 LaSalle"
  },
  {
    id: 173,
    source: "R.M. 2030 LaSalle",
    art: "Art: 195 par. 28",
    name: "195 par. 28 R.M. 2030 LaSalle"
  },
  {
    id: 174,
    source: "R.M. 2030 LaSalle",
    art: "Art: 195 par. 39",
    name: "195 par. 39 R.M. 2030 LaSalle"
  },
  {
    id: 175,
    source: "R.M. 2030 LaSalle",
    art: "Art: 225-k",
    name: "225-k R.M. 2030 LaSalle"
  },
  {
    id: 176,
    source: "R.M. 1498 Westmount",
    art: "Art: 6 par. 2",
    name: "6 par. 2 R.M. 1498 Westmount"
  },
  {
    id: 177,
    source: "R.M. 1384 Plateau-Mont-Royal",
    art: "Art: 25 al. 1",
    name: "25 al. 1 R.M. 1384 Plateau-Mont-Royal"
  },
  {
    id: 178,
    source: "R.M. 1384 Plateau-Mont-Royal",
    art: "Art: 28 par. 1",
    name: "28 par. 1 R.M. 1384 Plateau-Mont-Royal"
  },
  {
    id: 179,
    source: "R.M. 1384 Plateau-Mont-Royal",
    art: "Art: 33 al. 1",
    name: "33 al. 1 R.M. 1384 Plateau-Mont-Royal"
  },
  { id: 180, source: "RCG09-029", art: "Art: 60", name: "60 RCG09-029" },
  { id: 181, source: "RCG09-029", art: "Art: 62", name: "62 RCG09-029" },
  {
    id: 182,
    source: "R.M. 685 Westmount",
    art: "Art: 10",
    name: "10 R.M. 685 Westmount"
  },
  { id: 183, source: "RCG10-009", art: "Art: 132", name: "132 RCG10-009" },
  {
    id: 184,
    source: "R.M. 1333 Anjou",
    art: "Art: 118 par. 17",
    name: "118 par. 17 R.M. 1333 Anjou"
  },
  {
    id: 185,
    source: "R.M. 1333 Anjou",
    art: "Art: 121 par. 4",
    name: "121 par. 4 R.M. 1333 Anjou"
  },
  {
    id: 186,
    source: "R.R.V.M. B-3",
    art: "Art: 6 par. 2 ",
    name: "6 par. 2  R.R.V.M. B-3"
  }
];
const itemsEN = [
  {
    id: 0,
    source: "Highway safety Code, C-24.2",
    art: "Section 6",
    name: "Section 6 Highway safety Code, C-24.2"
  },
  {
    id: 1,
    source: "Highway safety code, C-24.2",
    art: "Section 27",
    name: "Section 27 Highway safety code, C-24.2"
  },
  {
    id: 2,
    source: "Highway safety code, C-24.2",
    art: "Section 30",
    name: "Section 30 Highway safety code, C-24.2"
  },
  {
    id: 3,
    source: "Highway safety code, C-24.2",
    art: "Section 34",
    name: "Section 34 Highway safety code, C-24.2"
  },
  {
    id: 4,
    source: "Highway safety code, C-24.2",
    art: "Section 35",
    name: "Section 35 Highway safety code, C-24.2"
  },
  {
    id: 5,
    source: "Highway safety code, C-24.2",
    art: "Section 37",
    name: "Section 37 Highway safety code, C-24.2"
  },
  {
    id: 6,
    source: "Highway safety code, C-24.2",
    art: "Section 54",
    name: "Section 54 Highway safety code, C-24.2"
  },
  {
    id: 7,
    source: "Highway safety code, C-24.2",
    art: "Section 65",
    name: "Section 65 Highway safety code, C-24.2"
  },
  {
    id: 8,
    source: "Highway safety code, C-24.2",
    art: "Section 95",
    name: "Section 95 Highway safety code, C-24.2"
  },
  {
    id: 9,
    source: "Highway safety code, C-24.2",
    art: "Section 97",
    name: "Section 97 Highway safety code, C-24.2"
  },
  {
    id: 10,
    source: "Highway safety code, C-24.2",
    art: "Section 98",
    name: "Section 98 Highway safety code, C-24.2"
  },
  {
    id: 11,
    source: "Highway safety code, C-24.2",
    art: "Section 99",
    name: "Section 99 Highway safety code, C-24.2"
  },
  {
    id: 12,
    source: "Highway safety code, C-24.2",
    art: "Section 100",
    name: "Section 100 Highway safety code, C-24.2"
  },
  {
    id: 13,
    source: "Highway safety code, C-24.2",
    art: "Section 105",
    name: "Section 105 Highway safety code, C-24.2"
  },
  {
    id: 14,
    source: "Highway safety code, C-24.2",
    art: "Section 106",
    name: "Section 106 Highway safety code, C-24.2"
  },
  {
    id: 15,
    source: "Highway safety code, C-24.2",
    art: "Section 168",
    name: "Section 168 Highway safety code, C-24.2"
  },
  {
    id: 16,
    source: "Highway safety code, C-24.2",
    art: "Section 170",
    name: "Section 170 Highway safety code, C-24.2"
  },
  {
    id: 17,
    source: "Highway safety code, C-24.2",
    art: "Section 171",
    name: "Section 171 Highway safety code, C-24.2"
  },
  {
    id: 18,
    source: "Highway safety code, C-24.2",
    art: "Section 211",
    name: "Section 211 Highway safety code, C-24.2"
  },
  {
    id: 19,
    source: "Highway safety code, C-24.2",
    art: "Section 212",
    name: "Section 212 Highway safety code, C-24.2"
  },
  {
    id: 20,
    source: "Highway safety code, C-24.2",
    art: "Section 213",
    name: "Section 213 Highway safety code, C-24.2"
  },
  {
    id: 21,
    source: "Highway safety code, C-24.2",
    art: "Section 215",
    name: "Section 215 Highway safety code, C-24.2"
  },
  {
    id: 22,
    source: "Highway safety code, C-24.2",
    art: "Section 232",
    name: "Section 232 Highway safety code, C-24.2"
  },
  {
    id: 23,
    source: "Highway safety code, C-24.2",
    art: "Section 233",
    name: "Section 233 Highway safety code, C-24.2"
  },
  {
    id: 24,
    source: "Highway safety code, C-24.2",
    art: "Section 237",
    name: "Section 237 Highway safety code, C-24.2"
  },
  {
    id: 25,
    source: "Highway safety code, C-24.2",
    art: "Section 238",
    name: "Section 238 Highway safety code, C-24.2"
  },
  {
    id: 26,
    source: "Highway safety code, C-24.2",
    art: "Section 239",
    name: "Section 239 Highway safety code, C-24.2"
  },
  {
    id: 27,
    source: "Highway safety code, C-24.2",
    art: "Section 247",
    name: "Section 247 Highway safety code, C-24.2"
  },
  {
    id: 28,
    source: "Highway safety code, C-24.2",
    art: "Section 256",
    name: "Section 256 Highway safety code, C-24.2"
  },
  {
    id: 29,
    source: "Highway safety code, C-24.2",
    art: "Section 258",
    name: "Section 258 Highway safety code, C-24.2"
  },
  {
    id: 30,
    source: "Highway safety Code, C-24.2",
    art: "Section 256",
    name: "Section 256 Highway safety Code, C-24.2"
  },
  {
    id: 31,
    source: "Highway safety code, C-24.2",
    art: "Section 270",
    name: "Section 270 Highway safety code, C-24.2"
  },
  {
    id: 32,
    source: "Highway safety code, C-24.2",
    art: "Section 299",
    name: "Section 299 Highway safety code, C-24.2"
  },
  {
    id: 33,
    source: "Highway safety code, C-24.2",
    art: "Section 310",
    name: "Section 310 Highway safety code, C-24.2"
  },
  {
    id: 34,
    source: "Highway safety code, C-24.2",
    art: "Section 311",
    name: "Section 311 Highway safety code, C-24.2"
  },
  {
    id: 35,
    source: "Highway safety code, C-24.2",
    art: "Section 312",
    name: "Section 312 Highway safety code, C-24.2"
  },
  {
    id: 36,
    source: "Highway safety code, C-24.2",
    art: "Section 327",
    name: "Section 327 Highway safety code, C-24.2"
  },
  {
    id: 37,
    source: "Highway safety code, C-24.2",
    art: "Section 328",
    name: "Section 328 Highway safety code, C-24.2"
  },
  {
    id: 38,
    source: "Highway safety code, C-24.2",
    art: "Section 330",
    name: "Section 330 Highway safety code, C-24.2"
  },
  {
    id: 39,
    source: "Highway safety code, C-24.2",
    art: "Section 335",
    name: "Section 335 Highway safety code, C-24.2"
  },
  {
    id: 40,
    source: "Highway safety code, C-24.2",
    art: "Section 341",
    name: "Section 341 Highway safety code, C-24.2"
  },
  {
    id: 41,
    source: "Highway safety code, C-24.2",
    art: "Section 342",
    name: "Section 342 Highway safety code, C-24.2"
  },
  {
    id: 42,
    source: "Highway safety code, C-24.2",
    art: "Section 345",
    name: "Section 345 Highway safety code, C-24.2"
  },
  {
    id: 43,
    source: "Highway safety Code, C-24.2",
    art: "Section 346",
    name: "Section 346 Highway safety Code, C-24.2"
  },
  {
    id: 44,
    source: "Highway safety code, C-24.2",
    art: "Section 349",
    name: "Section 349 Highway safety code, C-24.2"
  },
  {
    id: 45,
    source: "Highway safety code, C-24.2",
    art: "Section 350",
    name: "Section 350 Highway safety code, C-24.2"
  },
  {
    id: 46,
    source: "Highway safety code, C-24.2",
    art: "Section 359",
    name: "Section 359 Highway safety code, C-24.2"
  },
  {
    id: 47,
    source: "Highway safety code, C-24.2",
    art: "Section 360",
    name: "Section 360 Highway safety code, C-24.2"
  },
  {
    id: 48,
    source: "Highway safety Code, C-24.2",
    art: "Section 361",
    name: "Section 361 Highway safety Code, C-24.2"
  },
  {
    id: 49,
    source: "Highway safety Code, C-24.2",
    art: "Section 364",
    name: "Section 364 Highway safety Code, C-24.2"
  },
  {
    id: 50,
    source: "Highway safety Code, C-24.2",
    art: "Section 366",
    name: "Section 366 Highway safety Code, C-24.2"
  },
  {
    id: 51,
    source: "Highway safety Code, C-24.2",
    art: "Section 368",
    name: "Section 368 Highway safety Code, C-24.2"
  },
  {
    id: 52,
    source: "Highway safety Code, C-24.2",
    art: "Section 370",
    name: "Section 370 Highway safety Code, C-24.2"
  },
  {
    id: 53,
    source: "Highway safety Code, C-24.2",
    art: "Section 371",
    name: "Section 371 Highway safety Code, C-24.2"
  },
  {
    id: 54,
    source: "Highway safety Code, C-24.2",
    art: "Section 372",
    name: "Section 372 Highway safety Code, C-24.2"
  },
  {
    id: 55,
    source: "Highway safety Code, C-24.2",
    art: "Section 381",
    name: "Section 381 Highway safety Code, C-24.2"
  },
  {
    id: 56,
    source: "Highway safety Code, C-24.2",
    art: "Section 382",
    name: "Section 382 Highway safety Code, C-24.2"
  },
  {
    id: 57,
    source: "Highway safety Code, C-24.2",
    art: "Section 388",
    name: "Section 388 Highway safety Code, C-24.2"
  },
  {
    id: 58,
    source: "Highway safety Code, C-24.2",
    art: "Section 391",
    name: "Section 391 Highway safety Code, C-24.2"
  },
  {
    id: 59,
    source: "Highway safety Code, C-24.2",
    art: "Section 395",
    name: "Section 395 Highway safety Code, C-24.2"
  },
  {
    id: 60,
    source: "Highway safety Code, C-24.2",
    art: "Section 396",
    name: "Section 396 Highway safety Code, C-24.2"
  },
  {
    id: 61,
    source: "Highway safety Code, C-24.2",
    art: "Section 401",
    name: "Section 401 Highway safety Code, C-24.2"
  },
  {
    id: 62,
    source: "Highway safety Code, C-24.2",
    art: "Section 406",
    name: "Section 406 Highway safety Code, C-24.2"
  },
  {
    id: 63,
    source: "Highway safety Code, C-24.2",
    art: "Section 410",
    name: "Section 410 Highway safety Code, C-24.2"
  },
  {
    id: 64,
    source: "Highway safety Code, C-24.2",
    art: "Section 411",
    name: "Section 411 Highway safety Code, C-24.2"
  },
  {
    id: 65,
    source: "Highway safety Code, C-24.2",
    art: "Section 418",
    name: "Section 418 Highway safety Code, C-24.2"
  },
  {
    id: 66,
    source: "Highway safety Code, C-24.2",
    art: "Section 422",
    name: "Section 422 Highway safety Code, C-24.2"
  },
  {
    id: 67,
    source: "Highway safety Code, C-24.2",
    art: "Section 424",
    name: "Section 424 Highway safety Code, C-24.2"
  },
  {
    id: 68,
    source: "Highway safety code, C-24.2",
    art: "Section 433",
    name: "Section 433 Highway safety code, C-24.2"
  },
  {
    id: 69,
    source: "Highway safety code, C-24.2",
    art: "Section 434",
    name: "Section 434 Highway safety code, C-24.2"
  },
  {
    id: 70,
    source: "Highway safety code, C-24.2",
    art: "Section 435",
    name: "Section 435 Highway safety code, C-24.2"
  },
  {
    id: 71,
    source: "Highway safety Code, C-24.2",
    art: "Section 440",
    name: "Section 440 Highway safety Code, C-24.2"
  },
  {
    id: 72,
    source: "Highway safety code, C-24.2",
    art: "Section 442",
    name: "Section 442 Highway safety code, C-24.2"
  },
  {
    id: 73,
    source: "Highway safety Code, C-24.2",
    art: "Section 444",
    name: "Section 444 Highway safety Code, C-24.2"
  },
  {
    id: 74,
    source: "Highway safety Code, C-24.2",
    art: "Section 445",
    name: "Section 445 Highway safety Code, C-24.2"
  },
  {
    id: 75,
    source: "Highway safety Code, C-24.2",
    art: "Section 448",
    name: "Section 448 Highway safety Code, C-24.2"
  },
  {
    id: 76,
    source: "Highway safety Code, C-24.2",
    art: "Section 450",
    name: "Section 450 Highway safety Code, C-24.2"
  },
  {
    id: 77,
    source: "Highway safety Code, C-24.2",
    art: "Section 451",
    name: "Section 451 Highway safety Code, C-24.2"
  },
  {
    id: 78,
    source: "Highway safety Code, C-24.2",
    art: "Section 452",
    name: "Section 452 Highway safety Code, C-24.2"
  },
  {
    id: 79,
    source: "Highway safety Code, C-24.2",
    art: "Section 460",
    name: "Section 460 Highway safety Code, C-24.2"
  },
  {
    id: 80,
    source: "Highway safety code, C-24.2",
    art: "Section 471",
    name: "Section 471 Highway safety code, C-24.2"
  },
  {
    id: 81,
    source: "Highway safety code, C-24.2",
    art: "Section 478",
    name: "Section 478 Highway safety code, C-24.2"
  },
  {
    id: 82,
    source: "Highway safety Code, C-24.2",
    art: "Section 484",
    name: "Section 484 Highway safety Code, C-24.2"
  },
  {
    id: 83,
    source: "Highway safety Code, C-24.2",
    art: "Section 487",
    name: "Section 487 Highway safety Code, C-24.2"
  },
  {
    id: 84,
    source: "Highway safety Code, C-24.2",
    art: "Section 488",
    name: "Section 488 Highway safety Code, C-24.2"
  },
  {
    id: 85,
    source: "Highway safety Code, C-24.2",
    art: "Section 498",
    name: "Section 498 Highway safety Code, C-24.2"
  },
  {
    id: 86,
    source: "Highway safety Code, C-24.2",
    art: "Section 523",
    name: "Section 523 Highway safety Code, C-24.2"
  },
  {
    id: 87,
    source: "Highway safety Code, C-24.2",
    art: "Section 531",
    name: "Section 531 Highway safety Code, C-24.2"
  },
  {
    id: 88,
    source: "Highway safety Code, C-24.2",
    art: "Section 534",
    name: "Section 534 Highway safety Code, C-24.2"
  },
  {
    id: 89,
    source: "Highway safety Code, C-24.2",
    art: "Section 636",
    name: "Section 636 Highway safety Code, C-24.2"
  },
  {
    id: 90,
    source: "Highway safety code, C-24.2",
    art: "Section 31.1",
    name: "Section 31.1 Highway safety code, C-24.2"
  },
  {
    id: 91,
    source: "Highway safety code, C-24.2",
    art: "Section 32 (2)",
    name: "Section 32 (2) Highway safety code, C-24.2"
  },
  {
    id: 92,
    source: "Highway safety code, C-24.2",
    art: "Section 39.1",
    name: "Section 39.1 Highway safety code, C-24.2"
  },
  {
    id: 93,
    source: "Highway safety code, C-24.2",
    art: "Section 93.1",
    name: "Section 93.1 Highway safety code, C-24.2"
  },
  {
    id: 94,
    source: "Highway safety code, C-24.2",
    art: "Section 161.1",
    name: "Section 161.1 Highway safety code, C-24.2"
  },
  {
    id: 95,
    source: "Highway safety code, C-24.2",
    art: "Section 202.2",
    name: "Section 202.2 Highway safety code, C-24.2"
  },
  {
    id: 96,
    source: "Highway safety code, C-24.2",
    art: "Section 303.2",
    name: "Section 303.2 Highway safety code, C-24.2"
  },
  {
    id: 97,
    source: "Highway safety code, C-24.2",
    art: "Section 326.1",
    name: "Section 326.1 Highway safety code, C-24.2"
  },
  {
    id: 98,
    source: "Highway safety Code, C-24.2",
    art: "Section 406.1 (1)",
    name: "Section 406.1 (1) Highway safety Code, C-24.2"
  },
  {
    id: 99,
    source: "Highway safety Code, C-24.2",
    art: "Section 406.1 (2)",
    name: "Section 406.1 (2) Highway safety Code, C-24.2"
  },
  {
    id: 100,
    source: "Highway safety Code, C-24.2",
    art: "Section 406.1 (4)",
    name: "Section 406.1 (4) Highway safety Code, C-24.2"
  },
  {
    id: 101,
    source: "Highway safety Code, C-24.2",
    art: "Section 439.1",
    name: "Section 439.1 Highway safety Code, C-24.2"
  },
  {
    id: 102,
    source: "Highway safety Code, C-24.2",
    art: "Section 440.1",
    name: "Section 440.1 Highway safety Code, C-24.2"
  },
  {
    id: 103,
    source: "Highway safety code, C-24.2",
    art: "Section 443.1",
    name: "Section 443.1 Highway safety code, C-24.2"
  },
  {
    id: 104,
    source: "Highway safety Code, C-24.2",
    art: "Section 443.2",
    name: "Section 443.2 Highway safety Code, C-24.2"
  },
  {
    id: 105,
    source: "Highway safety Code, C-24.2",
    art: "Section 484.1",
    name: "Section 484.1 Highway safety Code, C-24.2"
  },
  {
    id: 106,
    source: "Highway safety Code, C-24.2",
    art: "Section 492.1",
    name: "Section 492.1 Highway safety Code, C-24.2"
  },
  {
    id: 107,
    source: "Highway safety Code, C-24.2",
    art: "Section 498.1",
    name: "Section 498.1 Highway safety Code, C-24.2"
  },
  {
    id: 108,
    source: "Highway safety Code, C-24.2",
    art: "Section 519.2",
    name: "Section 519.2 Highway safety Code, C-24.2"
  },
  {
    id: 109,
    source: "Highway safety Code, C-24.2",
    art: "Section 638.1",
    name: "Section 638.1 Highway safety Code, C-24.2"
  },
  {
    id: 110,
    source: "Highway safety Code, C-24.2",
    art: "Section 383 (1)",
    name: "Section 383 (1) Highway safety Code, C-24.2"
  },
  {
    id: 111,
    source: "Highway safety Code, C-24.2",
    art: "Section 383 (2)",
    name: "Section 383 (2) Highway safety Code, C-24.2"
  },
  {
    id: 112,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (1)",
    name: "Section 386 (1) Highway safety Code, C-24.2"
  },
  {
    id: 113,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (2)",
    name: "Section 386 (2) Highway safety Code, C-24.2"
  },
  {
    id: 114,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (4)",
    name: "Section 386 (4) Highway safety Code, C-24.2"
  },
  {
    id: 115,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (4.1)",
    name: "Section 386 (4.1) Highway safety Code, C-24.2"
  },
  {
    id: 116,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (5)",
    name: "Section 386 (5) Highway safety Code, C-24.2"
  },
  {
    id: 117,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (7.1)",
    name: "Section 386 (7.1) Highway safety Code, C-24.2"
  },
  {
    id: 118,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (8)",
    name: "Section 386 (8) Highway safety Code, C-24.2"
  },
  {
    id: 119,
    source: "Highway safety Code, C-24.2",
    art: "Section 386 (9)",
    name: "Section 386 (9) Highway safety Code, C-24.2"
  },
  {
    id: 120,
    source: "Highway safety Code, C-24.2",
    art: "Section 388.1",
    name: "Section 388.1 Highway safety Code, C-24.2"
  },
  {
    id: 121,
    source: "R.R.V.M. C-4.1",
    art: "Section 12",
    name: "Section 12 R.R.V.M. C-4.1"
  },
  {
    id: 122,
    source: "R.R.V.M. C-4.1",
    art: "Section 14",
    name: "Section 14 R.R.V.M. C-4.1"
  },
  {
    id: 123,
    source: "R.R.V.M. C-4.1",
    art: "Section 15",
    name: "Section 15 R.R.V.M. C-4.1"
  },
  {
    id: 124,
    source: "R.R.V.M. C-4.1",
    art: "Section 22",
    name: "Section 22 R.R.V.M. C-4.1"
  },
  {
    id: 125,
    source: "R.R.V.M. C-4.1",
    art: "Section 26",
    name: "Section 26 R.R.V.M. C-4.1"
  },
  {
    id: 126,
    source: "R.R.V.M. C-4.1",
    art: "Section 29",
    name: "Section 29 R.R.V.M. C-4.1"
  },
  {
    id: 127,
    source: "R.R.V.M. C-4.1",
    art: "Section 32",
    name: "Section 32 R.R.V.M. C-4.1"
  },
  {
    id: 128,
    source: "R.R.V.M. C-4.1",
    art: "Section 37",
    name: "Section 37 R.R.V.M. C-4.1"
  },
  {
    id: 129,
    source: "R.R.V.M. C-4.1",
    art: "Section 38",
    name: "Section 38 R.R.V.M. C-4.1"
  },
  {
    id: 130,
    source: "R.R.V.M. C-4.1",
    art: "Section 42",
    name: "Section 42 R.R.V.M. C-4.1"
  },
  {
    id: 131,
    source: "R.R.V.M. C-4.1",
    art: "Section 43",
    name: "Section 43 R.R.V.M. C-4.1"
  },
  {
    id: 132,
    source: "R.R.V.M. C-4.1",
    art: "Section 49",
    name: "Section 49 R.R.V.M. C-4.1"
  },
  {
    id: 133,
    source: "R.R.V.M. C-4.1",
    art: "Section 51",
    name: "Section 51 R.R.V.M. C-4.1"
  },
  {
    id: 134,
    source: "R.R.V.M. C-4.1",
    art: "Section 55",
    name: "Section 55 R.R.V.M. C-4.1"
  },
  {
    id: 135,
    source: "R.R.V.M. C-4.1",
    art: "Section 58",
    name: "Section 58 R.R.V.M. C-4.1"
  },
  {
    id: 136,
    source: "R.R.V.M. C-4.1",
    art: "Section 60",
    name: "Section 60 R.R.V.M. C-4.1"
  },
  {
    id: 137,
    source: "R.R.V.M. C-4.1",
    art: "Section 30 (1)",
    name: "Section 30 (1) R.R.V.M. C-4.1"
  },
  {
    id: 138,
    source: "R.R.V.M. C-4.1",
    art: "Section 30 (3)",
    name: "Section 30 (3) R.R.V.M. C-4.1"
  },
  {
    id: 139,
    source: "R.R.V.M. C-4.1",
    art: "Section 30 (4)",
    name: "Section 30 (4) R.R.V.M. C-4.1"
  },
  {
    id: 140,
    source: "R.R.V.M. C-4.1",
    art: "Section 30 (8)",
    name: "Section 30 (8) R.R.V.M. C-4.1"
  },
  {
    id: 141,
    source: "R.R.V.M. C-4.1",
    art: "Section 30 (9)",
    name: "Section 30 (9) R.R.V.M. C-4.1"
  },
  {
    id: 142,
    source: "R.R.V.M. C-4.1",
    art: "Section 31 (1)",
    name: "Section 31 (1) R.R.V.M. C-4.1"
  },
  {
    id: 143,
    source: "R.R.V.M. C-4.1",
    art: "Section 31 (3)",
    name: "Section 31 (3) R.R.V.M. C-4.1"
  },
  {
    id: 144,
    source: "R.R.V.M. C-4.1",
    art: "Section 31 (4)",
    name: "Section 31 (4) R.R.V.M. C-4.1"
  },
  {
    id: 145,
    source: "R.M. 878 St-Laurent",
    art: "Section 61.7",
    name: "Section 61.7 R.M. 878 St-Laurent"
  },
  {
    id: 146,
    source: "R.M. 878 St-Laurent",
    art: "Section 61.9",
    name: "Section 61.9 R.M. 878 St-Laurent"
  },
  {
    id: 147,
    source: "R.M. 2398 Côte Saint-Luc",
    art: "Section 4.1",
    name: "Section 4.1 R.M. 2398 Côte Saint-Luc"
  },
  {
    id: 148,
    source: "R.M. 8.6 Outremont",
    art: "Section 8.6",
    name: "Section 8.6 R.M. 8.6 Outremont"
  },
  {
    id: 149,
    source: "R.M. 8.20 Outremont",
    art: "Section 8.20",
    name: "Section 8.20 R.M. 8.20 Outremont"
  },
  {
    id: 150,
    source: "R.M. 878 Outremont",
    art: "Section 8.24.1",
    name: "Section 8.24.1 R.M. 878 Outremont"
  },
  {
    id: 151,
    source: "R.M. 878 Outremont",
    name: "undefined R.M. 878 Outremont"
  },
  {
    id: 152,
    source: "R.M. 878 Outremont",
    art: "Section 8.24.24",
    name: "Section 8.24.24 R.M. 878 Outremont"
  },
  {
    id: 153,
    source: "R.M. 8.6 Outremont",
    art: "Section 8.26",
    name: "Section 8.26 R.M. 8.6 Outremont"
  },
  {
    id: 154,
    source: "R.M. 1530 Montréal-Nord",
    art: "Section 31 (20)",
    name: "Section 31 (20) R.M. 1530 Montréal-Nord"
  },
  {
    id: 155,
    source: "R.M. 1530 Montréal-Nord",
    art: "Section 31 (23)",
    name: "Section 31 (23) R.M. 1530 Montréal-Nord"
  },
  {
    id: 156,
    source: "R.M. 2227 Saint-Léonard",
    art: "Section 22 (2)",
    name: "Section 22 (2) R.M. 2227 Saint-Léonard"
  },
  {
    id: 157,
    source: "R.M. 2227 Saint-Léonard",
    art: "Section 22 (4)",
    name: "Section 22 (4) R.M. 2227 Saint-Léonard"
  },
  {
    id: 158,
    source: "R.M. 2227 Saint-Léonard",
    art: "Section 22 (9)",
    name: "Section 22 (9) R.M. 2227 Saint-Léonard"
  },
  {
    id: 159,
    source: "RCA06 210012 Verdun",
    art: "Section 38",
    name: "Section 38 RCA06 210012 Verdun"
  },
  {
    id: 160,
    source: "RCA06 210012 Verdun",
    art: "Section 29 par. 1",
    name: "Section 29 par. 1 RCA06 210012 Verdun"
  },
  {
    id: 161,
    source: "RCA06 210012 Verdun",
    art: "Section 33.1",
    name: "Section 33.1 RCA06 210012 Verdun"
  },
  {
    id: 162,
    source: "RCA06 210012 Verdun",
    art: "Section 36 al. 1",
    name: "Section 36 al. 1 RCA06 210012 Verdun"
  },
  {
    id: 163,
    source: "R.M. 726 Westmount",
    art: "Section 49",
    name: "Section 49 R.M. 726 Westmount"
  },
  {
    id: 164,
    source: "R.M. 726 Westmount",
    art: "Section 51",
    name: "Section 51 R.M. 726 Westmount"
  },
  {
    id: 165,
    source: "R.M. 726 Westmount",
    art: "Section 52.13",
    name: "Section 52.13 R.M. 726 Westmount"
  },
  {
    id: 166,
    source: "R.M. 726 Westmount",
    art: "Section 52.14",
    name: "Section 52.14 R.M. 726 Westmount"
  },
  {
    id: 167,
    source: "R.M. 726 Westmount",
    art: "Section 52.15",
    name: "Section 52.15 R.M. 726 Westmount"
  },
  {
    id: 168,
    source: "R.M. 726 Westmount",
    art: "Section 52.16",
    name: "Section 52.16 R.M. 726 Westmount"
  },
  {
    id: 169,
    source: "R.M. 2030 LaSalle",
    art: "Section 198",
    name: "Section 198 R.M. 2030 LaSalle"
  },
  {
    id: 170,
    source: "R.M. 2030 LaSalle",
    art: "Section 194.2",
    name: "Section 194.2 R.M. 2030 LaSalle"
  },
  {
    id: 171,
    source: "R.M. 2030 LaSalle",
    art: "Section 195 (7)",
    name: "Section 195 (7) R.M. 2030 LaSalle"
  },
  {
    id: 172,
    source: "R.M. 2030 LaSalle",
    art: "Section 195 par. 27",
    name: "Section 195 par. 27 R.M. 2030 LaSalle"
  },
  {
    id: 173,
    source: "R.M. 2030 LaSalle",
    art: "Section 195 par. 28",
    name: "Section 195 par. 28 R.M. 2030 LaSalle"
  },
  {
    id: 174,
    source: "R.M. 2030 LaSalle",
    art: "Section 195 par. 39",
    name: "Section 195 par. 39 R.M. 2030 LaSalle"
  },
  {
    id: 175,
    source: "R.M. 2030 LaSalle",
    art: "Section 225-k",
    name: "Section 225-k R.M. 2030 LaSalle"
  },
  {
    id: 176,
    source: "R.M. 1498 Westmount",
    art: "Section 6 (2)",
    name: "Section 6 (2) R.M. 1498 Westmount"
  },
  {
    id: 177,
    source: "R.M. 1384 Plateau-Mont-Royal",
    art: "Section 25 (1)",
    name: "Section 25 (1) R.M. 1384 Plateau-Mont-Royal"
  },
  {
    id: 178,
    source: "R.M. 1384 Plateau-Mont-Royal",
    art: "Section 28 (1)",
    name: "Section 28 (1) R.M. 1384 Plateau-Mont-Royal"
  },
  {
    id: 179,
    source: "R.M. 1384 Plateau-Mont-Royal",
    art: "Section 33 (1)",
    name: "Section 33 (1) R.M. 1384 Plateau-Mont-Royal"
  },
  {
    id: 180,
    source: "RCG09-029",
    art: "Section 60",
    name: "Section 60 RCG09-029"
  },
  {
    id: 181,
    source: "RCG09-029",
    art: "Section 62",
    name: "Section 62 RCG09-029"
  },
  {
    id: 182,
    source: "R.M. 685 Westmount",
    art: "Section 10",
    name: "Section 10 R.M. 685 Westmount"
  },
  {
    id: 183,
    source: "RCG10-009",
    art: "Section 132",
    name: "Section 132 RCG10-009"
  },
  {
    id: 184,
    source: "R.M. 1333 Anjou",
    art: "Section 118 (17)",
    name: "Section 118 (17) R.M. 1333 Anjou"
  },
  {
    id: 185,
    source: "R.M. 1333 Anjou",
    art: "Section 121 (4)",
    name: "Section 121 (4) R.M. 1333 Anjou"
  },
  {
    id: 186,
    source: "R.R.V.M. B-3",
    art: "Section 6 (2)",
    name: "Section 6 (2) R.R.V.M. B-3"
  }
];

export default class ManualInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullInfractionsData: null,
      selectedArt: null,
      displayDropDown: true,
      displayInfraction: false
    };
  }

  itemLangSet = () => {
    let items;
    let lang = polyglot.locale; // 'en' or 'fr'
    if (polyglot.locale == "fr") {
      items = itemsFR;
    } else {
      items = itemsEN;
    }
    return items;
  };

  toggleView = () => {
    this.state.displayDropDown
      ? this.setState({ displayDropDown: false, displayInfraction: true })
      : this.setState({ displayDropDown: true, displayInfraction: false });
  };

  reset = () => {};

  getInfractionData = () => {
    let article = this.state.selectedArt;
    console.log("selected article", article);
    let lang = polyglot.locale; // 'en' or 'fr'
    let matchArticle;
    infractionsArray.forEach(arrayItem => {
      for (let key in arrayItem) {
        let value = arrayItem[key];
        if (article === value.fr.art && lang == "fr") {
          matchArticle = value.fr;
          return;
        } else if (article === value.en.art && lang == "en") {
          matchArticle = value.en;
          return;
        }
      }
    });
    this.setState(
      {
        formattedText: {
          ...matchArticle
        },
        isLoading: false
      },
      () => this.toggleView()
    );
  };

  showDropDown = () => {
    if (this.state.displayDropDown) {
      return (
        <View style={styles.content}>
          <SearchableDropdown
            // onTextChange={() => this.toggleSelectedArt()}
            onItemSelect={item =>
              this.setState({ selectedArt: item.art }, this.getInfractionData)
            }
            containerStyle={{
              padding: 20
              // height: 500
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
              maxHeight: 340
            }}
            items={this.itemLangSet()}
            defaultIndex={2}
            placeholder="Placeholder."
            resetValue={false}
            underlineColorAndroid="transparent"
          />
          {/* <Text style={styles.text}>{this.state.selectedArt}</Text> */}
          <Button onPress={() => {}} title={polyglot.t("search")} />
        </View>
      );
    }
  };

  showInfraction = () => {
    if (this.state.displayInfraction) {
      return (
        <InfractionView
          data={this.state.formattedText}
          navigation={this.props.navigation}
          // imagePath={this.state.imagePath}
          reset={this.reset}
        />
      );
    }
  };

  showHeader = () => {
    if (this.state.displayDropDown) {
      return (
        <Header
          title={polyglot.t("search")}
          navigation={this.props.navigation}
        />
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.showHeader()}
        {this.showDropDown()}
        {this.showInfraction()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 10,
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light
  }
});
