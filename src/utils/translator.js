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
const H2 = props => {
  return (
    <Text
      style={{
        fontSize: 15,
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
    en: "Chat with a lawyer",
    fr: "Clavarder avec un avocat"
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
  register: {
    en: "Register",
    fr: "Enregistrer"
  },
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
    en: "Legal",
    fr: "Légal"
  },
  chat: {
    en: "Chat",
    fr: "Chat"
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
  welcome: {
    en: "Welcome to Photo-Ticket!",
    fr: "Bienvenue chez Photo-Ticket!"
  },
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
  },
  version: {
    en: "BETA version",
    fr: "Version BETA"
  }
};
const legal = {
  terms: {
    en: (
      <View>
        <H1>{"Privacy Policy"}</H1>
        <P>
          {
            "Photo-Ticket Inc. and its agents undertake not to divulge your personal data. This confidentiality agreement contains the terms and conditions to which Photo-Ticket agrees."
          }
        </P>
        <H2>{"Communicate With Us"}</H2>
        <P>
          {
            "Photo-Ticket is a Quebec company based in Montreal. Photo-Ticket encourages you to comment on its privacy policy at phototicketmontreal@gmail.com or 438-872-5034."
          }
        </P>
        <H2>{"Personal Information"}</H2>
        <P>
          {
            "By using the free services of the Photo-Ticket application, you may provide personal information. We define “personal information” as any information that may identify you. In particular, this information includes your name, address, registration number, driver’s licence number and health insurance number. Photo-Ticket is committed not to disclose any of such personal information without your express consent and to take reasonable measures to ensure confidentiality. Photo-Ticket also reserves the right to use the cookies created by the use of its platforms to improve its service and customer experience. To be able to help you, Photo-Ticket archives its data on secure web servers managed by Google. The location of these servers may be outside Canada, where the laws and authority of that country have jurisdiction. All information collected by the Photo-Ticket application is encrypted at source to ensure confidentiality. By hiring a Photo-Ticket lawyer, your information will be protected by attorney-client privilege and will not be disclosed without your express consent. The lawyer cannot use confidential information to obtain a benefit for himself or a third party."
          }
        </P>
        <H2>{"Use and Protection of Your Personal Data"}</H2>
        <P>
          {
            "The Photo-Ticket website and application have computer security measures protecting your information against loss, theft and unauthorized changes. Our servers use 256-bit Advanced Encryption Standard technology to protect your personal information and any information indicated on your ticket. Your financial information is held by Stripe, a company specialized in secure online payments."
          }
        </P>
        <H2>{"Privacy Policy Changes"}</H2>
        <P>
          {
            "Photo-Ticket reserves the right to modify its confidentiality agreement to adapt to users’ comments, legislative changes and various ethical precautions. We encourage you to regularly review our Privacy policy."
          }
        </P>
        <H2>{"Withdrawal of Your Consent"}</H2>
        <P>
          {
            "Subject to legal obligation, we will not disclose your personal information without your explicit permission. If you wish to consult or modify your personal information, Photo-Ticket undertakes to take reasonable means to respond to your request as soon as possible."
          }
        </P>
        <H1>{"Terms and Conditions of Use"}</H1>
        <P>
          {
            "Photo-Ticket Inc. is the company that administers photo-ticket.com and the Photo-Ticket application. The use of these platforms is governed by the Terms and Conditions of Use which constitute a reciprocal agreement between the company and its users. You must read the Terms and Conditions of Use before interacting with photo-ticket.com or the Photo-Ticket mobile application. Photo-Ticket reserves the right to refuse a customer or a user without specifying the reason. Photo-Ticket focuses its efforts to ensure a faithful representation of laws and regulations in force in Montreal and strives to update its content. However, Photo-Ticket cannot guarantee the content. Laws and regulations in force in Quebec are entirely available on the Government of Quebec’s web platforms. Photo-Ticket assumes no responsibility for errors or omissions in their content. The use of the Photo-Ticket application is at your own risk. Photo-Ticket Inc. and third parties involved in the creation, production and implementation of the application will not be held responsible for any direct or indirect harm related to the use of the application without having recourse to a lawyer. NO WARRANTY WILL BE GIVEN BY PHOTO-TICKET INC. AS TO THE USE OF THE INFORMATION CONTAINED IN ITS MOBILE APPLICATION. Although Photo-Ticket makes every effort to prevent such a situation, Photo-Ticket assumes no responsibility and cannot be held responsible for any damage caused by computer viruses or data loss caused by a computer attack. The content of the Photo-Ticket mobile application can only be used for non-commercial purposes. No modification, reproduction or distribution of the content is permitted without the written consent of Photo-Ticket Inc. Copyright is the exclusive property of Photo-Ticket Inc. The content of the www.photo-ticket.com website and the Photo-Ticket application is protected by the intellectual property of Photo-Ticket Inc. Any unauthorized use of Photo-Ticket’s visual material is prohibited and may lead to civil prosecution. Any use of the brand or logo is prohibited without the written consent of Photo-Ticket Inc. Any prohibited use may lead to civil prosecution. The Photo-Ticket website and application may contain web links that direct users to other web platforms. Photo-Ticket is not the administrator of these platforms and has no control over the changing content of these platforms. Photo-Ticket strives to properly guide its users but cannot be held responsible for any damage caused by an external web platform. Photo-Ticket reserves the right to change its Terms and Conditions of Use. It is your responsibility to make sure you receive and read all new policies. You are advised to read the Terms and Conditions of Use at each visit or when purchasing legal services on the website or via the Photo-Ticket application. To the extent that you do not agree with the Terms and Conditions of Use, you must no longer use the services offered by Photo-Ticket. The Photo-Ticket website and application are reserved for the exclusive use of individuals who are old enough to drive legally in Quebec (16 years old). All prices displayed on the website or in the Photo-Ticket application are in Canadian currency. The Photo-Ticket app only works with internet connection and may use your data if not connected to a Wi-Fi network. For any questions or comments regarding the Photo-Ticket policy, please contact phototicketmontreal@gmail.com."
          }
        </P>
      </View>
    ),
    fr: (
      <View>
        <H1>{"Politique de confidentialité"}</H1>
        <P>
          {
            "Photo-Ticket inc. et ses mandataires s’engagent à ne pas divulguer vos données personnelles. Cette entente de confidentialité contient les modalités que respecte Photo-Ticket."
          }
        </P>
        <H2>{"Communiquez avec nous"}</H2>
        <P>
          {
            "Photo-Ticket est une entreprise québécoise située à Montréal. Photo-Ticket vous encourage à donner vos commentaires sur sa politique de confidentialité à info@photo-ticket.com ou au 438 872-5034."
          }
        </P>
        <H2>{"Renseignements personnels"}</H2>
        <P>
          {
            "En utilisant les services gratuits de l’application Photo-Ticket, vous risquez de fournir des renseignements personnels. Nous définissons « renseignements personnels » comme tout renseignement susceptible de vous identifier. Notamment, ceux-ci comprennent votre nom, adresse, numéro d’immatriculation, numéro de permis de conduire et numéro d’assurance maladie. Photo-Ticket s’engage à ne divulguer aucune de ces informations personnelles sans votre consentement explicite et à prendre les moyens raisonnables pour en assurer la confidentialité. Photo-Ticket se réserve également le droit d’utiliser les cookies (témoins de connexion) créés par l’utilisation de ses plateformes pour améliorer son service et l’expérience client. Pour être en mesure de vous aider, Photo-Ticket archive ses données sur des serveurs informatiques sécurisés par l’entreprise Google. L’emplacement de ces serveurs peut être à l’extérieur du Canada, là où les lois et l’autorité de ce pays ont juridiction. Toute l’information recueillie par l’application Photo-Ticket est cryptée à la source pour en assurer la confidentialité. En mandatant un avocat de Photo-Ticket, vos informations seront protégées par le secret professionnel et ne pourront être divulguées sans votre consentement explicite. L’avocat ne peut pas faire usage d’un renseignement confidentiel en vue d’obtenir un avantage pour lui-même ou pour un tiers."
          }
        </P>
        <H2>{"Usage et protection de vos données personnelles"}</H2>
        <P>
          {
            "Le site web et l’application Photo-Ticket protègent vos informations contre les pertes, les vols et les modifications non autorisées grâce à des mesures de sécurité informatique. Nos serveurs utilisent la technologie 256-bit Advanced Encryption Standard pour protéger vos renseignements personnels et toute donnée apparaissant sur votre contravention. Vos données financières sont détenues par Stripe, une entreprise spécialisée dans les paiements en ligne sécurisés."
          }
        </P>
        <H2>{"Changements à la politique de confidentialité"}</H2>
        <P>
          {
            "Photo-Ticket se réserve le droit de modifier son entente de confidentialité pour s’adapter aux commentaires des usagers, aux modifications législatives et aux diverses précautions déontologiques. Nous vous encourageons à prendre régulièrement connaissance de nos ententes de confidentialité."
          }
        </P>
        <H2>{"Retrait de votre consentement"}</H2>
        <P>
          {
            "Sous réserve d’une obligation légale, nous ne divulguerons pas vos renseignements personnels sans votre autorisation explicite. Si vouS désirez consulter ou modifier vos renseignements, Photo-Ticket s’engage à prendre les moyens raisonnables pour répondre à vos demandes dans les plus brefs délais."
          }
        </P>
        <H1>{"Conditions et règles d’utilisation"}</H1>
        <P>
          {
            "Photo-Ticket inc. est l’entreprise qui administre le site photo-ticket.com et l’application Photo-Ticket. L’utilisation de ces plateformes est régie par des conditions et des règles d’utilisation qui constituent une entente réciproque entre l’entreprise et ses utilisateurs. Vous devez prendre connaissance des Conditions et règles d’utilisation avant toute interaction avec photo-ticket.com ou l’application mobile Photo-Ticket. Photo-Ticket se réserve le droit de refuser un client ou un utilisateur sans en préciser la raison. Photo-Ticket concentre ses efforts pour assurer une représentation fidèle des lois et des règlements en vigueur à Montréal et s’efforce de mettre à jour son contenu. Cependant, Photo-Ticket ne peut assurer aucune garantie quant à son contenu. Les lois et les règlements en vigueur au Québec sont disponibles en intégralité sur les plateformes web du gouvernement du Québec. Photo-Ticket n’assume aucune responsabilité quant aux erreurs ou aux omissions dans leur contenu. L’utilisation de l’application Photo-Ticket est à vos risques. Photo-Ticket inc. et les tiers participant à la création, à la production et à la mise en œuvre de l’application ne sauraient être tenus responsables de tout préjudice direct ou indirect lié à l’utilisation de l’application sans avoir fait appel à un avocat. AUCUNE GARANTIE NE SERA DONNÉE PAR PHOTO-TICKET INC. QUANT À L’UTILISATION DE L’INFORMATION CONTENUE DANS SON APPLICATION MOBILE. Bien que Photo-Ticket s’assure de faire le nécessaire pour prévenir une telle situation, Photo-Ticket n’assume aucune responsabilité et ne saurait être tenue responsable de tout dommage causé par des virus informatiques ou des pertes de données causées par une attaque informatique externe. Le contenu de l’application mobile Photo-Ticket ne peut qu’être utilisé à des fins non commerciales. Aucune modification, reproduction ou diffusion du contenu de l’application Photo-Ticket n’est permise sans le consentement écrit de Photo-Ticket inc. Les droits d’auteur sont la propriété exclusive de Photo-Ticket inc. Le contenu du site web photo-ticket.com et de l’application Photo-Ticket est protégé par la propriété intellectuelle de Photo-Ticket inc. Tout usage non autorisé du matériel visuel de Photo-Ticket est interdit et pourrait mener à des poursuites civiles. Tout usage de la marque ou du logo est interdit sans l’accord écrit de Photo-Ticket inc. Tout usage interdit pourrait mener à des poursuites civiles. Le site web et l’application Photo-Ticket peuvent contenir des liens dirigeant les utilisateurs vers d’autres plateformes web. Photo-Ticket n’est pas l’administrateur de ces plateformes et ne possède aucun contrôle quant au contenu changeant de celles-ci. Photo-Ticket s’efforce de guider correctement ses utilisateurs, mais ne saurait être tenue responsable de tout préjudice causé par une plateforme web externe. Photo-Ticket se réserve le droit de changer ses Conditions et règles d’utilisation. Il est de votre responsabilité de veiller à la réception et à la lecture des nouvelles politiques. Il vous est recommandé de lire les Conditions et règles d’utilisation à chaque visite ou lors de l’achat de services juridiques sur le site web ou dans l’application Photo-Ticket. Dans la mesure où vous n’êtes pas d’accord avec les Conditions et règles d’utilisation, vous ne devez plus utiliser les services offerts par Photo-Ticket. Le site web et l’application Photo-Ticket sont réservés à l’usage exclusif des individus ayant l’âge légal de conduire au Québec (16 ans). Tous les prix affichés sur le site web ou dans l’application Photo-Ticket sont en devise canadienne. L’application Photo-Ticket ne fonctionne qu’avec une connexion internet et peut utiliser vos données mobiles si votre appareil n’est pas connecté à un réseau Wi-Fi. Pour toute question ou commentaire quant à la politique de Photo-Ticket, veuillez nous écrire à l’adresse suivante : info@photo-ticket.com."
          }
        </P>
      </View>
    )
  },
  checkbox1: {
    en:
      "I understand that the information presented in the Photo-Ticket application is not exhaustive and that the interpretation of laws and regulations is the sole responsibility of the courts.",
    fr:
      "Je comprends que l’information présentée dans l’application Photo-Ticket n’est pas exhaustive et que l’interprétation des lois et des règlements revient exclusivement aux tribunaux."
  },
  checkbox2: {
    en:
      "I understand that the information contained in the Photo-Ticket application is only informative and cannot be perceived as legal advice in my specific case.",
    fr:
      "Je comprends que l’information contenue dans l’application Photo-Ticket est seulement de nature informative et ne saurait être perçue comme des conseils juridiques s’appliquant à mon cas particulier."
  },
  checkbox3: {
    en:
      "I understand that Photo-Ticket contains no legal defence and that its sole purpose is for the general understanding of the alleged offence. Only a lawyer can guide me before taking the appropriate legal action.",
    fr:
      "Je comprends que Photo-Ticket ne présente aucune défense et que son utilisation ne devrait servir qu’à la compréhension générale de l’infraction reprochée. Seul un avocat peut me guider avant d’entreprendre le recours judiciaire approprié."
  },
  checkbox4: {
    en:
      "I understand that the technology used in the Photo-Ticket application is not infallible and that it is my responsibility to ensure that the information provided corresponds in fact to the section of law listed in the Part C of my statement of offence.",
    fr:
      "Je comprends que la technologie utilisée dans l’application Photo-Ticket n’est pas infaillible et qu’il est de ma responsabilité de m’assurer que l’information qui m’est présentée correspond réellement à l’article de loi inscrit à la partie C de ma contravention."
  },
  checkbox5: {
    en:
      "I understand that the information in bold is only a summary of the elements contained in the law and that it is my responsibility to always read the original legislation.",
    fr:
      "Je comprends que l’information en gras n’est qu’un résumé des éléments contenus dans la loi et qu’il est de ma responsabilité de toujours prendre connaissance du texte de loi original."
  },
  checkbox6: {
    en:
      "I have read the full text of the Privacy Policy and Terms and Conditions of Use. I agree to comply with them.",
    fr:
      "J’ai pris connaissance de l’intégralité de la Politique de confidentialité et des Conditions et règles d’utilisation. J’accepte de les respecter."
  },

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
      "Repérez le numéro de l'article (art.) et la loi visée sur votre constant d'infraction."
  },
  next: {
    en: "Next",
    fr: "Suivant"
  },
  select: {
    en: "Select your offense number.",
    fr: "Sélectionnez votre infraction."
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
      "Pour faciliter la lecture, veuillez viser l’article se trouvant sur votre contravention"
  }
};
const articleConfirmation = {
  detected: {
    en: "We detected:",
    fr: "Nous avons détecté:"
  },
  isItRightPt1: {
    en: "Is it the article that",
    fr: "Est-ce bien l'article"
  },
  isItRightPt2: {
    en: "appears on your ticket?",
    fr: "sur votre constant d'infraction?"
  },
  yesContinue: {
    en: "Yes, continue.",
    fr: "Oui, continuer."
  },
  noManualInput: {
    en: "No, proceed by manual input.",
    fr: "Non, effectuer une recherche manuelle."
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
  ...photoInstructions,
  ...articleConfirmation
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
