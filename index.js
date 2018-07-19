import { AppRegistry } from "react-native";
import App from "./App";
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

// Disable React Native yellow box warnings
console.disableYellowBox = true;

AppRegistry.registerComponent("ticketPhoto", () => App);
