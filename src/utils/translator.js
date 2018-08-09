import { Platform, NativeModules } from "react-native";

const badFocus = {
  notFound: {
    en:
      "Sorry, we were not able to read your ticket. Make sure you have a good focus on the text.",
    fr:
      "Désolé, votre ticket n'a pas pu être lu. Assurez-vous de bien viser le texte."
  },
  retry: {
    en: "Retry",
    fr: "Réessayer"
  }
};
const camView = {
  frame: {
    en: "Frame your ticket",
    fr: "Capturer votre ticket"
  }
};
const chatContainer = {
  write: {
    en: "Write your message...",
    fr: "Écrire votre message..."
  }
};
const infractionView = {
  elements: {
    en: "Elements",
    fr: "Éléments"
  },
  offence: {
    en: "Offence",
    fr: "Infraction"
  },
  of: {
    en: " of ",
    fr: " de "
  },
  law: {
    en: "Law",
    fr: "Loi"
  },
  freeConsultation: {
    en: "Consult a lawyer for free",
    fr: "Consulter un avocat gratuitement"
  }
};
const login = {
  login: {
    en: "Log in",
    fr: "Connectez-vous"
  },
  password: {
    en: "Password",
    fr: "Mot de passe"
  },
  firstUse: {
    en: "It's your first time with us?",
    fr: "C'est votre première utilisation?"
  }
};
const signUp = {
  createAccount: {
    en: "Log in",
    fr: "Créez votre compte"
  },
  password: {
    en: "Password",
    fr: "Mot de passe"
  },
  alreadySign: {
    en: "It's your first time with us?",
    fr: "Vous avez déjà un compte?"
  }
};
const mainMenu = {
  takePhoto: {
    en: "Take a picture",
    fr: "Prendre une photo"
  },
  myTickets: {
    en: "My tickets",
    fr: "Mes tickets"
  },
  legalDisclaimer: {
    en: "Legal disclaimer",
    fr: "Mentions légales?"
  }
};
const userInfosView = {
  identify: {
    en: "Identify yourself to join Me Harvey",
    fr: "Identifiez-vous afin de joindre Me Harvey"
  },
  firstName: {
    en: "First name",
    fr: "Prénom"
  },
  name: {
    en: "Name",
    fr: "Nom"
  },
  join: {
    en: "Join",
    fr: "Joindre"
  }
};
const settings = {
  disconnect: {
    en: "Log out",
    fr: "Déconnexion"
  }
};
const home = {
  inProgress: {
    en: "Analysis in progress...",
    fr: "Analyse en cours..."
  }
};

const translations = {
  ...badFocus,
  ...camView,
  ...chatContainer,
  ...infractionView,
  ...login,
  ...mainMenu,
  ...settings,
  ...signUp,
  ...userInfosView,
  ...home
};

function getUserLanguage() {
  let langRegionLocale = "en";
  // If we have an Android phone
  if (Platform.OS === "android") {
    langRegionLocale = NativeModules.I18nManager.localeIdentifier || "";
  } else if (Platform.OS === "ios") {
    langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || "";
  }
  // "en_US" -> "en", "es_CL" -> "es", etc
  let languageLocale = langRegionLocale.substring(0, 2); // get first two characters
  return languageLocale;
}

class Translator {
  locale = getUserLanguage();

  t = key => translations[key][this.locale] || key;

  //   setLanguage = language => {
  //     if (language === "en" || language === "fr") {
  //       this.locale = language;
  //     } else {
  //       Logger.error(`Unknown language : ${language}`);
  //     }
  //   };

  //   switchLanguage = () => {
  //     const locale = this.locale;
  //     if (locale === "en") {
  //       this.setLanguage("fr");
  //     } else {
  //       this.setLanguage("en");
  //     }
  //   };
}

const translator = new Translator();

export default translator;
