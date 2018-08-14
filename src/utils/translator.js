import { Platform, NativeModules } from "react-native";
import React, { Component } from "React";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const Color = props => (
  <Text style={{ color: "#0074D9" }}>{props.children}</Text>
);
const Italic = props => (
  <Text style={{ fontStyle: "italic" }}>{props.children}</Text>
);
const Bold = props => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const H1 = props => {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: "bold",
        margin: 10
      }}
    >
      {props.children}
    </Text>
  );
};
const P = props => {
  return (
    <Text
      style={{
        marginTop: 12,
        padding: 10
      }}
    >
      {props.children}
    </Text>
  );
};

const Bullet = props => {
  return (
    <View style={{ flexDirection: "row", paddingLeft: 20 }}>
      <Text>{"\u2022"}</Text>
      <Text style={{ flex: 1, paddingLeft: 5 }}>{props.children}</Text>
    </View>
  );
};
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
  noText: {
    en: "No Information for this section",
    fr: "Pas d'information sur cette section."
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
    en: "Create an account",
    fr: "Créez votre compte"
  },
  password: {
    en: "Password",
    fr: "Mot de passe"
  },
  alreadySign: {
    en: "You already have an account?",
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
const legal = {
  titleLegal: {
    en: "Legal Terms",
    fr: "Mentions légales"
  },
  thanks: {
    en: "Thank you for your confidence!",
    fr: "Merci de votre confiance!"
  },
  start: {
    en: "Start",
    fr: "Débuter"
  }
};
const guide = {
  descriptiveGuide: {
    en: (
      <View>
        <H1>{"Comment ça marche Photo-Ticket?"}</H1>
        <P>
          {
            "Désolé pour votre contravention… Cependant, il est important de connaître vos droits."
          }
        </P>
        <P>{"Comprendre l’application :"}</P>
        <P>
          {
            "Après avoir pris une photo de votre contravention, l’infraction vous est présentée et décortiquée de cette manière :"
          }
        </P>
        <P>
          {"« L’infraction est commise lorsque les"}
          <Color>{" trois éléments "}</Color>
          {"suivants sont prouvés :"}
          <Color>
            {"\n"}
            {"1-..."}
            {"\n"}
            {"2-…"}
            {"\n"}
            {"3-... »"}
          </Color>
        </P>
        <P>
          {"Ces"}
          <Color>{" éléments "}</Color>
          {"doivent être prouvés"}
          <Italic>{" hors de tout doute raisonnable "}</Italic>{" "}
          {
            "par la poursuite pour qu’une déclaration de culpabilité soit prononcée à la fin d’un procès."
          }
        </P>
        <P>
          {"Il est à votre avantage d’en prendre connaissance, puisque si un"}
          <Color>{" élément "}</Color>
          {
            "est manquant, l’infraction n’est pas commise. Votre avocat pourra vous expliquer les subtilités de chaque"
          }
          <Color>{" élément "}</Color>
          {"ou"}
          <Bold>{" exception."}</Bold>
        </P>
        <H1>{"Contester ou payer?"}</H1>
        <P>
          {
            "Vous disposez de 30 jours pour payer ou contester votre contravention."
          }
        </P>
        <P>
          <Bold>{"Si vous payez : "}</Bold>
          {
            "le paiement correspond à plaider coupable. Le cas échéant, les points d’inaptitude seront inscrits à votre dossier de conduite."
          }
        </P>
        <P>
          <Bold>{"Si vous contestez seul : "}</Bold>
          {
            "vous recevrez une date d’audience pour aller donner vos explications. Des frais supplémentaires peuvent vous être imposés."
          }
        </P>
        <P>
          <Bold>{"Si vous mandatez un avocat : "}</Bold>
          {
            "votre avocat demandera à voir le rapport policier et l’analysera pour vous conseiller sur la meilleure stratégie à adopter selon votre situation. Vous n’aurez pas à vous déplacer ni à vous rendre à la cour."
          }
        </P>
        <H1>{"Avant un procès: "}</H1>
        <P>
          {
            "Même sans avocat, il est important de bien se préparer. Voici quelques conseils généraux :"
          }
        </P>
        <P>
          {
            "1- Si vous croyez qu’un panneau était absent ou non visible, prenez une photo. Une image vaut mille mots. Ces photos doivent être imprimées."
          }
          {"\n"}
          {"\n"}
          {
            "2- Si vous désirez expliquer une manœuvre de conduite, dessinez un plan sur lequel vous pourrez situer votre voiture et les manœuvres que vous avez effectuées. De cette manière, vos propos seront plus clairs et vous vous assurerez que le juge vous comprenne."
          }
          {"\n"}
          {"\n"}
          {
            "3- Si votre défense s’organise autour d’un paiement (paiement de stationnement, paiement d’immatriculation, paiement de permis de conduire, etc.), assurez-vous d’avoir un document attestant ce paiement. Imprimez-le avant de vous présenter devant le tribunal."
          }
          {"\n"}
          {"\n"}
          {
            "4- Si vous désirez expliquer ce qu’une autre personne a vu ou entendu, cette personne doit être présente devant le tribunal. Vous ne pouvez rapporter les paroles de quelqu’un d’autre, il s’agit de ouï-dire."
          }
        </P>
        <H1>{"Le procès"}</H1>
        <P>{"Le procès se déroule en étapes :"}</P>
        <P>{"1. La preuve de la poursuite :"}</P>
        <Bullet>
          {"La poursuite doit faire la preuve de tous les"}
          <Color>{" éléments "}</Color> {"de l’infraction reprochée."}
        </Bullet>
        <Bullet>
          {
            "Votre avocat s’assure que tous les éléments sont valablement mis en preuve."
          }
        </Bullet>
        <P>{"2. Votre défense :"}</P>
        <Bullet>
          {
            "C’est le moment d’expliquer ce qui s’est passé au juge si vous le désirez. Vous devez expliquer ce que vous avez vu et entendu personnellement."
          }
        </Bullet>
        <Bullet>
          {
            "C’est le moment de montrer vos photos imprimées, vos vidéos sur une clé USB ou un CD, votre croquis illustrant la scène ou toute autre preuve pertinente."
          }
        </Bullet>
        <Bullet>
          {
            "Votre avocat pourra vous aider à bien cerner les éléments pertinents à votre défense."
          }
        </Bullet>
        <P>{"3. Plaidoiries :"}</P>
        <Bullet>
          {"La poursuite argumente sur les éléments qu’elle estime pertinents."}
        </Bullet>
        <Bullet>
          {
            "Votre avocat argumente sur les éléments pertinents à votre défense."
          }
        </Bullet>
        <P>{"4. Le juge rend sa décision:"}</P>
        <Bullet>
          {"Si vous gagnez, vous n’avez pas à payer la contravention."}
        </Bullet>
        <Bullet>
          {
            "Si vous perdez, des frais supplémentaires peuvent vous être imposés par le tribunal."
          }
        </Bullet>
      </View>
    ),
    fr: (
      <View>
        <H1>{"Comment ça marche Photo-Ticket?"}</H1>
        <P>
          {
            "Désolé pour votre contravention… Cependant, il est important de connaître vos droits."
          }
        </P>
        <P>{"Comprendre l’application :"}</P>
        <P>
          {
            "Après avoir pris une photo de votre contravention, l’infraction vous est présentée et décortiquée de cette manière :"
          }
        </P>
        <P>
          {"« L’infraction est commise lorsque les"}
          <Color>{" trois éléments "}</Color>
          {"suivants sont prouvés :"}
          <Color>
            {"\n"}
            {"1-..."}
            {"\n"}
            {"2-…"}
            {"\n"}
            {"3-... »"}
          </Color>
        </P>
        <P>
          {"Ces"}
          <Color>{" éléments "}</Color>
          {"doivent être prouvés"}
          <Italic>{" hors de tout doute raisonnable "}</Italic>{" "}
          {
            "par la poursuite pour qu’une déclaration de culpabilité soit prononcée à la fin d’un procès."
          }
        </P>
        <P>
          {"Il est à votre avantage d’en prendre connaissance, puisque si un"}
          <Color>{" élément "}</Color>
          {
            "est manquant, l’infraction n’est pas commise. Votre avocat pourra vous expliquer les subtilités de chaque"
          }
          <Color>{" élément "}</Color>
          {"ou"}
          <Bold>{" exception."}</Bold>
        </P>
        <H1>{"Contester ou payer?"}</H1>
        <P>
          {
            "Vous disposez de 30 jours pour payer ou contester votre contravention."
          }
        </P>
        <P>
          <Bold>{"Si vous payez : "}</Bold>
          {
            "le paiement correspond à plaider coupable. Le cas échéant, les points d’inaptitude seront inscrits à votre dossier de conduite."
          }
        </P>
        <P>
          <Bold>{"Si vous contestez seul : "}</Bold>
          {
            "vous recevrez une date d’audience pour aller donner vos explications. Des frais supplémentaires peuvent vous être imposés."
          }
        </P>
        <P>
          <Bold>{"Si vous mandatez un avocat : "}</Bold>
          {
            "votre avocat demandera à voir le rapport policier et l’analysera pour vous conseiller sur la meilleure stratégie à adopter selon votre situation. Vous n’aurez pas à vous déplacer ni à vous rendre à la cour."
          }
        </P>
        <H1>{"Avant un procès: "}</H1>
        <P>
          {
            "Même sans avocat, il est important de bien se préparer. Voici quelques conseils généraux :"
          }
        </P>
        <P>
          {
            "1- Si vous croyez qu’un panneau était absent ou non visible, prenez une photo. Une image vaut mille mots. Ces photos doivent être imprimées."
          }
          {"\n"}
          {"\n"}
          {
            "2- Si vous désirez expliquer une manœuvre de conduite, dessinez un plan sur lequel vous pourrez situer votre voiture et les manœuvres que vous avez effectuées. De cette manière, vos propos seront plus clairs et vous vous assurerez que le juge vous comprenne."
          }
          {"\n"}
          {"\n"}
          {
            "3- Si votre défense s’organise autour d’un paiement (paiement de stationnement, paiement d’immatriculation, paiement de permis de conduire, etc.), assurez-vous d’avoir un document attestant ce paiement. Imprimez-le avant de vous présenter devant le tribunal."
          }
          {"\n"}
          {"\n"}
          {
            "4- Si vous désirez expliquer ce qu’une autre personne a vu ou entendu, cette personne doit être présente devant le tribunal. Vous ne pouvez rapporter les paroles de quelqu’un d’autre, il s’agit de ouï-dire."
          }
        </P>
        <H1>{"Le procès"}</H1>
        <P>{"Le procès se déroule en étapes :"}</P>
        <P>{"1. La preuve de la poursuite :"}</P>
        <Bullet>
          {"La poursuite doit faire la preuve de tous les"}
          <Color>{" éléments "}</Color> {"de l’infraction reprochée."}
        </Bullet>
        <Bullet>
          {
            "Votre avocat s’assure que tous les éléments sont valablement mis en preuve."
          }
        </Bullet>
        <P>{"2. Votre défense :"}</P>
        <Bullet>
          {
            "C’est le moment d’expliquer ce qui s’est passé au juge si vous le désirez. Vous devez expliquer ce que vous avez vu et entendu personnellement."
          }
        </Bullet>
        <Bullet>
          {
            "C’est le moment de montrer vos photos imprimées, vos vidéos sur une clé USB ou un CD, votre croquis illustrant la scène ou toute autre preuve pertinente."
          }
        </Bullet>
        <Bullet>
          {
            "Votre avocat pourra vous aider à bien cerner les éléments pertinents à votre défense."
          }
        </Bullet>
        <P>{"3. Plaidoiries :"}</P>
        <Bullet>
          {"La poursuite argumente sur les éléments qu’elle estime pertinents."}
        </Bullet>
        <Bullet>
          {
            "Votre avocat argumente sur les éléments pertinents à votre défense."
          }
        </Bullet>
        <P>{"4. Le juge rend sa décision:"}</P>
        <Bullet>
          {"Si vous gagnez, vous n’avez pas à payer la contravention."}
        </Bullet>
        <Bullet>
          {
            "Si vous perdez, des frais supplémentaires peuvent vous être imposés par le tribunal."
          }
        </Bullet>
      </View>
    )
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
  ...home,
  ...legal,
  ...guide
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
