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
  },
  manualSearch: {
    en: "Manual search",
    fr: "Recherche manuelle"
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
    en: "Chat with a lawyer for free",
    fr: "Clavarder avec un avocat gratuitement"
  },
  talkToLawyer: {
    en: "Speak to my lawyer 438-872-5034",
    fr: "Parler à mon avocat 438-872-5034"
  },
  resource: {
    en: "Resource",
    fr: "Ressource"
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
    fr: "Mentions légales"
  },
  lost: {
    en: "Lost ticket",
    fr: "Contravention égaré"
  },
  myTicketAnymore: {
    en: "my ticket anymore",
    fr: "mon ticket"
  }
};
const userInfosView = {
  identify: {
    en: "Identify yourself to join your lawyer",
    fr: "Identifiez-vous afin de joindre votre avocat"
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
  },
  reachAlawyer: {
    en: "Talk to your lawyer.",
    fr: " Parler à mon avocat"
  },
  composeTel: {
    en: "Dial 438-872-5034",
    fr: "Composer le 438-872-5034"
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
        <H1>{"How does Photo-Ticket works?"}</H1>
        <P>{"Sorry for your ticket… However, you should know your rights."}</P>
        <P>{"Understanding the app:"}</P>
        <P>
          {
            "After taking a picture of your ticket, the offence will be shown and explained to you in the following way:"
          }
        </P>
        <P>
          {"“ The infraction is committed when"}
          <Color>{" three elements "}</Color>
          {"are proven :"}
          <Color>
            {"\n"}
            {"1-..."}
            {"\n"}
            {"2-…"}
            {"\n"}
            {"3-... “"}
          </Color>
        </P>
        <P>
          {"These"}
          <Color>{" elements "}</Color>
          {"must be proven"}
          <Italic>{" without reasonable doubt "}</Italic>{" "}
          {
            "by the prosecution in order to obtain a declaration of guilt at the end of a trial."
          }
        </P>
        <P>
          {
            "It is to your advantage to be aware of those conditions, because if one of them is missing the offence is not committed."
          }
        </P>
        <H1>{"Guilty or not guilty?"}</H1>
        <P>
          {
            "You have 30 days after receiving your statement of offence (ticket) to decide whether you pay or contest."
          }
        </P>
        <P>
          <Bold>{"If you pay : "}</Bold>
          {
            "The payment of the fine results in a guilty plea. The demerit points, if any, will be registered in your driving record."
          }
        </P>
        <P>
          <Bold>{"If you contest by your own : "}</Bold>
          {
            "You will receive a hearing date to explain your case. Additional fees may be charged."
          }
        </P>
        <P>
          <Bold>{"If you hire a lawyer : "}</Bold>
          {
            " Your lawyer will request and analyze the police report to advise you on the best strategy to adopt according to your situation. You will not have to go to court."
          }
        </P>
        <H1>{"Before trial: "}</H1>
        <P>
          {
            "Even without a lawyer, you need to prepare yourself to maximize your chance of success. Here is some general advice : "
          }
        </P>
        <P>
          {
            "1- Take a photo if you think a sign was absent or not visible, or had misled you. A picture is worth a thousand words. You need to print your pictures in order to use them in court."
          }
          {"\n"}
          {"\n"}
          {
            "2- If you want to explain a driving manoeuvre, draw a sketch of the scene in which you can position your vehicle and the manoeuvres you executed. Your explanations will be clearer and the judge might better understand you."
          }
          {"\n"}
          {"\n"}
          {
            "3- If your defence implies a payment (parking payment, registration payment, driver’s licence payment, etc.), ensure to have the relevant documentation before going to court. You need to print your payment proof."
          }
          {"\n"}
          {"\n"}
          {
            "4- If you want to explain what another person saw or heard, you need to bring this person with you in court. You can’t repeat what another person has witnessed, it’s called hearsay."
          }
        </P>
        <H1>{"The trial"}</H1>
        <P>{"A trial always goes the same way :"}</P>
        <P>{"1. The proof of the prosecution :"}</P>
        <Bullet>
          {"The prosecutor needs to prove the"}
          <Color>{" elements "}</Color> {"required by the law."}
        </Bullet>
        <Bullet>
          {
            "Your lawyer ensures that all elements are validly put in as evidence."
          }
        </Bullet>
        <P>{"2. The defence :"}</P>
        <Bullet>
          {
            "This is the time to explain what happened to the judge if you wish. You must explain what you have seen and heard personally."
          }
        </Bullet>
        <Bullet>
          {
            "This is the time to show your printed photos, your videos on a USB key or CD, your sketch illustrating the scene or any other relevant evidence."
          }
        </Bullet>
        <Bullet>
          {
            "Your lawyer will be able to help you prepare your testimony in order to clearly identify the elements relevant to your defence."
          }
        </Bullet>
        <P>{"3. Arguments :"}</P>
        <Bullet>
          {"The prosecution argues on the elements that it considers relevant."}
        </Bullet>
        <Bullet>
          {"Your lawyer argues on the elements relevant to your defence."}
        </Bullet>
        <P>{"4. Decision:"}</P>
        <Bullet>{"If you win, you won’t have to pay the ticket."}</Bullet>
        <Bullet>
          {"If you lose, additional fees may be imposed by the court."}
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
const manualInput = {
  manualInput: {
    en: "Manual Input",
    fr: "Entrée manuelle"
  },
  search: {
    en: "Search",
    fr: "Recherche"
  },
  findArt: {
    en: "Locate the number of the article (art.) and the law on your ticket.",
    fr:
      "Repérer le numéro de l'article (art.) et la loi visée sur votre constant d'infraction."
  },
  next: {
    en: "Next",
    fr: "Suivant"
  },
  select: {
    en: "Select your offense number.",
    fr: "Selectionner votre infraction."
  },
  alertTitle: {
    en: "Empty search",
    fr: "Recherche vide"
  },
  alertMsg: {
    en: "You need to enter your article to proceed.",
    fr: "Vous devez entrer votre article pour continuer."
  },
  writeNumber: {
    en: "Write number here...",
    fr: "Inscrire le chiffre ici..."
  }
};
const photoInstructions = {
  aimArticle: {
    en:
      "In order to correctly identify your infraction, please aim at the infraction number on your ticket.",
    fr:
      "Afin de bien identifier votre infraction, s'il vous plait, veuillez viser le numéro de l'article se trouvant sur le constat d'infractioné"
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
  ...guide,
  ...manualInput,
  ...photoInstructions
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
