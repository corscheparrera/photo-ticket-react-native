import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CheckBox from "react-native-check-box";
import ButtonPrimary from "../components/ButtonPrimary";
import Header from "../components/Header";
import polyglot from "../utils/translator";
const checkboxes = [
  {
    name: "check-box-1",
    key: "checkBox1",
    label:
      "Je comprends que l’information présentée dans l’application Photo-Ticket n’est pas exhaustive et que l’interprétation des lois et des règlements revient exclusivement aux tribunaux."
  },
  {
    name: "check-box-2",
    key: "checkBox2",
    label:
      "Je comprends que l’information contenue dans l’application Photo-Ticket est seulement de nature informative et ne saurait être perçue comme des conseils juridiques s’appliquant à mon cas particulier."
  },
  {
    name: "check-box-3",
    key: "checkBox3",
    label:
      "Je comprends que Photo-Ticket ne présente aucune défense et que son utilisation ne devrait servir qu’à la compréhension générale de l’infraction reprochée. Seul un avocat peut me guider avant d’entreprendre le recours judiciaire approprié."
  },
  {
    name: "check-box-4",
    key: "checkBox4",
    label:
      "Je comprends que la technologie utilisée dans l’application Photo-Ticket n’est pas infaillible et qu’il est de ma responsabilité de m’assurer que l’information qui m’est présentée correspond réellement à l’article de loi inscrit à la partie C de ma contravention."
  },
  {
    name: "check-box-5",
    key: "checkBox5",
    label:
      "Je comprends que l’information en gras n’est qu’un résumé des éléments contenus dans la loi et qu’il est de ma responsabilité de toujours prendre connaissance du texte de loi original."
  },
  {
    name: "check-box-6",
    key: "checkBox6",
    label:
      "J’ai pris connaissance de l’intégralité de la Politique de confidentialité et des Conditions et règles d’utilisation. J’accepte de les respecter."
  }
];

export default class MentionsLegales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      checkBox4: false,
      checkBox5: false,
      checkBox6: false
    };
  }
  showTerms = () => {
    if (
      this.state.checkBox1 &&
      this.state.checkBox2 &&
      this.state.checkBox3 &&
      this.state.checkBox4 &&
      this.state.checkBox5 &&
      this.state.checkBox6
    ) {
      return (
        <View style={styles.content}>
          <Text style={{ fontSize: 20 }}>{polyglot.t("thanks")}</Text>
          <ButtonPrimary
            onPress={() => this.props.navigation.goBack()}
            text={polyglot.t("start")}
          />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <Text style={styles.h1}>Politique de confidentialité</Text>
          <Text style={styles.p}>
            Photo-Ticket inc. et ses mandataires s’engagent à ne pas divulguer
            vos données personnelles. Cette entente de confidentialité contient
            les modalités que respecte Photo-Ticket.
          </Text>
          <Text style={styles.h2}>Communiquez avec nous</Text>
          <Text style={styles.p}>
            Photo-Ticket est une entreprise québécoise située à Montréal.
            Photo-Ticket vous encourage à donner vos commentaires sur sa
            politique de confidentialité à info@photo-ticket.com ou au 438
            872-5034.
          </Text>
          <Text style={styles.h2}>Renseignements personnels</Text>
          <Text style={styles.p}>
            En utilisant les services gratuits de l’application Photo-Ticket,
            vous risquez de fournir des renseignements personnels. Nous
            définissons « renseignements personnels » comme tout renseignement
            susceptible de vous identifier. Notamment, ceux-ci comprennent votre
            nom, adresse, numéro d’immatriculation, numéro de permis de conduire
            et numéro d’assurance maladie. Photo-Ticket s’engage à ne divulguer
            aucune de ces informations personnelles sans votre consentement
            explicite et à prendre les moyens raisonnables pour en assurer la
            confidentialité. Photo-Ticket se réserve également le droit
            d’utiliser les cookies (témoins de connexion) créés par
            l’utilisation de ses plateformes pour améliorer son service et
            l’expérience client. Pour être en mesure de vous aider, Photo-Ticket
            archive ses données sur des serveurs informatiques sécurisés par
            l’entreprise Google. L’emplacement de ces serveurs peut être à
            l’extérieur du Canada, là où les lois et l’autorité de ce pays ont
            juridiction. Toute l’information recueillie par l’application
            Photo-Ticket est cryptée à la source pour en assurer la
            confidentialité. En mandatant un avocat de Photo-Ticket, vos
            informations seront protégées par le secret professionnel et ne
            pourront être divulguées sans votre consentement explicite. L’avocat
            ne peut pas faire usage d’un renseignement confidentiel en vue
            d’obtenir un avantage pour lui-même ou pour un tiers.
          </Text>
          <Text style={styles.h2}>
            Usage et protection de vos données personnelles
          </Text>
          <Text style={styles.p}>
            Le site web et l’application Photo-Ticket protègent vos informations
            contre les pertes, les vols et les modifications non autorisées
            grâce à des mesures de sécurité informatique. Nos serveurs utilisent
            la technologie 256-bit Advanced Encryption Standard pour protéger
            vos renseignements personnels et toute donnée apparaissant sur votre
            contravention. Vos données financières sont détenues par Stripe, une
            entreprise spécialisée dans les paiements en ligne sécurisés.
          </Text>
          <Text style={styles.h2}>
            Changements à la politique de confidentialité
          </Text>
          <Text style={styles.p}>
            Photo-Ticket se réserve le droit de modifier son entente de
            confidentialité pour s’adapter aux commentaires des usagers, aux
            modifications législatives et aux diverses précautions
            déontologiques. Nous vous encourageons à prendre régulièrement
            connaissance de nos ententes de confidentialité.
          </Text>
          <Text style={styles.h2}>Retrait de votre consentement</Text>
          <Text style={styles.p}>
            Sous réserve d’une obligation légale, nous ne divulguerons pas vos
            renseignements personnels sans votre autorisation explicite. Si vous
            désirez consulter ou modifier vos renseignements, Photo-Ticket
            s’engage à prendre les moyens raisonnables pour répondre à vos
            demandes dans les plus brefs délais.
          </Text>
          <Text style={styles.h1}>Conditions et règles d’utilisation</Text>
          <Text style={styles.p}>
            Photo-Ticket inc. est l’entreprise qui administre le site
            photo-ticket.com et l’application Photo-Ticket. L’utilisation de ces
            plateformes est régie par des conditions et des règles d’utilisation
            qui constituent une entente réciproque entre l’entreprise et ses
            utilisateurs. Vous devez prendre connaissance des Conditions et
            règles d’utilisation avant toute interaction avec photo-ticket.com
            ou l’application mobile Photo-Ticket. Photo-Ticket se réserve le
            droit de refuser un client ou un utilisateur sans en préciser la
            raison. Photo-Ticket concentre ses efforts pour assurer une
            représentation fidèle des lois et des règlements en vigueur à
            Montréal et s’efforce de mettre à jour son contenu. Cependant,
            Photo-Ticket ne peut assurer aucune garantie quant à son contenu.
            Les lois et les règlements en vigueur au Québec sont disponibles en
            intégralité sur les plateformes web du gouvernement du Québec.
            Photo-Ticket n’assume aucune responsabilité quant aux erreurs ou aux
            omissions dans leur contenu. L’utilisation de l’application
            Photo-Ticket est à vos risques. Photo-Ticket inc. et les tiers
            participant à la création, à la production et à la mise en œuvre de
            l’application ne sauraient être tenus responsables de tout préjudice
            direct ou indirect lié à l’utilisation de l’application sans avoir
            fait appel à un avocat. AUCUNE GARANTIE NE SERA DONNÉE PAR
            PHOTO-TICKET INC. QUANT À L’UTILISATION DE L’INFORMATION CONTENUE
            DANS SON APPLICATION MOBILE. Bien que Photo-Ticket s’assure de faire
            le nécessaire pour prévenir une telle situation, Photo-Ticket
            n’assume aucune responsabilité et ne saurait être tenue responsable
            de tout dommage causé par des virus informatiques ou des pertes de
            données causées par une attaque informatique externe. Le contenu de
            l’application mobile Photo-Ticket ne peut qu’être utilisé à des fins
            non commerciales. Aucune modification, reproduction ou diffusion du
            contenu de l’application Photo-Ticket n’est permise sans le
            consentement écrit de Photo-Ticket inc. Les droits d’auteur sont la
            propriété exclusive de Photo-Ticket inc. Le contenu du site web
            photo-ticket.com et de l’application Photo-Ticket est protégé par la
            propriété intellectuelle de Photo-Ticket inc. Tout usage non
            autorisé du matériel visuel de Photo-Ticket est interdit et pourrait
            mener à des poursuites civiles. Tout usage de la marque ou du logo
            est interdit sans l’accord écrit de Photo-Ticket inc. Tout usage
            interdit pourrait mener à des poursuites civiles. Le site web et
            l’application Photo-Ticket peuvent contenir des liens dirigeant les
            utilisateurs vers d’autres plateformes web. Photo-Ticket n’est pas
            l’administrateur de ces plateformes et ne possède aucun contrôle
            quant au contenu changeant de celles-ci. Photo-Ticket s’efforce de
            guider correctement ses utilisateurs, mais ne saurait être tenue
            responsable de tout préjudice causé par une plateforme web externe.
            Photo-Ticket se réserve le droit de changer ses Conditions et règles
            d’utilisation. Il est de votre responsabilité de veiller à la
            réception et à la lecture des nouvelles politiques. Il vous est
            recommandé de lire les Conditions et règles d’utilisation à chaque
            visite ou lors de l’achat de services juridiques sur le site web ou
            dans l’application Photo-Ticket. Dans la mesure où vous n’êtes pas
            d’accord avec les Conditions et règles d’utilisation, vous ne devez
            plus utiliser les services offerts par Photo-Ticket. Le site web et
            l’application Photo-Ticket sont réservés à l’usage exclusif des
            individus ayant l’âge légal de conduire au Québec (16 ans). Tous les
            prix affichés sur le site web ou dans l’application Photo-Ticket
            sont en devise canadienne. L’application Photo-Ticket ne fonctionne
            qu’avec une connexion internet et peut utiliser vos données mobiles
            si votre appareil n’est pas connecté à un réseau Wi-Fi. Pour toute
            question ou commentaire quant à la politique de Photo-Ticket,
            veuillez nous écrire à l’adresse suivante : info@photo-ticket.com.
          </Text>

          {checkboxes.map(item => (
            <CheckBox
              name={item.name}
              key={item.key}
              style={{ padding: 10 }}
              onClick={() => {
                this.state[item.key]
                  ? this.setState({ [item.key]: false })
                  : this.setState({ [item.key]: true });

                console.log(item.key);
              }}
              isChecked={this.state[item.key]}
              rightText={item.label}
            />
          ))}
        </ScrollView>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={polyglot.t("titleLegal")}
          navigation={this.props.navigation}
        />
        {this.showTerms()}
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
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  h2: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10
  },
  p: {
    marginTop: 12,
    padding: 10
  }
});
