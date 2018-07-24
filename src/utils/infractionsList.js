import { Text } from 'react-native'
import React from "react"

const Bold = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
const Color = props => <Text style={{ color: '#0074D9' }}>{props.children}</Text>
const Small = props => <Text style={{ fontSize: 10 }}>{props.children}</Text>

const CSR = {
    '6': {
        fr: {
            art: 'Art: 6',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immatriculation obligatoire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le véhicule n’est pas immatriculé.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule est exempté de l’immatriculation lorsqu’il est entreposé par le fabricant ou, pendant sa livraison par un fabricant à un commerçant de véhicules routiers. Cette exception ne s’applique plus lorsque le véhicule est utilisé sur un chemin public. </Bold>
                    {'\n'}
                    <Small>Référence: art. 15 (1) C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Le véhicule entreposé par un commerçant de véhicules routiers en vue de le vendre est exempté de l’immatriculation. Cette exception ne s’applique plus lorsque le véhicule est utilisé sur un chemin public. </Bold>
                    {'\n'}
                    <Small>Référence: art. 15 (2) C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Le véhicule de promenade, la remorque ou la semi-remorque d’un non-résident est exempté de l’immatriculation pour une période de 6 mois consécutifs depuis son arrivée au Québec, lorsque sont réunies les conditions suivantes:
                  {'\n'}
                        1- Le véhicule est immatriculé conformément à la loi du lieu de la résidence principale de son propriétaire.
                      {'\n'}
                        2- Le véhicule porte la plaque d’immatriculation valide de ce lieu.
                      {'\n'}
                        3- Vous possédez la preuve de cette immatriculation. </Bold>
                    {'\n'}
                    <Small>Référence: art. 19 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Le véhicule routier acquis en dehors du Québec par un étudiant, coopérant ou stagiaire étranger qui séjourne au Québec, pendant la durée de ses études ou de son stage est exempté de l’immatriculation, lorsque sont réunies les conditions suivantes:
                  {'\n'}
                        1- Le véhicule est immatriculé conformément à la loi du lieu de la résidence principale de son propriétaire.
                      {'\n'}
                        2- Le véhicule porte la plaque d’immatriculation valide de ce lieu.
                      {'\n'}
                        3- Vous possédez la preuve de cette immatriculation.
                      {'\n'}
                        4- Le même droit est accordé au Québécois qui séjourne au lieu du domicile de cet étudiant. </Bold>
                    {'\n'}
                    <Small>Référence: art. 20 C.s.r.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n'}
                    Consultez un de nos avocats pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 6 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout véhicule routier doit être immatriculé, à moins qu’il n’en soit exempté par le présent code.
                  {'\n\n'}
                    <Bold>Art. 15 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sont exemptés de l’immatriculation, sauf s’ils sont utilisés sur un chemin public, les véhicules routiers suivants:
                  {'\n'}
                    1°  le véhicule entreposé par le fabricant ou, pendant sa livraison, celui livré par un fabricant à un commerçant de véhicules routiers;
                  {'\n'}
                    2°  le véhicule entreposé par un commerçant de véhicules routiers en vue de le vendre;
                  {'\n'}
                    3°  le véhicule confié à la gestion du Curateur public ou au ministre du Revenu dans ses fonctions d’administrateur provisoire de biens;
                  {'\n'}
                    4°  le véhicule saisi ou remisé par un agent de la paix;
                  {'\n'}
                    5°  le véhicule conçu pour être utilisé principalement sur la neige, sauf la motoneige à laquelle s’applique la Loi sur les véhicules hors route (chapitre V‐1.2) dans les cas prévus par règlement.
                    L’exemption prévue au premier alinéa ne s’applique à l’égard des véhicules visés aux paragraphes 1° et 2°, autres qu’une remorque ou une semi-remorque d’une masse nette de moins de 1 300 kg, que si le commerçant de véhicules routiers est titulaire d’un permis délivré en vertu de la Loi sur la protection du consommateur (chapitre P-40.1).
                  {'\n\n'}
                    <Bold>Art. 19 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sont exemptés de l’immatriculation, pour une période de six mois consécutifs depuis leur arrivée au Québec, le véhicule de promenade, la remorque ou la semi-remorque d’un non-résident, lorsque sont réunies les conditions suivantes:
                  {'\n'}
                    1°  le véhicule est immatriculé conformément à la loi du lieu de la résidence principale ou de l’établissement d’entreprise de son propriétaire;
                  {'\n'}
                    2°  le véhicule porte la plaque d’immatriculation valide de ce lieu;
                  {'\n'}
                    3°  le conducteur fournit, à la demande de la Société ou d’un agent de la paix, la preuve de cette immatriculation.
                  {'\n\n'}
                    <Bold>Art. 20 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Est exempté de l’immatriculation, un véhicule routier acquis en dehors du Québec par un étudiant, coopérant ou stagiaire étranger qui séjourne au Québec, pendant la durée de ses études ou de son stage, lorsque sont réunies les conditions suivantes:
                  {'\n'}
                    1°  le véhicule est immatriculé conformément à la loi du lieu de la résidence principale ou de l’établissement de son propriétaire;
                  {'\n'}
                    2°  le véhicule porte la plaque d’immatriculation valide de ce lieu;
                  {'\n'}
                    3°  l’étudiant, le coopérant ou le stagiaire fournit, à la demande de la Société ou d’un agent de la paix, la preuve de cette immatriculation;
                  {'\n'}
                    4°  le même droit est accordé aux étudiants, aux coopérants ou aux stagiaires du Québec qui séjournent au lieu du domicile de cet étudiant, coopérant ou stagiaire.
            </Text>
            ),
            image: '6.png',
            analyse: '',
        },
        en: {
            art: 'Section 6',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Registered road vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the road vehicle;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The vehicle is not registered.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• A vehicle stocked by the manufacturer or, during delivery, a vehicle delivered by a manufacturer to a road vehicle dealer is exempt from registration unless used on a public highway. </Bold>
                    {'\n'}
                    <Small>Reference: s. 15 (1) H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• A vehicle which a road vehicle dealer holds in stock for sale is exempt from registration unless used on a public highway. </Bold>
                    {'\n'}
                    <Small>Reference: s. 15 (2) H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The passenger vehicle, trailer or semi-trailer of a non-resident is exempt from registration in Québec for a period of 6 consecutive months from its arrival as long as three conditions are met:
                  {'\n'}
                        1- The vehicle is registered as required by the law of the main place of residence or the business establishment of its owner.
                      {'\n'}
                        2- The vehicle carries a valid registration plate of that place.
                      {'\n'}
                        3- You furnish the proof of that registration when requested. </Bold>
                    {'\n'}
                    <Small>Reference: s. 19 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• A road vehicle acquired outside Québec by a foreign student, coopérant or trainee staying in Québec is  exempt from registration for the duration of his studies or training as long as four conditions are met:
                  {'\n'}
                        1- The vehicle is registered as required by the law of the main place of residence of its owner or the place where he established residence.
                      {'\n'}
                        2- The vehicle carries a valid registration plate of that place.
                      {'\n'}
                        3- You furnish the proof of that registration when requested.
                      {'\n'}
                        4- The same right is granted to students from Québec staying in the place of domicile of that student. </Bold>
                    {'\n'}
                    <Small>Reference: s. 20 H.s.c.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 6 Highway safety Code.</Bold>
                    {'\n\n'}
                    Every road vehicle must be registered except a vehicle exempt from registration under this Code.
                  {'\n\n'}
                    <Bold>S. 15 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    The following road vehicles, unless used on a public highway, are exempt from registration:
                  {'\n'}
                    (1)  a vehicle stocked by the manufacturer or, during delivery, a vehicle delivered by a manufacturer to a road vehicle dealer;
                  {'\n'}
                    (2)  a vehicle which a road vehicle dealer holds in stock for sale;
                  {'\n'}
                    (3)  a vehicle entrusted to the management of the Public Curator or to the Minister of Revenue as provisional administrator of property;
                  {'\n'}
                    (4)  a vehicle seized or impounded by a peace officer;
                  {'\n'}
                    (5)  a vehicle designed mainly for use on snow, other than a snowmobile to which the Act respecting off-highway vehicles (chapter V‐1.2) applies in the cases prescribed by regulation.
                  {'\n'}
                    The exemption provided for in the first paragraph applies to vehicles referred to in subparagraphs 1 and 2, other than a trailer or semi-trailer with a net mass of less than 1,300 kg, only if the road vehicle dealer holds a permit issued under the Consumer Protection Act (chapter P-40.1)
                  {'\n\n'}
                    <Bold>s. 19 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    The passenger vehicle, trailer or semi-trailer of a non-resident is exempt from registration in Québec for a period of six consecutive months from his arrival if the following conditions are met:
                  {'\n'}
                    (1)  the vehicle is registered as required by the law of the main place of residence or the business establishment of its owner;
                  {'\n'}
                    (2)  the vehicle carries a valid registration plate of that place;
                  {'\n'}
                    (3)  the driver furnishes proof of that registration at the request of the Société or of a peace officer.
                  {'\n\n'}
                    <Bold>s. 20 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    A road vehicle acquired outside Québec by a foreign student, coopérant or trainee staying in Québec is exempt from registration for the duration of his studies or training if the following conditions are met:
                  {'\n'}
                    (1)  the vehicle is registered as required by the law of the main place of residence of its owner or the place where he established residence;
                  {'\n'}
                    (2)  the vehicle carries a valid registration plate of that place;
                  {'\n'}
                    (3)  the student, coopérant or trainee furnishes proof of that registration at the request of the Société or of a peace officer;
                  {'\n'}
                    (4)  the same right is granted to students, coopérants or trainees from Québec staying in the place of domicile of that student, coopérant or trainee.
            </Text>
            ),
            image: '6.png',
            analyse: '',
        },
    },
    '27': {
        fr: {
            art: 'Art: 27',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Signature du certificat d’immatriculation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire au nom duquel le véhicule est immatriculé;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous n’avez pas signé le certificat d’immatriculation émis par la SAAQ.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 27 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La personne au nom de laquelle l’immatriculation d’un véhicule routier a été effectuée par la Société doit signer son certificat d’immatriculation dès qu’elle le reçoit.
                  {'\n\n'}
                    Ce certificat doit porter la marque d’identification de la Société ou la signature d’une personne autorisée par celle-ci.
            </Text>
            ),
            image: '27+.png',
            analyse: '',
        },
        en: {
            art: 'Section 27',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Signing the registration certificate',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You did not sign the registration certificate issued by the SAAQ.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 27 Highway safety code.</Bold>
                    {'\n\n'}
                    The person in whose name registration of a road vehicle has been effected by the Société must sign the registration certificate upon receiving it.
                  {'\n\n'}
                    The certificate must bear the identifying mark of the Société or the signature of a person authorized by the Société.
            </Text>
            ),
            image: '27+.png',
            analyse: '',
        },
    },
    '30': {
        fr: {
            art: 'Art: 30',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Plaque solidement fixée',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> La plaque d’immatriculation n’est pas solidement fixée à l’arrière du véhicule.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 30 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le propriétaire d’un véhicule routier doit fixer solidement la plaque d’immatriculation qui lui a été délivrée à l’arrière du véhicule ou à tout autre endroit déterminé par règlement.
                  {'\n\n'}
                    Toutefois, si un règlement prescrit la délivrance de deux exemplaires de la plaque d’immatriculation, ceux-ci doivent être fixés l’un à l’avant et l’autre à l’arrière du véhicule.
                </Text>
            ),
            image: '6.png',
            analyse: '',
        },
        en: {
            art: 'Section 30',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Solidly attached registration plate',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The registration plate is not solidly attached to the rear of the vehicle.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 30 Highway safety code.</Bold>
                    {'\n\n'}
                    The owner of a road vehicle must solidly attach the registration plate issued to him to the rear of the vehicle or to such other place as is determined by regulation.
                  {'\n\n'}
                    Where a regulation prescribes the issue of two duplicates of the registration plate, one must be attached to the front of the vehicle and the other to the rear.
                  </Text>
            ),
            image: '6.png',
            analyse: '',
        },
    },
    '31.1': {
        fr: {
            art: 'Art: 31.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Frais d’immatriculation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Les frais d'immatriculation du véhicule n’ont pas été payés;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez renoncé au droit de circuler avec le véhicule;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Le véhicule a été remis en circulation.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 31.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Pour conserver le droit de circuler avec un véhicule routier immatriculé, le propriétaire de celui-ci, à moins d’en être exempté par règlement, doit, selon la fréquence prévue par règlement, payer à la Société les frais fixés par règlement, les droits fixés par règlement et revalorisés, le cas échéant, conformément à l’Art: 151.4 de la Loi sur l’assurance automobile (chapitre A-25), la contribution d’assurance fixée en vertu de l’Art: 151.1 de cette loi ainsi que, le cas échéant, la contribution des automobilistes au transport en commun fixée en vertu de l’Art: 88.3 de la Loi sur les transports (chapitre T-12), la contribution des propriétaires de véhicules hors route fixée en vertu de l’Art: 49.2 de la Loi sur les véhicules hors route (chapitre V-1.2), à l’égard d’un véhicule routier de la catégorie déterminée par règlement qui a sept années ou moins et dont la valeur est de plus de 40 000 $, un droit additionnel qui, lorsque calculé sur une base annuelle, correspond à 1% de la valeur du véhicule excédant 40 000 $ et à l’égard d’un véhicule routier de la catégorie déterminée par règlement, muni d’un moteur de la cylindrée déterminée par règlement, un droit additionnel fixé par règlement, au cours des périodes déterminées par règlement
                  {'\n\n'}
                    Le propriétaire qui renonce à circuler avec ce véhicule pendant la totalité ou une partie de la durée correspondant au paiement des sommes visées au premier alinéa, doit en aviser la Société avant la date d’échéance du paiement de ces sommes ou à toute date ultérieure déterminée par règlement. Il ne sera alors pas tenu de payer les droits, les droits additionnels, les frais, la contribution d’assurance, la contribution des automobilistes au transport en commun et la contribution des propriétaires de véhicules hors route prescrits pour la période au cours de laquelle cette renonciation a effet.
                  {'\n\n'}
                    Lorsque le propriétaire, à la date d’échéance, n’a pas payé les sommes prévues au premier alinéa ni avisé la Société de son intention de les payer par prélèvement automatique, lorsqu’il a avisé la Société qu’il renonce à circuler avec ce véhicule conformément au deuxième alinéa, nul ne peut, à compter du premier jour suivant la date d’échéance ou de la date à laquelle la Société a reçu l’avis de renonciation, selon le cas, et sans autre avis, remettre le véhicule routier en circulation.
                  {'\n\n'}
                    Le propriétaire peut demander à la Société, pendant la durée correspondant au paiement des sommes visées au premier alinéa, l’autorisation de remettre ce véhicule routier en circulation. Il doit alors acquitter les droits, les droits additionnels, les frais, la contribution d’assurance, la contribution des automobilistes au transport en commun, la contribution des propriétaires de véhicules hors route et les frais supplémentaires prévus par règlement, conformément aux conditions et modalités prévues par règlement.
                  {'\n\n'}
                    Nul ne peut remettre en circulation sur un chemin public un véhicule d’un modèle ou d’une catégorie dont le ministre interdit la circulation sur un tel chemin en vertu de l’Art: 633.1 ou dont le fabricant ou son importateur restreint l’utilisation à un usage hors route.
            </Text>
            ),
            image: '31.1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 31.1',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Registration fees',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You did not pay the fees related to vehicle registration; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You renounced the right to drive the vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The vehicle has been put back into operation.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 31.1 Highway safety code.</Bold>
                    {'\n\n'}
                    To retain the right to drive a registered road vehicle, the owner thereof must, unless exempted by regulation, pay to the Société, at the intervals and over the periods determined by regulation, the fees fixed by regulation, the duties fixed by regulation and revalorized, where applicable, in accordance with section 151.4 of the Automobile Insurance Act (chapter A-25), the insurance contribution fixed pursuant to section 151.1 of that Act and, where applicable, the contribution of motorists to public transit fixed pursuant to section 88.3 of the Transport Act (chapter T-12), the contribution of off-highway vehicle owners fixed pursuant to section 49.2 of the Act respecting off highway vehicles (chapter V 1.2) and, in respect of a road vehicle belonging to a class determined by regulation which is seven years old or less and whose value exceeds $40,000, an additional duty which, computed on an annual basis, is equal to 1% of the value of the vehicle in excess of $40,000 and, in respect of a road vehicle belonging to a class determined by regulation, equipped with an engine with a displacement determined by regulation, an additional duty determined by regulation.
                  {'\n\n'}
                    An owner who elects not to drive the vehicle for all or part of the period corresponding to the payment of the amounts referred to in the first paragraph must notify the Société thereof before the date on which payment of such amounts becomes due or any later date determined by regulation. In this case, he will not be bound to pay the duties, additional duties, fees, insurance contribution, contribution of motorists to public transit or contribution of off-highway vehicle owners prescribed for the period during which such election has effect.
                  {'\n\n'}
                    If, on the due date, the owner has not paid the amounts referred to in the first paragraph or notified the Société of his intention to pay them by pre-authorized debit or if the owner has notified the Société of his election not to drive the vehicle in accordance with the second paragraph, no person may, as of the first day following the due date or as of the date on which the Société received the notice of election not to drive, and without further notice, put the road vehicle back into operation.
                  {'\n\n'}
                    The owner may, during the period corresponding to the payment of the amounts referred to in the first paragraph, apply to the Société to obtain the authorization to put the road vehicle back into operation. He must, in that case, pay the duties, additional duties and fees, the insurance contribution, the contribution of motorists to public transit, the contribution of off-highway vehicle owners and the additional fee prescribed by regulation, in accordance with the terms and conditions prescribed by regulation.
                  {'\n\n'}
                    No person shall put a vehicle back into operation on a public highway if it is of a model or class whose use on public highways has been prohibited by the Minister under section 633.1 or if it has been restricted to off-highway use by its manufacturer or importer.
            </Text>
            ),
            image: '31.1+.png',
            analyse: '',
        },
    },
    '32 al. 2': {
        fr: {
            art: 'Art: 32 al. 2',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Plaque lisible',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> La plaque d’immatriculation n’est pas libre de tout objet pouvant en empêcher la lecture.</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La plaque d’immatriculation n’est pas libre de toute matière pouvant en empêcher la lecture.</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La plaque d’immatriculation n’est pas suffisamment éclairée.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 32 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Une plaque d’immatriculation ne peut porter une inscription autre que celles déterminées par la Société.
                  {'\n\n'}
                    La plaque d’immatriculation doit être libre de tout objet ou de toute matière pouvant en empêcher la lecture. Elle doit, en outre, lorsqu’elle est apposée à l’arrière du véhicsule, être suffisamment éclairée.
            </Text>
            ),
            image: '6.png',
            analyse: '',
        },
        en: {
            art: 'Section 32 (2)',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Plate legibility',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The registration plate is not free of any object that could impair its legibility. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The registration plate is not free of any matter that could impair its legibility.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The registration plate is not sufficiently lit.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 32 Highway safety code.</Bold>
                    {'\n\n'}
                    No registration plate may bear any inscription other than those determined by the Société.
                    {'\n\n'}
                    The registration plate must be free of any object or matter that could impair its legibility; it must also, if attached to the rear of the vehicle, be sufficiently lighted.
            </Text>
            ),
            image: '6.png',
            analyse: '',
        },
    },
    '34': {
        fr: {
            art: 'Art: 34',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Autre plaque',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Une autre plaque est apposée sur le véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Une vignette est apposée sur le véhicule ou sur la plaque;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Cette plaque ou cette vignette peut être confondue avec une plaque ou une vignette délivrée par la SAAQ.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 34 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Aucune plaque ou vignette qui peut être confondue avec une plaque d’immatriculation ou une vignette de contrôle délivrée par la Société ou par une autre autorité administrative compétente ne peut être fixée sur un véhicule routier ou apposée sur une plaque, sauf s’il s’agit d’une plaque ou d’une vignette requise en vertu d’une autre loi en vigueur au Québec ou d’une plaque fixée conformément aux normes et aux conditions établies en vertu du paragraphe 19° de l’Art: 618.
            </Text>
            ),
            image: '31.1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 34',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Other plate',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Another plate is attached or affixed to the vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}A sticker is attached or affixed to the vehicle or the plate;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> This plate or sticker may be confused with a registration plate or a validation sticker issued by the SAAQ.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 34 Highway safety code.</Bold>
                    {'\n\n'}
                    No plate or sticker that may be confused with a registration plate or validation sticker issued by the Société or by any other competent administrative authority may be attached to a road vehicle or affixed to a plate, except in the case of a plate or sticker required under another law in force in Québec or of a plate attached in compliance with standards and conditions established under paragraph 19 of section 618.
            </Text>
            ),
            image: '31.1+.png',
            analyse: '',
        },
    },
    '35': {
        fr: {
            art: 'Art: 35',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Certificat d’immatriculation et preuve d’assurance',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur ou avez la garde du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous n’avez pas en votre possession le certificat d’immatriculation du véhicule.</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’avez pas en votre possession la preuve d’assurance du véhicule.</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’avez pas la copie du contrat de location si le véhicule est loué pour moins d’un an ou s’il est prêté par un commerçant de véhicules routiers.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous n’aviez pas le certificat d’immatriculation, puisque le véhicule a été immatriculé il y a moins de 10 jours. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 35 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La personne qui conduit un véhicule routier ou qui en a la garde ou le contrôle doit avoir avec elle le certificat d’immatriculation du véhicule ou une copie de celui-ci, sauf dans les 10 jours de l’immatriculation, ainsi que l’attestation d’assurance prévue par la Loi sur l’assurance automobile (chapitre A-25).
                  {'\n\n'}
                    Si le certificat d’immatriculation a été délivré en vertu du Régime d’immatriculation international (IRP), cette personne doit avoir avec elle l’original du certificat, sauf dans la mesure prévue par ce régime.
                  {'\n\n'}
                    Si le véhicule routier est loué pour une période de moins d’un an ou s’il a été prêté par un commerçant de véhicules routiers, elle doit également avoir avec elle le contrat de location ou une copie de celui-ci ou un document faisant preuve de la durée du prêt.
                  {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler. Il s’applique également sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 35',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            offence: 'Registration certificate and insurance proof',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver or having the care or control of the road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not have the registration certificate in your possession.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not have the insurance proof in your  possession.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not have a copy of the contract of lease if the vehicle is leased for less than one year or if it has been lent by a road vehicle dealer.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You did not have the registration certificate because the vehicle registration was made less than 10 days ago. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 35 Highway safety code.</Bold>
                    {'\n\n'}
                    The person driving or having the care or control of a road vehicle must have with him the registration certificate of the vehicle or a copy of it, except during the 10 days following registration, and the certificate of insurance provided for in the Automobile Insurance Act (chapter A-25).
                  {'\n\n'}
                    If the registration certificate was issued under the International Registration Program (IRP), the person must have with him the original of the certificate, except in the cases provided for by the Program
                  {'\n\n'}
                    If the road vehicle is leased for less than one year or if it has been lent by a road vehicle dealer, the person must also have with him the contract of lease or a copy thereof, or a document evidencing the duration of the loan.
                  {'\n\n'}
                    This section applies on private roads open to public vehicular traffic and on land occupied by shopping centres or other land where public traffic is allowed, as well as on public highways. It also applies on highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '37': {
        fr: {
            art: 'Art: 37',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immariculation endommagée',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes la personne au nom de laquelle l’immatriculation du véhicule routier a été effectuée; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le certificat d’immatriculation du véhicule est illisible, endommagé ou contient un renseignement erroné; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La plaque d’immatriculation du véhicule est illisible, endommagée ou contient un renseignement erroné;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La vignette du véhicule est illisible, endommagée ou contient un renseignement erroné;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n'avez pas demandé son remplacement auprès de la SAAQ. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 37 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La personne au nom de laquelle l’immatriculation d’un véhicule routier a été effectuée par la Société doit demander à celle-ci le remplacement d’un certificat d’immatriculation, d’une plaque d’immatriculation ou d’une vignette illisible, endommagé ou sur lequel apparaît un renseignement erroné.
            </Text>
            ),
            image: '6.png',
            analyse: '',
        },
        en: {
            art: 'Section 37',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Damaged registration',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the person in whose name registration of the road vehicle has been effected; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The registration certificate of the vehicle is illegible, damaged or contains inaccurate information; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The registration plate is illegible, damaged or contains inaccurate information; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The sticker of the vehicle is illegible, damaged or contains inaccurate information;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not ask for its replacement from the SAAQ. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 37 Highway safety code.</Bold>
                    {'\n\n'}
                    The person in whose name registration of a road vehicle has been effected by the Société must request the latter to replace any registration certificate, registration plate or sticker which is illegible, damaged or which contains inaccurate information.
            </Text>
            ),
            image: '6.png',
            analyse: '',
        },
    },
    '39.1': {
        fr: {
            art: 'Art: 39.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Véhicule visé par une sanction',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le véhicule était visé par une sanction de la SAAQ; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Le véhicule a été remis en circulation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Information supplémentaire:</Bold>
                    {'\n\n'}
                    Lorsqu’une contravention reste impayée, la SAAQ sanctionne tous les véhicules associés à la personne visée par cette contravention. Ces véhicules ne peuvent être conduits par quiconque, jusqu’au paiement complet de l’amende impayée et des frais.
              </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 39.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut remettre en circulation un véhicule routier à l’égard duquel une décision de la Société rendue en vertu de l’un des articles 188, 194 et 196 à 202.0.1 est en vigueur. Il en est de même lorsque la Société agit en vertu de l’Art: 189.
            </Text>
            ),
            image: '105+.png',
            analyse: '',
        },
        en: {
            art: 'Section 39.1',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Road vehicle under decision',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle;  </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The vehicle was under a decision issued by the SAAQ; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The vehicle has been put back into operation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Additional information :</Bold>
                    {'\n\n'}
                    When a ticket stays unpaid, the SAAQ can order an administrative sanction against every vehicle linked to the person having this ticket. These vehicles can not be driven by no one until the full payment of the unpaid fine and fees.
              </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 39.1 Highway safety code.</Bold>
                    {'\n\n'}
                    No person may put back into operation any road vehicle in respect of which a decision of the Société rendered under any of sections 188, 194 or 196 to 202.0.1 is in force. The same applies where the Société acts under section 189.
            </Text>
            ),
            image: '105+.png',
            analyse: '',
        },
    },
    '54': {
        fr: {
            art: 'Art: 54',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Plaque non conforme',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire qui laisse circuler le véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le véhicule est muni d’une plaque d’immatriculation d’une catégorie autre que celle correspondant à ce véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}L'immatriculation atteste un usage du véhicule autre que celui qui en est réellement fait. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le véhicule est muni d’une plaque d’immatriculation délivrée pour un autre véhicule routier. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 54 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La personne qui conduit un véhicule routier ou le propriétaire qui laisse circuler son véhicule muni d’une plaque d’immatriculation d’une catégorie autre que celle correspondant à ce véhicule ou dont l’immatriculation atteste un usage du véhicule autre que celui qui en est réellement fait ou un véhicule routier muni d’une plaque d’immatriculation délivrée pour un autre véhicule routier commet une infraction et est passible d’une amende de 200 $ à 300 $.
            </Text>
            ),
            image: '31.1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 54',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Conform registration plate',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner who allows his road vehicle to be driven;  </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> This vehicle is carrying a registration plate of a class other than the class corresponding to that vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}This vehicle is being used for a purpose other than the purpose indicated in its registration. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}This vehicle is carrying a registration plate issued for another road vehicle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 54 Highway safety code.</Bold>
                    {'\n\n'}
                    Every person who drives a road vehicle and every owner who allows his vehicle to be driven carrying a registration plate of a class other than the class corresponding to that vehicle, or which is being used for a purpose other than the purpose indicated in its registration, or carrying a registration plate issued for another road vehicle, is guilty of an offence and is liable to a fine of $200 to $300.
            </Text>
            ),
            image: '31.1+.png',
            analyse: '',
        },
    },
    '65': {
        fr: {
            art: 'Art: 65',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Permis de la classe appropriée',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous n’êtes pas titulaire d’un permis de la classe appropriée à la conduite de ce véhicule. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Un non-résident peut conduire un véhicule routier pendant une période d’au plus six (6) mois consécutifs sans être titulaire d’un permis délivré par la SAAQ s’il satisfait aux exigences suivantes: </Bold>
                    {'\n'}
                    <Bold>1°  il est titulaire d’un permis de conduire valide délivré par une autre autorité administrative accordant le même droit aux résidents du Québec; </Bold>
                    {'\n'}
                    <Bold>2°  le permis de conduire délivré par cette autre autorité administrative l’autorise à conduire un véhicule de la catégorie qu’il conduit au Québec; </Bold>
                    {'\n'}
                    <Bold>3°  il respecte les conditions dont son permis de conduire est assorti; </Bold>
                    {'\n'}
                    <Bold>4°  il ne fait pas l’objet d’une suspension du droit d’obtenir un permis délivré par la Société ou une classe de celui-ci. </Bold>
                    {'\n'}
                    <Small>Référence: art. 85 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Un étudiant étranger qui séjourne au Québec peut conduire un véhicule de promenade pendant la durée de ses études s’il satisfait aux exigences suivantes: </Bold>
                    {'\n'}
                    <Bold>1°  il est titulaire d’un permis de conduire valide délivré par une autre autorité administrative accordant le même droit aux résidents du Québec; </Bold>
                    {'\n'}
                    <Bold>2°  le permis de conduire délivré par cette autre autorité administrative l’autorise à conduire un véhicule de la catégorie qu’il conduit au Québec; </Bold>
                    {'\n'}
                    <Bold>3°  il respecte les conditions dont son permis de conduire est assorti; </Bold>
                    {'\n'}
                    <Bold>4°  il ne fait pas l’objet d’une suspension du droit d’obtenir un permis délivré par la Société ou une classe de celui-ci. </Bold>
                    {'\n'}
                    <Small>Référence: art. 86 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Le non-résident titulaire d’un permis de conduire international peut conduire pendant la période de validité de ce permis. Il est autorisé à conduire les types de véhicules prescrits par son permis international.</Bold>
                    {'\n'}
                    <Small>Référence: art. 88 C.s.r.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 65 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Pour conduire un véhicule routier, une personne doit être titulaire d’un permis de la classe appropriée à la conduite de ce véhicule tel que déterminé par règlement et comportant, le cas échéant, les mentions prescrites par ce règlement.
                  {'\n\n'}
                    <Bold>Art. 85 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Un non-résident peut conduire un véhicule routier pendant une période d’au plus six mois consécutifs sans être titulaire d’un permis délivré par la Société, s’il satisfait aux exigences suivantes:
                  {'\n'}
                    1°  il est titulaire d’un permis de conduire valide délivré par une autre autorité administrative accordant le même droit aux résidents du Québec;
                  {'\n'}
                    2°  le permis de conduire délivré par cette autre autorité administrative l’autorise à conduire un véhicule de la catégorie qu’il conduit au Québec;
                  {'\n'}
                    3°  il respecte les conditions dont son permis de conduire est assorti;
                  {'\n'}
                    4°  il ne fait pas l’objet d’une suspension du droit d’obtenir un permis délivré par la Société ou une classe de celui-ci.
                  {'\n\n'}
                    <Bold>Art. 86 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    L’étudiant, le coopérant ou le stagiaire étranger qui séjourne au Québec peut, s’il satisfait aux exigences de l’Art: 85, conduire un véhicule de promenade pendant la durée de ses études ou de son stage, sans être titulaire d’un permis délivré par la Société.
                  {'\n\n'}
                    <Bold>Art. 88 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les articles 85 et 86, le non-résident qui est titulaire d’un permis de conduire international peut conduire, pendant la période de validité de ce permis, les véhicules routiers que le permis sur la base duquel son permis de conduire international a été délivré l’autorise à conduire.
            </Text>
            ),
            image: '65+.png',
            analyse: '',
        },
        en: {
            section: 'Section 65',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Appropriate driver’s licence.',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not hold a driver’s licence of the class appropriate to the driving of that vehicle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• A non-resident may drive a road vehicle for a period of not over six (6) consecutive months without holding a licence issued by the SAAQ if he meets the following requirements: </Bold>
                    {'\n'}
                    <Bold>(1)  he holds a valid driver’s licence issued by another administrative authority which grants the same right to residents of Québec; </Bold>
                    {'\n'}
                    <Bold>(2)  the driver’s licence issued by that other administrative authority authorizes him to drive a vehicle of the class of vehicles he drives in Québec; </Bold>
                    {'\n'}
                    <Bold>(3)  he respects the conditions attached to the driver’s licence he holds; </Bold>
                    {'\n'}
                    <Bold>(4)  his right to obtain a licence or a class of licence issued by the Société has not been suspended.</Bold>
                    {'\n'}
                    <Small>Reference: s. 85 H.s.r.</Small>
                    {'\n\n'}
                    <Bold>• A foreign student, coopérant or trainee staying in Québec may drive a passenger vehicle during his period of studies or training without holding a licence issued by the Société if he meets the following requirements: </Bold>
                    {'\n'}
                    <Bold>(1)  he holds a valid driver’s licence issued by another administrative authority which grants the same right to residents of Québec;</Bold>
                    {'\n'}
                    <Bold>(2)  the driver’s licence issued by that other administrative authority authorizes him to drive a vehicle of the class of vehicles he drives in Québec; </Bold>
                    {'\n'}
                    <Bold>(3)  he respects the conditions attached to the driver’s licence he holds; </Bold>
                    {'\n'}
                    <Bold>(4)  his right to obtain a licence or a class of licence issued by the Société has not been suspended. </Bold>
                    {'\n'}
                    <Small>Reference: s. 86 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The non-resident holding a valid international driver’s licence can drive the type of vehicle prescribed by that licence. </Bold>
                    {'\n'}
                    <Small>Reference: s. 88 H.s.c.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 65 Highway Safety Code.</Bold>
                    {'\n\n'}
                    No person may drive a road vehicle unless he holds a driver’s licence of the class appropriate to the driving of that vehicle as determined by regulation, and containing the particulars prescribed by regulation, if any.
                  {'\n\n'}
                    <Bold>S. 85 Highway Safety Code:</Bold>
                    {'\n\n'}
                    A non-resident may drive a road vehicle for a period of not over six consecutive months without holding a licence issued by the Société if he meets the following requirements:
                  {'\n'}
                    (1)  he holds a valid driver’s licence issued by another administrative authority which grants the same right to residents of Québec;
                  {'\n'}
                    (2)  the driver’s licence issued by that other administrative authority authorizes him to drive a vehicle of the class of vehicles he drives in Québec;
                  {'\n'}
                    (3)  he respects the conditions attached to the driver’s licence he holds;
                  {'\n'}
                    (4)  his right to obtain a licence or a class of licence issued by the Société has not been suspended.
                  {'\n\n'}
                    <Bold>s. 86 Highway Safety Code:</Bold>
                    {'\n\n'}
                    A foreign student, coopérant or trainee staying in Québec may drive a passenger vehicle during his period of studies or training without holding a licence issued by the Société if he meets the requirements of section 85.
                  {'\n\n'}
                    <Bold>s. 88 Highway Safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding sections 85 and 86, a non-resident holding an International Driver’s Permit may, while it is valid, drive the road vehicles he is authorized to drive by the licence on the basis of which the International Driver’s Permit was issued to him.
            </Text>
            ),
            image: '65+.png',
            analyse: '',
        },
    },
    '93.1': {
        fr: {
            art: 'Art: 93.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Conduire un véhicule routier sans avoir payé les frais du permis de conduire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Les frais de votre permis de conduire n’ont pas été payés. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 93.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le titulaire d’un permis de conduire ou d’un permis restreint délivré en vertu de l’Art: 76.1.1 doit, selon la fréquence prévue par règlement, payer à la Société les frais fixés par règlement, les droits fixés par règlement et revalorisés, le cas échéant, conformément à l’Art: 151.4 de la Loi sur l’assurance automobile (chapitre A-25) ainsi que la contribution d’assurance fixée en vertu de l’Art: 151 de cette loi, au cours de la période déterminée par règlement. À défaut de paiement à la date d’échéance ou à défaut d’avoir avisé la Société, avant cette date, de son intention de payer par prélèvement automatique, le titulaire ne peut, à compter du premier jour suivant la date d’échéance et sans autre avis, conduire un véhicule routier.
                  {'\n\n'}
                    Le titulaire d’un permis probatoire doit, avant l’expiration de celui-ci, payer les sommes visées à l’Art: 69 pour l’obtention d’un premier permis de conduire ou aviser la Société de son intention de ne pas en obtenir un.
                  {'\n\n'}
                    Le titulaire d’un permis de conduire ou d’un permis restreint délivré en vertu de l’Art: 76.1.1 qui, au cours de la période déterminée par règlement, demande l’annulation de son permis ou avise la Société de son intention de ne pas le renouveler, n’est pas tenu de payer les sommes visées au premier alinéa.
                  {'\n\n'}
                    La personne qui ne s’est pas conformée au premier ou au deuxième alinéa et qui demande à la Société, pendant la durée correspondant au paiement des sommes visées au premier ou au deuxième alinéa, l’obtention d’un premier permis de conduire, le renouvellement de son permis de conduire ou de son permis restreint délivré en vertu de l’Art: 76.1.1 ou l’autorisation de conduire de nouveau un véhicule routier, doit alors acquitter ces sommes ainsi que les frais supplémentaires prévus par règlement, conformément aux conditions et aux modalités prévues par règlement.
            </Text>
            ),
            image: '65+.png',
            analyse: '',
        },
        en: {
            art: 'Section 93.1',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Driving a road vehicle without paying the driver’s licence fees',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Your driver’s licence fees were not paid. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 93.1 Highway safety code.</Bold>
                    {'\n\n'}
                    The holder of a driver’s licence or a restricted licence issued under section 76.1.1 must, at the intervals prescribed by regulation, pay the Société the fees fixed by regulation, the duties fixed by regulation and revalorized, where applicable, in accordance with section 151.4 of the Automobile Insurance Act (chapter A-25) and the insurance contribution fixed pursuant to section 151 of that Act within the period determined by regulation. If, on the due date, the licence holder has not made the required payments or notified the Société of his intention to pay by pre-authorized debit, he may not, as of the first day following the due date, and without further notice, drive any road vehicle.
                  {'\n\n'}
                    The holder of a probationary licence must, before his licence expires, pay the sums referred to in section 69 to obtain his first driver’s licence or advise the Société that he does not intend to apply for a driver’s licence.
                  {'\n\n'}
                    The holder of a driver’s licence or a restricted licence issued under section 76.1.1 who, within the period determined by regulation, requests that his licence be cancelled or advises the Société that he does not intend to apply for its renewal is not required to pay the sums referred to in the first paragraph.
                  {'\n\n'}
                    A person who has failed to comply with the first or second paragraph and applies to the Société, during the period corresponding to the payment of the sums referred to in the first or second paragraph, for the issue of his first driver’s licence, the renewal of his driver’s licence or his restricted licence issued under section 76.1.1 or authorization to resume driving road vehicles, must pay those sums and the additional fees prescribed by regulation, in accordance with the terms and conditions prescribed by regulation.
            </Text>
            ),
            image: '65+.png',
            analyse: '',
        },
    },
    '95': {
        fr: {
            art: 'Art: 95',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Changement d’adresse',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le titulaire d’un permis de conduire;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous n’avez pas informé la SAAQ de votre changement d’adresse lors de votre paiement annuel. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’avez pas informé la SAAQ de votre changement d’adresse dans les 30 jours qui suivent ce changement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 95 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le titulaire d’un permis doit informer la Société, lors du paiement des sommes prévues à l’Art: 93.1, de tout changement concernant les documents et les renseignements qui doivent être fournis au moment de l’obtention ou du renouvellement d’un permis.
                  {'\n\n'}
                    Il doit également informer la Société de tels changements dans les 30 jours qui suivent le changement.
            </Text>
            ),
            image: '95+.png',
            analyse: '',
        },
        en: {
            art: 'Section 95',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Address change',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You hold a driver’s licence; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You did not inform the SAAQ of your address change during your annual payment. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You did not inform the SAAQ of your address change within 30 days after the change. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 95 Highway Safety Code.</Bold>
                    {'\n\n'}
                    The holder of a licence must inform the Société, on making payment of amounts required to be paid under section 93.1, of any change concerning the documents and information which must be provided on obtaining or renewing a licence.
                  {'\n\n'}
                    He must also inform the Société of any such changes within 30 days after the change.
            </Text>
            ),
            image: '95+.png',
            analyse: '',
        },
    },
    '97': {
        fr: {
            art: 'Art: 97',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Nécessité d’avoir votre permis de conduire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez la garde ou le contrôle d’un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous n’avez pas votre permis de conduire avec vous. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 97 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La personne qui conduit un véhicule routier ou qui en a la garde ou le contrôle doit avoir avec elle son permis.
            </Text>
            ),
            image: '95+.png',
            analyse: '',
        },
        en: {
            art: 'Section 97',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Necessity to carry your driver’s licence',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are having the care or control of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not carry your driver’s licence with you. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 97 Highway safety code.</Bold>
                    {'\n\n'}
                    The person driving a road vehicle or having the care or control of a road vehicle must carry his licence.
            </Text>
            ),
            image: '95+.png',
            analyse: '',
        },
    },
    '98': {
        fr: {
            art: 'Art: 98',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Conditions du permis de conduire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes titulaire d’un permis de conduire comportant des conditions; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous ne respectez pas ces conditions. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 98 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le titulaire d’un permis doit respecter les conditions dont son permis est assorti.
            </Text>
            ),
            image: '95+.png',
            analyse: '',
        },
        en: {
            art: 'Section 98',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Driver`s licence conditions',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You hold a driver’s licence with conditions; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not comply with the conditions attached to your driver’s licence. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 98 Highway safety code.</Bold>
                    {'\n\n'}
                    The holder of a licence must comply with the conditions attached to his licence.
            </Text>
            ),
            image: '95+.png',
            analyse: '',
        },
    },
    '99': {
        fr: {
            art: 'Art: 99',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Apprenti-conducteur',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes titulaire d’un permis d’apprenti-conducteur; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’êtes pas assisté par une personne possédant elle-même un permis de conduire valide depuis au moins deux ans. Cette personne doit être assise à vos côtés. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez entre minuit et 5:00 a.m. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous transportez un passager sur votre motocyclette. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude.
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 99 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le titulaire d’un permis d’apprenti-conducteur conduisant un véhicule routier autre qu’un cyclomoteur ou une motocyclette doit être assisté d’une personne qui est elle-même titulaire, depuis au moins deux ans, d’un permis de conduire valide de la classe appropriée à la conduite de ce véhicule. Cette personne doit prendre place à ses côtés et être en mesure de lui fournir aide et conseil.
                  {'\n\n'}
                    Elle doit également avoir avec elle son permis de conduire, lequel doit comporter, le cas échéant, les mentions prescrites par règlement.
                  {'\n\n'}
                    <Bold>Entrée en vigueur le 18 mai 2018: </Bold>
                    {'\n\n'}
                    Il est interdit au titulaire d’un permis d’apprenti-conducteur de classe 5 ou 6A, tel que déterminé par règlement, de conduire un véhicule routier visé par l’une de ces classes au cours de la période comprise entre minuit et cinq heures.
                  {'\n\n'}
                    Le titulaire d’un permis d’apprenti-conducteur conduisant une motocyclette ne peut transporter de passagers.
                  {'\n\n'}
                    Un règlement du gouvernement peut, dans les cas et aux conditions qu’il détermine, exempter le titulaire d’un permis d’apprenti-conducteur des conditions d’assistance prévues au premier alinéa ou prévoir des conditions différentes.
            </Text>
            ),
            image: '99+.png',
            analyse: '',
        },
        en: {
            art: 'Section 99',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Learner’s licence',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You hold a learner’s licence; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You are not assisted by a person who has held, for at least two years, a valid driver’s licence of the appropriate class for driving that vehicle. This person must be seated beside you. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You drive between midnight (0:00) and five a.m. (5:00 a.m.). </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You carry passengers on your motorcycle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 99 Highway safety code.</Bold>
                    {'\n\n'}
                    The holder of a learner’s licence must, when driving a road vehicle other than a moped or a motorcycle, be assisted by a person who has held, for at least two years, a valid driver’s licence of the appropriate class for driving that vehicle. The person must be seated beside the holder of the learner’s licence, and be in a position to give him assistance and advice.
                  {'\n\n'}
                    The person assisting the holder of the learner’s licence must carry his driver’s licence with him, which must contain, where applicable, the particulars prescribed by regulation.
                  {'\n\n'}
                    <Bold>After May 18th 2018:</Bold>
                    {'\n\n'}
                    Holders of a class 5 or class 6A learner’s licence, as determined by regulation, are prohibited from driving a road vehicle covered by either class between midnight and 5 a.m.
                  {'\n\n'}
                    The holder of a learner’s licence driving a motorcycle may not carry passengers.
                  {'\n\n'}
                    A government regulation may, in the cases and on the conditions it determines, exempt the holder of a learner’s licence from the assistance conditions set out in the first paragraph or prescribe different conditions.
            </Text>
            ),
            image: '99+.png',
            analyse: '',
        },
    },
    '100': {
        fr: {
            art: 'Art: 100',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Permis probatoire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>quatre éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes titulaire d’un permis probatoire de classe 5; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous êtes âgé de 19 ans ou moins; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> Durant les six (6) PREMIERS mois de la première année suivant l’obtention de votre permis, vous avez transporté plus qu’un (1) seul passager âgé de 19 ans et moins entre minuit et cinq heure. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Durant les six (6) DERNIERS mois de la première année suivant l’obtention de votre permis, vous avez transporté plus que trois (3) passagers âgé de 19 ans et moins entre minuit et cinq heure. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Information supplémentaire:</Bold>
                    {'\n\n'}
                    Le calcul du nombre de passagers fait exception des membres de la famille immédiate du conducteur.
              </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 100 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier qui est titulaire d’un permis probatoire de classe 5, tel que déterminé par règlement, et qui est âgé de 19 ans ou moins est assujetti aux règles suivantes la première année qui suit la délivrance de son permis:
                  {'\n'}
                    1° pendant les six premiers mois, il ne peut transporter, au cours de la période comprise entre minuit et cinq heures, qu’un seul passager âgé de 19 ans ou moins;
                  {'\n'}
                    2° pendant les six mois suivants, il ne peut transporter, au cours de la période comprise entre minuit et cinq heures, que trois passagers âgés de 19 ans ou moins.
                  {'\n\n'}
                    Les règles prévues au premier alinéa ne s’appliquent pas si l’un des passagers est titulaire depuis au moins deux ans d’un permis de conduire valide de la classe appropriée à la conduite du véhicule s’il prend place au côté du conducteur et s’il est en mesure de lui fournir aide et conseil.
                  {'\n\n'}
                    Pour l’application du premier alinéa, il n’est pas tenu compte, dans le calcul du nombre de passagers, du passager qui est un membre de la famille immédiate du conducteur.
                  {'\n\n'}
                    On entend par famille immédiate du conducteur:
                  {'\n'}
                    1° son conjoint, qu’il soit marié, en union civile ou en union de fait;
                  {'\n'}
                    2° ses enfants et ceux de son conjoint;
                  {'\n'}
                    3° ses frères et sœurs;
                  {'\n'}
                    4° tout autre enfant de l’un de ses père et mère ou de leur conjoint.
                  {'\n\n'}
                    L’agent de la paix qui a des motifs raisonnables de soupçonner que le conducteur contrevient aux dispositions du présent Art: peut demander à un passager de s’identifier, auquel cas celui-ci lui donne les renseignements suivants, qu'il peut fournir verbalement:
                  {'\n'}
                    1° ses nom et adresse;
                  {'\n'}
                    2° sa date de naissance;
                  {'\n'}
                    3° le cas échéant, la nature de son lien familial avec le conducteur.
            </Text>
            ),
            image: '100+.png',
            analyse: '',
        },
        en: {
            art: 'Section 100',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Probationary licence.',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>four conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You hold a class 5 probationary licence; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You are 19 years of age or younger; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> During the FIRST six (6) months of the year after the licence is issued, you carry more than one (1) passenger 19 years of age or younger between midnight and 5 a.m. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}During the LAST six (6) months of the year after the licence is issued, you carry more than three (3) passengers 19 years of age or younger between midnight and 5 a.m.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Additional information:</Bold>
                    {'\n\n'}
                    Members of the driver’s immediate family are not taken into account in the computation of the number of passengers.
              </Text>
            ),
            point: (
                <Text>
                    4 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 100 Highway safety code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle who holds a class 5 probationary licence, as determined by regulation, and who is 19 years of age or younger is subject to the following rules in the year after the licence is issued:
                  {'\n'}
                    (1) for the first six months, the driver may only carry one passenger 19 years of age or younger between midnight and 5 a.m.; and
                  {'\n'}
                    (2) for the next six months, the driver may only carry three passengers 19 years of age or younger between midnight and 5 a.m.
                  {'\n\n'}
                    The rules set out in the first paragraph do not apply if one of the passengers has held, for at least two years, a valid driver’s licence of the appropriate class for driving the vehicle, is seated beside the driver and is in a position to give the driver assistance and advice.
                  {'\n\n'}
                    For the purposes of the first paragraph, a passenger who is a member of the driver’s immediate family is not taken into account in the computation of the number of passengers.
                  {'\n\n'}
                    “Driver’s immediate family” means:
                  {'\n'}
                    (1) the driver’s married, civil union or de facto spouse;
                  {'\n'}
                    (2) the driver’s children and the driver’s spouse’s children;
                  {'\n'}
                    (3) the driver’s brothers and sisters; and
                  {'\n'}
                    (4) any other child of the driver’s father or mother or of either’s spouse.
                  {'\n\n'}
                    A peace officer who has reasonable grounds to suspect that a driver is contravening this section may ask a passenger to identify himself or herself, in which case the passenger shall give the peace officer the following information, which the passenger may provide verbally:
                  {'\n'}
                    (1) the passenger’s name and address;
                  {'\n'}
                    (2) the passenger’s date of birth; and
                  {'\n'}
                    (3) if applicable, the nature of the passenger’s family relationship with the driver.
            </Text>
            ),
            image: '100+.png',
            analyse: '',
        },
    },
    '105': {
        fr: {
            art: 'Art: 105',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Conduire sous sanction',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites l’objet d’une sanction émise par la SAAQ. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le titulaire d’un permis restreint peut, sous réserve de l’Art: 195.1, conduire un véhicule routier dans l’exécution du principal travail dont il tire sa subsistance. </Bold>
                    {'\n\n'}
                    <Bold>Information supplémentaire: </Bold>
                    {'\n\n'}
                    Lorsqu’une contravention reste impayée ou que vous atteignez le nombre de points d’inaptitude maximum à votre classe de permis de conduire, vous pouvez faire l’objet d’une sanction vous interdisant la conduite d’un véhicule routier. 
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 105 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Une personne ne peut conduire un véhicule routier lorsqu’elle fait l’objet d’une sanction même si elle est titulaire d’un permis de conduire valide délivré par une autre autorité administrative ou d’un permis de conduire international.
                  {'\n\n'}
                    Toutefois, le titulaire d’un permis restreint peut, sous réserve de l’Art: 195.1, conduire un véhicule routier dans l’exécution du principal travail dont il tire sa subsistance.
            </Text>
            ),
            image: '105+.png',
            analyse: '',
        },
        en: {
            art: 'Section 105',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Driving under a sanction',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are under a sanction issued by the SAAQ. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The holder of a restricted licence may, subject to section 195.1, drive a road vehicle to carry on his principal means of livelihood. </Bold>
                    {'\n\n'}
                    <Bold>Additionnal information:</Bold>
                    {'\n\n'}
                    When a ticket stays unpaid or when you reach your driver’s licence maximum demerit points, the SAAQ can issue a sanction prohibiting you to drive a road vehicle or request a driver’s licence. 
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 105 Highway safety code.</Bold>
                    {'\n\n'}
                    No person under a sanction may drive a road vehicle even if he holds a valid driver’s licence issued by another administrative authority or an International Driver’s Permit.
                  {'\n\n'}
                    However, the holder of a restricted licence may, subject to section 195.1, drive a road vehicle to carry on his principal means of livelihood.
            </Text>
            ),
            image: '105+.png',
            analyse: '',
        },
    },
    '106': {
        fr: {
            art: 'Art: 106',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Laisser conduire une personne sans permis',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le locataire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez le contrôle du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous laisser une personne conduire votre véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Cette personne n’est pas titulaire d’un permis de la classe appropriée à la conduite du véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette personne fait l’objet d’une sanction lui interdisant la conduite d'un véhicule routier. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le titulaire d’un permis restreint peut, sous réserve de l’Art: 195.1, conduire un véhicule routier dans l’exécution du principal travail dont il tire sa subsistance. </Bold>
                    {'\n\n'}
                    <Bold>Information supplémentaire: </Bold>
                    {'\n\n'}
                    Lorsqu’une contravention reste impayée ou que vous atteignez le nombre de points d’inaptitude maximum à votre classe de permis de conduire, vous pouvez faire l’objet d’une sanction vous interdisant la conduite d’un véhicule routier. 
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 106 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le propriétaire, le locataire ou la personne qui a le contrôle d’un véhicule routier ne peut laisser conduire ce véhicule par une personne qui n’est pas titulaire d’un permis de la classe appropriée à la conduite du véhicule ou par une personne faisant l’objet d’une sanction, même si cette dernière est titulaire d’un permis de conduire valide délivré par une autre autorité administrative ou d’un permis de conduire international.
                  {'\n\n'}
                    Il peut toutefois laisser conduire le véhicule par cette dernière personne si elle est, sous réserve de l’Art: 195.1, titulaire d’un permis restreint et conduit le véhicule dans l’exécution du principal travail dont elle tire sa subsistance.
            </Text>
            ),
            image: '105+.png',
            analyse: '',
        },
        en: {
            art: 'Section 106',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Allowing a person without a driver`s licence to drive your vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the lessee of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are having the control of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You allow someone to drive your vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That person does not hold a driver’s licence of the appropriate class for driving the vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That person is under a sanction issued by the SAAQ.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The holder of a restricted licence may, subject to section 195.1, drive a road vehicle to carry on his principal means of livelihood. </Bold>
                    {'\n\n'}
                    <Bold>Additionnal information:</Bold>
                    {'\n\n'}
                    When a ticket stays unpaid or when you reach your driver’s licence maximum demerit points, the SAAQ can issue a sanction prohibiting you to drive a road vehicle or request a driver’s licence. 
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 106 Highway safety code.</Bold>
                    {'\n\n'}
                    The owner or lessee of a road vehicle or the person having the control of a road vehicle may not allow the vehicle to be driven by a person who is not the holder of a licence of the appropriate class for driving the vehicle or by a person under a sanction, even if the latter is the holder of a valid driver’s licence issued by another administrative authority or of an International Driver’s Permit.
                  {'\n\n'}
                    However, he may allow the latter to drive the vehicle if that person is, subject to section 195.1, the holder of a restricted licence and drives the vehicle to carry on his principal means of livelihood.
            </Text>
            ),
            image: '105+.png',
            analyse: '',
        },
    },
    '161.1': {
        fr: {
            art: 'Art: 161.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Transaction d’immatriculation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes commerçant de véhicules routiers;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes titulaire d’un permis délivré en vertu de la Loi sur la protection du consommateur et êtes autorisé par la Société à effectuer l’immatriculation des véhicules routiers; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne respectez pas les conditions établies par la Société en matière de transaction d’immatriculation. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne respectez pas les conditions établies par la Société en matière d’immatriculation temporaire. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 161.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le commerçant de véhicules routiers titulaire d’un permis délivré en vertu de la Loi sur la protection du consommateur (chapitre P-40.1) et autorisé par la Société à effectuer l’immatriculation des véhicules routiers doit respecter les conditions établies par la Société en matière de transaction d’immatriculation et d’utilisation de l’immatriculation temporaire.
                  {'\n\n'}
                    <Bold>Certificat d'immatriculation temporaire (10 jours):</Bold>
                    {'\n\n'}
                    Le propriétaire d’un véhicule routier acquis chez un commerçant dûment licencié peut obtenir le Certificat d’immatriculation temporaire chez ce même commerçant.
                  {'\n\n'}
                    Ce certificat permet au propriétaire de circuler avec le véhicule et de demander l’immatriculation de son véhicule à l’intérieur d’un délai de 10 jours. Il doit être accompagné du formulaire Attestation de transaction avec un commerçant remis lors de la vente.
                  {'\n\n'}
                    Le certificat d’immatriculation temporaire (10 jours) n’est pas renouvelable et ne doit être utilisé que par le nouveau propriétaire. En aucun temps, ce formulaire ne doit être utilisé pour le déplacement d’un véhicule appartenant à un commerçant, et ce, même si le véhicule déplacé est destiné à être livré à l’acquéreur. Le certificat temporaire (10 jours) ne peut être ni transféré ni vendu à un autre commerçant. […] »
                  {'\n\n'}
                    http://collections.banq.qc.ca/ark:/52327/bs2796239
            </Text>
            ),
            image: '161.1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 161.1',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Registration transaction',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a road vehicle dealer; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You hold a permit issued under the Consumer Protection Act and authorized by the Société to effect the registration of road vehicles; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not comply with the conditions established by the Société regarding transactions related to registration. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not comply with the conditions established by the Société regarding transactions related to the use of temporary registration. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 161.1 Highway safety code.</Bold>
                    {'\n\n'}
                    Every road vehicle dealer holding a permit issued under the Consumer Protection Act (chapter P-40.1) and authorized by the Société to effect the registration of road vehicles must comply with the conditions established by the Société regarding transactions related to registration and the use of temporary registration.
                  {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>Certificat d’immatriculation temporaire (10 jours):</Bold>
                    {'\n\n'}
                    Le propriétaire d’un véhicule routier acquis chez un commerçant dûment licencié peut obtenir le Certificat d’immatriculation temporaire chez ce même commerçant.
                  {'\n\n'}
                    Ce certificat permet au propriétaire de circuler avec le véhicule et de demander l’immatriculation de son véhicule à l’intérieur d’un délai de 10 jours. Il doit être accompagné du formulaire Attestation de transaction avec un commerçant remis lors de la vente.
                  {'\n\n'}
                    Le certificat d’immatriculation temporaire (10 jours) n’est pas renouvelable et ne doit être utilisé que par le nouveau propriétaire. En aucun temps, ce formulaire ne doit être utilisé pour le déplacement d’un véhicule appartenant à un commerçant, et ce, même si le véhicule déplacé est destiné à être livré à l’acquéreur. Le certificat temporaire (10 jours) ne peut être ni transféré ni vendu à un autre commerçant. […] »
                  {'\n\n'}
                    http://collections.banq.qc.ca/ark:/52327/bs2796239
            </Text>
            ),
            image: '161.1+.png',
            analyse: '',
        },
    },
    '168': {
        fr: {
            art: 'Art: 168',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Délit de fuite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes conducteur d'un véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes impliqué dans un accident; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne restez pas sur les lieux de l’accident. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne vous assurez pas qu’une personne ait besoin d’aide. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne fournissez pas l’aide nécessaire à une personne ayant subi un préjudice. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 168 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier impliqué dans un accident doit rester sur les lieux ou y retourner immédiatement après l’accident et fournir l’aide nécessaire à toute personne qui a subi un préjudice.
            </Text>
            ),
            image: '168+.png',
            analyse: '',
        },
        en: {
            art: 'Section 168',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Hit and run',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are involved in an accident; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not remain at the scene of the accident. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You did not make sure a person needs help. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You did not render the necessary assistance to a person who has sustained injury or damage. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 168 Highway safety code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle involved in an accident must remain at or immediately return to the scene of the accident and render the necessary assistance to any person who has sustained injury or damage.
            </Text>
            ),
            image: '168+.png',
            analyse: '',
        },
    },
    '170': {
        fr: {
            art: 'Art: 170',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Délit de fuite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes conducteur d'un véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes impliqué dans un accident; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne fournissez pas vos informations personnelles à l’autre personne qui a subi un préjudice dans l’accident ou au policier présent sur les lieux. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 170 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier impliqué dans un accident doit fournir à l’agent de la paix qui se rend sur les lieux de l’accident ou à la personne qui a subi un préjudice ses nom et adresse, le numéro de son permis, les nom et adresse du propriétaire inscrit au certificat d’immatriculation du véhicule, l’attestation d’assurance ou de solvabilité prévue par la Loi sur l’assurance automobile (chapitre A‐25) et le numéro apparaissant sur la plaque d’immatriculation du véhicule.
            </Text>
            ),
            image: '168+.png',
            analyse: '',
        },
        en: {
            art: 'Section 170',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Hit and run',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are involved in an accident; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not give your personal informations to the other person having sustained injury or damage in the accident or to the peace officer called to the scene of the accident. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 170 Highway safety code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle involved in an accident must give to the peace officer called to the scene of the accident or to the person having sustained injury or damage, his name and address, the number of his licence, the name and address of the owner entered on the registration certificate of the vehicle, the certificate of insurance or of financial responsibility provided for in the Automobile Insurance Act (chapter A-25), and the number appearing on the registration plate of the vehicle.
            </Text>
            ),
            image: '168+.png',
            analyse: '',
        },
    },
    '171': {
        fr: {
            art: 'Art: 171',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Délit de fuite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes conducteur d'un véhicule routier;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes impliqué dans un accident avec un véhicule inoccupé; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes impliqué dans un accident avec un animal pesant plus de 25kg; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes impliqué dans un accident avec un objet inanimé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Alors que le propriétaire du bien endommagé ne pouvait être averti sur les lieux ou à proximité, vous n’avez pas communiqué sans délai avec le poste de police le plus près afin de rapporter l'accident et fournir vos informations.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour sauver vos points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 171 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier qui est impliqué dans un accident avec un animal pesant plus de 25 kg, un véhicule routier inoccupé ou un autre objet inanimé doit, lorsque le propriétaire du bien endommagé ou une personne qui le représente ne peut être rejoint sur les lieux de l’accident ou à proximité, communiquer sans délai avec le poste de police le plus près afin de rapporter l’accident et de fournir les renseignements prévus à l’Art: 170.
                  {'\n\n'}
                    <Bold>Art. 170 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier impliqué dans un accident doit fournir à l’agent de la paix qui se rend sur les lieux de l’accident ou à la personne qui a subi un préjudice ses nom et adresse, le numéro de son permis, les nom et adresse du propriétaire inscrit au certificat d’immatriculation du véhicule, l’attestation d’assurance ou de solvabilité prévue par la Loi sur l’assurance automobile (chapitre A‐25) et le numéro apparaissant sur la plaque d’immatriculation du véhicule.
            </Text>
            ),
            image: '171+.png',
            analyse: '',
        },
        en: {
            art: 'Section 171',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Hit and run',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are involved in an accident involving an unattended road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are involved in an accident involving an animal weighing over 25 kg; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are involved in an accident involving any other inanimate object; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> As the owner of the damaged property could not be found,You did not communicate immediately with the nearest police station to report the accident and furnish your personal informations. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 171 Highway safety code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle who is involved in an accident involving an animal weighing over 25 kg, an unattended road vehicle or any other inanimate object must, if the owner of the damaged property or a person representing him cannot be found at the scene of the accident or nearby, communicate immediately with the nearest police station to report the accident and furnish the information provided for in section 170.
                  {'\n\n'}
                    <Bold>S. 170 Highway safety code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle involved in an accident must give to the peace officer called to the scene of the accident or to the person having sustained injury or damage, his name and address, the number of his licence, the name and address of the owner entered on the registration certificate of the vehicle, the certificate of insurance or of financial responsibility provided for in the Automobile Insurance Act (chapter A-25), and the number appearing on the registration plate of the vehicle.
            </Text>
            ),
            image: '171+.png',
            analyse: '',
        },
    },
    '202.2': {
        fr: {
            art: 'Art: 202.2',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Interdiction de conduire avec de l’alcool dans l’organisme',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes titulaire d’un permis temporaire;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes titulaire d’un permis probatoire; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes titulaire d’un permis de cyclomoteur; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez 21 ans et moins; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez la garde ou le contrôle d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Il y a présence d’alcool dans votre organisme. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour sauver votre permis de conduire.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 202.2 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Il est interdit aux personnes suivantes de conduire un véhicule routier ou d’en avoir la garde ou le contrôle s’il y a quelque présence d’alcool dans leur organisme:
                  {'\n'}
                    (1)  le titulaire d’un permis d’apprenti-conducteur ou d’un permis probatoire, s’il n’a jamais été titulaire d’un permis de conduire autre qu’un permis de conduire autorisant uniquement la conduite d’un cyclomoteur ou autorisant uniquement la conduite d’un tracteur de ferme;
                  {'\n'}
                    (2)  la personne âgée de 22 ans ou plus qui est titulaire d’un permis de conduire autorisant uniquement la conduite d’un cyclomoteur ou d’un tracteur de ferme depuis moins de cinq ans;
                  {'\n'}
                    (3)  le titulaire d’un permis restreint délivré en vertu de l’Art: 118 lorsque le permis a été délivré à la suite de la révocation d’un permis probatoire ainsi que le titulaire d’un permis délivré en vertu du quatrième alinéa de l’Art: 73 ou de l’un des articles 76.1.1, 76.1.3, 76.1.5, 76.1.6, 76.1.8, 76.1.11 ou 76.1.12;
                  {'\n'}
                    (4)  la personne âgée de 21 ans ou moins qui est titulaire d’un permis de conduire.
                  {'\n\n'}
                    L’interdiction prévue au premier alinéa s’applique également à une personne qui, sans jamais avoir été titulaire d’un permis de conduire autre qu’un permis de conduire autorisant uniquement la conduite d’un cyclomoteur ou autorisant uniquement la conduite d’un tracteur de ferme, conduit un véhicule routier ou en a la garde ou le contrôle.
            </Text>
            ),
            image: '202.2+.png',
            analyse: '',
        },
        en: {
            art: 'Section 202.2',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Prohibition to drive with any alcohol in the body',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You hold a temporary licence; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You hold a probationary licence; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You hold a moped licence; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are 21 years of age or younger; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are having care or control of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Any alcohol is present in your body. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 202.2 Highway safety code.</Bold>
                    {'\n\n'}
                    The following persons may not drive or have the care or control of a road vehicle if any alcohol is present in their bodies:
                  {'\n'}
                    (1)  the holder of a learner’s licence or probationary licence who has never held a driver’s licence other than a licence authorizing the driving only of a moped or authorizing the driving only of a farm tractor;
                  {'\n'}
                    (2)  the holder of a moped or farm tractor licence only who has held that licence for less than five years and is 22 years of age or older;
                  {'\n'}
                    (3)  the holder of a restricted licence issued under section 118 following the cancellation of a probationary licence, and the holder of a licence issued under the fourth paragraph of section 73 or under any of sections 76.1.1, 76.1.3, 76.1.5, 76.1.6, 76.1.8, 76.1.11 and 76.1.12;
                  {'\n'}
                    (4)  the holder of a driver’s licence who is 21 years of age or younger.
                  {'\n\n'}
                    The prohibition set out in the first paragraph also applies to a person who, without ever having held a driver’s licence other than a licence authorizing the driving only of a moped or authorizing the driving only of a farm tractor, drives or has the care or control of a road vehicle.
            </Text>
            ),
            image: '202.2+.png',
            analyse: '',
        },
    },
    '211': {
        fr: {
            art: 'Art: 211',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Numéro de série',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Votre véhicule routier porte un numéro d’identification; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre bicyclette porte un numéro d’identification; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous avez modifié le numéro d’identification. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez rendu illisible le numéro d’identification. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez effacé le numéro d’identification. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez remplacé le numéro d’identification. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez enlevé le numéro d’identification. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 211 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À moins d’une approbation préalable de la Société, nul ne peut modifier, rendre illisible, effacer, remplacer ou enlever le numéro d’identification d’un véhicule routier ou d’une bicyclette.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 211',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Serial number',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Your road vehicle has an identification number; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Your bicycle has an identification number; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You altered the identification number. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You made the identification number illegible. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You erased the identification number. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You replaced the identification number. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You removed the identification number. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 211 Highway safety code.</Bold>
                    {'\n\n'}
                    Except with prior approval from the Société, no person may alter, make illegible, erase, replace or remove the identification number of a road vehicle or bicycle.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '212': {
        fr: {
            art: 'Art: 212',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ne pas avoir tous les équipements requis par le Code',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier ou de la bicyclette; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier ou de la bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Votre véhicule routier ou votre bicyclette n’est pas muni de tout accessoire ou de tout équipement que le fabriquant doit obligatoirement apposer. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 212 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    En outre de l’équipement prescrit au présent titre, les véhicules routiers et les bicyclettes doivent être munis de tout accessoire et équipement qu’une loi ou un règlement en vigueur au Québec oblige un fabricant à apposer.
                  {'\n\n'}
                    <Bold>Équipements bicyclette:</Bold>
                    {'\n\n'}
                    https://saaq.gouv.qc.ca/securite-routiere/moyens-deplacement/velo/velo-equipements/
            </Text>
            ),
            image: '212.png',
            analyse: '',
        },
        en: {
            art: 'Section 212',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Prescribed equipment',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle or the bicycle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the road vehicle or the bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Your road vehicle or your bicycle was not equipped with any other accessory and equipment required to be installed by the manufacturer. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 212 Highway safety code.</Bold>
                    {'\n\n'}
                    In addition to the equipment prescribed in this Title, road vehicles and bicycles must be equipped with any other accessory and equipment required to be installed by the manufacturer under an Act or a regulation in force in Québec.
                  {'\n\n'}
                    <Bold>Bicycle equipments: </Bold>
                    {'\n\n'}
                    https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/bicycle/bicycles-and-accessories/
            </Text>
            ),
            image: '212.png',
            analyse: '',
        },
    },
    '213': {
        fr: {
            art: 'Art: 213',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Équipement en bon état de fonctionnement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes l’exploitant du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un équipement obligatoire visé au Code de la sécurité routière n’était pas en bon état de fonctionnement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 213 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout équipement visé au présent code doit être tenu constamment en bon état de fonctionnement.
                  {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci, sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler.
            </Text>
            ),
            image: '212.png',
            analyse: '',
        },
        en: {
            art: 'Section 213',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Equipment in good working order',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the operator of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A prescribed equipment by the Highway Safety Code was not in good working order. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 213 Highway safety code.</Bold>
                    {'\n\n'}
                    All equipment prescribed in this Code must be kept in good working order at all times.
                  {'\n\n'}
                    This section applies, in addition to public highways, to highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune, to private roads open to public vehicular traffic as well as land occupied by shopping centres and other land where public traffic is allowed.
            </Text>
            ),
            image: '212.png',
            analyse: '',
        },
    },
    '215': {
        fr: {
            art: 'Art: 215',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Tout véhicule automobile doit être muni des dispositifs d’éclairage prévus au Code',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule automobile; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule automobile; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes l’exploitant du véhicule automobile; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Votre véhicule n’est pas muni de chacune des lumières suivantes:
                    {'\n\n'}
                        • Deux phares blancs;
                        {'\n'}
                        • Deux feux de position jaunes ou blancs à l’avant;
                        {'\n'}
                        • Deux feux de position rouges à l’arrière;
                        {'\n'}
                        • Deux réflecteurs rouges à l'arrière;
                        {'\n'}
                        • Deux feux de freinage rouges;{'\n'}
                        • Deux feux de changement de direction jaunes ou blancs à l’avant;
                        {'\n'}
                        • Deux feux de changement de direction jaunes ou rouges à l’arrière;
                        {'\n'}
                        • Deux feux de position;
                        {'\n'}
                        • Deux réflecteurs latéraux;
                        {'\n'}
                        • Un feu de recul;
                        {'\n'}
                        • Un feu de plaque.
                  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 215 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout véhicule automobile autre qu’une motocyclette et qu’un cyclomoteur, doit être muni d’au moins:
                  {'\n\n'}
                    1°  deux phares blancs, simples ou jumelés, placés à l’avant, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    2°  deux feux de position jaunes ou blancs, placés à l’avant, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    3°  deux feux de position rouges placés à l’arrière, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    3.1°  deux réflecteurs rouges placés à l’arrière, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    4°  deux feux de freinage rouges, placés à l’arrière, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    5°  deux feux de changement de direction, jaunes ou blancs, placés à l’avant, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    6°  deux feux de changement de direction, rouges ou jaunes, placés à l’arrière, à la même hauteur, de chaque côté de l’axe vertical central et aussi espacés que possible l’un de l’autre;
                  {'\n\n'}
                    7°  un feu de position et un réflecteur latéraux jaunes placés sur chaque côté, le plus près possible de l’avant;
                  {'\n\n'}
                    8°  un feu de position et un réflecteur latéraux rouges placés sur chaque côté, le plus près possible de l’arrière;
                  {'\n\n'}
                    9°  un feu de recul blanc, placé à l’arrière;
                  {'\n\n'}
                    10°  un feu blanc, placé de façon à éclairer la plaque d’immatriculation arrière.
                  {'\n\n'}
                    Dans le cas d’un ensemble de véhicules routiers, le dernier véhicule doit être muni à l’arrière des feux et réflecteurs visés aux paragraphes 3°, 3.1°, 4°, 6° et 10°.
                  {'\n\n'}
                    Les feux visés au paragraphe 2° ne sont pas requis pour tout véhicule dont la largeur excède 2,03 mètres.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
        en: {
            art: 'Section 215',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Every motor vehicle must carry lightning devices prescribed by the Code',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the motor vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the motor vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the operator of the motor vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Your vehicle did not carry one of the following lights:
                  {'\n\n'}
                        • Two white headlights;
                  {'\n'}
                        • Two yellow or white parking lights in the front;
                  {'\n'}
                        • Two red parking lights in the back;
                  {'\n'}
                        • Two red reflectors;
                  {'\n'}
                        • Two red stop lights;
                  {'\n'}
                        • Two yellow or white turn-signal lights in the front;
                  {'\n'}
                        • Two yellow or red turn-signals in the back;
                  {'\n'}
                        • Two side marker lamps;
                  {'\n'}
                        • Two side reflectors;
                  {'\n'}
                        • One back-up light;
                  {'\n'}
                        • One registration plate light. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 213 Highway safety code.</Bold>
                    {'\n\n'}
                    Every motor vehicle, other than a motorcycle or a moped, must carry at least:
                  {'\n\n'}
                    (1)  two single or double white headlights, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (2)  two amber or white parking lights, on the front, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (3)  two red parking lights, at the rear, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (3.1)  two red reflectors at the rear, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (4)  two red stop lights, at the rear, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (5)  two amber or white turn-signal lights, on the front, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (6)  two red or amber turn-signal lights, at the rear, at the same height, one on each side of the vertical centreline and as far apart as practicable;
                  {'\n\n'}
                    (7)  one amber side marker lamp and one amber side reflector on each side, as far forward as practicable;
                  {'\n\n'}
                    (8)  one red side marker lamp and one red side reflector on each side, as far to the rear as practicable;
                  {'\n\n'}
                    (9)  a white back-up light at the rear;
                  {'\n\n'}
                    (10)  a white light illuminating the rear registration plate.
                  {'\n\n'}
                    In the case of a combination of road vehicles, the lights prescribed in subparagraphs 3, 3.1, 4, 6 and 10 of the first paragraph must be mounted at the rear of the last vehicle.
                  {'\n\n'}
                    The lights referred to in subparagraph 2 of the first paragraph are not required on any vehicle exceeding 2.03 metres in width.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
    },
    '232': {
        fr: {
            art: 'Art: 232',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Réflecteurs de bicyclette',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Cette bicyclette n’est pas munie d’un réflecteur blanc à l’avant. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette bicyclette n’est pas munie d’un réflecteur rouge à l’arrière. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette bicyclette n’est pas munie d’un réflecteur jaune à chaque pédale. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette bicyclette n’est pas munie à la roue avant, soit d’un réflecteur jaune ou blanc fixé aux rayons de la roue et visible des deux côtés de la bicyclette, soit d’une bande réfléchissante jaune ou blanche fixée de chaque côté de la fourche, soit d’un pneu dont les deux flancs sont réfléchissants, soit d’une jante dont les deux côtés portent une bande réfléchissante continue sur toute la circonférence. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette bicyclette n’est pas munie à la roue arrière, soit d’un réflecteur rouge fixé aux rayons de la roue et visible des deux côtés de la bicyclette, soit d’une bande réfléchissante rouge fixée sur chaque hauban, soit d’un pneu dont les deux flancs sont réfléchissants, soit d’une jante dont les deux côtés portent une bande réfléchissante continue sur toute la circonférence. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un équipement ou un objet a pour effet de masquer un réflecteur obligatoire. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre remorque de vélo n’était pas munie soit de deux réflecteurs rouges à l’arrière, aussi éloignés que possible l’un de l’autre, soit d’une bande réfléchissante rouge placée de façon aussi horizontale que possible sur toute la largeur de la remorque. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Votre bicyclette n’avait pas à être munie de réflecteurs jaunes à chaque pédale puisque vous portiez une bande réfléchissante autour de chaque cheville ou puisque vous portiez des chaussures pourvues de bandes réfléchissantes. </Bold>
                    {'\n'}
                    <Small>Référence: art. 232 al. 2 C.s.r.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 232 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    <Bold>(Entrée en vigueur des modifications le 18 mai 2018)</Bold>
                    {'\n\n'}
                    Toute bicyclette doit être munie :
                  {'\n'}
                    (1) d’un réflecteur blanc à l’avant;
                  {'\n'}
                    (2) d’un réflecteur rouge à l’arrière;
                  {'\n'}
                    (3) d’un réflecteur jaune ou blanc à chaque pédale;
                  {'\n'}
                    (4) à la roue avant, soit d’un réflecteur jaune ou blanc fixé aux rayons de la roue et visible des deux côtés de la bicyclette, soit d’une bande réfléchissante jaune ou blanche fixée de chaque côté de la fourche, soit d’un pneu dont les deux flancs sont réfléchissants, soit d’une jante dont les deux côtés portent une bande réfléchissante continue sur toute la circonférence;
                  {'\n'}
                    (5) à la roue arrière, soit d’un réflecteur rouge fixé aux rayons de la roue et visible des deux côtés de la bicyclette, soit d’une bande réfléchissante rouge fixée sur chaque hauban, soit d’un pneu dont les deux flancs sont réfléchissants, soit d’une jante dont les deux côtés portent une bande réfléchissante continue sur toute la circonférence.
                  {'\n\n'}
                    Malgré le premier alinéa, une bicyclette n’a pas à être munie du réflecteur visé au paragraphe 3° de cet alinéa dans le cas où le cycliste porte une bande réfléchissante autour de chaque cheville ou des chaussures pourvues de bandes réfléchissantes.
                  {'\n\n'}
                    Tout équipement ou objet placé sur une bicyclette qui a pour effet de masquer un réflecteur prescrit ou son substitut doit être muni d’un réflecteur ou d’une bande réfléchissante.
                  {'\n\n'}
                    Une remorque tirée par une bicyclette doit être munie soit de deux réflecteurs rouges à l’arrière, aussi éloignés que possible l’un de l’autre, soit d’une bande réfléchissante rouge placée de façon aussi horizontale que possible sur toute la largeur de la remorque.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
        en: {
            art: 'Section 232',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Bicycle reflectors',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That bicycle does not have one white reflector at the front. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That bicycle does not have one red reflector at the rear. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That bicycle does not have  one amber reflector on each pedal. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That bicycle does not have, on the front wheel, an amber or white reflector attached to the spokes and visible on both sides of the bicycle, an amber or white reflective strip attached to each side of the fork, a tire with reflective sidewalls or a rim with a continuous reflective strip around the entire circumference of the wheel on both sides. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That bicycle does not have, on the back wheel, a red reflector attached to the spokes and visible on both sides of the bicycle, a red reflective strip on each seat stay, a tire with reflective sidewalls, or a rim with a continuous reflective strip around the entire circumference of the wheel on both sides. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}An equipment or an object blocks a prescribed reflector. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}A trailer towed by your bicycle does not carry two red reflectors at the rear, as far apart as practicable, or a red reflective strip placed as close to horizontal as possible across the width of the trailer. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Your bicycle did not need one amber reflector on each pedal since you were wearing a reflective band around each ankle or shoes with reflective strips. </Bold>
                    {'\n'}
                    <Small>Reference: s. 232 par. 2 H.s.c.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 232 Highway safety code: </Bold>
                    {'\n\n'}
                    <Bold>(Modifications applying after May 18th 2018) </Bold>
                    {'\n\n'}
                    Every bicycle must carry:
                  {'\n'}
                    (1) one white reflector at the front;
                  {'\n'}
                    (2) one red reflector at the rear;
                  {'\n'}
                    (3) one amber or white reflector on each pedal;
                  {'\n'}
                    (4) on the front wheel, an amber or white reflector attached to the spokes and visible on both sides of the bicycle, an amber or white reflective strip attached to each side of the fork, a tire with reflective sidewalls or a rim with a continuous reflective strip around the entire circumference of the wheel on both sides; and
                  {'\n'}
                    (5) on the back wheel, a red reflector attached to the spokes and visible on both sides of the bicycle, a red reflective strip on each seat stay, a tire with reflective sidewalls, or a rim with a continuous reflective strip around the entire circumference of the wheel on both sides.
                  {'\n\n'}
                    Despite the first paragraph, a bicycle need not carry the reflector required under subparagraph 3 of that paragraph if the cyclist wears a reflective band around each ankle or shoes with reflective strips.
                  {'\n\n'}
                    Any equipment or object placed on a bicycle that blocks a prescribed reflector or its substitute must carry a reflector or a reflective strip.
                  {'\n\n'}
                    A trailer towed by a bicycle must carry two red reflectors at the rear, as far apart as practicable, or a red reflective strip placed as close to horizontal as possible across the width of the trailer.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
    },
    '233': {
        fr: {
            art: 'Art: 233',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Bicyclette la nuit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous faites usage d’une bicyclette pendant la nuit; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Cette bicyclette n’est pas munie d’au moins un phare blanc à l’avant. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette bicyclette n’est pas munie d’au moins un feu rouge à l’arrière. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 233 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Toute bicyclette doit également, la nuit, être munie d’un phare blanc à l’avant et d’un feu rouge à l’arrière,lesquels peuvent être clignotants.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
        en: {
            art: 'Section 233',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Bicycle at night',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are riding a bicycle at night; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That bicycle does not have a white headlight. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That bicycle does not have at least one red tail-light. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 233 Highway safety code: </Bold>
                    {'\n\n'}
                    At night, every bicycle must also carry, at least a white headlight or light and one red tail-light both of which may be flashing.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
    },
    '237': {
        fr: {
            art: 'Art: 237',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Visibilité des phares',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Les phares, les feux ou les réflecteurs du véhicule ne sont pas visibles d’une distance d’au moins 150 mètres. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Les phares, les feux ou les réflecteurs du véhicule ne sont pas dégagés de toute matière obstruante qui en diminue l’efficacité. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 237 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Les phares, les feux et les réflecteurs visés au présent chapitre doivent être visibles d’une distance d’au moins 150 mètres et conformes aux normes établies par règlement.
                  {'\n\n'}
                    Ils doivent être dégagés de toute matière obstruante en diminuant l’efficacité.
                  {'\n\n'}
                    <Bold>(Entrée en vigueur le 18 mai 2018)</Bold>
                    {'\n\n'}
                    Lorsqu’un équipement installé sur un véhicule en masque les phares, les feux ou les réflecteurs, le véhicule ou l’équipement doit être muni de phares, de feux ou de réflecteurs équivalents placés aux endroits où ils peuvent être visibles.
                  {'\n\n'}
                    <Bold>Art. 24 Règlement sur les normes de sécurité des véhicules routiers: </Bold>
                    {'\n\n'}
                    Aucun dispositif ou matière monté ou apposé sur le véhicule routier, sur le phare, le feu ou la lentille ne doit masquer la lumière du phare ou du feu ou en réduire l’intensité.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
        en: {
            art: 'Section 237',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Light visibility',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The headlights, lights or reflectors are not visible at a distance less than 150 metres. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The headlights, lights and reflectors are not free of any obstructing matter that reduces their effectiveness. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 237 Highway safety code: </Bold>
                    {'\n\n'}
                    The headlights, lights and reflectors prescribed in this chapter must be visible at a distance of not less that 150 metres and conform to the standards established by regulation.
                  {'\n\n'}
                    They must be kept free of any obstructing matter that reduces their effectiveness.
                  {'\n\n'}
                    <Bold>(Modification applying after May 18th 2018) </Bold>
                    {'\n\n'}
                    If equipment installed on a vehicle blocks the vehicle’s headlights, lights or reflectors, the vehicle or equipment must carry equivalent headlights, lights or reflectors in places where they are visible.
                  {'\n\n'}
                    <Bold>s. 24 Regulation respecting safety standards for road vehicles: </Bold>
                    {'\n\n'}
                    No device or material mounted or affixed to a road vehicle, a headlight, a light or a lens shall hide or dim the light.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
    },
    '238': {
        fr: {
            art: 'Art: 238',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Nettoyage des phares',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>quatre éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> La saleté sur les phares, les feux ou les réflecteurs de votre véhicule en diminue l’efficacité; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Une matière obstruante sur les phares, les feux ou les réflecteurs de votre véhicule en diminue l’efficacité; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Un agent de la paix exige le nettoyage des phares, des feux ou des réflecteur du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> Vous ne vous conformez pas à cette exigence. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 238 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Un agent de la paix peut exiger du conducteur d’un véhicule routier le nettoyage des phares, feux et réflecteurs du véhicule, lorsque l’état de saleté ou une matière obstruante en diminue l’efficacité.
                  {'\n\n'}
                    Le conducteur doit se conformer à cette exigence.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
        en: {
            art: 'Section 238',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Cleaning the headlights',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>four elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The presence of dirt reduces the effectiveness of your headlights, lights or reflectors; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The presence of an obstructing matter reduces the effectiveness of your headlights, lights or reflectors; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> A peace officer requires the cleaning of your headlights, lights or reflectors; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> You do not comply with the requirement of the peace officer. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 238 Highway safety code: </Bold>
                    {'\n\n'}
                    A peace officer may require the driver of a road vehicle to clean the headlights, lights and reflectors of the vehicle where their effectiveness is reduced by dirt or other obstructing matter.
                  {'\n\n'}
                    The driver must comply with the requirement of the peace officer.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
    },
    '239': {
        fr: {
            art: 'Art: 239',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feux pivotants',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes l’exploitant du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule est muni de phares blancs clignotants alternatifs. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule est muni de feux clignotants ou pivotants. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Les véhicules d’urgence et les véhicules de police peuvent être munis de feux clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 226 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules de services peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules d’équipement peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules utilisés pour le déneigement ou l'entretien des chemins peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules appartenant à une entreprise de télécommunication ou à une entreprise agissant pour celle-ci, à la Société canadienne de poste, à une entreprise exploitant un réseau de transport d’énergie ou à une entreprise de transport en commun peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les tracteurs de ferme peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules-outils peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules qui escortent les participants d’un évènement exceptionnel peuvent être munis de feux jaunes clignotants ou pivotants. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• Les véhicules routiers appartenant à une entreprise de services funéraires peuvent être munis de feux jaunes clignotants blancs ou mauves situés à l’avant. </Bold>
                    {'\n'}
                    <Small>Référence: art. 227.1 C.s.r.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 239 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Aucun véhicule routier, à l’exception de ceux visés aux articles 226 à 227.1, ne peut être muni de phares blancs clignotants alternatifs ou de feux clignotants ou pivotants de quelque couleur que ce soit.
                  {'\n\n'}
                    Aucun véhicule routier visé à l’un des articles 226, 226.2, 227 ou 227.1 ne peut être muni de feux clignotants ou pivotants d’une couleur autre que celle autorisée pour ce véhicule, conformément à l’Art: qui vise un tel véhicule.
                  {'\n\n'}
                    <Bold>Art. 226 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Les véhicules d’urgence peuvent être munis de feux rouges clignotants ou pivotants. En outre, ils peuvent être munis de phares blancs clignotants alternatifs et de feux blancs clignotants ou pivotants.
                  {'\n\n'}
                    Les véhicules de police peuvent être munis de feux bleus clignotants ou pivotants.
                  {'\n\n'}
                    <Bold>Art. 227 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Outre les véhicules routiers pour lesquels la loi l’exige, les véhicules suivants peuvent être munis de feux jaunes clignotants ou pivotants:
                  {'\n'}
                    (1) les véhicules reconnus par la Société conformément aux critères établis par règlement;
                  {'\n'}
                    (2) les véhicules de service;
                  {'\n'}
                    (3) les véhicules d’équipement;
                  {'\n'}
                    (4) les véhicules utilisés pour l’entretien des chemins ou pour le déneigement;
                  {'\n'}
                    (5) les véhicules utilisés dans le cadre d’un travail visant un service public et appartenant à une entreprise de télécommunication ou à une entreprise agissant pour celle-ci, à la Société canadienne des postes, à une entreprise exploitant un réseau de transport d’énergie ou à une entreprise de transport en commun pour la supervision ou l’entretien d’un réseau de transport en commun;
                  {'\n'}
                    (6) les tracteurs de ferme appartenant ou non à un agriculteur;
                  {'\n'}
                    (7) les véhicules-outils;
                  {'\n'}
                    (8) les véhicules qui escortent des participants lors d’événements exceptionnels, d’épreuves ou de compétitions sportives.
                  {'\n\n'}
                    Pour l’application du présent article, un véhicule de service est un véhicule automobile agencé pour l’approvisionnement, la réparation ou le remorquage des véhicules routiers et un véhicule d’équipement est un véhicule automobile servant au transport de l’équipement qui y est fixé en permanence et comportant un espace pour le chargement.
            </Text>
            ),
            image: '239.png',
            analyse: '',
        },
        en: {
            art: 'Section 239',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Rotating lights',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the operator of the road vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The vehicle is equipped with alternately flashing white headlights; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The vehicle is equipped with flashing or rotating lights of whatever colour;</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Emergency and police vehicles may be equipped with flashing or rotating lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 226 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Service vehicles may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Equipment vehicles may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Vehicles used for snow removal or for road maintenance may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Vehicles used for work and belonging to a telecommunications enterprise or an enterprise acting for it, the Canada Post Corporation, an enterprise operating electrical transmission system or a public transportation enterprise may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Farm tractors may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Tool vehicles may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Vehicles that escort participants during exceptional events may be equipped with flashing or rotating yellow lights. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• Road vehicles belonging to a funeral services business may carry flashing white or purple lights on the front of the vehicle. </Bold>
                    {'\n'}
                    <Small>Reference: s. 227.1 H.s.c.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 239 Highway safety code:</Bold>
                    {'\n\n'}
                    No road vehicle, except a vehicle contemplated in section 226 to 227.1, may carry alternately flashing white headlights or flashing or rotating lights of whatever colour.
                  {'\n\n'}
                    No road vehicle contemplated in section 226, 226.2, 227 or 227.1 may carry flashing or rotating lights of another colour than the colour authorized for that vehicle in accordance with the section which applies to such a vehicle.
                  {'\n\n'}
                    <Bold>S. 226 Highway safety code:</Bold>
                    {'\n\n'}
                    Emergency vehicles may carry flashing or rotating red lights. In addition, they may carry alternately flashing white headlights and flashing or rotating white lights.
                  {'\n\n'}
                    Police vehicles may carry blue flashing or rotating lights.
                  {'\n\n'}
                    <Bold>S. 227 Highway safety code:</Bold>
                    {'\n\n'}
                    In addition to road vehicles that are required by law to be so equipped, the following vehicles may carry flashing or rotating amber lights:
                  {'\n'}
                    (1) vehicles recognized by the Société in accordance with the criteria established by regulation;
                  {'\n'}
                    (2) service vehicles;
                  {'\n'}
                    (3) equipment vehicles;
                  {'\n'}
                    (4) vehicles used for road maintenance or for snow removal;
                  {'\n'}
                    (5) vehicles used for work on a public utility and belonging to a telecommunications enterprise or an enterprise acting for it, the Canada Post Corporation, an enterprise operating an electrical transmission system or a public transportation enterprise for the supervision or maintenance of a public transport network;
                  {'\n'}
                    (6) farm tractors regardless of whether they belong to a farmer;
                  {'\n'}
                    (7) tool vehicles; and
                  {'\n'}
                    (8) vehicles that escort participants during exceptional events or sports events or competitions
                  {'\n\n'}
                    For the purposes of this section, “service vehicle” is a motor vehicle equipped to refuel, repair or tow road vehicles and an “equipment vehicle” is a motor vehicle used for the transportation of permanently attached equipment and provided with a load space.
            </Text>
            ),
            image: '239.png',
            analyse: '',
        },
    },
    '247': {
        fr: {
            art: 'Art: 247',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Freins arrière',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous circulez à bicyclette; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez sur une trottinette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> La bicyclette ou la trottinette n’est pas munie d’un frein agissant sur la roue arrière suffisamment puissant pour bloquer rapidement la rotation de la roue sur une chaussée pavée, sèche et plane. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 247 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Toute bicyclette et toute trottinette doivent être munies d’au moins un système de freins agissant sur la roue arrière. Ce système doit être suffisamment puissant pour bloquer rapidement la rotation de la roue, sur une chaussée pavée, sèche et plane.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
        en: {
            art: 'Section 247',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Rear brakes',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are riding a bicycle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a non-motorized scooter; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The bicycle or the non-motorized scooter is not equipped with a rear wheel brake sufficiently powerful to quickly block the rotation of the wheel on a paved, dry and level roadway. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 247 Highway safety code: </Bold>
                    {'\n\n'}
                    Every bicycle and non-motorized scooter must be equipped with at least one brake system acting on the rear wheel. The system must be sufficiently powerful to quickly block the rotation of the wheel on a paved, dry and level roadway.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
    },
    '256': {
        fr: {
            art: 'Art: 256',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Utiliser l’avertisseur sonore d’un véhicule routier sans nécessité',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous avez klaxonné sans nécessité. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 256 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité, nul ne peut utiliser l’avertisseur sonore d’un véhicule routier.
                  {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler.
            </Text>
            ),
            image: '256.png',
            analyse: '',
        },
        en: {
            art: 'Section 256',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'To sound the horn of a road vehicle unnecessarily',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You sounded the horn of the vehicle unnecessarily. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 256 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may sound the horn of a road vehicle, except in case of necessity.
                  {'\n\n'}
                    In addition to public highways, this section applies on private roads open to public vehicular traffic, as well as on land occupied by shopping centres and other land where public traffic is allowed.
            </Text>
            ),
            image: '256.png',
            analyse: '',
        },
    },
    '258': {
        fr: {
            art: 'Art: 258',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Avoir un système d’échappement conforme aux normes établies par règlement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule automobile utilisant du carburant; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le propriétaire du véhicule automobile utilisant du carburant; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le système d’échappement de ce véhicule émet davantage de bruit que celui d’origine.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le système d’échappement de ce véhicule augmente le risque de brûlure par rapport à celui d’origine. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 258 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout véhicule automobile, à l’exception d’un véhicule qui n’utilise aucun carburant comme source d’énergie, doit être muni d’un système d’échappement conforme aux normes établies par règlement.
            </Text>
            ),
            image: '258.png',
            analyse: '',
        },
        en: {
            art: 'Section 258',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'To equip a motor vehicle with an exhaust system that conforms to the standards',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the fuel motor vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the owner of the fuel motor vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The exhaust system of that vehicle is noisier than the one originally installed by the manufacturer. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The exhaust system of that vehicle accentuates the risk of burn in comparison with the one originally installed by the manufacturer. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 258 Highway safety code: </Bold>
                    {'\n\n'}
                    Every motor vehicle, except a vehicle that does not use fuel as its source of energy, must be equipped with an exhaust system that conforms to the standards established by regulation.
            </Text>
            ),
            image: '258.png',
            analyse: '',
        },
    },
    '265': {
        fr: {
            art: 'Art: 265',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Pare-brise et vitres',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule automobile;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule automobile;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le pare-brise ou les vitres de votre véhicule ne sont pas conformes aux normes établies par règlement pour assurer la visibilité. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le pare-brise ou les vitres ne sont pas libres de toute matière pouvant nuire à votre visibilité. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Les vitres latérales situées de chaque côté du poste de conduite doivent laisser passer la lumière à 70% ou plus lorsque mesurée à l’aide d’un photomètre. </Bold>
                    {'\n\n'}
                    <Bold>• Une bande d’au plus 15 cm de large peut être placée sur la partie supérieure du pare-brise. Une photo peut être pertinente. </Bold>
                    {'\n'}
                    <Small>Référence: art. 64 Règlement sur les normes de sécurité des véhicules routiers.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 265 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le pare-brise et les vitres d’un véhicule automobile doivent être conformes aux normes établies par règlement pour assurer la visibilité du conducteur.
                  {'\n\n'}
                    Ils doivent être libres de toute matière pouvant nuire à la visibilité du conducteur.
                  {'\n\n'}
                    <Bold>Art. 64 Règlement sur les normes de sécurité des véhicules routiers:</Bold>
                    {'\n\n'}
                    Aucune matière assombrissante ou opaque ne doit être apposée ou vaporisée sur le pare-brise. Une bande d’au plus 15 cm de large peut cependant être placée sur la partie supérieure du pare-brise.
                  {'\n\n'}
                    Les vitres latérales situées de chaque côté du poste de conduite doivent laisser passer la lumière à 70% ou plus lorsque mesurée à l’aide d’un photomètre.
                  {'\n\n'}
                    https://saaq.gouv.qc.ca/securite-routiere/moyens-deplacement/auto/auto-modifiee/vitres-teintees/
            </Text>
            ),
            image: '265+.png',
            analyse: '',
        },
        en: {
            art: 'Section 256',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Windshield and other windows',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the motor vehicle;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the owner of the motor vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The windshield or the other windows of your vehicle were not conform to standards. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The windshield or the other windows were not free of any material that might reduce your visibility. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The windows on each side of the driver’s compartment shall admit 70% or more light, when measured with a photometer. </Bold>
                    {'\n\n'}
                    <Bold>• A strip no more than 15 cm in width may be affixed to the upper part of the windshield. Photos may be relevant. </Bold>
                    {'\n'}
                    <Small>Reference: S. 64 Regulation respecting safety standards for road vehicles.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 265 Highway safety Code.</Bold>
                    {'\n\n'}
                    The windshield and the other windows of a motor vehicle must conform to the standards prescribed by regulation to ensure good visibility for the driver.
                  {'\n\n'}
                    They must be free of any material that might reduce visibility for the driver.
                  {'\n\n'}
                    <Bold>S. 64 Regulation respecting safety standards for road vehicles routière:</Bold>
                    {'\n\n'}
                    No darkening or opaque material shall be affixed to or sprayed on the windshield of a road vehicle. However, a strip no more than 15 cm in width may be affixed to the upper part of the windshield.
                  {'\n\n'}
                    The windows on each side of the driver’s compartment shall admit 70% or more light, when measured with a photometer.
                  {'\n\n'}
                    https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/automobile/modified-cars/tinted-windows/
            </Text>
            ),
            image: '265+.png',
            analyse: '',
        },
    },
    '270': {
        fr: {
            art: 'Art: 270',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Pneus conformes aux normes établies par règlement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule est muni d’un ou de plusieurs pneus non conformes aux normes. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 270 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout véhicule routier doit être muni de pneus conformes aux normes établies par règlement.
                  {'\n\n'}
                    <Bold>Art. 120 Règlement sur les normes de sécurité des véhicules routiers:</Bold>
                    {'\n\n'}
                    Les pneus doivent être conformes aux normes suivantes:
                  {'\n'}
                    1°  aucun pneu ne doit avoir atteint un degré d’usure tel qu’un indicateur d’usure touche la chaussée ou que la profondeur de la bande de roulement mesurée dans une rainure ou une sculpture principale, sauf au niveau de l’indicateur d’usure, soit inférieure à 3,2 mm sur un pneu relié à la direction d’un véhicule motorisé ayant un poids nominal brut de 4 500 kg ou plus et 1,6 mm dans tous les autres cas;
                  {'\n'}
                    2°  en aucun point du pneu il ne doit y avoir d’usure, de coupure ou tout autre dommage exposant la toile de renforcement ou la ceinture d’acier. De plus, une fissure dans le flanc d’un pneu ne doit pas excéder 3,2 mm de profondeur;
                  {'\n'}
                    3°  un pneu ne doit pas présenter de renflement ou de déformation anormale et aucune matière étrangère pouvant causer une crevaison ne doit être logée dans la bande de roulement ou dans le flanc;
                  {'\n'}
                    4°  un pneu ne doit pas avoir été refaçonné au-delà de la profondeur des rainures gravées lors de sa fabrication à moins que le modèle n’ait été prévu à cet effet, auquel cas cette caractéristique doit être indiquée sur le flanc;
                  {'\n'}
                    5°  aucun pneu dont la bande de roulement a été rechapée ne doit être installé sur l’essieu relié à la direction d’un véhicule d’urgence, d’un minibus ou d’un véhicule ayant un poids nominal brut de 4 500 kg ou plus, sauf si le véhicule est muni de 2 essieux reliés à la direction;
                  {'\n'}
                    6°  en aucun endroit, la bande de roulement ou le composé caoutchouté du flanc ne doit être séparé de la carcasse du pneu sauf dans le cas d’un pneu dont la bande de roulement a été rechapée à la condition que cette séparation n’excède pas 6 mm de largeur;
                  {'\n'}
                    7°  des pneus de dimension, de type de construction ou de série différent ne peuvent être installés sur un même essieu ou sur une combinaison d’essieux à moins qu’ils ne soient reconnus par le fabricant des pneus comme étant équivalents;
                  {'\n'}
                    8°  le montage de pneus radiaux à l’avant et de pneus diagonaux à l’arrière est prohibé sauf sur un véhicule à roues arrière jumelées;
                  {'\n'}
                    9°  les pneus avant d’un véhicule de promenade ne peuvent être d’une série moindre ou avoir une bande de roulement plus large que les pneus arrière;
                  {'\n'}
                    10°  les pneus jumelés ne doivent pas se toucher, ni avoir une différence de diamètre de plus de 13 mm;
                  {'\n'}
                    11°  un pneu ne doit pas être d’une dimension inférieure à la dimension minimale indiquée par le fabricant du véhicule à moins qu’il ne soit reconnu comme équivalent par le fabricant du pneu; il peut cependant être d’une dimension supérieure à celle indiquée par le fabricant du véhicule à la condition que le pneu ne touche pas à la carrosserie ou à un autre élément du véhicule pour tous les déplacements de la suspension et de la direction;
                  {'\n'}
                    12°  la réparation d’un pneu doit avoir été effectuée selon les normes du fabricant du pneu;
                  {'\n'}
                    13°  la variation de la pression d’air des pneus d’un même essieu ne doit pas excéder 10% et la pression d’air ne doit pas excéder celle inscrite sur le flanc du pneu ou être inférieure à la valeur déterminée par le fabricant du véhicule ou du pneu;
                  {'\n'}
                    14°  les valves ne doivent pas être usées, endommagées, écorchées ou coupées et la partie en saillie doit être suffisamment longue et accessible pour permettre un gonflement aisé des pneus et les lectures des pressions;
                  {'\n'}
                    15°  aucun des pneus ne doit être identifié ou porter de mention par son fabricant indiquant qu’il est destiné à un usage spécial ou qu’il n’est pas conçu pour rouler sur un chemin public sauf s’il est installé sur un camion spécialement adapté pour un usage agricole ou sur une remorque de ferme;
                  {'\n'}
                    16°  les pneus doivent être installés sur la roue selon les normes de leur fabricant.
                  {'\n\n'}
                    <Bold>Art. 121 Règlement sur les normes de sécurité des véhicules routiers:</Bold>
                    {'\n\n'}
                    Les roues et les pièces de fixation doivent être adéquates et conformes aux normes suivantes:
                  {'\n'}
                    1°  aucun goujon, écrou, boulon ou autre pièce de fixation ne doit manquer, être fissuré, cassé, endommagé, réparé par soudage et chaque pièce doit être solidement fixée et de la dimension et du type déterminés par le fabricant de la roue;
                  {'\n'}
                    2°  un minimum d’une spire et demie du filetage des boulons doit déborder les écrous de fixation, sauf indication contraire du fabricant;
                  {'\n'}
                    3°  la roue ne doit pas être faussée, cassée, mal alignée, déformée, endommagée ou corrodée au point d’affaiblir sa capacité; elle ne doit présenter aucune fissure ou trou de boulon ovalisé, ni porter de marque de réparation ou de soudage autre que l’installation de bandes de renforcement pour la roue à rayons ou les soudures originales du fabricant;
                  {'\n'}
                    4°  lorsque la roue est formée de 2 ou 3 pièces, cette roue ne doit pas être endommagée et le cerceau de fixation ne doit pas être faussé, mal fixé, fissuré, déformé, cassé, soudé, avoir moins de 3 mm de dégagement à ses extrémités et il doit correspondre à la jante sur laquelle il est monté;
                  {'\n'}
                    5°  la roue moulée ne doit pas être usée à ses points de fixation;
                  {'\n'}
                    6°  la roue à rayons doit avoir tous ses rayons qui ne doivent pas être cassés, déformés ou détendus;
                  {'\n'}
                    7°  l’entretoise séparant les roues jumelées ne doit pas être endommagée, manquante, déformée, fissurée ou cassée;
                  {'\n'}
                    8°  la roue doit être de la dimension et de la capacité déterminées par le fabricant de la roue pour le pneu qui y est installé.
            </Text>
            ),
            image: '270.png',
            analyse: '',
        },
        en: {
            art: 'Section 270',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Every motor vehicle must carry lightning devices prescribed by the Code',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> This vehicle’s tires do not conform with the standards prescribed by regulation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 270 Highway safety code.</Bold>
                    {'\n\n'}
                    Every road vehicle must be fitted with tires that conform to the standards prescribed by regulation.
                  {'\n\n'}
                    <Bold>S. 120 Regulation respecting safety standards for road vehicles:</Bold>
                    {'\n\n'}
                    Tires shall comply with the following standards:
                  {'\n'}
                    (1)  no tire shall be so worn that a wear indicator touches the road or that the depth of the tread measured in a main groove or tread design, elsewhere than at the wear indicator, is less than 3.2 mm on a front tire of a motor vehicle whose gross vehicle weight rating is 4,500 kg or more and 1.6 mm in all other cases;
                  {'\n'}
                    (2)  at no point shall a tire be worn, cut or damaged to expose the cord or steel belt. Furthermore, a crack in the sidewall of a tire may not be deeper than 3.2 mm;
                  {'\n'}
                    (3)  no tire shall be abnormally bulged or out of shape and no foreign material that could cause a puncture shall be stuck in the tread or in the sidewall;
                  {'\n'}
                    (4)  a tire shall not have been recut deeper than the original grooves, unless the model was specially designed for such recutting and that feature is indicated on the sidewall;
                  {'\n'}
                    (5)  no tire whose tread has been recapped shall be mounted on the front steering axle of an emergency vehicle, a minibus or a vehicle whose gross vehicle weight rating is 4,500 kg or more, unless the vehicle is equipped with 2 active steering axles;
                  {'\n'}
                    (6)  at no point shall the tread or rubber compound of the sidewall be separated from the carcass of the tire, unless the tire was recapped and the separation does not exceed 6 mm in width;
                  {'\n'}
                    (7)  tires differing in size, construction type or series shall not be installed on a same axle or a combination of axles, unless they are recognized by the manufacturer as equivalent;
                  {'\n'}
                    (8)  it is prohibited to mount radial tires on the font and bias-ply tires on the rear, unless the vehicle has dual rear wheels;
                  {'\n'}
                    (9)  the front wheels of a passenger vehicle shall not be of a smaller series or have a tread wider than the rear tires;
                  {'\n'}
                    (10)  tires in a dual tire set shall not be in contact with one another or differ from other in diameter by more than 13 mm;
                  {'\n'}
                    (11)  a tire shall not be of a size smaller than the minimum dimension indicated by the vehicle manufacturer, unless it is recognized as equivalent by the tire manufacturer; it may however be of a size greater than that indicated by the vehicle manufacturer provided that the tire does not touch the body or another component of the vehicle in every position of the suspension or steering;
                  {'\n'}
                    (12)  a tire shall have been repaired in accordance with the tire manufacturer’s standards;
                  {'\n'}
                    (13)  the air pressure in the tires of a same axle shall not differ by more than 10% and the pressure shall not exceed the pressure printed on the sidewall or be lower than the value determined by the manufacturer of the vehicle or of the tire;
                  {'\n'}
                    (14)  no tire valve shall be worn down, damaged, scraped or gashed and the exposed portion of each valve shall be of sufficient length and accessible to allow for the easy inflation of the tire and pressure reading;
                  {'\n'}
                    (15)  no tire shall bear marks or wording to indicate that it is for restricted use and unsuited for use on public roads, unless it is mounted on a truck specially adapted for farming purposes or on a farm trailer; and
                  {'\n'}
                    (16)  tires shall be mounted on the wheel in accordance with their manufacturer’s standards.
                  {'\n\n'}
                    <Bold>S. 121 Regulation respecting safety standards for road vehicles:</Bold>
                    {'\n\n'}
                    The wheels and their fasteners shall be adequate and comply with the following standards:
                  {'\n'}
                    (1)  no wheel stud, nut, bolt, or other fastener shall be missing, cracked, broken, damaged or repaired by welds and each part shall be securely fastened and comply with the dimension and type determined by the wheel manufacturer;
                  {'\n'}
                    (2)  bolts shall extend at least one and a half thread groove beyond fastener nuts, unless otherwise indicated by the vehicle manufacturer;
                  {'\n'}
                    (3)  the wheel shall not be so bent, broken, misaligned, warped, damaged or corroded that its capacity is reduced; it shall not have any crack, elongated bolt hole, signs of repair or welds other than force bands for a spoked wheel and the manufacturer’s original welds;
                  {'\n'}
                    (4)  where the wheel is composed of 2 or 3 parts, it shall not be damaged and the lock ring shall not be bent, unsecurely mounted, cracked, warped, broken, welded, have less than 3 mm clearance at their ends and shall correspond to the rim on which it is mounted;
                  {'\n'}
                    (5)  no cast wheel shall show evidence of wear in the clamp area;
                  {'\n'}
                    (6)  no spoked wheel shall have any missing, broken, bent or slack spokes;
                  {'\n'}
                    (7)  the spacer between dual wheels shall not be damaged, missing, warped, cracked or broken; and
                  {'\n'}
                    (8)  a wheel shall be of the dimension and capacity determined by the wheel manufacturer for the tire mounted on it.
            </Text>
            ),
            image: '270.png',
            analyse: '',
        },
    },
    '299': {
        fr: {
            art: 'Art: 299',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circuler à une vitesse supérieure à la limite indiquée par la signalisation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez dans une zone où la vitesse est contrôlée par la signalisation; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous circulez à une vitesse supérieure à cette signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Nous pouvons vous aider à sauver vos points.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 299 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La municipalité qui détermine, par règlement, une limite de vitesse différente de celle prévue à l’Art: 328, doit indiquer celle-ci au moyen d’une signalisation. À défaut par elle de le faire, l’Art: 328 s’applique.
                  {'\n\n'}
                    Nul ne peut circuler à une vitesse supérieure à la limite indiquée sur la signalisation installée en vertu du présent article.
            </Text>
            ),
            image: '299+.png',
            analyse: '',
        },
        en: {
            art: 'Section 299',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Traveling at a rate of speed exceeding the limit indicated by signage.',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You travel in a controlled speed zone regulated by signs; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You travel at a rate of speed exceeding the limit indicated by signs. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    We can help you save your demerit points.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 299 Highway safety code: </Bold>
                    {'\n\n'}
                    Every municipality that establishes, by by-law, a speed limit other than the rate of speed provided for in section 328 shall indicate that rate of speed by means of signs or signals. If the municipality fails to do so, section 328 applies.
                  {'\n\n'}
                    No person may travel at a rate of speed exceeding the limit indicated on any signs erected under this section.
            </Text>
            ),
            image: '299+.png',
            analyse: '',
        },
    },
    '303.2': {
        fr: {
            art: 'Art: 303.2',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circuler à une vitesse supérieure à la limite indiquée par une signalisation de construction ou d’entretien',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes dans une zone de construction ou d’entretien dans laquelle la vitesse est contrôlée par la signalisation; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous circulez à une vitesse supérieure à cette signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Nous pouvons vous aider à sauver vos points.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 303.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    La personne responsable de l’entretien d’un chemin public peut, lors de travaux de construction ou d’entretien, installer pour la durée de ceux-ci une signalisation conforme aux normes établies par le ministre des Transports qui indique une limite de vitesse à respecter autre que celle prescrite.
                  {'\n\n'}
                    La décision de modifier une limite de vitesse doit être inscrite dans un registre tenu par la personne responsable de l’entretien d’un chemin public en y précisant le lieu où cette vitesse est prescrite ainsi que la durée des travaux. L’installation d’une signalisation fait preuve de cette décision.
                  {'\n\n'}
                    <Bold>Art. 303.2 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut circuler à une vitesse supérieure à la limite de vitesse indiquée sur la signalisation installée en vertu de l’Art: 303.1.
            </Text>
            ),
            image: '303.2.png',
            analyse: '',
        },
        en: {
            art: 'Section 303.2',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Traveling at a rate of speed exceeding the limit indicated by construction or maintenance signs',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You travel in a construction or maintenance area where speed is controlled by signage; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You travel at a rate of speed exceeding the limit indicated by the signs. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    We can help you save your demerit points.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 303.1 Highway safety code: </Bold>
                    {'\n\n'}
                    During construction or maintenance work, the person responsible for the maintenance of a public highway may, for the duration of the work, erect signs or signals in conformity with the standards laid down by the Minister of Transport to indicate a rate of speed other than the prescribed rate of speed to be respected
                  {'\n\n'}
                    The decision to change a rate of speed must be entered in a register kept by the person responsible for the maintenance of the public highway with an indication of the location where the rate of speed is prescribed and the duration of the work. The installation of signs or signals is proof of that decision.
                  {'\n\n'}
                    <Bold>S. 303.2 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may travel at a rate of speed exceeding the limit indicated on the signs or signals erected under section 303.1.
            </Text>
            ),
            image: '303.2.png',
            analyse: '',
        },
    },
    '310': {
        fr: {
            art: 'Art: 310',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ne pas s’être conformé à la signalisation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à une signalisation; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne vous conformez pas à cette signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 310 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Toute personne est tenue de se conformer à la signalisation installée en vertu du présent code.
            </Text>
            ),
            image: '310.png',
            analyse: '',
        },
        en: {
            art: 'Section 310',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Not complying with every sign or signal',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a sign or signal; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not comply with this sign or signal. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 310 Highway safety code: </Bold>
                    {'\n\n'}
                    Every person must comply with every road or traffic sign or signal erected under this Code.
            </Text>
            ),
            image: '310.png',
            analyse: '',
        },
    },
    '311': {
        fr: {
            art: 'Art: 311',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ne pas obéir aux ordres d’un signaleur',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> La circulation est dirigée par un agent de la paix; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La circulation est dirigée par un brigadier scolaire; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La signalisation est dirigée par un signaleur chargé de diriger la circulation lors de travaux; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’obéissez pas à un ordre ou à des signaux. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 311 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsque la circulation est dirigée par un agent de la paix, un brigadier scolaire ou un signaleur chargé de diriger la circulation lors de travaux, toute personne doit, malgré une signalisation contraire, obéir à leurs ordres et signaux.
            </Text>
            ),
            image: '311.png',
            analyse: '',
        },
        en: {
            art: 'Section 311',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Not obeying a flag person’s orders',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The traffic is directed by a peace officer; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The traffic is directed by a school crossing guard; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The traffic is directed by a flag person in charge of directing traffic around or about work sites; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not obey to an order or a signal. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 311 Highway safety code: </Bold>
                    {'\n\n'}
                    Where traffic is directed by a peace officer, a school crossing guard or a flag person in charge of directing traffic around or about work sites, every person shall obey his orders or signals even if contrary to existing traffic signs or signals.
            </Text>
            ),
            image: '311.png',
            analyse: '',
        },
    },
    '312': {
        fr: {
            art: 'Art: 312',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circuler sur une propriété privée afin d’éviter la signalisation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez sur une propriété privée afin d’éviter la signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 312 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut circuler sur une propriété privée afin d’éviter de se conformer à une signalisation.
            </Text>
            ),
            image: '312+.png',
            analyse: '',
        },
        en: {
            art: 'Section 312',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Driving on private property to avoid compliance with a traffic sign or signal',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You drive on a private property to avoid compliance with this sign or signal. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 312 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may drive on private property to avoid compliance with a traffic sign or signal.
            </Text>
            ),
            image: '312+.png',
            analyse: '',
        },
    },
    '326.1': {
        fr: {
            art: 'Art: 326.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Franchir une ligne de démarcation continue',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à une ligne continue simple; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous faites face à une ligne continue double; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous faites face à une ligne double formée d’une ligne discontinue et d’une ligne continue; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous faites face à un marquage à l’intérieur duquel se retrouvent des hachures; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous franchissez une de ces marques. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 326.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    <Bold>(Modifications en vigueur le 18 mai 2018)</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ne peut franchir aucune des marques suivantes appliquées sur la chaussée:
                  {'\n'}
                    (1)  une ligne continue simple;
                  {'\n'}
                    (2)  une ligne continue double;
                  {'\n'}
                    (3)  une ligne double formée d’une ligne discontinue et d’une ligne continue située du côté de la voie où circule le véhicule routier;
                  {'\n'}
                    (4)  un marquage à l’intérieur duquel se retrouvent des hachures.
                  {'\n\n'}
                    En outre de ce qui est prévu à l’Art: 344, au paragraphe 1° du deuxième alinéa de l’Art: 348 et à l’Art: 378, le premier alinéa ne s’applique pas lorsque le conducteur peut effectuer sans danger l’une des manœuvres suivantes:
                  {'\n'}
                    (1)  s’engager sur un chemin public à partir de l’accotement de celui-ci ou à partir d’un chemin privé ou d’un terrain privé;
                  {'\n'}
                    (2)  quitter une voie obstruée ou fermée;
                  {'\n'}
                    (3)  effectuer un virage à gauche pour s’engager sur un chemin privé ou un terrain privé;
                  {'\n'}
                    (4)  effectuer un virage à droite pour s’engager sur l’accotement, sur un chemin privé ou sur un terrain privé;
                  {'\n'}
                    (5)  s’engager dans une voie réservée aux virages à gauche dans les deux sens;
                  {'\n'}
                    (6)  traverser une voie de circulation réservée exclusivement à certains véhicules.
            </Text>
            ),
            image: '326.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 326.1',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Crossing a solid line',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a solid single line; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are facing a solid double line;  </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are facing a double line consisting of a broken line and a solid line; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are facing crosshatch markings; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You cross one of those markings. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 326.1 Highway safety code: </Bold>
                    {'\n\n'}
                    <Bold>(Modifications applying after May 18th 2018)</Bold>
                    {'\n\n'}
                    The driver of a road vehicle shall not cross any of the following roadway markings:
                  {'\n'}
                    (1)  a solid single line;
                  {'\n'}
                    (2)  a solid double line;
                  {'\n'}
                    (3)  a double line consisting of a broken line and a solid line, the latter being adjacent to the lane in which the road vehicle is moving;
                  {'\n'}
                    (4)  crosshatch markings.
                  {'\n\n'}
                    In addition to what is provided for in section 344, subparagraph 1 of the second paragraph of section 348 and section 378, the first paragraph does not apply if the driver can safely:
                  {'\n'}
                    (1)  enter a public highway from the shoulder, from a private road or from private land;
                  {'\n'}
                    (2)  leave a lane that is obstructed or closed to traffic;
                  {'\n'}
                    (3)  make a left turn to enter a private road or private land;
                  {'\n'}
                    (4)  make a right turn to pull onto the shoulder or enter a private road or private land;
                  {'\n'}
                    (5)  enter a lane reserved for left turns from either direction;
                  {'\n'}
                    (6)  cross a traffic lane reserved for the exclusive use of certain vehicles.
            </Text>
            ),
            image: '326.1.png',
            analyse: '',
        },
    },
    '327': {
        fr: {
            art: 'Art: 327',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Vitesse excessive ou action dangereuse',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous avez conduit un véhicule; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez commis une action dangereuse; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Cette conduite ou cette action était susceptible de mettre en péril la vie, la sécurité des personnes ou la propriété. </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Cette conduite ou cette action s’est déroulée sur un chemin public. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette conduite ou cette action s’est déroulée sur un chemin privé ouvert à la circulation publique. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette conduite ou cette action s’est déroulée sur sur un terrain de centre commercial. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Cette conduite ou cette action s’est déroulée sur un autre terrain où le public est autorisé à circuler. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 327 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Toute vitesse ou toute action susceptible de mettre en péril la vie ou la sécurité des personnes ou la propriété est prohibée
                  {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci, sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler.
            </Text>
            ),
            image: '327.png',
            analyse: '',
        },
        en: {
            art: 'Section 327',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Excessive speeding or dangerous action',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You were driving a vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You committed a dangerous action;  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That driving or that action could endanger human life and safety or property; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That driving or that action took place on public highways. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That driving or that action took place on private roads open to public. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That driving or that action took place on a shopping centre’s land; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That driving or that action took place on any other land where public traffic is allowed. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 327 Highway safety code: </Bold>
                    {'\n\n'}
                    Any rate of speed or any action that can endanger human life and safety or property is prohibited.
                  {'\n\n'}
                    In addition to public highways, this section applies on highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune, on private roads open to public vehicular traffic, as well as on land occupied by shopping centres and other land where public traffic is allowed.
            </Text>
            ),
            image: '327.png',
            analyse: '',
        },
    },
    '328': {
        fr: {
            art: 'Art: 328',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circuler à une vitesse supérieure à la limite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez dans une zone où la vitesse est limitée par la signalisation; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez dans une zone où la vitesse est limitée par le Code; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous circulez à une vitesse supérieure à cette limite. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 328 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    1°  inférieure à 60 km/h et supérieure à 100 km/h sur les autoroutes, sauf:
                  {'\n'}
                    (a)  si une signalisation comportant un message lumineux et variable vient indiquer, selon les circonstances et les temps de la journée, dont les conditions climatiques ou les périodes de pointe, la vitesse minimale ou maximale autorisée sur la partie de l’autoroute visée par cette signalisation;
                  {'\n'}
                    (b)  si un permis spécial de circulation établit comme condition, pour l’utilisation d’un véhicule routier hors normes, de circuler à une vitesse inférieure;
                  {'\n\n'}
                    2°  excédant 90 km/h sur les chemins à surface en béton de ciment, en béton bitumineux et autres surfaces du même genre;
                  {'\n\n'}
                    3°  excédant 70 km/h sur les chemins en gravier;
                  {'\n\n'}
                    4°  excédant 50 km/h dans une agglomération, sauf sur les autoroutes;
                  {'\n\n'}
                    5°  excédant celle indiquée par une signalisation comportant un message lumineux ou non, variable ou non, qui précise, selon les circonstances et les temps de la journée, dont les périodes d’activité scolaire, la vitesse maximale autorisée sur la partie du chemin public visée par cette signalisation.
                  {'\n\n'}
                    Sur les chemins d’accès à une agglomération, le paragraphe 4° du premier alinéa s’applique dès que le conducteur atteint l’endroit où la signalisation indique la limite de vitesse de 50 km/h.
                  {'\n\n'}
                    Les paragraphes 2°, 3° et 4° du premier alinéa s’appliquent sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci. Le ministre, sur recommandation du ministre des Ressources naturelles et de la Faune, peut, par arrêté, modifier la limite de vitesse sur tout ou partie de ces chemins.
            </Text>
            ),
            image: '299+.png',
            analyse: '',
        },
        en: {
            art: 'Section 328',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Traveling at a rate of speed exceeding the limit',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You travel in a zone where the speed limit is controlled by a signage;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You travel in a zone where the speed limit is controlled by the Code;  </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You travel at a rate of speed exceeding the limit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 328 Highway safety code: </Bold>
                    {'\n\n'}
                    Except on roads where the opposite is indicated by signs or signals and without restricting the scope of section 327, no person may drive a road vehicle at a speed
                  {'\n\n'}
                    (1)  of less than 60 km/h or more than 100 km/h on autoroutes, unless:
                  {'\n'}
                    (a)  an illuminated, variable message signal shows the minimum or maximum rate of speed authorized on a certain part of the autoroute, according to the circumstances and the time of day, such as weather conditions or rush-hour; or
                  {'\n'}
                    (b)  a special permit authorizing the use of an outsized vehicle requires that the vehicle be driven at a lower speed;
                  {'\n\n'}
                    (2)  in excess of 90 km/h on public highways surfaced with concrete, asphalt or a similar material;
                  {'\n\n'}
                    (3)  in excess of 70 km/h on gravel highways;
                  {'\n\n'}
                    (4)  in excess of 50 km/h in a built-up area, except on autoroutes;
                  {'\n\n'}
                    (5)  in excess of the maximum rate of speed authorized, according to the circumstances and the time of day, such as periods of school activity, as specified by the illuminated or non-illuminated, variable or non-variable message sign or signal that applies to that portion of the public highway.
                  {'\n\n'}
                    On access roads leading to a built-up area, subparagraph 4 of the first paragraph applies when the driver reaches the sign or signal indicating the 50 km/h speed limit.
                  {'\n\n'}
                    Subparagraphs 2, 3 and 4 of the first paragraph apply on highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune. The Minister, on the recommendation of the Minister of Natural Resources and Wildlife, may by order change the speed limit on all or any part of such highways.
            </Text>
            ),
            image: '299+.png',
            analyse: ''
        }
    },
    '330': {
        fr: {
            art: 'Art: 330',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Adapter sa conduite aux conditions météorologiques',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Les conditions de visibilité sont rendues insuffisantes à cause de l’obscurité; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Les conditions de visibilité sont rendues insuffisantes à cause du brouillard; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Les conditions de visibilité sont rendues insuffisantes à cause de la pluie; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Les conditions de visibilité sont rendues insuffisantes à cause d’autres précipitations; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La chaussée est glissante ou n’est pas entièrement dégagée; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne réduisez pas votre vitesse. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    2 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 330 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier doit réduire la vitesse de son véhicule lorsque les conditions de visibilité sont rendues insuffisantes à cause de l’obscurité, du brouillard, de la pluie ou d’autres précipitations ou lorsque la chaussée est glissante ou n’est pas entièrement dégagée.
            </Text>
            ),
            image: '330.png',
            analyse: '',
        },
        en: {
            art: 'Section 330',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Adjusting your driving to the weather conditions',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The visibility conditions become inadequate because of darkness; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The visibility conditions become inadequate because of fog;  </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The visibility conditions become inadequate because of rain; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The visibility conditions become inadequate because of other precipitations; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The roadway is slippery or not completely cleared; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not reduce your speed. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    2 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 330 Highway safety code: </Bold>
                    {'\n\n'}
                    The driver of a road vehicle must reduce the speed of his vehicle when visibility conditions become inadequate because of darkness, fog, rain or other precipitation or when the roadway is slippery or not completely cleared.
            </Text>
            ),
            image: '330.png',
            analyse: '',
        },
    },
    '335': {
        fr: {
            art: 'Art: 335',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Distance sécuritaire entre deux véhicules',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous suivez un autre véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous suivez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> La distance qui vous sépare n’est pas prudente et raisonnable, en tenant compte de la vitesse, de la densité de la circulation, des conditions atmosphériques et de l’état de la chaussée. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    2 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 335 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier qui suit un autre véhicule routier ou une bicyclette doit le faire à une distance prudente et raisonnable en tenant compte de la vitesse, de la densité de la circulation, des conditions atmosphériques et de l’état de la chaussée.
            </Text>
            ),
            image: '335+.png',
            analyse: '',
        },
        en: {
            art: 'Section 335',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Safe distance between two vehicles',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You follow another vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You follow a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The distance between you and the other vehicle or bicycle is not prudent and reasonable, taking account of speed, traffic density, atmospheric conditions and the condition of the roadway. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    2 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 335 Highway safety code: </Bold>
                    {'\n\n'}
                    The driver of a road vehicle shall not follow another road vehicle or a bicycle more closely than is prudent and reasonable, taking account of speed, traffic density, atmospheric conditions and the condition of the roadway.
            </Text>
            ),
            image: '335+.png',
            analyse: '',
        },
    },
    '342': {
        fr: {
            art: 'Art: 342',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Dépassements successifs',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez sur une chaussée à deux voies ou plus de circulation à sens unique; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous effectuez plusieurs dépassements successifs en zigzag. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 342 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ne peut effectuer en zigzag plusieurs dépassements successifs sur une chaussée à deux voies ou plus de circulation à sens unique.
            </Text>
            ),
            image: '342+.png',
            analyse: '',
        },
        en: {
            art: 'Section 342',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Successive passing',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You travel on a one-way roadway having two or more traffic lanes </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You successively pass two or more vehicles in a zigzag pattern. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 342 Highway safety code: </Bold>
                    {'\n\n'}
                    In no case may the driver of a road vehicle successively pass two or more vehicles in a zigzag pattern on a one-way roadway having two or more traffic lanes.
            </Text>
            ),
            image: '342+.png',
            analyse: '',
        },
    },
    '345': {
        fr: {
            art: 'Art: 345',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Dépassement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous effectuez un dépassement en empruntant la voie réservée à la circulation en sens inverse; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce dépassement se fait à l’approche ou à l’intérieur d’une intersection, d’un passage à niveau, d’un tunnel ou d’un passage pour piétons dûment identifié. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce dépassement se fait au sommet d’une élévation ou dans une courbe, lorsqu’on ne peut voir à une distance suffisante les véhicules qui viennent en sens inverse. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 345 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut effectuer un dépassement en empruntant la voie réservée à la circulation en sens inverse:
                  {'\n\n'}
                    1°  à l’approche du sommet et au sommet d’une élévation ou dans une courbe, lorsqu’il ne peut voir à une distance suffisante les véhicules qui viennent en sens inverse;
                  {'\n\n'}
                    2°  à l’approche et à l’intérieur d’une intersection, d’un passage à niveau, d’un tunnel ou d’un passage pour piétons dûment identifié.
            </Text>
            ),
            image: '345.png',
            analyse: '',
        },
        en: {
            art: 'Section 345',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Prohibited passing',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You pass another vehicle in the lane reserved for traffic moving in the opposite direction; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The overtaking is made in, upon, or when approaching an intersection, a level crossing, a tunnel or a pedestrian crosswalk identified as such. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The overtaking is made when approaching the crest or at the crest of a grade or on a curve where we cannot see, at a sufficient distance, vehicles approaching from the opposite direction. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 345 Highway safety code: </Bold>
                    {'\n\n'}
                    No driver may, to pass, use the lane reserved for traffic moving in the opposite direction:
                  {'\n\n'}
                    (1)  when approaching the crest or at the crest of a grade or on a curve where he cannot see, at a sufficient distance, vehicles approaching from the opposite direction;
                  {'\n\n'}
                    (2)  in or upon, or when approaching an intersection, a level crossing, a tunnel or a pedestrian crosswalk identified as such.
            </Text>
            ),
            image: '345.png',
            analyse: '',
        },
    },
    '346': {
        fr: {
            art: 'Art: 346',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Dépassement par la droite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous effectuez un dépassement par la droite. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Sauf pour dépasser un véhicule qui effectue ou est sur le point d’effectuer un virage à gauche. </Bold>
                    {'\n\n'}
                    <Bold>• Sauf pour dépasser un véhicule qui se dirige vers une voie de sortie d’un chemin à accès limité. </Bold>
                    {'\n\n'}
                    <Bold>• Sauf pour dépasser un véhicule qui effectue du déneigement ou de l’entretien sur la voie de gauche d’une chaussée à deux voies ou plus de circulation à sens unique. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 346 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut effectuer un dépassement par la droite, sauf pour dépasser un véhicule qui effectue ou est sur le point d’effectuer un virage à gauche, un véhicule qui se dirige vers une voie de sortie d’un chemin à accès limité ou un véhicule qui effectue du déneigement ou de l’entretien sur la voie de gauche d’une chaussée à deux voies ou plus de circulation à sens unique.
            </Text>
            ),
            image: '346+.png',
            analyse: '',
        },
        en: {
            art: 'Section 346',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Passing to the right',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You pass another vehicle to the right. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Except where the vehicle being passed is turning left or is about to turn left. </Bold>
                    {'\n\n'}
                    <Bold>• Except where the vehicle being passed is moving toward an exit ramp on a limited access highway. </Bold>
                    {'\n\n'}
                    <Bold>• Except where the vehicle being passed is a snow removal or road maintenance vehicle doing work on the left-hand lane of a one-way roadway with two lanes or over. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 346 Highway safety Code.</Bold>
                    {'\n\n'}
                    No driver of a road vehicle may pass another vehicle to the right, except where the vehicle being passed is turning left, is about to turn left, is moving toward an exit ramp on a limited access highway or is a snow removal or road maintenance vehicle doing work on the left-hand lane of a one-way roadway with two lanes or over.
            </Text>
            ),
            image: '346+.png',
            analyse: '',
        },
    },
    '349': {
        fr: {
            art: 'Art: 349',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Céder le passage',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous effectuez un virage à une intersection; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne cédez pas le passage à un piéton qui traverse la chaussée que vous vous apprêtiez à emprunter. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage à un cycliste qui traverse la chaussée que vous vous apprêtiez à emprunter. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 2 points d'inaptitude.
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 349 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou d’une bicyclette qui effectue un virage à une intersection doit céder le passage aux piétons et aux cyclistes qui traversent la chaussée qu’il s’apprête à emprunter.
            </Text>
            ),
            image: '450.png',
            analyse: '',
        },
        en: {
            art: 'Section 349',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Yielding the right of way',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are turning at an intersection; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not yield the right of way to pedestrians crossing the roadway you are about to enter. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to cyclists crossing the roadway you are about to enter. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 2 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 349 Highway safety code: </Bold>
                    {'\n\n'}
                    The driver of a road vehicle or any person riding a bicycle who is turning at an intersection must yield the right of way to pedestrians and cyclists crossing the roadway he is about to enter.
            </Text>
            ),
            image: '450.png',
            analyse: '',
        },
    },
    '350': {
        fr: {
            art: 'Art: 350',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Virage à gauche',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier;
                  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous effectuez un virage à gauche; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne cédez pas le passage à tout véhicule qui circule en sens inverse et qui se trouve à une distance telle qu’il y aurait danger à effectuer cette manoeuvre. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 2 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 350 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou d’une bicyclette qui s’apprête à effectuer un virage à gauche doit céder le passage à tout véhicule qui circule en sens inverse et qui se trouve à une distance telle qu’il y aurait danger à effectuer cette manoeuvre.
            </Text>
            ),
            image: '350+.png',
            analyse: '',
        },
        en: {
            art: 'Section 350',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Left turn',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are making a left turn; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not yield the right of way to any vehicle moving in the opposite direction, and is so close that it constitutes a hazard. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 2 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 350 Highway safety code: </Bold>
                    {'\n\n'}
                    The driver of a road vehicle or any person riding a bicycle who is about to make a left turn must yield the right of way to any vehicle moving in the opposite direction, and is so close that it constitutes a hazard.
            </Text>
            ),
            image: '350+.png',
            analyse: '',
        },
    },
    '359': {
        fr: {
            art: 'Art: 359',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feu rouge',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à un feu rouge; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’immobilisez pas votre véhicule avant le passage pour piéton ou la ligne d'arrêt. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’immobilisez pas votre véhicule avant la ligne latérale de la chaussée que vous vous apprêtiez à croiser, s’il n’y aucune ligne. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous poursuivez votre route avant l'apparition de la lumière verte. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule routier: 3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 359 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À moins d’une signalisation contraire, face à un feu rouge, le conducteur d’un véhicule routier ou d’une bicyclette doit immobiliser son véhicule avant le passage pour piétons ou la ligne d’arrêt ou, s’il n’y en a pas, avant la ligne latérale de la chaussée qu’il s’apprête à croiser. Il ne peut poursuivre sa route que lorsqu’un signal lui permettant d’avancer apparaît.
                  {'\n\n'}
                    Un feu rouge en forme de flèche peut être utilisé pour régir l’immobilisation pour une manœuvre particulière.
                    {'\n\n'}
                    Malgré le premier alinéa et à moins d’une signalisation contraire, le cycliste qui fait face à un feu pour piétons à un feu rouge peut poursuivre sa route. Il doit toutefois s’immobiliser avant le passage pour piétons ou la ligne d’arrêt ou, s’il n’y en a pas, avant la ligne latérale de la chaussée qu’il s’apprête à croiser et s’assurer qu’il peut effectuer sa manœuvre sans danger. Il doit alors circuler à une vitesse raisonnable et prudente et accorder la priorité aux piétons. En ce cas, l’Art: 444, à l’exception du premier alinéa, s’applique au cycliste avec les adaptations nécessaires.
                  {'\n\n'}
                    <Bold> Virages à droite: </Bold>
                    {'\n\n'}
                    Malgré l’Art: 359 et à moins d’une signalisation contraire, le conducteur d’un véhicule routier ou d’une bicyclette peut, face à un feu rouge, effectuer un virage à droite après avoir immobilisé son véhicule avant le passage pour piétons ou la ligne d’arrêt ou, s’il n’y en a pas, avant la ligne latérale de la chaussée sur laquelle il veut s’engager et après avoir cédé le passage aux piétons engagés dans l’intersection de même qu’aux véhicules routiers et cyclistes engagés ou si près de s’engager dans l’intersection qu’il s’avérerait dangereux d’effectuer ce virage.
                  {'\n\n'}
                    Le ministre des Transports peut, par arrêté publié à la Gazette officielle du Québec, désigner le territoire d’une municipalité ou toute partie de son territoire où le virage à droite à un feu rouge est interdit
                  {'\n\n'}
                    <Bold> Exception à Montréal: </Bold>
                    {'\n\n'}
                    Il est interdit de faire des virages à droite aux feux rouges sur tout le territoire de l’île de Montréal.
            </Text>
            ),
            image: '359+.png',
            analyse: '',
        },
        en: {
            art: 'Section 359',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Red light',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a red light; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop your vehicle before the pedestrian crosswalk or the stop-line. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not stop your vehicle before the near side of the roadway you are about to cross. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You proceed before the green light appears. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 359 Highway safety code: </Bold>
                    {'\n\n'}
                    Unless otherwise directed by a sign or signal, when facing a red light, the driver of a road vehicle or any person riding a bicycle must stop his vehicle before the pedestrian crosswalk or stop-line or, if none, before the near side of the roadway he is about to cross, and may proceed only when a signal shows he may do so.
                  {'\n\n'}
                    An arrow-shaped red light may be used to regulate stopping before a particular manoeuvre.
                    {'\n\n'}
                    Despite the first paragraph and unless otherwise directed by a sign or signal, a cyclist facing a pedestrian light at a red light may proceed. However, the cyclist must stop before a pedestrian crosswalk or stop-line or, if none, before the near side of the roadway he is about to cross and make sure that he may proceed in safety. The cyclist must then ride at a safe, reasonable speed and give pedestrians the priority. In such a case, section 444, except the first paragraph, applies to the cyclist with the necessary modifications
                  {'\n\n'}
                    <Bold> Right turn: </Bold>
                    {'\n\n'}
                    Notwithstanding section 359 and unless otherwise directed by a sign or signal, the driver of a road vehicle or a cyclist facing a red light may make a right turn, after stopping before the pedestrian crosswalk or the stop-line or, if none, at the near side of the roadway the driver or cyclist is about to enter and yielding the right of way to pedestrians, drivers and cyclists crossing the intersection and to road vehicles and cyclists approaching so closely that to proceed would constitute a hazard.
                    {'\n\n'}
                    The Minister of Transport may, by an order published in the Gazette officielle du Québec, designate all or any part of the territory of a municipality as an area where making a right turn on a red light is prohibited.
                    {'\n\n'}
                    <Bold> Exception in Montreal: </Bold>
                    {'\n\n'}
                    It is forbidden to make right turn at red light on the island of Montréal.
            </Text>
            ),
            image: '359+.png',
            analyse: '',
        },
    },
    '360': {
        fr: {
            art: 'Art: 360',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feu rouge clignotant',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à un feu rouge clignotant; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’immobilisez pas votre véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage à tout véhicule  qui s’engage dans l’intersection. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage à tout véhicule se trouvant à une distance telle qu’il y a danger d’accident. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 360 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À moins d’une signalisation contraire, face à un feu rouge clignotant, le conducteur d’un véhicule routier ou d’une bicyclette doit immobiliser son véhicule et céder le passage à tout véhicule qui, circulant sur une autre chaussée, s’engage dans l’intersection ou se trouve à une distance telle qu’il y a danger d’accident.
            </Text>
            ),
            image: '360+.png',
            analyse: '',
        },
        en: {
            art: 'Section 360',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Flashing red light',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a flashing red light; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop your vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to a vehicle approaching on another roadway that is entering the intersection. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to a vehicle approaching on another roadway, and is so close that it constitutes a hazard. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 360 Highway safety code: </Bold>
                    {'\n\n'}
                    Unless otherwise directed by a sign or signal, when facing a flashing red light, the driver of a road vehicle or any person riding a bicycle must stop his vehicle and yield the right of way to a vehicle approaching on another roadway that is entering the intersection, or is so close that it constitutes a hazard.
            </Text>
            ),
            image: '360+.png',
            analyse: '',
        },
    },
    '361': {
        fr: {
            art: 'Art: 361',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feu jaune',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à un feu jaune; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’immobilisez pas votre véhicule avant le passage pour piétons ou la ligne d'arrêt. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’immobilisez pas votre véhicule avant la ligne latérale de la chaussée que vous vous apprêtiez à croiser, s’il n’y a aucune ligne. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• À moins que vous soyez engagé ou en êtes si près qu’il serait impossible d’immobiliser votre véhicule sans danger. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 361 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À moins d’une signalisation contraire, face à un feu jaune, le conducteur d’un véhicule routier ou d’une bicyclette doit immobiliser son véhicule avant le passage pour piétons ou la ligne d’arrêt ou, s’il n’y en a pas, avant la ligne latérale de la chaussée qu’il s’apprête à croiser, à moins qu’il n’y soit engagé ou en soit si près qu’il lui serait impossible d’immobiliser son véhicule sans danger. Il ne peut poursuivre sa route que lorsqu’un signal lui permettant d’avancer apparaît.
                  {'\n\n'}
                    Un feu jaune en forme de flèche peut être utilisé pour régir l’immobilisation pour une manœuvre particulière.
            </Text>
            ),
            image: '361+.png',
            analyse: '',
        },
        en: {
            art: 'Section 361',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Yellow light',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a yellow light; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop your vehicle or you bicycle before the pedestrian crosswalk or the stop-line. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not stop your vehicle or you bicycle at the near side of the roadway you are about to cross or enter, if there is no line. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Unless you had entered it or you are so close to it that you could not stop in safety. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 361 Highway safety Code.</Bold>
                    {'\n\n'}
                    Unless otherwise directed by a sign or signal, when facing an amber light, the driver of a road vehicle or any person riding a bicycle must stop his vehicle before the pedestrian crosswalk or stop-line or, if none, before the near side of the roadway he is about to cross, unless he has entered it or is so close to it that he could not stop in safety; he may proceed only when a signal shows he may do so.
                  {'\n\n'}
                    An amber light in the shape of an arrow may be used to regulate stopping before a specific manoeuvre.
            </Text>
            ),
            image: '361+.png',
            analyse: '',
        },
    },
    '364': {
        fr: {
            art: 'Art: 364',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Flèche verte',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à une flèche verte; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne circulez pas dans le sens indiqué par la flèche. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage aux véhicules routiers, aux cyclistes ou aux piétons déjà engagés dans l’intersection. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 364 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À moins d’une signalisation contraire, face à une flèche verte, le conducteur d’un véhicule routier ou d’une bicyclette doit, après avoir cédé le passage aux véhicules routiers, aux cyclistes et aux piétons déjà engagés dans l’intersection, circuler dans le sens indiqué par la flèche.
            </Text>
            ),
            image: '364+.png',
            analyse: '',
        },
        en: {
            art: 'Section 364',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Green arrow',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a green arrow; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not move in the direction indicated by the arrow. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to road vehicles, cyclists or pedestrians crossing the intersection. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 364 Highway safety Code.</Bold>
                    {'\n\n'}
                    Unless otherwise directed by a sign or signal, when facing a green arrow, the driver of a road vehicle or any person riding a bicycle must move in the direction indicated by the arrow, after yielding the right of way to road vehicles, cyclists and pedestrians crossing the intersection.
            </Text>
            ),
            image: '364+.png',
            analyse: '',
        },
    },
    '366': {
        fr: {
            art: 'Art: 366',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Interblocage',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Votre véhicule ne dispose pas à l’avant d’un espace suffisant pour ne pas bloquer l’intersection; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous vous engagez dans l’intersection. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 366 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Même si un feu de circulation le permet, le conducteur d’un véhicule routier ne peut s’engager dans une intersection quand le véhicule ne dispose pas à l’avant d’un espace suffisant pour ne pas bloquer l’intersection. Dans ce cas, le conducteur doit immobiliser son véhicule avant la ligne latérale de la chaussée qu’il s’apprête à croiser.
            </Text>
            ),
            image: '366+.png',
            analyse: '',
        },
        en: {
            art: 'Section 366',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Blocking the intersection',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not have sufficient space ahead of your vehicle to proceed without blocking the intersection; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You engage your vehicle in the intersection. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 366 Highway safety Code.</Bold>
                    {'\n\n'}
                    Even if permitted by the traffic lights, no driver of a road vehicle may enter an intersection if there is not sufficient space ahead of the vehicle to proceed without blocking the intersection; in such a case, the driver must stop his vehicle before the near side of the roadway he is about to cross.
            </Text>
            ),
            image: '366+.png',
            analyse: '',
        },
    },
    '368': {
        fr: {
            art: 'Art: 368',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Panneau d’arrêt',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à un panneau d’arrêt; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’immobilisez pas votre véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage à tout véhicule qui, circulant sur une autre chaussée, s’engage dans l’intersection. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne céder le passage à tout véhicule qui, circulant sur une autre chaussée, se trouve à une distance telle qu’il y a danger d’accident. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 368 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou d’une bicyclette qui fait face à un panneau d’arrêt doit immobiliser son véhicule et se conformer à l’Art: 360.
                  {'\n\n'}
                    À un passage à niveau, il ne peut poursuivre sa route qu’après s’être assuré qu’il peut franchir ce passage sans danger.
                  {'\n\n'}
                    <Bold>Art. 360 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À moins d’une signalisation contraire, face à un feu rouge clignotant, le conducteur d’un véhicule routier ou d’une bicyclette doit immobiliser son véhicule et céder le passage à tout véhicule qui, circulant sur une autre chaussée, s’engage dans l’intersection ou se trouve à une distance telle qu’il y a danger d’accident.
            </Text>
            ),
            image: '368.png',
            analyse: '',
        },
        en: {
            art: 'Section 368',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop sign',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a stop sign; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop your vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to a vehicle approaching on another roadway that is entering the intersection. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to a vehicle approaching on another roadway when it is so close that it constitutes a hazard. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 368 Highway safety Code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle or any person riding a bicycle must stop his vehicle when facing a stop sign, and comply with section 360.
                    {'\n\n'}
                    At a level crossing, the driver may proceed only after ascertaining that it is safe to proceed.
                    {'\n\n'}
                    <Bold>S. 360 Highway safety Code.</Bold>
                    {'\n\n'}
                    Unless otherwise directed by a sign or signal, when facing a flashing red light, the driver of a road vehicle or any person riding a bicycle must stop his vehicle and yield the right of way to a vehicle approaching on another roadway that is entering the intersection, or is so close that it constitutes a hazard.
            </Text>
            ),
            image: '368.png',
            analyse: '',
        },
    },
    '370': {
        fr: {
            art: 'Art: 370',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Priorité aux piétons',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivantes sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes un cycliste; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à une intersection réglementée par des panneaux d’arrêt dans toutes les directions; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne cédez pas le passage à tout véhicule qui a rejoint l'intersection avant vous. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage aux piétons qui traversent la chaussée que vous vous apprêtez à croiser ou emprunter. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage aux piétons qui longent la chaussée que vous vous apprêtez à croiser ou emprunter. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 370 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À une intersection réglementée par des panneaux d’arrêt pour toutes les directions, le conducteur d’un véhicule routier ou le cycliste doit immobiliser son véhicule et céder le passage à tout véhicule qui a rejoint l’intersection avant lui. Il doit également céder le passage aux piétons qui traversent ou longent la chaussée qu’il s’apprête à croiser ou à emprunter.
            </Text>
            ),
            image: '368.png',
            analyse: '',
        },
        en: {
            art: 'Section 370',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Pedestrian priority',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are a cyclist; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing an intersection regulated by stop signs for all directions; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not yield the right of way to any vehicle having already reached the intersection. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to pedestrians crossing  the roadway you were about to cross or enter. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to pedestrians walking or cycling alongside the roadway you are about to cross or enter. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 370 Highway safety Code.</Bold>
                    {'\n\n'}
                    At an intersection regulated by stop signs for all directions, the driver of a road vehicle or a cyclist must stop his vehicle and yield the right of way to any vehicle having reached the intersection before him. He must also yield the right of way to pedestrians crossing or walking or cycling alongside the roadway he is about to cross or enter.
            </Text>
            ),
            image: '368.png',
            analyse: '',
        },
    },
    '371': {
        fr: {
            art: 'Art: 371',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Céder le passage',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à un panneau vous ordonnant de céder le passage; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne cédez pas le passage à tout véhicule circulant sur la voie que vous voulez intégrer et qui se trouve à une distance telle qu’il y a danger d’accident. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 371 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou d’une bicyclette qui fait face à un signal lui ordonnant de céder le passage doit accorder la priorité de passage à tout véhicule qui circule sur la voie sur laquelle il veut s’engager et qui se trouve à une distance telle qu’il y a danger d’accident.
            </Text>
            ),
            image: '371.png',
            analyse: '',
        },
        en: {
            art: 'Section 371',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Yielding the right of way',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a yield sign; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not yield the right of way to any vehicle moving in the lane you are about to enter, and the vehicle is so close that entering the lane would constitute a hazard. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 371 Highway safety Code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle or any person riding a bicycle who is facing a “yield” sign must give priority to any vehicle moving in the lane he is about to enter where the vehicle is so close that entering the lane would constitute a hazard.
            </Text>
            ),
            image: '371.png',
            analyse: '',
        },
    },
    '372': {
        fr: {
            art: 'Art: 372',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feux de changement de direction',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous vous apprêtez à effectuer un virage; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous vous apprêtez à changer de voie; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous vous apprêtez à faire un demi-tour; </Bold>                   
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous vous apprêtez à réintégrer la chaussée en provenance de l’accotement ou d’une aire de stationnement; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne signalez pas votre intention au moyen de votre clignotant. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 372 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier qui s’apprête à effectuer un virage, à changer de voie de circulation, à faire demi-tour ou à réintégrer la chaussée en provenance de l’accotement ou d’une aire de stationnement doit signaler son intention à l’aide des feux de changement de direction et s’assurer qu’il peut effectuer cette manoeuvre sans danger.
            </Text>
            ),
            image: '372.png',
            analyse: '',
        },
        en: {
            art: 'Section 372',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Turn-signal lights',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are about to make a turn; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are about to change lanes; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are about to make a U-turn; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are about to return to the roadway from the shoulder or a parking area; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not signal your intention by means of your turn-signals lights. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 372 Highway safety Code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle who is about to make a turn, change lanes, make a U-turn or return to the roadway from the shoulder or a parking area must, after ascertaining that he may do so in safety, signal his intention by means of his turn-signal lights.
            </Text>
            ),
            image: '372.png',
            analyse: '',
        },
    },
    '391': {
        fr: {
            art: 'Art: 391',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Abandon d’un véhicule',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous abandonnez le véhicule routier sur un chemin public. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous abandonnez le véhicule sur un chemin privé ouvert à la circulation publique des véhicules routiers. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous abandonnez le véhicule sur un terrain de centre commercial ou sur tout autre terrain où le public est autorisé à circuler. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 391 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut abandonner un véhicule routier sur un chemin public, un chemin privé ouvert à la circulation publique des véhicules routiers, ainsi que sur un terrain de centre commercial ou autre terrain où le public est autorisé à circuler.
            </Text>
            ),
            image: '391+.png',
            analyse: '',
        },
        en: {
            art: 'Section 391',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Abandoning a road vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You abandon the vehicle on a public highway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You abandon the road vehicle on a private road open to public vehicular traffic. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You abandon the vehicle on a land occupied by shopping centres or on any other land where public traffic is allowed. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 391 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may abandon a road vehicle on a public highway, on a private road open to public vehicular traffic, as well as on land occupied by shopping centres and other land where public traffic is allowed.
            </Text>
            ),
            image: '391+.png',
            analyse: '',
        },
    },
    '395': {
        fr: {
            art: 'Art: 395',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ceinture manquante',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Une ceinture de sécurité est manquante, modifiée ou hors d’usage; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un sac gonflable est manquant, modifié ou hors d’usage; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Cette place est occupée par quelqu’un. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 395 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sous réserve de l’Art: 398, nul ne peut conduire un véhicule routier dont la ceinture de sécurité ou un sac gonflable, pour le conducteur ou pour la place qu’occupe un passager, est manquant, modifié ou hors d’usage.
            </Text>
            ),
            image: '396.png',
            analyse: '',
        },
        en: {
            art: 'Section 395',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Missing seat belt',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A seat belt is missing, has been modified or rendered inoperative. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}An airbag is missing, has been modified or rendered inoperative. </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That seat is occupied. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer for free to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 395 Highway safety Code.</Bold>
                    {'\n\n'}
                    Subject to section 398, no person shall drive a road vehicle in which the seat belt or an air bag provided for the driver or for the seat occupied by a passenger is missing or has been modified or rendered inoperative.
            </Text>
            ),
            image: '396.png',
            analyse: '',
        },
    },
    '396': {
        fr: {
            art: 'Art: 396',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ceinture de sécurité',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes l'occupant d’un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous ne portez pas correctement la ceinture de sécurité dont le siège est équipé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Le véhicule routier est en mouvement sur un chemin public. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur effectuant une manoeuvre de recul. </Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un taxi qui, dans l’exercice de ses fonctions, circule sur un chemin public numéroté dont la limite de vitesse est établie par une municipalité ou qui circule sur un chemin public non numéroté. </Bold>
                    {'\n\n'}
                    <Bold>• La personne dispensée du port de la ceinture de sécurité par la SAAQ conformément à l’Art: 398 du présent code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 396 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Toute personne, sauf un enfant visé à l’Art: 397, doit porter correctement la ceinture de sécurité dont est équipé le siège qu’elle occupe dans un véhicule routier en mouvement.
                  {'\n\n'}
                    Toutefois, le premier alinéa ne s’applique pas:
                  {'\n'}
                    1°  à un conducteur effectuant une manoeuvre de recul;
                  {'\n'}
                    2°  au conducteur d’un taxi qui, dans l’exercice de ses fonctions, circule sur un chemin public numéroté dont la limite de vitesse est établie par une municipalité ou qui circule sur un chemin public non numéroté;
                  {'\n'}
                    3°  à une personne dispensée du port de la ceinture de sécurité ou autorisé à la porter partiellement par la Société conformément à l’Art: 398 du présent code;
                  {'\n'}
                    4°  à une personne qui occupe le siège d’un passager dans un fourgon cellulaire
                  {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci.
            </Text>
            ),
            image: '396.png',
            analyse: '',
        },
        en: {
            art: 'Section 396',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Seat belt',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You take place in a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are not properly wearing the seat belt with which the seat is equipped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The road vehicle is moving on a public roadway. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• A person driving his vehicle in reverse. </Bold>
                    {'\n\n'}
                    <Bold>• A taxi driver who, in performing his functions, drives his vehicle on a numbered public highway the speed limit of which is established by a municipality or on an unnumbered public highway. </Bold>
                    {'\n\n'}
                    <Bold>• A person exempted by the SAAQ from wearing a seat belt in accordance with section 398 of this Code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 396 Highway safety Code.</Bold>
                    {'\n\n'}
                    Every person, except a child referred to in section 397, must, while in a moving road vehicle, wear, properly fastened, the seat belt with which his seat is equipped.
                  {'\n\n'}
                    However, the first paragraph does not apply:
                  {'\n'}
                    (1)  to a person driving his vehicle in reverse;
                  {'\n'}
                    (2)  to a taxi driver who, in performing his functions, drives his vehicle on a numbered public highway the speed limit of which is established by a municipality or on an unnumbered public highway;
                  {'\n'}
                    (3)  to a person exempted by the Société from wearing a seat belt or authorized to partially wear it in accordance with section 398 of this Code;
                  {'\n'}
                    (4)  to a person occupying a passenger seat in a police wagon.
                  {'\n\n'}
                    This section applies, in addition to public highways, to highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune.
            </Text>
            ),
            image: '396.png',
            analyse: '',
        },
    },
    '401': {
        fr: {
            art: 'Art: 401',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Passager de moins de 16 ans',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>quatre éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Une personne de moins de 16 ans prend place dans votre véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Cette personne de moins de 16 ans ne porte pas correctement sa ceinture de sécurité; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> Le véhicule routier est en mouvement sur un chemin public. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 401 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut conduire un véhicule routier dans lequel a pris place un passager de moins de 16 ans qui ne satisfait pas aux obligations que lui impose la présente section.
                  {'\n\n'}
                    Le premier alinéa ne s’applique pas au conducteur d’un taxi, d’un autobus ou d’un minibus dans l’exercice de ses fonctions. Néanmoins, le passager adulte qui accompagne dans un taxi un passager de moins de 16 ans doit s’assurer que le transport de ce dernier s’effectue dans les conditions prévues dans la présente section.
                  {'\n\n'}
                    <Bold>Art. 397 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Dans un véhicule routier en mouvement, tout enfant dont la taille est inférieure à 145 cm ou qui est agé de moins de neuf ans, doit être installé dans un ensemble de retenue ou un siège d’appoint conforme aux règlements pris en application de la Loi sur la sécurité automobile (Lois du Canada, 1993, chapitre 16). L’ensemble de retenue et le coussin d’appoint doivent, conformément aux instructions du fabricant qui y sont apposées, être adaptés au poids et à la taille de l’enfant et être installés adéquatement dans le véhicule.
                  {'\n\n'}
                    Toutefois, l’utilisation d’un ensemble de retenue ou du siège d’appoint n’est pas obligatoire:
                  {'\n'}
                    1°  pour l’enfant occupant une place assise désignée, au sens des règlements pris en application de la Loi sur la sécurité automobile, que le fabricant du véhicule n’a pas équipée d’une ceinture de sécurité, à la condition qu’aucune place munie d’une ceinture de sécurité ne soit disponible;
                  {'\n'}
                    2°  pour l’enfant dispensé de l’utilisation d’un ensemble de retenue ou du port de la ceinture de sécurité par la Société conformément à l’Art: 398.
                    {'\n\n'}
                    À défaut de satisfaire aux conditions du premier alinéa, lorsqu’un enfant occupe un siège dans un taxi ou dans un véhicule de police, il doit être maintenu par la ceinture de sécurité dont est équipé ce siège, sauf dans les cas suivants:
                  {'\n'}
                    1°  l’enfant est manifestement incapable de se tenir droit;
                    {'\n'}
                    2°  l’enfant est dispensé du port de la ceinture de sécurité ou est autorisé à la porter partiellement par la Société conformément à l’Art: 398.
                  {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci.
            </Text>
            ),
            image: '396.png',
            analyse: '',
        },
        en: {
            art: 'Section 401',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Passenger under 16 years of age',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>four elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A person under 16 years of age takes place in your vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> This person under 16 years of age is not properly wearing the seat belt; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> The road vehicle is moving on a public road way. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 401 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may drive a road vehicle carrying a passenger under 16 years of age who does not fulfil the obligations prescribed under this division.
                  {'\n\n'}
                    The first paragraph does not apply to taxi, bus or minibus drivers in the performance of their duties. However, an adult passenger accompanying a passenger under 16 years of age in a taxi must ensure that the latter is transported in compliance with the conditions set out in this division.
                  {'\n\n'}
                    <Bold>S. 397 Highway safety Code.</Bold>
                    {'\n\n'}
                    In a moving road vehicle, every child who is less than 145 cm tall or under 9 years of age, must be restrained by a restraint system or booster seat that complies with the regulations under the Motor Vehicle Safety Act (Statutes of Canada, 1993, chapter 16). The restraint system or booster seat must, in accordance with the manufacturer’s instructions affixed thereon, be suitable for the child’s height and weight and be securely attached to the vehicle.
                  {'\n\n'}
                    However, the use of a restraint system or booster seat is not mandatory:
                  {'\n'}
                    (1)  for a child occupying a designated seating position, within the meaning of the regulations under the Motor Vehicle Safety Act, not equipped with a seat belt by the vehicle manufacturer, provided no place equipped with a seat belt is available; or
                  {'\n'}
                    (2)  for a child authorized by the Société, in accordance with section 398, to use a restraint system other than the one prescribed by the first paragraph.
                  {'\n\n'}
                    If the first paragraph cannot be complied with, a child occupying a seat in a taxi or a police car must be restrained by the seat belt with which the seat is equipped, except in the following cases:
                  {'\n'}
                    (1)  the child is clearly unable to maintain an upright position; or
                  {'\n'}
                    (2)  the child is exempted from wearing a seat belt or is authorized to partially wear it by the Société pursuant to section 398.
                  {'\n\n'}
                    This section applies, in addition to public highways, to highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune.
            </Text>
            ),
            image: '396.png',
            analyse: '',
        },
    },
    '406': {
        fr: {
            art: 'Art: 406',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Véhicule d’urgence',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous êtes en présence d’un véhicule d’urgence dont les signaux lumineux ou sonores sont en marche; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne cédez pas le passage au véhicule d’urgence en réduisant votre vitesse. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage au véhicule d’urgence en serrant à droite le plus possible. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne cédez pas le passage au véhicule d’urgence en immobilisant votre véhicule si nécessaire. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 406 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou d’une bicyclette doit céder le passage à tout véhicule d’urgence dont les signaux lumineux ou sonores sont en marche, en réduisant la vitesse de son véhicule, en serrant à droite le plus possible et, si nécessaire, en immobilisant son véhicule.
            </Text>
            ),
            image: '406+.png',
            analyse: '',
        },
        en: {
            art: 'Section 406',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Emergency vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> There is an emergency vehicle whose lights or sound producing devices are in operation; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not yield the right of way to the emergency vehicle by reducing speed. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to the emergency vehicle by keeping your vehicle as far to the right as practicable. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not yield the right of way to the emergency vehicle by bringing your vehicle to a standstill if necessary. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 406 Highway safety Code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle or any person riding a bicycle must yield to any emergency vehicle whose lights or sound producing device are in operation by reducing speed, keeping as far to the right as practicable and, if necessary, bringing his vehicle to a standstill.
            </Text>
            ),
            image: '406+.png',
            analyse: '',
        },
    },
    '406.1 al. 1': {
        fr: {
            art: 'Art: 406.1 al. 1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Corridor de sécurité',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un véhicule d’urgence ou une dépanneuse dont les feux clignotants ou pivotants sont actionnés est immobilisé sur la voie dans laquelle vous circulez; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’effectuez pas les manoeuvres suivantes DANS L’ORDRE: </Bold>
                    {'\n\n'}
                    <Bold>(1) Réduisez votre vitesse de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens situés sur l’accotement. Au besoin, immobilisez votre véhicule; </Bold>
                    {'\n\n'}
                    <Bold>(2) Empruntez une autre voie après vous être assuré que vous pouvez le faire sans danger. Lorsqu’il s’agit d’une chaussée à circulation dans les deux sens, vous devez alors, avant d’emprunter l’autre voie, céder le passage aux véhicules qui y circulent en sens inverse. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 406.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’un véhicule d’urgence ou une dépanneuse, dont les feux clignotants ou pivotants sont actionnés, est immobilisé sur un chemin public, le conducteur d’un véhicule routier doit, si le véhicule immobilisé est situé sur la voie sur laquelle il circule, réduire la vitesse de son véhicule de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens qui sont situés sur cette voie et, au besoin, l’immobiliser, puis emprunter une autre voie après s’être assuré qu’il peut le faire sans danger. Lorsqu’il s’agit d’une chaussée à circulation dans les deux sens, il doit alors, avant d’emprunter l’autre voie, céder le passage au véhicule qui y circule en sens inverse.
                  {'\n\n'}
                    Lorsque le véhicule immobilisé est situé sur l’accotement ou sur la voie contiguë à la voie sur laquelle le conducteur circule, ce dernier doit, dans l’ordre:
                  {'\n'}
                    1°  réduire la vitesse de son véhicule de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens qui sont situés sur l’accotement ou sur cette autre voie;
                  {'\n'}
                    2°  changer de voie, s’il en existe une autre dans le même sens que celui dans lequel il circule, de manière à laisser une voie libre entre son véhicule et celui immobilisé, après s’être assuré qu’il peut le faire sans danger ou, à défaut, s’éloigner le plus possible du véhicule immobilisé tout en demeurant dans la voie sur laquelle il circule.
                  {'\n\n'}
                    Le deuxième alinéa ne s’applique pas lorsque le sens de la circulation de la voie sur laquelle le conducteur circule est dans le sens inverse de la circulation de la voie sur laquelle est situé le véhicule immobilisé.
                  {'\n\n'}
                    Le présent Art: s’applique également lorsqu’est immobilisé sur un chemin public un véhicule routier sur lequel est actionné le signal lumineux d’une flèche jaune prescrivant un changement de voie. Le changement de voie doit alors être fait dans le sens indiqué par la flèche.
            </Text>
            ),
            image: '406.1-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 406.1 (1)',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Safety lane',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> An emergency vehicle or tow truck with its flashing or rotating lights activated is stopped on the lane in which you travel; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not do the following maneuvers IN THE FOLLOWING ORDER: </Bold>
                    {'\n\n'}
                    <Bold>(1) Reduce speed to avoid endangering human life or safety or any property.  If necessary, stop the vehicle; </Bold>
                    {'\n\n'}
                    <Bold>(2) Switch to another lane after making sure it can be done safely. In the case of a two-way roadway, you must, before switching to the other lane, yield the right of way to any vehicle travelling in the opposite direction. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer for free to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 406.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    When an emergency vehicle or tow truck with its flashing or rotating lights activated is stopped in a lane of a public highway, the driver of a road vehicle travelling in that lane must reduce speed to avoid endangering human life or safety or any property that is in that lane and, if necessary, stop the vehicle, and switch to the other lane after making sure it can be done safely. In the case of a two-way roadway, the driver must, before switching to the other lane, yield the right of way to any vehicle travelling in the opposite direction.
                  {'\n\n'}
                    If the emergency vehicle or tow truck is stopped on the shoulder or on a lane contiguous to the lane in which the driver of the road vehicle is travelling, the driver must, in the following order:
                  {'\n'}
                    (1)  reduce speed to avoid endangering human life or safety or any property that is on the shoulder or in that other lane;
                  {'\n'}
                    (2)  change lanes, if there is another lane for travelling in the same direction and after making sure it can be done safely, so as to leave one free lane between the vehicle and the stopped vehicle or, otherwise, put as much distance as possible between the vehicle and the stopped vehicle while remaining in the same lane.
                  {'\n\n'}
                    The second paragraph does not apply when the direction of traffic in the driver’s lane is opposite that of the lane in which the emergency vehicle or tow truck is stopped.
                  {'\n\n'}
                    This section also applies when a road vehicle with an activated yellow arrow light signal directing a lane change is stopped on a public highway. The lane change must be carried out in the direction indicated by the arrow.
            </Text>
            ),
            image: '406.1-1+.png',
            analyse: '',
        },
    },
    '406.1 al. 2': {
        fr: {
            art: 'Art: 406.1 al. 2',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Corridor de sécurité',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un véhicule d’urgence ou une dépanneuse dont les feux clignotants ou pivotants sont actionnés est immobilisé sur l’accotement; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un véhicule d’urgence ou une dépanneuse dont les feux clignotants ou pivotants sont actionnés est immobilisé sur la voie contiguë à la voie sur laquelle vous circulez; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’effectuez pas les manoeuvres suivantes DANS L’ORDRE: </Bold>
                    {'\n\n'}
                    <Bold>(1) Réduisez votre vitesse de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens situés sur l’accotement ou sur cette autre voie; </Bold>
                    {'\n\n'}
                    <Bold>(2) changez de voie, s’il en existe une autre dans le même sens que celui dans lequel vous circulez, de manière à laisser une voie libre votre véhicule et celui immobilisé, après vous être assuré de pouvoir le faire sans danger ou, à défaut, vous éloigner le plus possible du véhicule immobilisé tout en demeurant dans la voie sur laquelle vous circulez. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 406.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’un véhicule d’urgence ou une dépanneuse, dont les feux clignotants ou pivotants sont actionnés, est immobilisé sur un chemin public, le conducteur d’un véhicule routier doit, si le véhicule immobilisé est situé sur la voie sur laquelle il circule, réduire la vitesse de son véhicule de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens qui sont situés sur cette voie et, au besoin, l’immobiliser, puis emprunter une autre voie après s’être assuré qu’il peut le faire sans danger. Lorsqu’il s’agit d’une chaussée à circulation dans les deux sens, il doit alors, avant d’emprunter l’autre voie, céder le passage au véhicule qui y circule en sens inverse.
                  {'\n\n'}
                    Lorsque le véhicule immobilisé est situé sur l’accotement ou sur la voie contiguë à la voie sur laquelle le conducteur circule, ce dernier doit, dans l’ordre:
                  {'\n'}
                    1°  réduire la vitesse de son véhicule de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens qui sont situés sur l’accotement ou sur cette autre voie;
                  {'\n'}
                    2°  changer de voie, s’il en existe une autre dans le même sens que celui dans lequel il circule, de manière à laisser une voie libre entre son véhicule et celui immobilisé, après s’être assuré qu’il peut le faire sans danger ou, à défaut, s’éloigner le plus possible du véhicule immobilisé tout en demeurant dans la voie sur laquelle il circule.
                  {'\n\n'}
                    Le deuxième alinéa ne s’applique pas lorsque le sens de la circulation de la voie sur laquelle le conducteur circule est dans le sens inverse de la circulation de la voie sur laquelle est situé le véhicule immobilisé.
                  {'\n\n'}
                    Le présent Art: s’applique également lorsqu’est immobilisé sur un chemin public un véhicule routier sur lequel est actionné le signal lumineux d’une flèche jaune prescrivant un changement de voie. Le changement de voie doit alors être fait dans le sens indiqué par la flèche.
            </Text>
            ),
            image: '406.1-2+.png',
            analyse: '',
        },
        en: {
            art: 'Section 406.1 (2)',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Safety lane',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> An emergency vehicle or tow truck with its flashing or rotating lights activated is stopped on the shoulder; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}An emergency vehicle or tow truck with its flashing or rotating lights activated is stopped on a lane contiguous to the lane in which you travel; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not do the following maneuvers IN THE FOLLOWING ORDER: </Bold>
                    {'\n\n'}
                    <Bold>(1) Reduce speed to avoid endangering human life or safety or any property; </Bold>
                    {'\n\n'}
                    <Bold>(2) change lanes, if there is another lane for travelling in the same direction and after making sure it can be done safely, so as to leave one free lane between your vehicle and the stopped vehicle or, otherwise, put as much distance as possible between your vehicle and the stopped vehicle while remaining in the same lane. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 406.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    When an emergency vehicle or tow truck with its flashing or rotating lights activated is stopped in a lane of a public highway, the driver of a road vehicle travelling in that lane must reduce speed to avoid endangering human life or safety or any property that is in that lane and, if necessary, stop the vehicle, and switch to the other lane after making sure it can be done safely. In the case of a two-way roadway, the driver must, before switching to the other lane, yield the right of way to any vehicle travelling in the opposite direction.
                  {'\n\n'}
                    If the emergency vehicle or tow truck is stopped on the shoulder or on a lane contiguous to the lane in which the driver of the road vehicle is travelling, the driver must, in the following order:
                  {'\n'}
                    (1)  reduce speed to avoid endangering human life or safety or any property that is on the shoulder or in that other lane;
                  {'\n'}
                    (2)  change lanes, if there is another lane for travelling in the same direction and after making sure it can be done safely, so as to leave one free lane between the vehicle and the stopped vehicle or, otherwise, put as much distance as possible between the vehicle and the stopped vehicle while remaining in the same lane.
                  {'\n\n'}
                    The second paragraph does not apply when the direction of traffic in the driver’s lane is opposite that of the lane in which the emergency vehicle or tow truck is stopped.
                  {'\n\n'}
                    This section also applies when a road vehicle with an activated yellow arrow light signal directing a lane change is stopped on a public highway. The lane change must be carried out in the direction indicated by the arrow.
            </Text>
            ),
            image: '406.1-2+.png',
            analyse: '',
        },

    },
    '406.1 al. 4': {
        fr: {
            art: 'Art: 406.1 al. 4',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Corridor de sécurité',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un véhicule sur lequel est actionnée le signal lumineux d’une flèche jaune prescrit un changement de voie; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’effectuez pas ce changement de voie. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 406.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’un véhicule d’urgence ou une dépanneuse, dont les feux clignotants ou pivotants sont actionnés, est immobilisé sur un chemin public, le conducteur d’un véhicule routier doit, si le véhicule immobilisé est situé sur la voie sur laquelle il circule, réduire la vitesse de son véhicule de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens qui sont situés sur cette voie et, au besoin, l’immobiliser, puis emprunter une autre voie après s’être assuré qu’il peut le faire sans danger. Lorsqu’il s’agit d’une chaussée à circulation dans les deux sens, il doit alors, avant d’emprunter l’autre voie, céder le passage au véhicule qui y circule en sens inverse.
                  {'\n\n'}
                    Lorsque le véhicule immobilisé est situé sur l’accotement ou sur la voie contiguë à la voie sur laquelle le conducteur circule, ce dernier doit, dans l’ordre:
                  {'\n'}
                    1°  réduire la vitesse de son véhicule de manière à ce qu’elle ne soit pas susceptible de mettre en péril la vie ou la sécurité des personnes et des biens qui sont situés sur l’accotement ou sur cette autre voie;
                  {'\n'}
                    2°  changer de voie, s’il en existe une autre dans le même sens que celui dans lequel il circule, de manière à laisser une voie libre entre son véhicule et celui immobilisé, après s’être assuré qu’il peut le faire sans danger ou, à défaut, s’éloigner le plus possible du véhicule immobilisé tout en demeurant dans la voie sur laquelle il circule.
                  {'\n\n'}
                    Le deuxième alinéa ne s’applique pas lorsque le sens de la circulation de la voie sur laquelle le conducteur circule est dans le sens inverse de la circulation de la voie sur laquelle est situé le véhicule immobilisé.
                  {'\n\n'}
                    Le présent Art: s’applique également lorsqu’est immobilisé sur un chemin public un véhicule routier sur lequel est actionné le signal lumineux d’une flèche jaune prescrivant un changement de voie. Le changement de voie doit alors être fait dans le sens indiqué par la flèche.
            </Text>
            ),
            image: '406.1-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 406.1 (4)',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Safety lane',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A road vehicle with an activated yellow arrow light signal directing a lane change is stopped on a public highway;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not change lanes in the direction indicated by the arrow. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 406.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    When an emergency vehicle or tow truck with its flashing or rotating lights activated is stopped in a lane of a public highway, the driver of a road vehicle travelling in that lane must reduce speed to avoid endangering human life or safety or any property that is in that lane and, if necessary, stop the vehicle, and switch to the other lane after making sure it can be done safely. In the case of a two-way roadway, the driver must, before switching to the other lane, yield the right of way to any vehicle travelling in the opposite direction.
                  {'\n\n'}
                    If the emergency vehicle or tow truck is stopped on the shoulder or on a lane contiguous to the lane in which the driver of the road vehicle is travelling, the driver must, in the following order:
                  {'\n'}
                    (1)  reduce speed to avoid endangering human life or safety or any property that is on the shoulder or in that other lane;
                  {'\n'}
                    (2)  change lanes, if there is another lane for travelling in the same direction and after making sure it can be done safely, so as to leave one free lane between the vehicle and the stopped vehicle or, otherwise, put as much distance as possible between the vehicle and the stopped vehicle while remaining in the same lane.
                  {'\n\n'}
                    The second paragraph does not apply when the direction of traffic in the driver’s lane is opposite that of the lane in which the emergency vehicle or tow truck is stopped.
                  {'\n\n'}
                    This section also applies when a road vehicle with an activated yellow arrow light signal directing a lane change is stopped on a public highway. The lane change must be carried out in the direction indicated by the arrow.
            </Text>
            ),
            image: '406.1-4+.png',
            analyse: '',
        },

    },
    '410': {
        fr: {
            art: 'Art: 410',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Passage pour piétons',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un piéton s’engage dans un passage pour piétons; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un piéton manifeste clairement son intention de s’engager dans un passage pour piétons; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne vous immobilisez pas pour lui permettre de traverser. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Modification applicable après le 18 mai 2018:</Bold>
                    {'\n\n'}
                    <Bold>Art. 410 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’un piéton s’engage ou manifeste clairement son intention de s’engager dans un passage pour piétons, le conducteur d’un véhicule routier doit immobiliser son véhicule pour lui permettre de traverser. À un tel passage, le cycliste doit également accorder la priorité aux piétons.
            </Text>
            ),
            image: '410.png',
            analyse: '',
        },
        en: {
            art: 'Section 410',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Pedestrian crosswalk',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements </Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A pedestrian enters a pedestrian crosswalk; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}A pedestrian clearly demonstrates the intention to enter a pedestrian crosswalk; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop in order to allow the pedestrian to cross the roadway. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Legislative modifications applying after May 18th 2018:</Bold>
                    {'\n\n'}
                    <Bold>S. 410 Highway safety Code.</Bold>
                    {'\n\n'}
                    When a pedestrian enters or clearly demonstrates the intention to enter a pedestrian crosswalk, the driver of a road vehicle must stop his vehicle to allow the pedestrian to cross. At such a crossing, a cyclist must also give pedestrians the priority.
            </Text>
            ),
            image: '410.png',
            analyse: '',
        },
    },
    '411': {
        fr: {
            art: 'Art: 411',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Passage à niveau',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Face à un passage à niveau, la signalisation indique l’approche d’un véhicule sur rails; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Face à un passage à niveau, une barrière abaissée signale l’approche d’un véhicule sur rails; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Face à un passage à niveau, un employé de chemin de fer vous signale l’approche d’un véhicule sur rails; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’immobilisez pas votre véhicule ou votre bicyclette à au moins 5 mètres de la voie ferrée. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Véhicule: 3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 411 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    À un passage à niveau, le conducteur d’un véhicule routier ou d’une bicyclette doit immobiliser son véhicule à au moins 5 mètres de la voie ferrée lorsqu’une signalisation, une barrière abaissée ou un employé de chemin de fer signale l’approche d’un véhicule sur rails ou qu’il peut apercevoir ou entendre un tel véhicule qui approche du passage à niveau.
            </Text>
            ),
            image: '411.png',
            analyse: '',
        },
        en: {
            art: 'Section 411',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Level crossing',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Facing a level crossing, a sign or signal indicates an approaching rail vehicle;</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Facing a level crossing, a lowered gate signals an approaching rail vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Facing a level crossing, a railway employee signals an approaching rail vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop your vehicle or your bicycle at least 5 metres from the railway. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Vehicle: 3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 411 Highway safety Code.</Bold>
                    {'\n\n'}
                    At a level crossing, the driver of a road vehicle or any person riding a bicycle must stop his vehicle not less than 5 metres from the railway where a sign or signal, a lowered gate or a railway employee signals an approaching rail vehicle, or where the driver or cyclist sees or hears a rail vehicle approaching the level crossing.
            </Text>
            ),
            image: '411.png',
            analyse: '',
        },
    },
    '418': {
        fr: {
            art: 'Art: 418',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circuler sur l’accotement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez sur l’accotement. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez sur le trottoir. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• La signalisation vous permettait de circuler sur l’accotement ou sur le trottoir. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 418 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ne peut circuler sur l’accotement ou sur le trottoir, sauf en cas de nécessité ou à moins qu’une signalisation ne le prescrive ou ne le permette.
            </Text>
            ),
            image: '418.png',
            analyse: '',
        },
        en: {
            art: 'Section 418',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Driving on the shoulder',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You drive on the shoulder of a public highway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You drive on the sidewalk. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• A sign or signal allowed you to drive on the shoulder of a public highway or on the sidewalk.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 418 Highway safety Code.</Bold>
                    {'\n\n'}
                    In no case may the driver of a road vehicle drive on the shoulder of a public highway or on the sidewalk except in case of necessity or unless so directed or allowed by a sign or signal.
            </Text>
            ),
            image: '418.png',
            analyse: '',
        },
    },
    '422': {
        fr: {
            art: 'Art: 422',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Course',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments </Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Une entente de course survient entre vous et le conducteur d’un autre véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Cette course implique la vitesse et se déroule sur une distance donnée. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    12 points d'inaptitude.
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat pour éviter un procès et sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 422 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut conduire un véhicule routier pour une course avec un autre véhicule, un pari ou un enjeu, sauf s’il s’agit d’un rallye effectué conformément aux normes établies dans un règlement pris ou approuvé par le ministre de l’Éducation, du Loisir et du Sport, en vertu de la Loi sur la sécurité dans les sports (chapitre S‐3.1).
            </Text>
            ),
            image: '422+.png',
            analyse: '',
        },
        en: {
            art: 'Section 422',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Race',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A race agreement occurs between you and the driver of another road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> This race involves speed and a given distance. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    12 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer to avoid a trial and save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 422 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may drive a road vehicle in a race with another vehicle, or for a wager or a stake except in the case of a rally conducted in conformity with the standards prescribed in a regulation made or approved by the Minister of Education, Recreation and Sports pursuant to the Act respecting safety in sports (chapter S‐3.1).
            </Text>
            ),
            image: '422+.png',
            analyse: '',
        },
    },
    '424': {
        fr: {
            art: 'Art: 424',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Phares de nuit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Il fait nuit; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Les conditions atmosphériques nécessitent d’allumer les phares de nuit; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’allumez pas vos phares ou vos feux intégrés. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 424 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier doit, durant la nuit ou lorsque les conditions atmosphériques le nécessitent, allumer les phares et les feux intégrés de son véhicule.{'\n\n'}
                    Le premier alinéa s’applique également au conducteur d’une bicyclette à l’égard du phare et du feu dont elle doit être munie.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
        en: {
            art: 'Section 424',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Night lights',
            infraction: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> It’s night; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The atmospheric conditions require to turn on the headlights; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not turn on your headlights or your integrated lights. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 424 Highway safety Code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle must, at night or whenever atmospheric conditions require it, turn on the headlights and integrated lights of his vehicle.
                    {'\n\n'}
                    The first paragraph also applies to the person riding a bicycle with respect to the lights with which his bicycle must be equipped.
            </Text>
            ),
            image: '215.png',
            analyse: '',
        },
    },
    '433': {
        fr: {
            art: 'Art: 433',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Véhicule en mouvement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous vous tenez ou prenez place sur le marche-pied d’un véhicule;</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous vous tenez ou prenez place sur une partie extérieure du véhicule; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous vous tenez ou prenez place dans la benne ou la caisse d’un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur qui tolère une telle pratique; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule est en mouvement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    12 points d'inaptitude
                    {'\n\n'}
                    Nous sommes là pour vous aider.
                    {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 433 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut, alors que le véhicule routier est en mouvement, se tenir ou prendre place sur le marche-pied, sur une partie extérieure du véhicule, dans la benne ou la caisse du véhicule ou tolérer qu’une telle pratique ait lieu.
                    {'\n\n'}
                    Toutefois, une personne, pour exécuter ses fonctions, peut se tenir sur une partie extérieure d’un véhicule aménagée à cette fin.
            </Text>
            ),
            image: '327.png',
            analyse: '',
        },
        en: {
            art: 'Section 433',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Moving vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You ride on the running board of a vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You ride on an outer part of a vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You ride in the box or dump body of a vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver who tolerates such a practice; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle is in motion. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    12 demerit points.
                    {'\n\n'}
                    We will be glad to help you.
                    {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 433 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may ride on the running board or on any outer part of a vehicle in motion, or ride in the box or dump body of a vehicle in motion, or tolerate such a practice.
                    {'\n\n'}
                    However, a person may, in order to perform his duties, stand on any outer part of a vehicle designed for such use.
            </Text>
            ),
            image: '327.png',
            analyse: '',
        },
    },
    '434': {
        fr: {
            art: 'Art: 434',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Véhicule en mouvement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes agrippé à un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes tiré par un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes poussé par un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur qui tolère une telle pratique; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule est en mouvement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    12 points d'inaptitude
                    {'\n\n'}
                    Nous sommes là pour vous aider.
                    {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 434 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut, alors qu’un véhicule routier est en mouvement, s’y agripper ou être tiré ou poussé par le véhicule et le conducteur ne peut tolérer une telle pratique.
            </Text>
            ),
            image: '327.png',
            analyse: '',
        },
        en: {
            art: 'Section 434',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Moving vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are hunging on to a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are pulled by a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are pushed by a vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver who tolerates such practice; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle is in motion. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    12 demerit points.
                    {'\n\n'}
                    We will be glad to help you.
                    {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 434 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may hang on to, or be pulled or pushed by, a moving road vehicle, and no driver may tolerate such a practice.
            </Text>
            ),
            image: '327.png',
            analyse: '',
        },
    },
    '435': {
        fr: {
            art: 'Art: 435',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Crissement de pneus',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez sur un chemin public; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez sur un chemin privé ouvert à la circulation publique; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez sur un terrain de centre commercial; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez sur tout autre terrain où le public est autorisé à circuler; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous faites crisser les pneus du véhicule sans nécessité. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 435 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ne peut, sauf en cas de nécessité, faire crisser les pneus de son véhicule.
                    {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins privés ouverts à la circulation publique des véhicules routiers, ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler.
            </Text>
            ),
            image: '435.png',
            analyse: '',
        },
        en: {
            art: 'Section 435',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Tire squeal',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You travel on public highways; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You travel on private roads open to public vehicular traffic; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You travel on land occupied by shopping centres; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You travel on any other land where public traffic is allowed; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You make the tires squeal unnecessarily. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 435 Highway safety code: </Bold>
                    {'\n\n'}
                    The driver of a road vehicle shall not make his tires squeal, except in case of necessity.
                    {'\n\n'}
                    In addition to public highways, this section applies on private roads open to public vehicular traffic, as well as on land occupied by shopping centres and other land where public traffic is allowed.
            </Text>
            ),
            image: '435.png',
            analyse: '',
        },
    },
    '439.1': {
        fr: {
            art: 'Art: 439.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Téléphone cellulaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d'un véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You tenez en main et utilisez un appareil muni d’une fonction téléphonique; </Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat gratuitement pour sauver votre permis de conduire.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 439.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Une personne ne peut, pendant qu’elle conduit un véhicule routier, faire usage d’un appareil tenu en main muni d’une fonction téléphonique.
                    {'\n\n'}
                    Pour l’application du présent article, le conducteur qui tient en main un appareil muni d’une fonction téléphonique est présumé en faire usage.
                    {'\n\n'}
                    Cette interdiction ne s’applique pas au conducteur d’un véhicule d’urgence dans l’exercice de ses fonctions.
                    {'\n\n'}
                    Le premier alinéa ne vise pas une radio bidirectionnelle, à savoir un appareil de communication vocale sans fil qui ne permet pas aux interlocuteurs de parler simultanément.
                    {'\n\n'}
                    Le ministre peut, par arrêté, prévoir d’autres situations ou types d’appareil qui ne sont pas visés par l’interdiction prévue au premier alinéa.
            </Text>
            ),
            image: '439.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 439.1',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Cell phone',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are holding and using a hand-held device that includes a telephone function;</Bold>
                </Text>
            ),
            point: (
                <Text>
                    4 demerit points.
                    {'\n\n'}
                    We will be glad to help you.
                    {'\n\n'}
                    Consult a lawyer to save your driver's licence.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 439.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may, while driving a road vehicle, use a hand-held device that includes a telephone function.
                    {'\n\n'}
                    For the purposes of this section, a driver who is holding a hand-held device that includes a telephone function is presumed to be using the device.
                    {'\n\n'}
                    This prohibition does not apply to drivers of emergency vehicles in the performance of their duties.
                    {'\n\n'}
                    The first paragraph does not apply to a two-way radio, that is to say a cordless voice communication device which does not allow the parties to speak simultaneously.
                    {'\n\n'}
                    The Minister may, by order, determine other situations or types of devices to which the prohibition set out in the first paragraph does not apply.
            </Text>
            ),
            image: '439.1.png',
            analyse: '',
        },
    },
    '440': {
        fr: {
            art: 'Art: 440',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Écouteurs interdits',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez une bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous portez des écouteurs. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le présent Art: ne s’applique cependant pas à un appareil servant à l’échange de conversations entre ses usagers dans la mesure où celui-ci permet de capter les bruits de la circulation environnante. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 440 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou d’une bicyclette ne peut porter un baladeur ou des écouteurs.
                    {'\n\n'}
                    Le présent Art: ne s’applique cependant pas à un appareil servant à l’échange de conversations entre ses usagers dans la mesure où celui-ci permet de capter les bruits de la circulation environnante.
            </Text>
            ),
            image: '440.png',
            analyse: '',
        },
        en: {
            art: 'Section 440',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Earphones',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements </Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You use headphones or earphones.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• This section does not apply to a device used in conversational exchanges among its users to the extent that the device allows surrounding traffic noises to be heard. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 440 Highway safety Code.</Bold>
                    {'\n\n'}
                    In no case may the driver of a road vehicle or person riding a bicycle use headphones or earphones.
                    {'\n\n'}
                    This section does not apply to a device used in conversational exchanges among its users to the extent that the device allows surrounding traffic noises to be heard.
            </Text>
            ),
            image: '440.png',
            analyse: '',
        },
    },
    '440.1': {
        fr: {
            art: 'Art: 440.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Pneus d’hiver',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois éléments </Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire d’un véhicule routier motorisé immatriculé au Québec; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le véhicule est mis en circulation entre le 1er décembre et le 15 mars; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Le véhicule n’est pas muni de pneus conçus spécifiquement pour la conduite hivernale selon les normes prévues par règlement.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 440.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Au cours de la période du 1er décembre au 15 mars, le propriétaire d’un véhicule routier motorisé immatriculé au Québec, autre qu’un véhicule lourd, un véhicule-outil ou une machine agricole ne peut mettre en circulation ce véhicule, à moins qu’il ne soit muni de pneus conçus spécifiquement pour la conduite hivernale selon les normes prévues par règlement du gouvernement. Cette interdiction s’applique également à quiconque offre en location au Québec un tel véhicule sans égard à son lieu d’immatriculation.
                    {'\n\n'}
                    Le règlement du gouvernement peut aussi prévoir:
                    {'\n'}
                    1°  les cas auxquels l’interdiction prévue au premier alinéa ne s’applique pas;
                    {'\n'}
                    2°  les cas où l’interdiction prévue au premier alinéa est remplacée par l’obligation d’obtenir un certificat autorisant le propriétaire d’un véhicule visé au premier alinéa ou le locateur, le cas échéant, à mettre ce véhicule en circulation au Québec sans qu’il ne soit muni de pneus conçus spécifiquement pour la conduite hivernale et les formalités à remplir pour l’obtenir;
                    {'\n'}
                    3°  qui peut délivrer le certificat prévu au paragraphe 2°.
                    {'\n\n'}
                    Malgré le deuxième alinéa, le ministre peut, par arrêté, exclure de l’application du premier alinéa les propriétaires et les locateurs de véhicules à l’égard desquels il n’existe pas de pneus conçus spécifiquement pour la conduite hivernale. L’obligation de publication prévue à l’Art: 8 de la Loi sur les règlements (chapitre R-18.1) ne s’applique pas à un tel arrêté. L’arrêté entre en vigueur à la date de sa publication à la Gazette officielle du Québec.
                    {'\n\n'}
                    Le ministre peut, par règlement, prévoir des catégories de véhicules lourds, de véhicules-outils ou de machines agricoles pour lesquelles l’interdiction prévue au premier alinéa s’applique.
            </Text>
            ),
            image: '440.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 440.1',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Winter tires',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three elements </Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of a motorized road vehicle registered in Québec; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The vehicle is in operation between 1 Decembre and 15 March; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The vehicle is not equipped with tires specifically designed for winter driving, in compliance with the standards prescribed by government regulation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 440.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    Between 1 December and 15 March, the owner of a motorized road vehicle registered in Québec, except a heavy vehicle, tool vehicle or farm machine, may not put the vehicle into operation unless it is equipped with tires specifically designed for winter driving, in compliance with the standards prescribed by government regulation. The prohibition also applies to any person renting out such a vehicle regardless of where it is registered.
                    {'\n'}
                    The government regulation may also prescribe:
                    {'\n'}
                    (1)  the cases in which the prohibition in the first paragraph does not apply;
                    {'\n'}
                    (2)  the cases in which the prohibition in the first paragraph is replaced by the obligation to obtain a certificate authorizing the owner of a vehicle referred to in the first paragraph or the person renting out such a vehicle, as applicable to put the vehicle into operation in Québec without equipping it with tires specifically designed for winter driving, and the formalities required for obtaining the certificate;
                    {'\n'}
                    (3)  who may issue the certificate provided for in subparagraph 2.
                    {'\n\n'}
                    Despite the second paragraph, the Minister may, by order, exclude from the application of the first paragraph persons who own or rent out vehicles for which there are no tires specifically designed for winter driving. The publication requirement set out in section 8 of the Regulations Act (chapter R-18.1) does not apply to such an order. The order comes into force on the date of its publication in the Gazette officielle du Québec.
                    {'\n\n'}
                    The Minister may, by regulation, determine classes of heavy vehicles, tool vehicles or farm machines to which the prohibition under the first paragraph applies.
            </Text>
            ),
            image: '440.1.png',
            analyse: '',
        },
    },
    '442': {
        fr: {
            art: 'Art: 442',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Obstruer la vue',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments </Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un passager est placé de façon à vous obstruer la vue ou à gêner la conduite du véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un animal est placé de façon à vous obstruer la vue ou à gêner la conduite du véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un objet est placé de façon à vous obstruer la vue ou à gêner la conduite du véhicule. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 442 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut conduire un véhicule routier ou une bicyclette lorsqu’un passager, un animal ou un objet est placé de façon à obstruer la vue du conducteur ou à gêner la conduite du véhicule.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 442',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Obstructing the view',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements </Color> are ptoven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A passenger is so placed as to obstruct your view or to interfere with proper handling of the vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}An animal is so placed as to obstruct your view or to interfere with proper handling of the vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}An object is so placed as to obstruct your view or to interfere with proper handling of the vehicle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 442 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may drive a road vehicle or ride a bicycle if a passenger, an animal or an object is so placed as to obstruct the driver’s view or to interfere with the proper handling of the vehicle.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '443.1': {
        fr: {
            art: 'Art: 443.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Appareil électronique',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier;
                    </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites l'usage d’un téléphone cellulaire ou de tout autre appareil portatif conçu pour transmettre ou recevoir des informations ou pour être utilisé à des fins de divertissement. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous faites l'usage d’un écran d’affichage.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    <Bold>Un agent de la paix suspend, sur-le-champ, le permis de la personne qui été déclarée coupable d’une telle infraction au cours des deux années précédant la constatation de l’infraction.</Bold>
                    {'\n\n'}
                    5 points d'inaptitude
                    {'\n\n'}
                    <Bold>Nous pouvons vous aider à faire lever cette suspension.</Bold>
                    {'\n\n'}
                    Consultez un avocat pour sauver vos points d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 443.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Il est interdit à tout conducteur d’un véhicule routier et à tout cycliste de faire usage  d’un téléphone cellulaire ou de tout autre appareil portatif conçu pour transmettre ou recevoir des informations ou pour être utilisé à des fins de divertissement, ou de faire usage d’un écran d’affichage:
                    {'\n\n'}
                    1° le conducteur du véhicule routier fait ou reçoit des appels téléphoniques en utilisant un dispositif mains libres;
                    {'\n\n'}
                    2° le conducteur du véhicule routier ou le cycliste consulte l’information affichée sur un écran d’affichage, y compris celui d’un appareil électronique portatif, ou active une fonction de l’écran si celui-ci satisfait à l’ensemble des conditions suivantes:
                    {'\n'}
                    (a) il affiche uniquement des informations pertinentes pour la conduite du véhicule ou liées au fonctionnement de ses équipements usuels;
                    {'\n'}
                    (b) il est intégré au véhicule ou installé sur un support, amovible ou non, fixé sur le véhicule;
                    {'\n'}
                    (c) il est placé de façon à ne pas obstruer la vue du conducteur du véhicule routier ou du cycliste, nuire à ses manœuvres, empêcher le fonctionnement d’un équipement ou en réduire l’efficacité et de manière à ne pas constituer un risque de lésion en cas d’accident;
                    {'\n'}
                    (d) il est positionné et conçu de façon à ce que le conducteur du véhicule routier ou le cycliste puisse le faire fonctionner et le consulter aisément.
                    {'\n\n'}
                    Pour l’application du premier alinéa, le conducteur du véhicule routier ou le cycliste qui tient en main, ou de toute autre manière, un appareil électronique portatif est présumé en faire usage.
                    {'\n\n'}
                    Le gouvernement peut, par règlement, préciser les modalités d’application du présent article, notamment définir le sens de certaines expressions. Il peut également prévoir d’autres exceptions à l’interdiction qui y est prévue ainsi que d’autres normes applicables aux écrans d’affichage.
                    {'\n\n'}
                    <Bold>Art. 443.7 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Les articles 443.1 et 443.2 ne s’appliquent pas:
                    {'\n\n'}
                    1° à un conducteur d’un véhicule routier, si son véhicule est stationné de manière à ne pas contrevenir aux dispositions du présent code ou d’une autre loi;
                    {'\n\n'}
                    2° à un cycliste, s’il est immobilisé en bordure de la chaussée ou sur l’accotement de façon à ne pas gêner la circulation.
            </Text>
            ),
            image: '439.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 443.1',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Electronic device',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements </Color> proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are using a cellular telephone or any other portable device designed to transmit or receive information or to be used for entertainment purposes. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are using a display screen. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    <Bold>A peace officer shall immediately suspend the licence of a person who has been found guilty of an offence under that section during the two years before the offence being ascertained.</Bold>
                    {'\n\n'}
                    5 demerit points.
                    {'\n\n'}
                    <Bold> We can help you lift that suspension.</Bold>
                    {'\n\n'}
                    Consult a lawyer to save your demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 443.1 Highway safety code: </Bold>
                    {'\n\n'}
                    Every driver of a road vehicle and every cyclist are prohibited from using a cellular telephone or any other portable device designed to transmit or receive information or to be used for entertainment purposes, or from using a display screen, except in the following cases:
                    {'\n\n'}
                    (1) the driver of the road vehicle sends or receives telephone calls using a hands-free device;
                    {'\n\n'}
                    (2) the driver of the road vehicle or the cyclist consults the information displayed on a display screen, including that of a portable electronic device, or activates a screen function if the screen;
                    {'\n'}
                    (a) displays only such information as is relevant to driving or riding the vehicle or related to the operation of its usual equipment;
                    {'\n'}
                    (b) is integrated into the vehicle or mounted on a bracket, whether detachable or not, attached to the vehicle;
                    {'\n'}
                    (c) is placed so as not to obstruct the driver’s or cyclist’s view, interfere with driving or riding, or prevent the operation of equipment or reduce its efficiency and in a manner that does not present a risk of injury in an accident; and
                    {'\n'}
                    (d) is positioned and designed in such a way that the driver of the road vehicle or cyclist can operate and consult it easily.
                    {'\n\n'}
                    For the purposes of the first paragraph, the driver of a road vehicle or a cyclist who is holding a portable electronic device in hand or in any other manner is presumed to be using the device.
                    {'\n\n'}
                    The Government may, by regulation, determine the manner in which this section is to be applied, in particular by defining the meaning of certain expressions. It may also prescribe other exceptions to the prohibitions under this section and other standards applicable to display screens.
                    {'\n\n'}
                    <Bold>S. 443.1 Highway safety code: </Bold>
                    {'\n\n'}
                    Sections 443.1 and 443.2 do not apply:
                    {'\n\n'}
                    (1) to the driver of a road vehicle, if his vehicle is parked so as not to contravene the provisions of this Code or another law;
                    {'\n\n'}
                    (2) to a cyclist, if he is stopped on the side of the roadway or on the shoulder in such a way that does not obstruct traffic.
            </Text>
            ),
            image: '439.1.png',
            analyse: '',
        },
    },
    '443.2': {
        fr: {
            art: 'Art: 443.2',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Écouteurs interdits',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux éléments</Color> suivants sont prouvés: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un véhicule routier;
                    </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à bicyclette; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous portez des écouteurs. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier ne peut porter qu’un écouteur à une seule oreille. </Bold>
                    {'\n\n'}
                    <Bold>• Ne constitue pas des écouteurs tout appareil qui est intégré dans un casque protecteur et qui permet à ceux qui le portent de communiquer entre eux sans les empêcher de capter les bruits de la circulation environnante. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 443.2 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier et le cycliste ne peuvent porter d’écouteurs.
                    {'\n\n'}
                    Pour l’application du premier alinéa, ne constitue pas des écouteurs tout appareil qui est intégré dans un casque protecteur et qui permet à ceux qui le portent de communiquer entre eux sans les empêcher de capter les bruits de la circulation environnante.
                    {'\n\n'}
                    <Bold>Art. 443.7 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Les articles 443.1 et 443.2 ne s’appliquent pas:
                    {'\n\n'}
                    1° à un conducteur d’un véhicule routier, si son véhicule est stationné de manière à ne pas contrevenir aux dispositions du présent code ou d’une autre loi;
                    {'\n\n'}
                    2°  à un cycliste, s’il est immobilisé en bordure de la chaussée ou sur l’accotement de façon à ne pas gêner la circulation.
            </Text>
            ),
            image: '440.png',
            analyse: '',
        },
        en: {
            art: 'Section 443.2',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Earphones',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two elements</Color> are proven:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a bicycle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You wear headphones or earphones. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle may wear only one earphone. </Bold>
                    {'\n\n'}
                    <Bold>• Devices that are integrated into a protective helmet and that allow the persons wearing them to communicate with each other without preventing them from hearing surrounding traffic noises are not headphones.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 443.2 Highway safety Code.</Bold>
                    {'\n\n'}
                    Neither the driver of a road vehicle nor a cyclist may wear headphones.
                    {'\n\n'}
                    For the purposes of the first paragraph, devices that are integrated into a protective helmet and that allow the persons wearing them to communicate with each other without preventing them from hearing surrounding traffic noises are not headphones.
                    {'\n\n'}
                    <Bold>S. 443.7 Highway safety Code.</Bold>
                    {'\n\n'}
                    Sections 443.1 and 443.2 do not apply:
                    {'\n\n'}
                    (1) to the driver of a road vehicle, if his vehicle is parked so as not to contravene the provisions of this Code or another law;
                    {'\n\n'}
                    (2) to a cyclist, if he is stopped on the side of the roadway or on the shoulder in such a way that does not obstruct traffic.
            </Text>
            ),
            image: '440.png',
            analyse: '',
        },
    },
    '444': {
        fr: {
            art: 'Art: 444',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feux pour piétons',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes piéton; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Des feux pour piétons sont installés à une intersection; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne respectez pas les feux pour piéton.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 444 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsque des feux pour piétons sont installés à une intersection, un piéton doit s’y conformer.
                  {'\n\n'}
                    En face d’une silhouette blanche d’un piéton fixe, un piéton peut traverser la chaussée.
                  {'\n\n'}
                    En face d’une main orange fixe, un piéton ne peut s’engager sur la chaussée.
                  {'\n\n'}
                    En face d’un feu clignotant, un piéton qui a déjà commencé à traverser la chaussée doit presser le pas jusqu’au trottoir ou à la zone de sécurité.
                  {'\n\n'}
                    En face d’un feu clignotant accompagné d’un décompte numérique, un piéton peut s’engager sur la chaussée seulement s’il est en mesure d’atteindre l’autre trottoir ou la zone de sécurité avant que le feu ne passe à la main orange fixe.
            </Text>
            ),
            image: '444+.png',
            analyse: '',
        },
        en: {
            art: 'Section 444',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Pedestrian lights',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a pedestrian; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Pedestrian lights are regulating the intersection;  </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not conform to the pedestrian lights. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 444 Highway safety Code.</Bold>
                    {'\n\n'}
                    At an intersection where there are pedestrian lights, pedestrians must comply therewith.
                  {'\n\n'}
                    A pedestrian facing a steady, white signal representing a walking figure may cross the roadway.
                  {'\n\n'}
                    A pedestrian facing a steady, orange hand signal may in no case start across the roadway.
                  {'\n\n'}
                    A pedestrian facing a flashing signal and having started across the roadway must proceed quickly to the sidewalk or safety zone.
                  {'\n\n'}
                    When facing a flashing signal with a countdown display, a pedestrian may only start crossing the roadway if he is able to reach the other sidewalk or the safety zone before the signal changes to the orange hand signal.
            </Text>
            ),
            image: '444+.png',
            analyse: '',
        },
    },
    '445': {
        fr: {
            art: 'Art: 445',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feux de circulation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes piéton; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Il n’y a pas de feux pour piéton; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne respectez pas les feux de circulation pour traverser l’intersection.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 445 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’il n’y a pas de feux pour piétons, un piéton doit se conformer aux feux de circulation.
            </Text>
            ),
            image: '445.png',
            analyse: '',
        },
        en: {
            art: 'Section 445',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Traffic lights',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a pedestrian; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> There are no pedestrian lights;  </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not respect the traffic lights as you cross the intersection. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 445 Highway safety Code.</Bold>
                    {'\n\n'}
                    Where there are no pedestrian lights, pedestrians must comply with the traffic lights.
            </Text>
            ),
            image: '445.png',
            analyse: '',
        },
    },
    '448': {
        fr: {
            art: 'Art: 448',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Traiter avec l’occupant d’un véhicule',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes piéton; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous vous tenez sur la chaussée; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous sollicitez un transport avec l’occupant d’un véhicule.</Bold>
                    {'\n'}
                    {"     "}OU
          {'\n'}
                    <Bold>{"     "}Vous traitez avec l’occupant d’un véhicule. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 448 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Un piéton ne peut se tenir sur la chaussée pour solliciter son transport ou pour traiter avec l’occupant d’un véhicule.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 448',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Dealing with the occupant of a vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a pedestrian; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You stand on the roadway;  </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You solicit transportation with the occupant of a vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You deal with the occupant of a vehicle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 448 Highway safety Code.</Bold>
                    {'\n\n'}
                    No pedestrian may stand on the roadway to solicit transportation or to deal with the occupant of a vehicle.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '450': {
        fr: {
            art: 'Art: 450',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Feux pour piétons',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes piéton; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Une intersection se trouve à proximité de votre position; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Un passage pour piéton se trouve à proximité de votre position; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous traversez ailleurs qu’à l’un de ces endroits.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 450 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’il y a une intersection ou un passage pour piétons à proximité, un piéton ne peut traverser un chemin public qu’à l’un de ces endroits.
            </Text>
            ),
            image: '450.png',
            analyse: '',
        },
        en: {
            art: 'Section 450',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Dealing with the occupant of a vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a pedestrian; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> There is an intersection nearby; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}There is a pedestrian crossing nearby; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not cross the public highway only at such a place. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 450 Highway safety Code.</Bold>
                    {'\n\n'}
                    If there is an intersection or a pedestrian crosswalk nearby, a pedestrian may cross a public highway only at such a place.
            </Text>
            ),
            image: '450.png',
            analyse: '',
        },
    },
    '451': {
        fr: {
            art: 'Art: 451',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Traverse diagonale',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes piéton;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous ne traversez pas la chaussée perpendiculairement à son axe. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Il ne peut la traverser en diagonale que s’il y est autorisé par un agent de la paix, un brigadier scolaire ou une signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 451 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Un piéton est tenu de traverser la chaussée perpendiculairement à son axe. Il ne peut la traverser en diagonale que s’il y est autorisé par un agent de la paix, un brigadier scolaire ou une signalisation.
            </Text>
            ),
            image: '450.png',
            analyse: '',
        },
        en: {
            art: 'Section 451',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Diagonal crossing',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a pedestrian; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not cross the roadway perpendicularly to its axis. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• A pedestrian may cross the roadway diagonally only if authorized to do so by a peace officer or school crossing guard, or by a sign or signal. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 451 Highway safety Code.</Bold>
                    {'\n\n'}
                    A pedestrian must cross the roadway perpendicularly to its axis. A pedestrian may cross the roadway diagonally only if authorized to do so by a peace officer or school crossing guard, or by a sign or signal.
            </Text>
            ),
            image: '451.png',
            analyse: '',
        },
    },
    '452': {
        fr: {
            art: 'Art: 452',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Trottoir',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes piéton;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un trottoir borde la chaussée; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’utilisez pas ce trottoir. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• En cas d’impossibilité d’utiliser le trottoir, le piéton peut longer celui-ci sur le bord de la chaussée, en s’assurant qu’il peut le faire sans danger. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 452 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsqu’un trottoir borde la chaussée, un piéton est tenu de l’utiliser.
                  {'\n\n'}
                    En cas d’impossibilité d’utiliser le trottoir, le piéton peut longer celui-ci sur le bord de la chaussée, en s’assurant qu’il peut le faire sans danger.
            </Text>
            ),
            image: '452.png',
            analyse: '',
        },
        en: {
            art: 'Section 452',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Sidewalk',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a pedestrian; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A sidewalk is bordering the roadway;  </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not use the sidewalk. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Where it is impossible to use the sidewalk, a pedestrian may walk alongside the curb on the roadway after ascertaining that he can do so in safety. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 452 Highway safety Code.</Bold>
                    {'\n\n'}
                    Where there is a sidewalk bordering the roadway, a pedestrian must use it.
                  {'\n\n'}
                    Where it is impossible to use the sidewalk, a pedestrian may walk alongside the curb on the roadway after ascertaining that he can do so in safety.
            </Text>
            ),
            image: '452.png',
            analyse: '',
        },
    },
    '460': {
        fr: {
            art: 'Art: 460',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Autobus scolaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>quatre conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes cycliste; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous approchez un autobus ou un minibus affecté au transport d’écoliers; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les feux rouges intermittents de l’autobus ou du minibus sont en marche; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}L’autobus ou le minibus fait usage de son signal d’arrêt obligatoire; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> Vous n’immobilisez pas votre véhicule à plus de 5m de l’autobus ou du minibus. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous le dépassez ou le croisez avant que les feux rouges intermittents soient éteints.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous le dépassez ou le croisez avant que le signal d’arrêt obligatoire soit rabattu. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne vous assurez pas qu’il est possible de dépasser ou de croiser l’autobus sans danger. </Bold>

                </Text>
            ),
            point: (
                <Text>
                    9 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 460 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’un véhicule routier ou un cycliste qui approche d’un autobus ou minibus affecté au transport d’écoliers dont les feux rouges intermittents sont en marche ou lorsqu’il est fait usage de son signal d’arrêt obligatoire doit immobiliser son véhicule à plus de 5 mètres de l’autobus ou du minibus et ne peut le croiser ou le dépasser que lorsque les feux rouges intermittents sont éteints et le signal d’arrêt obligatoire escamoté, et qu’après s’être assuré qu’il peut le faire sans danger.
                  {'\n\n'}
                    Le premier alinéa ne s’applique pas à un conducteur d’un véhicule routier et à un cycliste lorsqu’ils croisent un autobus ou un minibus affecté au transport d’écoliers sur une chaussée adjacente séparée par un terre-plein ou un autre dispositif physique surélevé.
            </Text>
            ),
            image: '460.png',
            analyse: '',
        },
        en: {
            art: 'Section 460',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'School bus',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>four conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are a cyclist; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are approaching a bus or minibus used for the transportation of school childrens;</Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The bus’s red flashing lights are turned on; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The bus’s compulsory stop signal has been activated; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> You do not stop your vehicle more than 5 metres from the bus or minibus. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You meet or pass the bus before the flashing red lights are turned off. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You meet or pass the bus before the compulsory stop signal has been retracted. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not ascertain that you could proceed in safety. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    9 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer for free to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 460 Highway safety Code.</Bold>
                    {'\n\n'}
                    The driver of a road vehicle or a cyclist who is approaching a bus or minibus used for the transportation of school children with flashing red lights turned on or whose compulsory stop signal has been activated must stop his vehicle more than 5 metres from the bus or minibus and shall not meet or pass it until the flashing red lights are turned off and the compulsory stop signal has been retracted, and he ascertains that he can do so in safety.
                  {'\n\n'}
                    The first paragraph does not apply to the driver of a road vehicle or a cyclist meeting a bus or minibus used for the transportation of school children on an adjacent roadway separated by a median strip or other raised physical device.
            </Text>
            ),
            image: '460.png',
            analyse: '',
        },
    },
    '471': {
        fr: {
            art: 'Art: 471',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Chargement non retenu',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous laissez conduire le véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Le chargement de ce véhicule n’est pas solidement retenu ou suffisamment recouvert de manière à ce qu’aucune partie de celui-ci ne puisse se déplacer ou se détacher du véhicule. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le chargement de ce véhicule est placé, retenu ou recouvert de manière à réduire le champs de vision du conducteur ou à masquer ses lumières.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le chargement de ce véhicule est placé, retenu ou recouvert de manière à compromettre la stabilité ou la conduite du véhicule.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le chargement de ce véhicule n’est pas placé, retenu ou recouvert conformément au Règlement sur les normes d’arrimage des charges. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
  
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 471 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut conduire ou laisser conduire un véhicule routier dont le chargement:
                  {'\n\n'}
                    1°  n’est pas solidement retenu ou suffisamment recouvert de manière à ce qu’aucune partie de celui-ci ne puisse se déplacer ou se détacher du véhicule;
                  {'\n\n'}
                    2°  est placé, retenu ou recouvert de manière à réduire le champ de vision du conducteur ou à masquer ses feux et ses phares;
                  {'\n\n'}
                    3°  est placé, retenu ou recouvert de manière à compromettre la stabilité ou la conduite du véhicule;
                  {'\n\n'}
                    4°  n’est pas placé, retenu ou recouvert conformément au règlement pris sur les normes d’arrimage des charges.
                  {'\n\n'}
                    Les paragraphes 1°, 2° et 3° s’appliquent sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci.
                  {'\n\n'}
                    <Bold>Règlement sur les normes d’arrimage: </Bold>
                    {'\n\n'}
                    http://legisquebec.gouv.qc.ca/fr/ShowDoc/cr/C-24.2,%20r.%2030/
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 471',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Secured load',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You allow a road vehicle to be driven; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle’s load is not solidly secured or adequately covered so as to prevent any part of the load from moving or detaching itself from the vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle’s load is placed, secured or covered in a manner that reduces the driver’s field of vision or blocks the lights of the vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle’s load is placed, secured or covered in a manner that interferes with the stability or handling of the vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle’s load is not placed, secured or covered in accordance with the regulation respecting the securing of loads. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer for free to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 443.1 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may drive or allow to be driven a road vehicle carrying a load:
                  {'\n\n'}
                    (1)  that is not solidly secured or adequately covered so as to prevent any part of the load from moving or detaching itself from the vehicle;
                  {'\n\n'}
                    (2)  that is placed, secured or covered in a manner that reduces the driver’s field of vision or blocks the lights of the vehicle;
                  {'\n\n'}
                    (3)  that is placed, secured or covered in a manner that interferes with the stability or handling of the vehicle;
                  {'\n\n'}
                    (4)  that is not placed, secured or covered in accordance with the regulation respecting the securing of loads.
                  {'\n\n'}
                    Subparagraphs 1, 2 and 3 apply on highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune.
                  {'\n\n'}
                    <Bold>Cargo Securement Standards Regulation: </Bold>
                    {'\n\n'}
                    http://legisquebec.gouv.qc.ca/en/ShowDoc/cr/C-24.2,%20r.%2030
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '478': {
        fr: {
            art: 'Art: 478',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Conduire entre deux rangées de véhicule',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur d’un motocyclette; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur d’un cyclomoteur; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous conduisez entre deux rangées de véhicules circulant sur des voies contiguës. Cette manoeuvre est également interdite aux cyclistes. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez entre le bord de la chaussée et un autre véhicule circulant dans la même voie.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous conduisez entre un véhicule circulant dans la même voie et un véhicule stationné à droite ou à gauche de celle-ci. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
  
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Modification législative après le 18 mai 2018: </Bold>
                    {'\n\n'}
                    <Bold>Art. 478 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut conduire une motocyclette ou un cyclomoteur:
                  {'\n\n'}
                    1° entre deux rangées de véhicules circulant sur des voies contiguës;
                  {'\n\n'}
                    2° entre le bord de la chaussée et un autre véhicule circulant dans la même voie;
                  {'\n\n'}
                    3° entre un véhicule circulant dans la même voie et un véhicule stationné à droite ou à gauche de celle-ci.
                  {'\n\n'}
                    Le paragraphe 1° du premier alinéa s’applique au cycliste, sauf lorsque la voie sur laquelle il circule est contiguë à une voie réservée à l’exécution du virage à droite.
            </Text>
            ),
            image: '478+.png',
            analyse: '',
        },
        en: {
            art: 'Section 478',
            type: 'Circulation',
            source: 'Highway safety code, C-24.2',
            infraction: 'Driving between two lanes',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of a motorcycle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the driver of a moped; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You drive between rows of vehicles moving on contiguous lanes. This maneuver is also prohibited to cyclists. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You drive between the side of the roadway and another vehicle travelling in the same lane. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You drive between a vehicle travelling in the same lane and a vehicle parked to the right or left of that lane. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer for free to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Legislative modification applying after May 18th 2018: </Bold>
                    {'\n\n'}
                    <Bold>S. 478 Highway safety code: </Bold>
                    {'\n\n'}
                    No person may drive a motorcycle or a moped:
                  {'\n\n'}
                    (1) between rows of vehicles moving on contiguous lanes;
                  {'\n\n'}
                    (2) between the side of the roadway and another vehicle travelling in the same lane; or
                  {'\n\n'}
                    (3) between a vehicle travelling in the same lane and a vehicle parked to the right or left of that lane.
                  {'\n\n'}
                    Subparagraphs 1, 2 and 3 apply on highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune.
            </Text>
            ),
            image: '478+.png',
            analyse: '',
        },
    },
    '484': {
        fr: {
            art: 'Art: 484',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Casque obligatoire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous prenez place sur une motocyclette; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous prenez place sur un cyclomoteur; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous prenez place dans une caisse adjacente à une motocyclette ou un cyclomoteur; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous ne portez pas un casque protecteur conforme aux normes établies par règlement. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne permettez pas à un agent de la paix de procéder à l’examen du casque protecteur. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous ne portez pas protection visuelle ou de visière lorsque vous circulez dans un zone où la limite de vitesse maximale autorisée est supérieure à 50 km/h.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 points d'inaptitude
                  {'\n\n'}
                    Nous sommes là pour vous aider.
                  {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Modification législative du 18 mai 2018: </Bold>
                    {'\n\n'}
                    <Bold>Art. 484 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Toute personne prenant place sur une motocyclette, un cyclomoteur ou dans une caisse adjacente doit porter un casque protecteur conforme aux normes établies par règlement.
                  {'\n\n'}
                    Le conducteur d’une motocyclette ou d’un cyclomoteur doit de plus porter une protection visuelle lorsque son casque protecteur n’est pas muni d’une visière et qu’il circule dans une zone où la limite de vitesse maximale autorisée est supérieure à 50 km/h.
                  {'\n\n'}
                    Ces personnes doivent, sur demande d’un agent de la paix, lui permettre de procéder à l’examen de leur casque protecteur et de leur protection visuelle.
                  {'\n\n'}
                    <Bold>Normes établies par règlement:</Bold>
                    {'\n\n'}
                    http://legisquebec.gouv.qc.ca/fr/ShowDoc/cr/C-24.2,%20r.%206
            </Text>
            ),
            image: '484.png',
            analyse: '',
        },
        en: {
            art: 'Section 484',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Protective helmet',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are riding a motorcycle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding a moped; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are riding in a sidecar; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not wear a protective helmet that complies with the standards prescribed by regulation.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not allow the police officer to examine your protective helmet. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not wear a visual protection or a visor when you are travelling in a zone where the maximum authorized speed limit is over 50 km/h. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    3 demerit points.
                  {'\n\n'}
                    We will be glad to help you.
                  {'\n\n'}
                    Consult a lawyer for free to see your options.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Legislative modification applying after May 18th 2018:</Bold>
                    {'\n\n'}
                    <Bold>S. 484 Highway safety Code.</Bold>
                    {'\n\n'}
                    Every person riding on a motorcycle or moped or in a sidecar must wear a protective helmet that complies with the standards prescribed by regulation.
                  {'\n\n'}
                    The driver of a motorcycle or moped must also wear visual protection if his protective helmet does not have a visor and he is travelling in a zone where the maximum authorized speed limit is over 50 km/h.
                  {'\n\n'}
                    Such persons must, if so requested by a peace officer, allow him to examine their protective helmets and visual protection.
                  {'\n\n'}
                    <Bold>Standards:</Bold>
                    {'\n\n'}
                    http://legisquebec.gouv.qc.ca/en/ShowDoc/cr/C-24.2,%20r.%206
            </Text>
            ),
            image: '484.png',
            analyse: '',
        },
    },
    '484.1': {
        fr: {
            art: 'Art: 484.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Niveau sonore',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes propriétaire d'une motocyclette; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes propriétaire d'un cyclomoteur; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> le niveau sonore du système d’échappement de celui-ci excède la valeur établie par règlement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 484.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le propriétaire d’une motocyclette ou d’un cyclomoteur ne peut conduire ou laisser conduire son véhicule si le niveau sonore du système d’échappement de celui-ci excède la valeur établie par règlement.
                  {'\n\n'}
                    <Bold>Art. 484.2 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le niveau sonore du système d’échappement d’une motocyclette ou d’un cyclomoteur peut être mesuré selon la méthode prescrite par règlement à l’aide d’un sonomètre conforme aux normes techniques et d’entretien déterminées par règlement du gouvernement et utilisé par un agent de la paix qui a suivi avec succès une formation reconnue par la Société.
            </Text>
            ),
            image: '258.png',
            analyse: '',
        },
        en: {
            art: 'Section 484.1',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Sound level',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the owner of the motorcycle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the owner of the moped; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color>  the sound level of its exhaust system exceeds the values determined by regulation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 484.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    No owner of a motorcycle or moped may drive his vehicle or allow it to be driven if the sound level of its exhaust system exceeds the values determined by regulation.
                  {'\n\n'}
                    <Bold>S. 484.1 Highway safety Code. </Bold>
                    {'\n\n'}
                    The sound level of a motorcycle’s or moped’s exhaust system may be measured according to the method prescribed by regulation by means of a sound level meter that complies with the technical and maintenance standards determined by government regulation and used by a peace officer who has successfully completed training recognized by the Société.
            </Text>
            ),
            image: '258.png',
            analyse: '',
        },
    },
    '487': {
        fr: {
            art: 'Art: 487',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circulation à contresens',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes un cycliste; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous ne circulez pas aussi près que possible de la bordure ou du côté droit de la chaussée. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous circulez à contresens de la circulation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous deviez circuler à contresens, puisque vous vous apprêtiez à effectuer un virage à gauche. </Bold>
                    {'\n\n'}
                    <Bold>• La signalisation vous autorisait à circuler à contresens.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Modification législative du 18 mai 2018: </Bold>
                    {'\n\n'}
                    <Bold>Art. 487 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le cycliste doit circuler aussi près que possible de la bordure ou du côté droit de la chaussée et dans le même sens que la circulation, en tenant compte de l’état de la chaussée et des risques d’emportiérage.
                  {'\n\n'}
                    Il peut également circuler sur l’accotement dans le même sens que la circulation.
                    {'\n\n'}
                    Le premier alinéa ne s’applique pas au cycliste lorsqu’il s’apprête à effectuer un virage à gauche, s’il est autorisé à circuler à contresens ou en cas de nécessité.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
        en: {
            art: 'Section 487',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Riding in the same direction as traffic',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a cyclist; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You do not ride as close as possible to the edge or right side of the roadway.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You do not ride in the same direction as traffic.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• You had to ride in the opposite direction as traffic in order to make a left turn. </Bold>
                    {'\n\n'}
                    <Bold>• A sign or signage allowed you to ride in the opposite direction as traffic. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Legislative modification applying after May 18th 2018:</Bold>
                    {'\n\n'}
                    <Bold>S. 487 Highway safety Code.</Bold>
                    {'\n\n'}
                    A cyclist must ride as close as possible to the edge or right side of the roadway and in the same direction as traffic, taking into account the condition of the roadway and the risk of car dooring.
                  {'\n\n'}
                    A cyclist may also ride on the shoulder in the same direction as traffic.
                    {'\n\n'}
                    The first paragraph does not apply to a cyclist about to make a left turn, if he is authorized to ride against traffic or in case of necessity.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
    },
    '488': {
        fr: {
            art: 'Art: 488',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ne pas s’être conformé à la signalisation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes un cycliste; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous faites face à une signalisation; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne vous conformez pas à cette signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 488 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le conducteur d’une bicyclette doit se conformer à toute signalisation.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
        en: {
            art: 'Section 488',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Not complying with every sign or signal',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are a cyclist; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You are facing a sign or a signal; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not comply with this sign or this signal. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 488 Highway safety Code.</Bold>
                    {'\n\n'}
                    All cyclists must comply with all traffic signs and signals.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
    },
    '492.1': {
        fr: {
            art: 'Art: 492.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Circulation sur le trottoir',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes cycliste;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez sur le trottoir. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• La signalisation vous permettait de circuler sur le trottoir. Vous devez alors circuler à une vitesse raisonnable et prudente et accorder la priorité aux piétons.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Modification législative du 18 mai 2018: </Bold>
                    {'\n\n'}
                    <Bold>Art. 492.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le cycliste ne peut circuler sur un trottoir, sauf en cas de nécessité ou à moins que la signalisation ne le prescrive ou ne le permette. Il doit alors circuler à une vitesse raisonnable et prudente et accorder la priorité aux piétons.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
        en: {
            art: 'Section 492.1',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Riding on the sidewalk',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are riding a cyclist; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You ride on the sidewalk. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You were allowed to ride on the sidewalk by a sign or signal. In such a case, the cyclist must ride at a safe, reasonable speed and give pedestrians the priority.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Legislative modification applying after May 18th 2018:</Bold>
                    {'\n\n'}
                    <Bold>S. 492.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    A cyclist may not ride a bicycle on a sidewalk except in case of necessity or where directed or allowed to do so by a sign or signal. In such a case, the cyclist must ride at a safe, reasonable speed and give pedestrians the priority.
            </Text>
            ),
            image: '232.png',
            analyse: '',
        },
    },
    '498': {
        fr: {
            art: 'Art: 498',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Jeter des objets',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous circulez sur un chemin public; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous jetez des objets ou quelconque matière sur un chemin public. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous déposez des objets ou quelconque matière sur un chemin public. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous abandonnez des objets ou quelconque matière sur un chemin public. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}À titre de conducteur, vous laisser une matière quelconque se détacher de votre véhicule. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Une personne responsable de l'entretien de ce chemin vous a autorisé à jeter, déposer ou abandonner un objet ou quelconque matière. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 498 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Il est interdit de jeter, déposer ou abandonner des objets ou matières quelconques sur un chemin public, sauf exception autorisée par la personne responsable de l’entretien de ce chemin.
                  {'\n\n'}
                    Il est également interdit à tout conducteur de laisser une matière quelconque se détacher du véhicule qu’il conduit.
            </Text>
            ),
            image: '498.png',
            analyse: '',
        },
        en: {
            art: 'Section 498',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Objects on public highway',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are travelling on a public highway; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You dispose of any objects or substances on a public highway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You deposit any objects or substances on a public highway.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You abandon any objects or substances on a public highway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}As a driver, you allow any substance to fall from the vehicle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• A person responsible for the maintenance of that highway has authorized you to dispose of, deposit or abandon an object or any material. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 498 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may dispose of, deposit or abandon any objects or substances on a public highway, unless authorized to do so by the person responsible for the maintenance of that highway.
                  {'\n\n'}
                    No driver may allow any substance to fall from the vehicle.
            </Text>
            ),
            image: '498.png',
            analyse: '',
        },
    },
    '498.1': {
        fr: {
            art: 'Art: 498.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Véhicule couvert de neige',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule;
                </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Votre véhicule est couvert de neige pouvant s’en détacher et susceptible de présenter un danger pour les usagers de la route. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre véhicule est couvert de glace pouvant s’en détacher et susceptible de présenter un danger pour les usagers de la route. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre véhicule est couvert de toute matière pouvant s’en détacher et susceptible de présenter un danger pour les usagers de la route. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 498.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut circuler avec un véhicule couvert de neige, de glace ou de toute autre matière pouvant s’en détacher et susceptible de présenter un danger pour les usagers de la route.
                </Text>
            ),
            image: '330.png',
            analyse: '',
        },
        en: {
            art: 'Section 498.1',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Vehicle covered in snow',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Your vehicle was covered with snow that may detach from the vehicle and that may constitute a hazard for road users. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Your vehicle was covered with ice that may detach from the vehicle and that may constitute a hazard for road users. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Your vehicle was covered with any matter that may detach from the vehicle and that may constitute a hazard for road users. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 498.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may drive a vehicle covered with snow, ice or any other matter that may detach from the vehicle and that may constitute a hazard for road users.
                </Text>
            ),
            image: '330.png',
            analyse: '',
        },
    },
    '519.2': {
        fr: {
            art: 'Art: 519.2',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Ronde de sécurité',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule lourd;
                </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous n’avez pas effectué la ronde de sécurité avant départ. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’avez pas rempli et signé le rapport de vérification. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun points d'inaptitude
                {'\n\n'}
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 519.2 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout conducteur doit, selon les normes établies par règlement, effectuer une ronde de sécurité du véhicule lourd qu’il conduit et noter ses observations à l’égard de son état mécanique au rapport de ronde de ce véhicule.
                {'\n\n'}
                    Cette ronde de sécurité peut, toutefois, être effectuée par une autre personne que l’exploitant désigne. La personne ainsi désignée est tenue aux obligations prévues au premier alinéa et doit remplir et signer le rapport prévu à l’Art: 519.3 et inscrire et signaler, conformément à l’Art: 519.5, toute défectuosité.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
        en: {
            art: 'Section 519.2',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Circle check',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the heavy vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You did not conduct a circle check of the heavy vehicle to be driven. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You did not fill and sign the circle check report. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit points
                {'\n\n'}
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 519.2 Highway safety Code.</Bold>
                    {'\n\n'}
                    A driver of a heavy vehicle must, in accordance with the standards prescribed by regulation, conduct a circle check of the heavy vehicle to be driven and enter all observations of the mechanical condition of the vehicle in the vehicle’s circle-check report.
                {'\n\n'}
                    The operator may, however, designate another person to conduct the circle check. The person designated must comply with the obligations provided for in the first paragraph and must complete and sign the report prescribed in section 519.3 and note and report any mechanical defect in accordance with section 519.5.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
    },
    '523': {
        fr: {
            art: 'Art: 523',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Vérification mécanique',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes l’exploitant du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un policier vous a remis un avis vous obligeant à soumettre votre véhicule à une vérification mécanique; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La SAAQ vous a remis un avis vous obligeant à soumettre votre véhicule à une vérification mécanique </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous ne soumettez pas le véhicule à la vérification mécanique dans le délai requis. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous remettez le véhicule en circulation sans en avoir reçu l’autorisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                {'\n\n'}
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 523 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Le propriétaire ou le conducteur d’un véhicule routier visé à l’Art: 521 doit soumettre le véhicule à la vérification mécanique exigée et doit remettre à la Société ou à l’agent de la paix qui lui en fait la demande, le certificat d’immatriculation du véhicule ainsi que son permis.
                {'\n\n'}
                    La Société ou l’agent de la paix doit remettre ces pièces à leur détenteur dès qu’elles ont été examinées.
                {'\n\n'}
                    <Bold>Art. 524 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    L’agent de la paix ou la Société, selon le cas, peut remettre un avis indiquant le délai dans lequel le propriétaire ou le conducteur d’un véhicule routier visé à l’un des paragraphes 10° ou 10.1° de l’Art: 521 doit soumettre son véhicule à la vérification mécanique.
                {'\n\n'}
                    À l’expiration de ce délai, nul ne peut remettre le véhicule en circulation à moins que la preuve ne soit faite, à la satisfaction de la Société ou d’une personne autorisée à effectuer la vérification mécanique pour celle-ci, que le véhicule a été soumis à la vérification mécanique et est conforme au présent code.
                {'\n\n'}
                    Le défaut pour ce propriétaire ou ce conducteur de se conformer dans le délai constitue une infraction aux dispositions de l’Art: 523.
                {'\n\n'}
                    <Bold>Art. 521 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Les véhicules routiers suivants, sous réserve de l’Art: 543.2, sont soumis à la vérification mécanique:
                {'\n\n'}
                    1°  les véhicules utilisés pour l’enseignement par une école de conduite;
                {'\n\n'}
                    2°  les véhicules d’urgence;
                {'\n\n'}
                    3°  les taxis, les autobus et les minibus;
                {'\n\n'}
                    4°  (paragraphe abrogé);
                {'\n\n'}
                    5°  les véhicules dont le poids nominal brut est de 4 500 kg ou plus, à l’exception des essieux amovibles, des véhicules d’une masse nette de 4 000 kg ou moins possédant à l’origine une caisse découverte et un hayon qui sont immatriculés comme véhicule de promenade au sens de la réglementation sur l’immatriculation, des véhicules utilitaires sport d’une masse nette de 4 000 kg ou moins, des habitations motorisées, des caravanes, des véhicules-outils, des machines agricoles ainsi que des remorques de chantier et des remorques de ferme définies par règlement;
                {'\n\n'}
                    6°  (paragraphe remplacé);
                {'\n\n'}
                    7°  les véhicules qui font l’objet d’une cession de propriété et dont l’année de fabrication est déterminée par le ministre des Transports;
                {'\n\n'}
                    8°  les véhicules auxquels ont été apportées des modifications visées à l’Art: 214 et ceux de fabrication artisanale;
                {'\n\n'}
                    9°  les véhicules d’une même marque, modèle, série ou année dont le ministre des Transports ordonne la vérification;
                {'\n\n'}
                    10°  les véhicules désignés par un agent de la paix qui a des motifs raisonnables de croire qu’ils ont subi des modifications visées à l’Art: 214 ou sont dans un état tel qu’ils constituent un danger;
                {'\n\n'}
                    10.1°  les véhicules qui, de l’avis de la Société, sont dans un état tel qu’ils constituent un danger;
                {'\n\n'}
                    10.2°  les véhicules accidentés et reconstruits visés au titre IX.1;
                {'\n\n'}
                    11°  les autres véhicules déterminés par règlement.
                {'\n\n'}
                    Les paragraphes 10° et 10.1° s’appliquent aux véhicules qui circulent sur les chemins soumis à l’administration du ministère des Ressources naturelles et de la Faune ou entretenus par celui-ci, sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains des centres commerciaux et autres terrains où le public est autorisé à circuler.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
        en: {
            art: 'Section 523',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Mechanical inspection',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the operator of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A police officer gave you a notice requiring you to submit your vehicle to a mechanical inspection; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The SAAQ gave you a notice requiring you to submit your vehicle to a mechanical inspection;  </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not submit your vehicle to the mechanical inspection in the given delay. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The vehicle was back in traffic without authorization. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
                {'\n\n'}
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 523 Highway safety Code.</Bold>
                    {'\n\n'}
                    The owner or driver of a road vehicle contemplated in section 521 must submit the vehicle to the required mechanical inspection and must remit the registration certificate of the vehicle and his licence to the Société or to the peace officer if so requested.
                {'\n\n'}
                    The Société or the peace officer must return those documents to their holder once they have been examined.
                {'\n\n'}
                    <Bold>Art. 524 Highway safety Code:</Bold>
                    {'\n\n'}
                    The peace officer or the Société, as the case may be, may give a notice indicating the time within which the owner or driver of a road vehicle described in paragraph 10 or 10.1 of section 521 is required to submit his vehicle to a mechanical inspection.
                {'\n\n'}
                    No person may, after the expiry of the time allotted, operate the vehicle unless it is proved, to the satisfaction of the Société or a person authorized to perform the inspection of vehicles for the Société, that the vehicle was submitted to a mechanical inspection and that it conforms to this Code.
                {'\n\n'}
                    Failure by the owner or driver to comply within the time prescribed constitutes an offence under the provisions of section 523.
                {'\n\n'}
                    <Bold>Art. 521 Highway safety Code:</Bold>
                    {'\n\n'}
                    The following road vehicles, subject to section 543.2, must be submitted to mechanical inspection:
                {'\n\n'}
                    (1)  vehicles used for driving instruction by a driving school;
                {'\n\n'}
                    (2)  emergency vehicles;
                {'\n\n'}
                    (3)  taxis, buses and minibuses;
                {'\n\n'}
                    (4)  (subparagraph repealed);
                {'\n\n'}
                    (5)  vehicles having a gross vehicle weight rating of 4,500 kg or more, except detachable axles, vehicles having a net mass of 4,000 kg or less that originally had an open truck box and a tailgate and that are registered as passenger vehicles within the meaning of the registration regulations, sport utility vehicles having a net mass of 4,000 kg or less, motor homes, house trailers, tool vehicles, farm machines as well as construction trailers defined by regulation;
                {'\n\n'}
                    (6)  (subparagraph replaced);
                {'\n\n'}
                    (7)  vehicles whose ownership has been transferred and whose year of manufacture is determined by the Minister of Transport;
                {'\n\n'}
                    (8)  vehicles to which any of the modifications described in section 214 have been made and vehicles made by hand;
                {'\n\n'}
                    (9)  vehicles of the make, model, series or year for which an inspection is ordered by the Minister of Transport;
                {'\n\n'}
                    (10)  vehicles designated by a peace officer having reasonable grounds to believe that modifications described in section 214 have been made to them or that they are in such a condition that they constitute a hazard;
                {'\n\n'}
                    (10.1)  vehicles which, in the opinion of the Société, are in such poor condition that they constitute a hazard;
                {'\n\n'}
                    (10.2)  damaged vehicles that have been rebuilt and to which Title IX.1 applies;
                {'\n\n'}
                    (11)  other vehicles determined by regulation.
                {'\n\n'}
                    Subparagraphs 10 and 10.1 apply to vehicles being operated on highways under the administration of or maintained by the Ministère des Ressources naturelles et de la Faune, on private roads open to public vehicular traffic and on land occupied by shopping centres or other land where public traffic is allowed.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
    },
    '531': {
        fr: {
            art: 'Art: 531',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: '48 heures',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes l’exploitant du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Suite à une vérification mécanique indiquant une défectuosité mineure du véhicule, la SAAQ ou la personne autorisée à faire la vérification vous a remis un avis de faire ou de faire exécuter les réparations nécessaires dans un délai de 48 heures; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> À l’expiration du délai, le véhicule a été remis en circulation sans que la SAAQ ou la personne autorisée à effectuer la vérification ait constaté que le véhicule était conforme au Code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                {'\n\n'}
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 531 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsque le certificat de vérification mécanique indique qu’un véhicule routier présente une défectuosité mineure, la Société ou la personne autorisée à effectuer la vérification pour celle-ci délivre au propriétaire ou au conducteur du véhicule un avis enjoignant au propriétaire d’effectuer ou de faire effectuer dans un délai de 48 heures les réparations nécessaires.
                {'\n\n'}
                    À l’expiration de ce délai, nul ne peut remettre le véhicule en circulation à moins que la preuve ne soit faite, à la satisfaction de la Société ou d’une personne autorisée à effectuer la vérification mécanique pour celle-ci, que le véhicule est conforme au présent code.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
        en: {
            art: 'Section 531',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: '48 hours',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the operator of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> After the mechanical inspection indicates a minor defect, The SAAQ or the person authorized to perform the inspection issued a notice enjoining you to make the necessary repairs or cause such repairs to be made within 48 hours. </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> At the expiry of that period, the vehicle was back in operation without it is proved, to the satisfaction of the SAAQ or a person authorized to perform the inspection of vehicles for the Société, that the vehicle conforms to this Code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
                {'\n\n'}
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 531 Highway safety Code.</Bold>
                    {'\n\n'}
                    Where a certificate of mechanical inspection indicates that a road vehicle has a minor defect, the Société or the person authorized to perform the inspection for it shall issue to the owner or the driver of the vehicle a notice enjoining the owner to make the necessary repairs or cause such repairs to be made within 48 hours.
                {'\n\n'}
                    At the expiry of that period, no person may put the vehicle back into operation unless it is proved, to the satisfaction of the Société or a person authorized to perform the inspection of vehicles for the Société, that the vehicle conforms to this Code.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
    },
    '534': {
        fr: {
            art: 'Art: 534',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Defectuosité majeure',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes l’exploitant du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Suite à une vérification mécanique, le certificat indique une défectuosité majeure du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Le véhicule a été remis en circulation sans que la SAAQ ou la personne autorisée à effectuer la vérification ait constaté que le véhicule était conforme au Code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                {'\n\n'}
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 534 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Lorsque le certificat de vérification mécanique indique qu’un véhicule routier présente une défectuosité majeure, nul ne peut remettre le véhicule en circulation à moins que la preuve ne soit faite, à la satisfaction de la Société ou d’une personne autorisée à effectuer la vérification mécanique pour celle-ci, que le véhicule est conforme au présent code.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
        en: {
            art: 'Section 534',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Major Defect',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the owner of the road vehicle; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are the operator of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The mechanical inspection indicates a major defect; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The vehicle was back in operation without it is proved, to the satisfaction of the SAAQ or a person authorized to perform the inspection of vehicles for the Société, that the vehicle conforms to this Code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
                {'\n\n'}
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 534 Highway safety Code.</Bold>
                    {'\n\n'}
                    Where a certificate of mechanical inspection indicates that a road vehicle has a major defect, no person may put the vehicle back into operation unless it is proved, to the satisfaction of the Société or a person authorized to perform the inspection of vehicles for the Société, that the vehicle conforms to this Code.
                </Text>
            ),
            image: '212.png',
            analyse: '',
        },
    },
    '636': {
        fr: {
            art: 'Art: 636',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobilisation du véhicule',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Un agent de la paix, identifiable à première vue comme tel, exige l’immobilisation du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’immobilisez pas le véhicule sans délai. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                {'\n\n'}
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 636 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Un agent de la paix, identifiable à première vue comme tel, peut, dans le cadre des fonctions qu’il exerce en vertu du présent code, des ententes conclues en vertu de l’Art: 519.65 et de la Loi concernant les propriétaires, les exploitants et les conducteurs de véhicules lourds (chapitre P-30.3), exiger que le conducteur d’un véhicule routier immobilise son véhicule. Le conducteur doit se conformer sans délai à cette exigence.
                </Text>
            ),
            image: '636+.png',
            analyse: '',
        },
        en: {
            art: 'Section 636',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stopping your vehicle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the road vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> A peace officer recognizable as such at first sight requires the road vehicle to stop; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You do not stop the road vehicle without delay. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
                {'\n\n'}
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 636 Highway safety Code.</Bold>
                    {'\n\n'}
                    Every peace officer recognizable as such at first sight may, in the performance of his duties under this Code, agreements entered into under section 519.65 and the Act respecting owners, operators and drivers of heavy vehicles (chapter P-30.3), require the driver of a road vehicle to stop his vehicle. The driver must comply with this requirement without delay.
                </Text>
            ),
            image: '636+.png',
            analyse: '',
        },
    },
    '638.1': {
        fr: {
            art: 'Art: 638.1',
            type: 'Circulation',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Entrave',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Un policier agit dans l’exercice de ses fonctions; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous entravez le travail du policier. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                {'\n\n'}
                    Nous sommes là pour vous aider.
                {'\n\n'}
                    Consultez un avocat gratuitement pour connaître vos options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 638.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Quiconque entrave, de quelque manière que ce soit, l’action d’un agent de la paix agissant en vertu du présent code, de la Loi concernant les propriétaires, les exploitants et les conducteurs de véhicules lourds (chapitre P-30.3) ou d’une loi dont la Société, conformément aux dispositions de l’Art: 519.64, est chargée de l’application, notamment en le trompant par réticence ou par de fausses déclarations, en refusant de lui fournir des renseignements ou des documents qu’il a le pouvoir d’exiger ou d’examiner, en cachant ou en détruisant un document ou un bien concerné par une inspection, commet une infraction et est passible d’une amende de 300 $ à 600 $ ou, si l’infraction est commise dans le cadre d’une intervention relative à un véhicule lourd, de 700 $ à 2 100 $.
                </Text>
            ),
            image: '636+.png',
            analyse: '',
        },
        en: {
            art: 'Section 638.1',
            type: 'Circulation',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Hinder a police officer',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> A peace officer is in the performance of duties. </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color>You hinder the work of the police officer. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point.
                {'\n\n'}
                    We will be glad to help you.
                {'\n\n'}
                    Consult a lawyer for free to see your options.
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 638.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    Every person who in any way hinders a peace officer in the performance of duties under this Code, the Act respecting owners, operators and drivers of heavy vehicles (chapter P-30.3) or an Act the Société is responsible for enforcing in accordance with section 519.64, in particular by misleading the peace officer by concealment or false declarations, refusing to provide the peace officer with any information or document the peace officer is entitled to require or examine, or concealing or destroying any document or property relevant to an inspection is guilty of an offence and is liable to a fine of $300 to $600 or, if the offence is committed during an intervention involving a heavy vehicle, $700 to $2,100.
                </Text>
            ),
            image: '636+.png',
            analyse: '',
        },
    },
    '381': {
        fr: {
            art: 'Art: 381',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Verrouiller les portières',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été laissé sans surveillance; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les portières du véhicule n’étaient pas verrouillées. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}La clé n’avait pas été enlevée du contact. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 381 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut laisser sans surveillance un véhicule routier dont il a la garde sans avoir préalablement enlevé la clef de contact et verrouillé les portières.
                </Text>
            ),
            image: '381.png',
            analyse: '',
        },
        en: {
            art: 'Section 381',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Locking the doors',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle has been left unattended; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The doors of that vehicle were not locked. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The ignition key was not removed. </Bold>
                </Text>
            ),
            point: (
            <Text>
                    No demerit point.
                </Text>
            ),
            loi: (
            <Text>
                    <Bold>S. 381 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may leave unattended a road vehicle that is in his custody without previously removing the ignition key and locking the doors.
                </Text>
            ),
            image: '381.png',
            analyse: '',
        },
    },
    '382': {
        fr: {
            art: 'Art: 382',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule de manière à gêner la circulation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule rendait une signalisation inefficace. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule gênait la circulation. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule gênait l'entretien du chemin. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule entravait l’accès d’une propriété. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• L' immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait vous obliger à immobiliser votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 382 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité, nul ne peut immobiliser un véhicule routier de manière à rendre une signalisation inefficace, à gêner la circulation, l’exécution de travaux ou l’entretien du chemin ou à entraver l’accès à une propriété.
            </Text>
            ),
            image: '382+.png',
            analyse: '',
        },
        en: {
            art: 'Section 382',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'To immobilize a vehicle in such a manner that it is obstructing traffic',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was immobilized; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle blocked a sign or signal. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle obstructed traffic. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle hindered the work or maintenance of highways. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle prevented access to any property. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The immobilization of the vehicle was made under necessity circumstances. In other words, an emergency could force you to stop your vehicle in a forbidden place. </Bold>
                </Text>
            ),
            point: (
            <Text>
                    No demerit point
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 382 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in case of necessity, no person may stop a road vehicle in such a manner that it will block a sign or signal, obstruct traffic, hinder the performance of work or the maintenance of highways or prevent access to any property.
            </Text>
            ),
            image: '382+.png',
            analyse: '',
        },
    },
    '383 al. 1': {
        fr: {
            art: 'Art: 383 al. 1',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Stationner un véhicule à plus de 30 cm de la bordure',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouve à plus de 30cm de la bordure la plus rapprochée de la chaussée. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule n’est pas stationné dans le même sens que la circulation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous avez reçu une indication contraire par une personne responsable de l'entretien du chemin. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 383 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout véhicule routier doit être stationné à au plus 30 centimètres de la bordure la plus rapprochée de la chaussée et dans le même sens que la circulation, sauf indication contraire de la personne responsable de l’entretien de ce chemin.
                    {'\n\n'}
                    Si le véhicule est stationné dans une pente, le frein d’urgence de ce véhicule doit être appliqué et ses roues avant doivent être orientées de façon à ce que tout déplacement de l’avant du véhicule se fasse vers la bordure la plus rapprochée de la chaussée.
                    {'\n\n'}
                    Cependant, une motocyclette et un cyclomoteur peuvent être stationnés en oblique avec la bordure la plus rapprochée de la chaussée, dans le même sens que la circulation, de façon à ce que tout déplacement du véhicule se fasse vers la bordure la plus rapprochée.
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 383 (1)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Parking a vehicle more than 30 cm from the near edge of the roadway',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked more than 30cm from the near edge of the roadway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was not facing the same way as traffic. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You received contrary indication from the person in charge of the roadway maintenance. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 383 Highway safety Code.</Bold>
                    {'\n\n'}
                    Unless otherwise indicated by the person responsible for the maintenance of the highway, a road vehicle must be parked not more than 30 centimetres from the near edge of the roadway and facing the same way as the traffic.
                    {'\n\n'}
                    Where a road vehicle is parked on a slope, the emergency brake must be applied and the front wheels must be turned so that if such vehicle moves ahead of its own momentum, it will do so toward the near edge of the roadway.
                    {'\n\n'}
                    Notwithstanding the foregoing, a motorcycle or moped may be angle-parked against the near edge of the roadway, in the same direction as the traffic, so that if the vehicle moves of its own momentum it will do so toward the near edge of the roadway.
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
    },
    '383 al. 2': {
        fr: {
            art: 'Art: 383 al. 2',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Orienter les roues d’un véhicule dans une pente',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>quatre conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouve dans une pente; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> Les roues avant n’étaient pas orientées de façon à ce que tout déplacement de l’avant du véhicule se fasse vers la bordure la plus rapprochée de la chaussée. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le frein d’urgence n’était pas appliqué. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Une motocyclette ou un cyclomoteur peuvent être stationnés en oblique avec la bordure la plus rapprochée de la chaussée, dans le même sens que la circulation, de façon à ce que tout déplacement du véhicule se fasse vers la bordure la plus rapprochée. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 383 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Tout véhicule routier doit être stationné à au plus 30 centimètres de la bordure la plus rapprochée de la chaussée et dans le même sens que la circulation, sauf indication contraire de la personne responsable de l’entretien de ce chemin.
                    {'\n\n'}
                    Si le véhicule est stationné dans une pente, le frein d’urgence de ce véhicule doit être appliqué et ses roues avant doivent être orientées de façon à ce que tout déplacement de l’avant du véhicule se fasse vers la bordure la plus rapprochée de la chaussée.
                    {'\n\n'}
                    Cependant, une motocyclette et un cyclomoteur peuvent être stationnés en oblique avec la bordure la plus rapprochée de la chaussée, dans le même sens que la circulation, de façon à ce que tout déplacement du véhicule se fasse vers la bordure la plus rapprochée.
            </Text>
            ),
            image: '383-2+.png',
            analyse: '',
        },
        en: {
            art: 'Section 383 (2)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Turning the wheels of a car parked on a slope',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>four conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle is on a slope; </Bold>
                    {'\n\n'}
                    <Bold><Color>4-</Color> The front wheels were not turned so that such vehicle moves toward the near edge of the roadway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The emergency brake was not applied. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Motorcycle or a moped may be angle-parked against the near edge of the roadway, in the same direction as the traffic, so that if the vehicle moves of its own momentum it will do so toward the near edge of the roadway. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 383 Highway safety Code.</Bold>
                    {'\n\n'}
                    Unless otherwise indicated by the person responsible for the maintenance of the highway, a road vehicle must be parked not more than 30 centimetres from the near edge of the roadway and facing the same way as the traffic.
                    {'\n\n'}
                    Where a road vehicle is parked on a slope, the emergency brake must be applied and the front wheels must be turned so that if such vehicle moves ahead of its own momentum, it will do so toward the near edge of the roadway.
                    {'\n\n'}
                    Notwithstanding the foregoing, a motorcycle or moped may be angle-parked against the near edge of the roadway, in the same direction as the traffic, so that if the vehicle moves of its own momentum it will do so toward the near edge of the roadway.
            </Text>
            ),
            image: '383-2+.png',
            analyse: '',
        },
    },
    '386 par. 1': {
        fr: {
            art: 'Art: 386 par. 1',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule sur un trottoir ou un terre-plein',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était sur le trottoir.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était sur un terre-plein. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (1)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle on a sidewalk or the median strip of a roadway',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was on the sidewalk.  </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was on the median strip of a roadway. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-1+.png',
            analyse: '',
        },
    },
    '386 par. 2': {
        fr: {
            art: 'Art: 386 par. 1',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: ' Immobiliser un véhicule à moins de 3 mètres d’une borne fontaine',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait à moins de 3 mètres d’une borne d’incendie.  </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Avant la modification du Code de la sécurité routière du 18 mai 2018, la distance prévue était de 5 mètres d’une borne fontaine. </Bold>
                    {'\n\n'}
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-2++.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (2)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle less than 3 meters from a fire hydrant',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was less than 3 meters from a fire hydrant.  </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Before the Highway safety Code modification on May 18th 2018, the prescribed distance to park near a fire hydrant was 5 metres.</Bold>
                    {'\n\n'}
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-2++.png',
            analyse: '',
        },
    },
    '386 par. 4': {
        fr: {
            art: 'Art: 386 par. 4',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule à moins de 5 mètres d’une intersection ou d’un passage pour piéton',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à moins de 5 mètres d’une intersection.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était à moins de 5 mètres d’un passage pour piéton ou pour cycliste clairement identifié. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était à moins de 5 mètres d’un passage à niveau. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-4++.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (4)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle less than 3 meters from a fire hydrant',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was less than 5 meters from an intersection.  </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was less than 5 meters from a pedestrian crosswalk or a bicycle crossing identified by means of proper signs. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was less than 5 meters from a level crossing. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-4++.png',
            analyse: '',
        },
    },
    '386 par. 4.1': {
        fr: {
            art: 'Art: 386 par. 4.1',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule dans un carrefour giratoire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait dans un carrefour giratoire.  </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-4.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (4.1)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle in a traffic circle',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a traffic circle.  </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-4.1.png',
            analyse: '',
        },
    },
    '386 par. 5': {
        fr: {
            art: 'Art: 386 par. 5',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule dans une zone de débarcadère',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un zone de débarcadère, dûment identifiée comme telle.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiée comme telle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-5+.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (5)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle in a loading and unloading zone',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a loading and unloading zone, clearly identified as such. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a zone reserved exclusively for road vehicles assigned to public transportation, clearly identified as such. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-5+.png',
            analyse: '',
        },
    },
    '386 par. 7.1': {
        fr: {
            art: 'Art: 386 par. 7.1',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule dans une voie réservée',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans une voie de circulation réservée exclusivement à certains véhicules.  </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-7.1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (7.1)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle in a reserved lane',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a traffic lane reserved exclusively for certain vehicles. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-7.1+.png',
            analyse: '',
        },
    },
    '386 par. 8': {
        fr: {
            art: 'Art: 386 par. 8',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule devant une rampe de trottoir spécialement aménagée pour les personnes handicapées',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était devant une rampe de trottoir aménagée spécialement pour les personnes handicapées.  </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-8+.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (8)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle in front of a sidewalk ramp specially built for handicapped persons',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in front of a sidewalk ramp specially built for handicapped persons. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-8+.png',
            analyse: '',
        },
    },
    '386 par. 9': {
        fr: {
            art: 'Art: 386 par. 9',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule dans un endroit où le stationnement est interdit par la signalisation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où le stationnement est interdit par une pancarte. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre, dans la mesure où cette manoeuvre peut être effectuée sans danger. </Bold>
                    {'\n'}
                    <Small>Référence: art. 387 C.s.r.</Small>
                    {'\n\n'}
                    <Bold>• L'immobilisation du véhicule constituait un cas de nécessité. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 386 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité ou lorsqu’une autre disposition du présent code le permet, nul ne peut immobiliser un véhicule routier aux endroits suivants:
                    {'\n\n'}
                    1°  sur un trottoir et un terre-plein;
                    {'\n\n'}
                    2°  à moins de 3 mètres d’une borne d’incendie;
                    {'\n\n'}
                    3°  à moins de 5 mètres d’un poste de police ou de pompiers ou à moins de 8 mètres de ce bâtiment lorsque l’immobilisation se fait du côté qui lui est opposé;
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons ou pour cyclistes identifié par une signalisation appropriée et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
                    {'\n\n'}
                    4.1° dans un carrefour giratoire;
                    {'\n\n'}
                    5°  dans une zone de débarcadère et dans une zone réservée exclusivement aux véhicules routiers affectés au transport public de personnes, dûment identifiées comme telles;
                    {'\n\n'}
                    6°  sur une voie élevée, sur un pont, sur un viaduc et dans un tunnel;
                    {'\n\n'}
                    7°  sur un chemin à accès limité, sur une voie d’entrée ou de sortie d’un tel chemin et sur une voie de raccordement;
                    {'\n\n'}
                    7.1°  sur une voie de circulation réservée exclusivement à certains véhicules;
                    {'\n\n'}
                    8°  devant une rampe de trottoir aménagée spécialement pour les personnes handicapées;
                    {'\n\n'}
                    9°  dans un endroit où le stationnement est interdit par une signalisation installée conformément au présent code.
                    {'\n\n'}
                    <Bold>Art. 387 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues à l’Art: 386 et dans la mesure où cette manoeuvre peut être effectuée sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut immobiliser son véhicule pour permettre à cette personne d’y monter ou d’en descendre.
            </Text>
            ),
            image: '386-9+.png',
            analyse: '',
        },
        en: {
            art: 'Section 386 (9)',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle at any place where parking is prohibited',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where parking is prohibited by a sign. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety. </Bold>
                    {'\n'}
                    <Small>Reference: s. 387 H.s.c.</Small>
                    {'\n\n'}
                    <Bold>• The infraction is not committed in a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 386 Highway safety Code.</Bold>
                    {'\n\n'}
                    Except in cases of necessity or where another provision of this Code permits it, no person may stop a road vehicle:
                    {'\n\n'}
                    (1)  on a sidewalk or the median strip of a roadway;
                    {'\n\n'}
                    (2)  less than 3 metres from a fire hydrant;
                    {'\n\n'}
                    (3)  less than 5 metres from a police or fire station, or less than 8 metres from such a building and on the opposite side of the street;
                    {'\n\n'}
                    (4)  at an intersection, on a pedestrian crosswalk or bicycle crossing identified by means of proper signs or signals and on a level crossing or less than 5 metres therefrom;
                    {'\n\n'}
                    (4.1) in a traffic circle;
                    {'\n\n'}
                    (5)  in a loading and unloading zone or a zone reserved exclusively for road vehicles assigned to public transportation, and clearly identified as such;
                    {'\n\n'}
                    (6)  on an elevated lane, a bridge or a viaduct, or in a tunnel;
                    {'\n\n'}
                    (7)  on a limited access highway, at an entrance to or exit from such a highway or on an access ramp;
                    {'\n\n'}
                    (7.1)  in a traffic lane reserved exclusively for certain vehicles;
                    {'\n\n'}
                    (8)  in front of a sidewalk ramp specially built for handicapped persons;
                    {'\n\n'}
                    (9)  at any place where parking is prohibited by a sign erected in accordance with this Code.
                    {'\n\n'}s
                    <Bold>S. 387 Highway safety Code:</Bold>
                    {'\n\n'}
                    Notwithstanding the prohibitions provided in section 386, the driver of a road vehicle used for the transportation of a handicapped person may stop his vehicle to take on or discharge that person, if it can be done in safety.
            </Text>
            ),
            image: '386-9+.png',
            analyse: '',
        },
    },
    '388': {
        fr: {
            art: 'Art: 388',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule dans un espace de stationnement réservé à l’usage exclusif des personnes handicapées',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où le stationnement est réservé à l’usage exclusif des personnes handicapés. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Votre véhicule était muni d’une vignette autorisant le stationnement handicapé. Cette vignette doit porter le nom du conducteur, d’un passager du véhicule ou de l’établissement pour lequel il agit. </Bold>
                    {'\n'}
                    <Small>Référence: art. 388 al. 1 (1) C.s.r.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 388 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Nul ne peut immobiliser un véhicule routier dans un espace de stationnement réservé à l’usage exclusif des personnes handicapées et identifié au moyen d’une signalisation conforme aux normes établies par le ministre des Transports, à moins que ce véhicule ne soit muni:
                    {'\n\n'}
                    1°  d’une vignette d’identification délivrée conformément à l’Art: 11 au nom du conducteur, d’une personne qui l’accompagne ou de l’établissement pour lequel il agit et placée à l'endroit déterminé par un règlement du gouvernement;
                    {'\n\n'}
                    2°  (paragraphe abrogé);
                    {'\n\n'}
                    3°  d’une vignette, d’une plaque ou d’un permis affichant le symbole international de fauteuil roulant délivré par une autre autorité administrative au Canada ou par un pays membre ou associé de la Conférence européenne des ministres des transports.
                    {'\n\n'}
                    Dans le cas où le véhicule est muni d’une vignette délivrée conformément au paragraphe 1° du premier alinéa, le conducteur ou son passager doit, sur demande d’un agent de la paix, remettre pour examen le certificat de la Société attestant la délivrance de la vignette.
                    {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler.
            </Text>
            ),
            image: '388.png',
            analyse: '',
        },
        en: {
            art: 'Section 388',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a vehicle at any place where parking is prohibited',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where parking is reserved for the exclusive use of handicapped persons.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Your vehicle was equipped with a an identification sticker allowing disabled parking, in the name of the driver, of a person accompanying the driver, or of the institution on whose behalf the person is acting. </Bold>
                    {'\n'}
                    <Small>Reference: s. 388 (1) 1° H.s.c.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 388 Highway safety Code.</Bold>
                    {'\n\n'}
                    No person may stop a road vehicle in a parking space reserved for the exclusive use of handicapped persons and identified by signs or signals in compliance with the standards prescribed by the Minister of Transport, unless the vehicle bears:
                    {'\n\n'}
                    (1)  an identification sticker issued in accordance with section 11 in the name of the driver, of a person accompanying the driver, or of the institution on whose behalf the person is acting and positioned in the place determined by government regulation;
                    {'\n\n'}
                    (2)  (subparagraph repealed);
                    {'\n\n'}
                    (3)  a sticker, plate or permit displaying the international wheelchair symbol, issued by another administrative authority in Canada or a member country or associate member country of the European Conference of Ministers of Transport.
                    {'\n\n'}
                    Where the vehicle bears a sticker issued pursuant to subparagraph 1 of the first paragraph, the driver or passenger must, on request, hand over to a peace officer, for examination, the certificate of the Société attesting the issue of the sticker.
                    {'\n\n'}
                    In addition to public highways, this section applies on private roads open to public vehicular traffic, as well as on land occupied by shopping centres and other land where public traffic is allowed.
            </Text>
            ),
            image: '388.png',
            analyse: '',
        },
    },
    '388.1': {
        fr: {
            art: 'Art: 388.1',
            type: 'Stationnement',
            source: 'Code de la sécurité routière, C-24.2',
            infraction: 'Immobiliser un véhicule dans un espace de stationnement réservé à la recharge électrique',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où le stationnement est réservé à la recharge des véhicules électriques. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Les véhicules routiers électriques et les véhicules routiers hybrides rechargeables peuvent être immobilisés dans un espace réservé à la recharge en énergie. Ils ne peuvent toutefois y être immobilisés que s’ils sont branchés à la borne de recharge.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 388.1 Code de la sécurité routière:</Bold>
                    {'\n\n'}
                    Seuls les véhicules routiers électriques et les véhicules routiers hybrides rechargeables peuvent être immobilisés dans un espace réservé à la recharge en énergie. Ils ne peuvent toutefois y être immobilisés que s’ils sont branchés à la borne de recharge. 
                    {'\n\n'}
                    En outre des chemins publics, le présent Art: s’applique sur les chemins privés ouverts à la circulation publique des véhicules routiers ainsi que sur les terrains de centres commerciaux et autres terrains où le public est autorisé à circuler.
            </Text>
            ),
            image: '388.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 388.1',
            type: 'Parking',
            source: 'Highway safety Code, C-24.2',
            infraction: 'Stop a road vehicle in a parking space reserved for recharging electric vehicles',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where parking is reserved for recharging electric vehicles. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Electric road vehicles and plug-in hybrid road vehicles may stop in a space reserved for recharging electric vehicles. However, they may stop in such a space only when they are plugged into a charging station. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 388.1 Highway safety Code.</Bold>
                    {'\n\n'}
                    Only electric road vehicles and plug-in hybrid road vehicles may stop in a space reserved for recharging electric vehicles. However, they may stop in such a space only when they are plugged into a charging station.
                    {'\n\n'}
                    In addition to public highways, this section applies on private roads open to public vehicular traffic and on land occupied by shopping centres or other land where public traffic is allowed.
            </Text>
            ),
            image: '388.1.png',
            analyse: '',
        },
    }
}

const RRVM_C41 = {
    '12': {
        fr: {
            art: 'Art: 12',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Circuler à contre sens',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule circule dans le sens contraire de la circulation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous avez circulé dans le sens contraire de la circulation en marche arrière pour effectuer une manoeuvre de stationnement conformément au Code.  </Bold>
                    {'\n\n'}
                    <Bold>• Vous avez circulé dans le sens contraire de la circulation pour effectuer un dépassement conformément au Code.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 12 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit au conducteur d'un véhicule routier de circuler dans le sens contraire de la circulation sauf pour effectuer, conformément au Code, un dépassement ou une marche arrière. 
            </Text>
            ),
            image: 'rm-12.png',
            analyse: '',
        },
        en: {
            art: 'Section 12',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Opposite direction of traffic',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> The vehicle is in the opposite direction of traffic. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• You drove in reverse to execute a legal parking maneuver. </Bold>
                    {'\n\n'}
                    <Bold>• You drove in the opposite direction of traffic in order to legally pass another vehicle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 12 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No person may drive a road vehicle in the opposite direction of traffic unless it is to pass or back up in accordance with the Code.
            </Text>
            ),
            image: 'rm-12.png',
            analyse: '',
        },
    },
    '14': {
        fr: {
            art: 'Art: 14',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Circuler à contre sens',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez dans un ruelle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> La seule fin de cette manoeuvre est de passer d’une rue à l’autre. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 14 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Le conducteur d'un véhicule routier ne peut circuler dans une ruelle à seule fin de passer d'une rue à une autre. 
            </Text>
            ),
            image: 'rm-14+.png',
            analyse: '',
        },
        en: {
            art: 'Section 14',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Alley',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez dans un ruelle; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> La seule fin de cette manoeuvre est de passer d’une rue à l’autre. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 14 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No person may drive a road vehicle on a lane for the sole purpose of going from one street to another.
            </Text>
            ),
            image: 'rm-14+.png',
            analyse: '',
        },
    },
    '15': {
        fr: {
            art: 'Art: 15',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Circuler sur le trottoir',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez sur le trottoir. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous avez circulé sur le trottoir, pour le traverser en passant par le bateau. Le bateau est une dépression du trottoir devant l'entrée d'une propriété ou d'une ruelle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 15 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Le conducteur d'un véhicule routier ne peut circuler sur un trottoir sauf pour le traverser par le bateau. 
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 15',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Driving on the sidewalk',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You drive on the sidewalk. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• You drove on the sidewalk to cross it by the curbcut. The curbcut is a depression in the sidewalk in front of the entrance to a property or a lane. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 15 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No person may drive a road vehicle on a sidewalk unless it is to cross it by the curbcut.
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
    },
    '22': {
        fr: {
            art: 'Art: 22',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Voie réservée aux autobus',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Vous circulez dans une voie réservée aux autobus. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous circuliez dans la voie réservée aux autobus sur une distance de moins de 30 mètres afin d’entrer ou de sortir d’un terrain privé. Cette exception ne s’applique pas sur le boulevard Pie-IX. </Bold>
                    {'\n'}
                    <Small>Référence: art. 22 al 1 (1) R.R.V.M. C-4.1 </Small>
                    {'\n\n'}
                    <Bold>• Vous étiez dans la voie réservée aux autobus pour tourner à droite à une intersection, en passant après la ligne de démarcation simple, diagonale et discontinue. Cette exception ne s’applique pas sur le boulevard Pix-IX. </Bold>
                    {'\n'}
                    <Small>Référence: art. 22 al 1 (2) R.R.V.M. C-4.1. </Small>
                    {'\n\n'}
                    <Bold>• Cet Art: n'a pas pour objet de limiter la circulation des taxis dans une voie qui leur est également réservée. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 22 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Sur une voie réservée aux autobus, il est interdit de circuler au conducteur de tout autre véhicule sauf :  
                    {'\n\n'}
                    (1) sur une distance maximale de 30 m et uniquement pour accéder à un terrain privé ou en partir; 
                    {'\n\n'}
                    (2) pour effectuer un virage à droite à une intersection, à l'endroit indiqué sur la chaussée par une ligne simple, diagonale et discontinue.  
                    {'\n\n'}
                    Le premier alinéa n'a pas pour objet de limiter la circulation des taxis dans une voie qui leur est également réservée. 
                    {'\n\n'}
                    <Bold>Art. 23 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Sur la voie réservée du boulevard Pie-IX, les exceptions prévues aux paragraphes 1 et 2 de l'Art: 22 ne s'appliquent pas.   
            </Text>
            ),
            image: 'rm-22.png',
            analyse: '',
        },
        en: {
            art: 'Section 22',
            type: 'Circulation',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Bus lane',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> You drive on a lane reserved for buses. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• You drove in the reserved lane over a maximum distance of 30 meters to reach or leave a private lot. This exception does not apply on Pie-IX Boulevard. </Bold>
                    {'\n'}
                    <Small>Reference: s. 22 (1) R.R.V.M. C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• You drove in the reserved lane to turn right at an intersection, at the place marked off by a diagonal and discontinuous single line on the roadway. This exception does not apply on Pix-IX Boulevard. </Bold>
                    {'\n'}
                    <Small>Reference: s. 22 (2) R.R.V.M. C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• This section is not intended to limit taxi traffic on lanes that are also reserved for taxis. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 22 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    On a lane reserved for buses, no person may drive any other type of vehicle except: 
                    {'\n\n'}
                    (1) over a maximum distance of 30 m, but only to reach or leave a private lot;
                    {'\n\n'}
                    (2) to turn right at an intersection, at the place marked off by a diagonal and discontinuous single line on the roadway. 
                    {'\n\n'}
                    The first paragraph is not intended to limit taxi traffic on lanes that are also reserved for taxis.
                    {'\n\n'}
                    <Bold>S. 23 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    The exceptions provided for in paragraphs 1 and 2 of Art: 22 do not apply to the reserved lane of Pie-IX Boulevard.
            </Text>
            ),
            image: 'rm-22.png',
            analyse: '',
        },
    },
    '26': {
        fr: {
            art: 'Art: 26',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Immobilisation interdite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où l’immobilisation est interdite par un panneau. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un taxi peut immobiliser son véhicule sur une voie réservée aux taxis, le temps nécessaire pour permettre aux passagers d’y monter ou en descendre. </Bold>
                    {'\n'}
                    <Small>Référence: art. 28 R.R.V.M. C-4.1 </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 26 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Nul ne peut, sur la chaussée, immobiliser un véhicule routier là où la signalisation interdit l'arrêt.
                    {'\n\n'}
                    <Bold>Art. 28 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Malgré l'Art: 26, le conducteur d'un taxi peut immobiliser son véhicule sur une voie réservée aux taxis, le temps nécessaire pour permettre aux passagers d'y monter ou d'en descendre. Le premier alinéa n'autorise pas l'immobilisation d'un taxi contrairement au paragraphe 5 de l'Art: 386 du Code.     
            </Text>
            ),
            image: 'rm-26+.png',
            analyse: '',
        },
        en: {
            art: 'Section 26',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Prohibited stopping',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where stopping is prohibited by a sign. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a taxi may stop his vehicle on a lane reserved for taxis to allow passengers to get on or get off. </Bold>
                    {'\n'}
                    <Small>Reference: s. 28 R.R.V.M. C-4.1.</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 26 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No person may stop a road vehicle on a roadway where stopping is prohibited by a sign. 
                    {'\n\n'}
                    <Bold>S. 28 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    Despite Art: 26, the driver of a taxi may stop his vehicle on a lane reserved for taxis to allow passengers to get on or get off.
            </Text>
            ),
            image: 'rm-26+.png',
            analyse: '',
        },
    },
    '29': {
        fr: {
            art: 'Art: 29',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Gêner la circulation',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du véhicule routier;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule est immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule gêne la circulation alors que plusieurs autres véhicules le suivent sur la même voie de circulation.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule gêne la circulation alors qu’il est immobilisé le long d’un véhicule stationné.  </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule gêne la circulation alors qu’il est immobilisé sur un chemin public en empiétant dans l’entrée ou la sortie d’une ruelle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule a dû être immobilisé pour exécuter une manoeuvre de stationnement conforme au Code. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 29 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Gêne la circulation le conducteur d'un véhicule routier qui : 
                    {'\n\n'}
                    (1) sauf dans l'exécution de manoeuvres de stationnement conformes au Code, immobilise son véhicule sur un chemin public :
                    {'\n'}
                    (a) alors qu'un ou plusieurs véhicules le suivent sur la même voie de circulation;
                    {'\n'}
                    ou 
                    {'\n'}
                    (b) le long d'un véhicule stationné;
                    {'\n\n'}
                    (2) immobilise son véhicule sur un chemin public en empiétant dans l'entrée ou la sortie d'une ruelle.
                    {'\n\n'}
                    Le premier alinéa n'a pas pour objet de limiter l'application de l'Art: 382 du Code aux cas décrits aux paragraphes 1 et 2 de cet alinéa.
            </Text>
            ),
            image: 'rm-29+.png',
            analyse: '',
        },
        en: {
            art: 'Section 29',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Obstructing traffic',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the vehicle;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle obstructs traffic as one or more vehicles are following him on the same public thoroughfare. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle obstructs traffic while it is immobilized  along a parked vehicle. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle obstructs traffic on a public thoroughfare by encroaching on a lane entrance or exit. </Bold> 
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was stopped to carry out legal parking maneuvers. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 29 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    Any driver of a road vehicle who stops as follows obstructs traffic:  
                    {'\n\n'}
                    (1) except to carry out parking maneuvers in accordance with the Code, stops his vehicle on a public thoroughfare: 
                    {'\n'}
                    (a) when one or more vehicles are following him on the same public thoroughfare; 
                    {'\n'}
                    or 
                    {'\n'}
                    (b) along a parked vehicle;
                    {'\n\n'}
                    (2) stops his vehicle on a public thoroughfare by encroaching on a lane entrance or exit. 
                    {'\n\n'}
                    The first paragraph is not intended to limit the application of section 382 of the Code to the cases referred to in paragraph 1 and 2 of that paragraph.
            </Text>
            ),
            image: 'rm-29+.png',
            analyse: '',
        },
    },
    '30 par. 1': {
        fr: {
            art: 'Art: 30 par. 1',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où une pancarte l’interdit. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 60 minutes pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que: </Bold>
                    {'\n\n'}
                    <Bold>(1) Ce véhicule est un camion ou un véhicule commercial. Un véhicule commercial est un véhicule automobile qui appartient à une personne morale (Plaque F). </Bold>
                    {'\n\n'}
                    <Bold>(2) Ces opérations se fassent de façon continue. </Bold>
                    {'\n\n'}
                    <Bold>Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (1) a RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 60 minutes s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis. Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (1) c RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un véhicule routier de stationner pour une période d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial ou un taxi. Cette exception exclue les zones de travaux, d’opérations d'entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (2) et (3) RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un corbillard transportant un cercueil ou au véhicule affecté au transport des cendres d’un défunt de stationner près d’un salon funéraire ou de l’établissement religieux pendant que la cérémonie est en cours.</Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al. 3 RRVM C-4.1.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 30 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) en un endroit et aux heures où la signalisation interdit le stationnement; 
                    {'\n\n'}
                    (2) en un endroit où la signalisation interdit le stationnement excepté à certaines fins, à moins que ce ne soit effectivement à une telle fin; 
                    {'\n\n'}
                    (3) en un endroit et aux heures où la signalisation indique que le stationnement y est réservé à d'autres véhicules en vertu des paragraphes 5 et 6 de l'Art: 3 ou en vertu de la section II; 
                    {'\n\n'}
                    (4) dans une ruelle, sauf lorsque la signalisation le permet expressément; 
                    {'\n\n'}
                    (5) le long d'un terre-plein au centre d'une chaussée, sauf lorsque la signalisation le permet expressément;
                    {'\n\n'}
                    (6) hors rue, en un endroit qui n'est pas accessible par un bateau;  
                    {'\n\n'}
                    (7) dans un parc, ailleurs que dans un endroit où la signalisation indique que cet endroit est destiné au stationnement; 
                    {'\n\n'}
                    (8) dans une place de stationnement dont l'accès est interdit par une barrière, un système de feux orange, un panneau amovible ou une inscription sur une housse ou un plastron fixés sur un parcomètre;
                    {'\n\n'}
                    (9) en un endroit où l'immobilisation est interdite en vertu du Code ou du présent règlement. 
                    {'\n\n'}
                    <Bold>Art. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30 et malgré une signalisation indiquant que le stationnement est réservé aux résidants, il est permis au conducteur d'un véhicule routier de stationner pour une période : 
                    {'\n\n'}
                    (1) d'au plus 60 minutes :
                    {'\n\n'}
                    (a) pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un camion ou un véhicule commercial;  
                    {'\n'}
                    (ii) ces opérations se fassent de façon continue; 
                    {'\n\n'}
                    (b) pendant qu'il exécute des travaux sur la propriété riveraine, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un véhicule-outil, un camion ou un véhicule commercial et qu'il soit nécessaire à l'exécution de ces travaux;  
                    {'\n'}
                    (ii) ces travaux se fassent de façon continue; 
                    {'\n\n'}
                    (c) s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis;
                    {'\n\n'}
                    (2) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial; 
                    {'\n\n'}
                    (3) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, s'il s'agit d'un taxi. 
                    {'\n\n'}
                    Les exceptions prévues au premier alinéa ne s'appliquent pas à l'encontre d'une signalisation interdisant le stationnement :  
                    {'\n\n'}
                    1- à proximité d'une aire de travaux ou aux fins d'événements spéciaux ou d'opérations d'entretien routier;
                    {'\n\n'}
                    2-  près d'une école, d'un terrain de jeu ou d'un parc. 
                    {'\n\n'}
                    Le conducteur d'un véhicule routier peut stationner sans acquitter les droits requis en vertu des articles 46 et 55, durant 30 minutes s'il respecte les conditions prévues au sous-paragraphe (a) du paragraphe 1 du premier alinéa, et durant 15 minutes s'il respecte les conditions prévues aux paragraphes 2 ou 3 de cet alinéa.
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30, il est permis au conducteur d'un corbillard transportant un cercueil ou au conducteur d’un véhicule affecté au transport des cendres d’un défunt de stationner près du salon funéraire ou de l'établissement religieux pendant que la cérémonie funèbre est en cours.
                    {'\n\n'}
                    <Bold>Art. 2 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    «véhicule commercial»: un véhicule automobile qui appartient à une personne morale, autre qu’un camion, un autobus, un minibus ou un véhicule visé aux paragraphes 2 à 11 du premier alinéa de l’Art: 102;
                    {'\n\n'}
                    <Bold>Art. 102 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    À l’exception d’un cyclomoteur et d’une motocyclette, la plaque d’immatriculation des véhicules routiers suivants porte le préfixe «F» ou «FZ»:
                    {'\n\n'}
                    1°  un véhicule commercial; 
                    {'\n\n'}
                    2°  un véhicule affecté au transport d’écoliers; 
                    {'\n\n'}
                    3°  un véhicule routier appartenant à une école de conduite ou à un établissement qui détient un permis pour l’enseignement de la conduite de camions lourds délivré en vertu de l’Art: 10 de la Loi sur l’enseignement privé (chapitre E-9.1); 
                    {'\n\n'}
                    4°  une souffleuse à neige; 
                    {'\n\n'}
                    5°  un véhicule de ferme dont la masse nette est de 3 000 kg ou moins; 
                    {'\n\n'}
                    6°  une habitation motorisée appartenant à une personne morale de même que celle qui a une masse nette de plus de 3 000 kg et qui appartient à une personne physique qui l’utilise principalement à des fins personnelles; 
                    {'\n\n'}
                    7°  un véhicule-outil et un véhicule-outil d’hiver; 
                    {'\n\n'}
                    8°  une dépanneuse d’une masse nette de 3 000 kg ou moins; 
                    {'\n\n'}
                    9°  une dépanneuse d’une masse nette de plus de 3 000 kg, utilisée exclusivement pour le dépannage ou le déplacement d’au plus 2 véhicules routiers; 
                    {'\n\n'}
                    10°  une ambulance et un corbillard; 
                    {'\n\n'}
                    11°  un véhicule de transport d’équipement. 
                    {'\n\n'}
                    Un véhicule de transport d’équipement ne peut tirer une remorque qui transporte autre chose qu’un appareil de levage ou ses accessoires. 
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
        en: {
            art: 'Section 30 (1)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Prohibited parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place and time where a sign prohibits the parking. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle may park more less than 60 minutes to load or unload goods from or into a vehicle, as long as: </Bold>
                    {'\n\n'}
                    <Bold>(1) The vehicle is a truck or a commercial vehicle. Commercial vehicle means a motor vehicle owned by a legal person (F plate). </Bold>
                    {'\n\n'}
                    <Bold>(2) The operations are carried out continuously. </Bold>
                    {'\n\n'}
                    <Bold>This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (1) (a) RRVM C-4.1. </Small>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle may park less than 60 minutes, as long as he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (1) (c) RRVM C-4.1 </Small>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle may park less than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, as long as the vehicle is a commercial vehicle or a taxi. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (2) and (3) RRVM C-4.1 </Small>
                    {'\n\n'}
                    <Bold>• The driver of a hearse transporting a casket may park near the funeral home or religious establishment during the funeral ceremony. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.3 RRVM C-4.1. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 30 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked:  
                    {'\n\n'}
                    (1) at a place and time where signs prohibit parking; 
                    {'\n\n'}
                    (2) at a place where signs prohibit parking except for certain purposes, unless it is expressly for that purpose; 
                    {'\n\n'}
                    (3) at a place and time where signs indicate that parking is reserved for other vehicles under paragraphs 5 and 6 of Art: 3 or under section II; 
                    {'\n\n'}
                    (4) on a lane, unless signs expressly allow parking;  
                    {'\n\n'}
                    (5) along the median of a roadway, unless signs expressly allow parking;
                    {'\n\n'}
                    (6) off-street, at a place that is not accessible by a curbcut;
                    {'\n\n'}
                    (7) in a park, elsewhere than at a place where signs indicate that the place is reserved for parking; 
                    {'\n\n'}
                    (8) in a parking space whose access is prohibited by a gate, an amber light system, a removable sign or an inscription on a cover or panel fixed to a parking meter; 
                    {'\n\n'}
                    (9) at a place where stopping is prohibited under the Code or this by-law. 
                    {'\n\n'}
                    <Bold>S. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30 and despite signs indicating that parking is reserved for residents, no driver of a road vehicle may park:  
                    {'\n\n'}
                    (1) more than 60 minutes: 
                    {'\n\n'}
                    (a) to load or unload goods from or into a vehicle, unless: 
                    {'\n'}
                    (i) the vehicle is a truck or a commercial vehicle;   
                    {'\n'}
                    (ii) the operations are carried out continuously; 
                    {'\n\n'}
                    (b) while carrying out work on a bordering property, unless: 
                    {'\n'}
                    (i) the vehicle is special mobile equipment, a truck or a commercial vehicle required to carry out the work;  
                    {'\n'}
                    (ii) the work is carried out continuously; 
                    {'\n\n'}
                    (c) unless he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States; 
                    {'\n\n'}
                    (2) more than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, unless the vehicle is a commercial vehicle. 
                    {'\n\n'}
                    (3) more than 15 minutes, to pick up or deliver mail or small parcels with that vehicle if it is a taxi.  
                    {'\n\n'}
                    The exceptions provided for in the first paragraph do not apply counter to signs that prohibit parking:   
                    {'\n\n'}
                    (1) near a work area or for special events or for road maintenance operations;
                    {'\n\n'}
                    (2) near a school, a playground or a park. 
                    {'\n\n'}
                    Any driver of a road vehicle may park for 30 minutes without paying the fees required under articles 46 and 55, provided he meets the conditions in subparagraph (a) of paragraph 1 of the first paragraph, and for 15 minutes, provided he meets the conditions of paragraph 2 or 3 of that paragraph. 
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30, any driver of a hearse transporting a casket may park near the funeral home or religious establishment during the funeral ceremony.
                    {'\n\n'}
                    <Bold>S. 2 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    “commercial vehicle” means a motor vehicle owned by a legal person, other than a truck, a bus, a minibus or a vehicle referred to in subparagraphs 2 to 11 of the first paragraph of section 102; (véhicule commercial).
                    {'\n\n'}
                    <Bold>S. 102 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    With the exception of motorcycles and mopeds, the licence plate of the following road vehicles shall bear the prefix “F” or “FZ”:
                    {'\n\n'}
                    (1)  commercial vehicles; 
                    {'\n\n'}
                    (2)  vehicles engaged in the transportation of schoolchildren; 
                    {'\n\n'}
                    (3)  road vehicles owned by a driving school or an educational institution holding a permit to dispense instruction in the driving of heavy trucks issued pursuant to section 10 of the Act respecting private education (chapter E-9.1); 
                    {'\n\n'}
                    (4)  snowblowers; 
                    {'\n\n'}
                    (5)  farm motor vehicles with a net weight of 3,000 kg or less; 
                    {'\n\n'}
                    (6)  motor homes belonging to a legal person and motor homes with a net weight of more than 3,000 kg belonging to a natural person using it mainly for personal purposes; 
                    {'\n\n'}
                    (7)  special mobile equipment and special mobile snow equipment; 
                    {'\n\n'}
                    (8)  tow trucks with a net weight of 3,000 kg or less;
                    {'\n\n'}
                    (9)  tow trucks with a net weight of more than 3,000 kg, used solely for towing a maximum of 2 road vehicles at a time; 
                    {'\n\n'}
                    (10)  ambulances and hearses; 
                    {'\n\n'}
                    (11)  equipment transport vehicles. 
                    {'\n\n'}
                    Equipment transport vehicles may tow trailers carrying only a lifting device or its accessories. 
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
    },
    '30 par. 3': {
        fr: {
            art: 'Art: 30 par. 3',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement résident',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où la signalisation indique que le stationnement est réservé à d’autres véhicules. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était muni d’une vignette valide l’autorisant à se stationner dans le secteur réservé. </Bold>
                    {'\n\n'}
                    <Bold>• Malgré une signalisation indiquant que le stationnement est réservé aux résidents, il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 60 minutes pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que: </Bold>
                    {'\n\n'}
                    <Bold>(1) Ce véhicule est un camion ou un véhicule commercial. Un véhicule commercial est un véhicule automobile qui appartient à une personne morale (Plaque F). </Bold>
                    {'\n\n'}
                    <Bold>(2) Ces opérations se fassent de façon continue. </Bold>
                    {'\n\n'}
                    <Bold>Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (1) (a) RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Malgré une signalisation indiquant que le stationnement est réservé aux résidents, il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 60 minutes s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis. Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (1) (c) RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Malgré une signalisation indiquant que le stationnement est réservé aux résidents, il est permis au conducteur d’un véhicule routier de stationner pour une période d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial ou un taxi. Cette exception exclue les zones de travaux, d’opérations d'entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (2) et (3) RRVM C-4.1.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 30 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) en un endroit et aux heures où la signalisation interdit le stationnement; 
                    {'\n\n'}
                    (2) en un endroit où la signalisation interdit le stationnement excepté à certaines fins, à moins que ce ne soit effectivement à une telle fin; 
                    {'\n\n'}
                    (3) en un endroit et aux heures où la signalisation indique que le stationnement y est réservé à d'autres véhicules en vertu des paragraphes 5 et 6 de l'Art: 3 ou en vertu de la section II; 
                    {'\n\n'}
                    (4) dans une ruelle, sauf lorsque la signalisation le permet expressément; 
                    {'\n\n'}
                    (5) le long d'un terre-plein au centre d'une chaussée, sauf lorsque la signalisation le permet expressément;
                    {'\n\n'}
                    (6) hors rue, en un endroit qui n'est pas accessible par un bateau;  
                    {'\n\n'}
                    (7) dans un parc, ailleurs que dans un endroit où la signalisation indique que cet endroit est destiné au stationnement; 
                    {'\n\n'}
                    (8) dans une place de stationnement dont l'accès est interdit par une barrière, un système de feux orange, un panneau amovible ou une inscription sur une housse ou un plastron fixés sur un parcomètre;
                    {'\n\n'}
                    (9) en un endroit où l'immobilisation est interdite en vertu du Code ou du présent règlement. 
                    {'\n\n'}
                    <Bold>Art. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30 et malgré une signalisation indiquant que le stationnement est réservé aux résidants, il est permis au conducteur d'un véhicule routier de stationner pour une période : 
                    {'\n\n'}
                    (1) d'au plus 60 minutes :
                    {'\n\n'}
                    (a) pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un camion ou un véhicule commercial;  
                    {'\n'}
                    (ii) ces opérations se fassent de façon continue; 
                    {'\n\n'}
                    (b) pendant qu'il exécute des travaux sur la propriété riveraine, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un véhicule-outil, un camion ou un véhicule commercial et qu'il soit nécessaire à l'exécution de ces travaux;  
                    {'\n'}
                    (ii) ces travaux se fassent de façon continue; 
                    {'\n\n'}
                    (c) s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis;
                    {'\n\n'}
                    (2) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial; 
                    {'\n\n'}
                    (3) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, s'il s'agit d'un taxi. 
                    {'\n\n'}
                    Les exceptions prévues au premier alinéa ne s'appliquent pas à l'encontre d'une signalisation interdisant le stationnement :  
                    {'\n\n'}
                    1- à proximité d'une aire de travaux ou aux fins d'événements spéciaux ou d'opérations d'entretien routier;
                    {'\n\n'}
                    2-  près d'une école, d'un terrain de jeu ou d'un parc. 
                    {'\n\n'}
                    Le conducteur d'un véhicule routier peut stationner sans acquitter les droits requis en vertu des articles 46 et 55, durant 30 minutes s'il respecte les conditions prévues au sous-paragraphe (a) du paragraphe 1 du premier alinéa, et durant 15 minutes s'il respecte les conditions prévues aux paragraphes 2 ou 3 de cet alinéa.
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30, il est permis au conducteur d'un corbillard transportant un cercueil ou au conducteur d’un véhicule affecté au transport des cendres d’un défunt de stationner près du salon funéraire ou de l'établissement religieux pendant que la cérémonie funèbre est en cours.
                    {'\n\n'}
                    <Bold>Art. 2 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    «véhicule commercial»: un véhicule automobile qui appartient à une personne morale, autre qu’un camion, un autobus, un minibus ou un véhicule visé aux paragraphes 2 à 11 du premier alinéa de l’Art: 102;
                    {'\n\n'}
                    <Bold>Art. 102 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    À l’exception d’un cyclomoteur et d’une motocyclette, la plaque d’immatriculation des véhicules routiers suivants porte le préfixe «F» ou «FZ»:
                    {'\n\n'}
                    1°  un véhicule commercial; 
                    {'\n\n'}
                    2°  un véhicule affecté au transport d’écoliers; 
                    {'\n\n'}
                    3°  un véhicule routier appartenant à une école de conduite ou à un établissement qui détient un permis pour l’enseignement de la conduite de camions lourds délivré en vertu de l’Art: 10 de la Loi sur l’enseignement privé (chapitre E-9.1); 
                    {'\n\n'}
                    4°  une souffleuse à neige; 
                    {'\n\n'}
                    5°  un véhicule de ferme dont la masse nette est de 3 000 kg ou moins; 
                    {'\n\n'}
                    6°  une habitation motorisée appartenant à une personne morale de même que celle qui a une masse nette de plus de 3 000 kg et qui appartient à une personne physique qui l’utilise principalement à des fins personnelles; 
                    {'\n\n'}
                    7°  un véhicule-outil et un véhicule-outil d’hiver; 
                    {'\n\n'}
                    8°  une dépanneuse d’une masse nette de 3 000 kg ou moins; 
                    {'\n\n'}
                    9°  une dépanneuse d’une masse nette de plus de 3 000 kg, utilisée exclusivement pour le dépannage ou le déplacement d’au plus 2 véhicules routiers; 
                    {'\n\n'}
                    10°  une ambulance et un corbillard; 
                    {'\n\n'}
                    11°  un véhicule de transport d’équipement. 
                    {'\n\n'}
                    Un véhicule de transport d’équipement ne peut tirer une remorque qui transporte autre chose qu’un appareil de levage ou ses accessoires. 
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
        en: {
            art: 'Section 30 (3)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Resident parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The vehicle was at a place and time where signs indicate that parking is reserved for other vehicles. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was equipped with a valid sticker according to the sector. </Bold>
                    {'\n\n'}
                    <Bold>• Despites signs indicating that parking is reserved for residents, the driver of a road vehicle may park more less than 60 minutes to load or unload goods from or into a vehicle, as long as: </Bold>
                    {'\n\n'}
                    <Bold>(1) The vehicle is a truck or a commercial vehicle. Commercial vehicle means a motor vehicle owned by a legal person (F plate). </Bold>
                    {'\n\n'}
                    <Bold>(2) The operations are carried out continuously. </Bold>
                    {'\n\n'}
                    <Bold>This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (1) (a) RRVM C-4.1. </Small>
                    {'\n\n'}
                    <Bold>• Despites signs indicating that parking is reserved for residents, the driver of a road vehicle may park less than 60 minutes, as long as he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (1) (c) RRVM C-4.1 </Small>
                    {'\n\n'}
                    <Bold>• Despites signs indicating that parking is reserved for residents, the driver of a road vehicle may park less than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, as long as the vehicle is a commercial vehicle or a taxi. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (2) and (3) RRVM C-4.1 </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 30 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked:  
                    {'\n\n'}
                    (1) at a place and time where signs prohibit parking; 
                    {'\n\n'}
                    (2) at a place where signs prohibit parking except for certain purposes, unless it is expressly for that purpose; 
                    {'\n\n'}
                    (3) at a place and time where signs indicate that parking is reserved for other vehicles under paragraphs 5 and 6 of Art: 3 or under section II; 
                    {'\n\n'}
                    (4) on a lane, unless signs expressly allow parking;  
                    {'\n\n'}
                    (5) along the median of a roadway, unless signs expressly allow parking;
                    {'\n\n'}
                    (6) off-street, at a place that is not accessible by a curbcut;
                    {'\n\n'}
                    (7) in a park, elsewhere than at a place where signs indicate that the place is reserved for parking; 
                    {'\n\n'}
                    (8) in a parking space whose access is prohibited by a gate, an amber light system, a removable sign or an inscription on a cover or panel fixed to a parking meter; 
                    {'\n\n'}
                    (9) at a place where stopping is prohibited under the Code or this by-law. 
                    {'\n\n'}
                    <Bold>S. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30 and despite signs indicating that parking is reserved for residents, no driver of a road vehicle may park:  
                    {'\n\n'}
                    (1) more than 60 minutes: 
                    {'\n\n'}
                    (a) to load or unload goods from or into a vehicle, unless: 
                    {'\n'}
                    (i) the vehicle is a truck or a commercial vehicle;   
                    {'\n'}
                    (ii) the operations are carried out continuously; 
                    {'\n\n'}
                    (b) while carrying out work on a bordering property, unless: 
                    {'\n'}
                    (i) the vehicle is special mobile equipment, a truck or a commercial vehicle required to carry out the work;  
                    {'\n'}
                    (ii) the work is carried out continuously; 
                    {'\n\n'}
                    (c) unless he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States; 
                    {'\n\n'}
                    (2) more than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, unless the vehicle is a commercial vehicle. 
                    {'\n\n'}
                    (3) more than 15 minutes, to pick up or deliver mail or small parcels with that vehicle if it is a taxi.  
                    {'\n\n'}
                    The exceptions provided for in the first paragraph do not apply counter to signs that prohibit parking:   
                    {'\n\n'}
                    (1) near a work area or for special events or for road maintenance operations;
                    {'\n\n'}
                    (2) near a school, a playground or a park. 
                    {'\n\n'}
                    Any driver of a road vehicle may park for 30 minutes without paying the fees required under articles 46 and 55, provided he meets the conditions in subparagraph (a) of paragraph 1 of the first paragraph, and for 15 minutes, provided he meets the conditions of paragraph 2 or 3 of that paragraph. 
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30, any driver of a hearse transporting a casket may park near the funeral home or religious establishment during the funeral ceremony.
                    {'\n\n'}
                    <Bold>S. 2 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    “commercial vehicle” means a motor vehicle owned by a legal person, other than a truck, a bus, a minibus or a vehicle referred to in subparagraphs 2 to 11 of the first paragraph of section 102; (véhicule commercial).
                    {'\n\n'}
                    <Bold>S. 102 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    With the exception of motorcycles and mopeds, the licence plate of the following road vehicles shall bear the prefix “F” or “FZ”:
                    {'\n\n'}
                    (1)  commercial vehicles; 
                    {'\n\n'}
                    (2)  vehicles engaged in the transportation of schoolchildren; 
                    {'\n\n'}
                    (3)  road vehicles owned by a driving school or an educational institution holding a permit to dispense instruction in the driving of heavy trucks issued pursuant to section 10 of the Act respecting private education (chapter E-9.1); 
                    {'\n\n'}
                    (4)  snowblowers; 
                    {'\n\n'}
                    (5)  farm motor vehicles with a net weight of 3,000 kg or less; 
                    {'\n\n'}
                    (6)  motor homes belonging to a legal person and motor homes with a net weight of more than 3,000 kg belonging to a natural person using it mainly for personal purposes; 
                    {'\n\n'}
                    (7)  special mobile equipment and special mobile snow equipment; 
                    {'\n\n'}
                    (8)  tow trucks with a net weight of 3,000 kg or less;
                    {'\n\n'}
                    (9)  tow trucks with a net weight of more than 3,000 kg, used solely for towing a maximum of 2 road vehicles at a time; 
                    {'\n\n'}
                    (10)  ambulances and hearses; 
                    {'\n\n'}
                    (11)  equipment transport vehicles. 
                    {'\n\n'}
                    Equipment transport vehicles may tow trailers carrying only a lifting device or its accessories. 
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
    },
    '30 par. 4': {
        fr: {
            art: 'Art: 30 par. 4',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement dans une ruelle',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans une ruelle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• La signalisation permet le stationnement dans la ruelle. </Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était dans la ruelle pour charger ou décharger de la marchandises. Ces opérations doivent se faire de façon continue. </Bold>
                    {'\n'}
                    <Small>Référence: art. 35 RRVM C-4.1.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 30 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) en un endroit et aux heures où la signalisation interdit le stationnement; 
                    {'\n\n'}
                    (2) en un endroit où la signalisation interdit le stationnement excepté à certaines fins, à moins que ce ne soit effectivement à une telle fin; 
                    {'\n\n'}
                    (3) en un endroit et aux heures où la signalisation indique que le stationnement y est réservé à d'autres véhicules en vertu des paragraphes 5 et 6 de l'Art: 3 ou en vertu de la section II; 
                    {'\n\n'}
                    (4) dans une ruelle, sauf lorsque la signalisation le permet expressément; 
                    {'\n\n'}
                    (5) le long d'un terre-plein au centre d'une chaussée, sauf lorsque la signalisation le permet expressément;
                    {'\n\n'}
                    (6) hors rue, en un endroit qui n'est pas accessible par un bateau;  
                    {'\n\n'}
                    (7) dans un parc, ailleurs que dans un endroit où la signalisation indique que cet endroit est destiné au stationnement; 
                    {'\n\n'}
                    (8) dans une place de stationnement dont l'accès est interdit par une barrière, un système de feux orange, un panneau amovible ou une inscription sur une housse ou un plastron fixés sur un parcomètre;
                    {'\n\n'}
                    (9) en un endroit où l'immobilisation est interdite en vertu du Code ou du présent règlement. 
                    {'\n\n'}
                    <Bold>Art. 35 R.R.V.M. C-4.1: </Bold>
                    {'\n\n'}
                    Malgré le paragraphe 4 de l'Art: 30, il est permis au conducteur d'un véhicule routier de le stationner dans une ruelle pendant un chargement ou un déchargement de marchandises effectué au moyen de ce véhicule, à condition que ces opérations se fassent de façon continue.
            </Text>
            ),
            image: 'rm-30-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 30 (4)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Alley parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was on a lane. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The signs expressly allow parking the alley. </Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was parked on a lane to load or unload goods. Operations must be carried out continuously. </Bold>
                    {'\n'}
                    <Small>Reference: s. 35 RRVM C-4.1. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 30 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked:  
                    {'\n\n'}
                    (1) at a place and time where signs prohibit parking; 
                    {'\n\n'}
                    (2) at a place where signs prohibit parking except for certain purposes, unless it is expressly for that purpose; 
                    {'\n\n'}
                    (3) at a place and time where signs indicate that parking is reserved for other vehicles under paragraphs 5 and 6 of Art: 3 or under section II; 
                    {'\n\n'}
                    (4) on a lane, unless signs expressly allow parking;  
                    {'\n\n'}
                    (5) along the median of a roadway, unless signs expressly allow parking;
                    {'\n\n'}
                    (6) off-street, at a place that is not accessible by a curbcut;
                    {'\n\n'}
                    (7) in a park, elsewhere than at a place where signs indicate that the place is reserved for parking; 
                    {'\n\n'}
                    (8) in a parking space whose access is prohibited by a gate, an amber light system, a removable sign or an inscription on a cover or panel fixed to a parking meter; 
                    {'\n\n'}
                    (9) at a place where stopping is prohibited under the Code or this by-law. 
                    {'\n\n'}
                    <Bold>S. 35 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Despite paragraph 4 of Art: 30, the driver of a road vehicle may park on a lane to load or unload goods from his vehicle, provided the operations are carried out continuously.  
            </Text>
            ),
            image: 'rm-30-4+.png',
            analyse: '',
        },
    },
    '30 par. 8': {
        fr: {
            art: 'Art: 30 par. 8',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit interdit par une barrière. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était dans un endroit interdit par un système de feux orange. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était dans un endroit interdit par un panneau amovible. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était dans un endroit interdit par une housse sur un parcomètre. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 30 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) en un endroit et aux heures où la signalisation interdit le stationnement; 
                    {'\n\n'}
                    (2) en un endroit où la signalisation interdit le stationnement excepté à certaines fins, à moins que ce ne soit effectivement à une telle fin; 
                    {'\n\n'}
                    (3) en un endroit et aux heures où la signalisation indique que le stationnement y est réservé à d'autres véhicules en vertu des paragraphes 5 et 6 de l'Art: 3 ou en vertu de la section II; 
                    {'\n\n'}
                    (4) dans une ruelle, sauf lorsque la signalisation le permet expressément; 
                    {'\n\n'}
                    (5) le long d'un terre-plein au centre d'une chaussée, sauf lorsque la signalisation le permet expressément;
                    {'\n\n'}
                    (6) hors rue, en un endroit qui n'est pas accessible par un bateau;  
                    {'\n\n'}
                    (7) dans un parc, ailleurs que dans un endroit où la signalisation indique que cet endroit est destiné au stationnement; 
                    {'\n\n'}
                    (8) dans une place de stationnement dont l'accès est interdit par une barrière, un système de feux orange, un panneau amovible ou une inscription sur une housse ou un plastron fixés sur un parcomètre;
                    {'\n\n'}
                    (9) en un endroit où l'immobilisation est interdite en vertu du Code ou du présent règlement. 
            </Text>
            ),
            image: 'rm-30-8+.png',
            analyse: '',
        },
        en: {
            art: 'Section 30 (8)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Prohibited parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a parking space whose access is prohibited by a gate. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a parking space whose access is prohibited by an amber light system.</Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a parking space whose access is prohibited by a removable sign. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a parking space whose access is prohibited by an inscription on a cover or panel fixed to a parking meter.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 30 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked:  
                    {'\n\n'}
                    (1) at a place and time where signs prohibit parking; 
                    {'\n\n'}
                    (2) at a place where signs prohibit parking except for certain purposes, unless it is expressly for that purpose; 
                    {'\n\n'}
                    (3) at a place and time where signs indicate that parking is reserved for other vehicles under paragraphs 5 and 6 of Art: 3 or under section II; 
                    {'\n\n'}
                    (4) on a lane, unless signs expressly allow parking;  
                    {'\n\n'}
                    (5) along the median of a roadway, unless signs expressly allow parking;
                    {'\n\n'}
                    (6) off-street, at a place that is not accessible by a curbcut;
                    {'\n\n'}
                    (7) in a park, elsewhere than at a place where signs indicate that the place is reserved for parking; 
                    {'\n\n'}
                    (8) in a parking space whose access is prohibited by a gate, an amber light system, a removable sign or an inscription on a cover or panel fixed to a parking meter; 
                    {'\n\n'}
                    (9) at a place where stopping is prohibited under the Code or this by-law.  
            </Text>
            ),
            image: 'rm-30-8+.png',
            analyse: '',
        },
    },
    '30 par. 9': {
        fr: {
            art: 'Art: 30 par. 9',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Immobilisation interdite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où l’immobilisation est interdite par un panneau. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 30 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) en un endroit et aux heures où la signalisation interdit le stationnement; 
                    {'\n\n'}
                    (2) en un endroit où la signalisation interdit le stationnement excepté à certaines fins, à moins que ce ne soit effectivement à une telle fin; 
                    {'\n\n'}
                    (3) en un endroit et aux heures où la signalisation indique que le stationnement y est réservé à d'autres véhicules en vertu des paragraphes 5 et 6 de l'Art: 3 ou en vertu de la section II; 
                    {'\n\n'}
                    (4) dans une ruelle, sauf lorsque la signalisation le permet expressément; 
                    {'\n\n'}
                    (5) le long d'un terre-plein au centre d'une chaussée, sauf lorsque la signalisation le permet expressément;
                    {'\n\n'}
                    (6) hors rue, en un endroit qui n'est pas accessible par un bateau;  
                    {'\n\n'}
                    (7) dans un parc, ailleurs que dans un endroit où la signalisation indique que cet endroit est destiné au stationnement; 
                    {'\n\n'}
                    (8) dans une place de stationnement dont l'accès est interdit par une barrière, un système de feux orange, un panneau amovible ou une inscription sur une housse ou un plastron fixés sur un parcomètre;
                    {'\n\n'}
                    (9) en un endroit où l'immobilisation est interdite en vertu du Code ou du présent règlement. 
            </Text>
            ),
            image: 'rm-26+.png',
            analyse: '',
        },
        en: {
            art: 'Section 30 (9)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Prohibited stopping',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where stopping is prohibited by a sign. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 30 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked:  
                    {'\n\n'}
                    (1) at a place and time where signs prohibit parking; 
                    {'\n\n'}
                    (2) at a place where signs prohibit parking except for certain purposes, unless it is expressly for that purpose; 
                    {'\n\n'}
                    (3) at a place and time where signs indicate that parking is reserved for other vehicles under paragraphs 5 and 6 of Art: 3 or under section II; 
                    {'\n\n'}
                    (4) on a lane, unless signs expressly allow parking;  
                    {'\n\n'}
                    (5) along the median of a roadway, unless signs expressly allow parking;
                    {'\n\n'}
                    (6) off-street, at a place that is not accessible by a curbcut;
                    {'\n\n'}
                    (7) in a park, elsewhere than at a place where signs indicate that the place is reserved for parking; 
                    {'\n\n'}
                    (8) in a parking space whose access is prohibited by a gate, an amber light system, a removable sign or an inscription on a cover or panel fixed to a parking meter; 
                    {'\n\n'}
                    (9) at a place where stopping is prohibited under the Code or this by-law.  
            </Text>
            ),
            image: 'rm-26+.png',
            analyse: '',
        },
    },
    '31 par. 1': {
        fr: {
            art: 'Art: 31 par. 1',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement de plus de 24h',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était plus de 24 heures consécutives au même endroit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 31 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit, en un endroit d'un chemin public où le stationnement est permis, de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) plus de 24 heures consécutives; 
                    {'\n\n'}
                    (2) s'il s'agit d'un camion ou d'un véhicule-outil, sur un chemin public situé dans une zone de circulation interdite identifiée au moyen de la signalisation prévue au Règlement sur la circulation des camions et des véhicules-outils (chapitre C-4.01), sauf le temps nécessaire pour effectuer une livraison locale;  
                    {'\n\n'}
                    (3) plus que le temps nécessaire pour permettre aux passagers de monter ou descendre, sur la partie d'un chemin public délimitée à chaque extrémité par une signalisation indiquant qu'il s'agit d'une zone de débarcadère;  
                    {'\n\n'}
                    (4) plus longtemps que ne l'autorise la signalisation lorsqu'une période limitée y est indiquée.  
            </Text>
            ),
            image: 'rm-31-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 31 (1)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: '24h parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was more than 24 hours running at the same place. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 31 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked, at a place on a public thoroughfare where parking is allowed:   
                    {'\n\n'}
                    (1) more than 24 hours running; 
                    {'\n\n'}
                    (2) for a truck or special mobile equipment, on a public thoroughfare in a prohibited zone marked off by signs in accordance with the By-law concerning trucks and special mobile equipment (R.B.C.M., chapter C-4.01), except the time required for a local delivery; 
                    {'\n\n'}
                    (3) longer than necessary to allow passengers to get on or get off, on the part of a public thoroughfare marked off at each end by signs indicating that it is a loading/unloading zone;  
                    {'\n\n'}
                    (4) longer than the prescribed period when a limited period is indicated on signs.  
            </Text>
            ),
            image: 'rm-31-1+.png',
            analyse: '',
        },
    },
    '31 par. 3': {
        fr: {
            art: 'Art: 31 par. 3',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Débarcadère',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était arrêté plus longtemps que le temps nécessaire pour permettre aux passagers de monter ou descendre d'une zone de débarcadère. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 31 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit, en un endroit d'un chemin public où le stationnement est permis, de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) plus de 24 heures consécutives; 
                    {'\n\n'}
                    (2) s'il s'agit d'un camion ou d'un véhicule-outil, sur un chemin public situé dans une zone de circulation interdite identifiée au moyen de la signalisation prévue au Règlement sur la circulation des camions et des véhicules-outils (chapitre C-4.01), sauf le temps nécessaire pour effectuer une livraison locale;  
                    {'\n\n'}
                    (3) plus que le temps nécessaire pour permettre aux passagers de monter ou descendre, sur la partie d'un chemin public délimitée à chaque extrémité par une signalisation indiquant qu'il s'agit d'une zone de débarcadère;  
                    {'\n\n'}
                    (4) plus longtemps que ne l'autorise la signalisation lorsqu'une période limitée y est indiquée.  
            </Text>
            ),
            image: '386-5+.png',
            analyse: '',
        },
        en: {
            art: 'Section 31 (3)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'loading/unloading zone',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was stopped longer than necessary to allow passengers to get on or get off a loading/unloading zone. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 31 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked, at a place on a public thoroughfare where parking is allowed:   
                    {'\n\n'}
                    (1) more than 24 hours running; 
                    {'\n\n'}
                    (2) for a truck or special mobile equipment, on a public thoroughfare in a prohibited zone marked off by signs in accordance with the By-law concerning trucks and special mobile equipment (R.B.C.M., chapter C-4.01), except the time required for a local delivery; 
                    {'\n\n'}
                    (3) longer than necessary to allow passengers to get on or get off, on the part of a public thoroughfare marked off at each end by signs indicating that it is a loading/unloading zone;  
                    {'\n\n'}
                    (4) longer than the prescribed period when a limited period is indicated on signs.  
            </Text>
            ),
            image: '386-5+.png',
            analyse: '',
        },
    },
    '31 par. 4': {
        fr: {
            art: 'Art: 31 par. 4',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement temporaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule était stationné plus longtemps que ne l’autorise la signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 31 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit, en un endroit d'un chemin public où le stationnement est permis, de stationner un véhicule routier : 
                    {'\n\n'}
                    (1) plus de 24 heures consécutives; 
                    {'\n\n'}
                    (2) s'il s'agit d'un camion ou d'un véhicule-outil, sur un chemin public situé dans une zone de circulation interdite identifiée au moyen de la signalisation prévue au Règlement sur la circulation des camions et des véhicules-outils (chapitre C-4.01), sauf le temps nécessaire pour effectuer une livraison locale;  
                    {'\n\n'}
                    (3) plus que le temps nécessaire pour permettre aux passagers de monter ou descendre, sur la partie d'un chemin public délimitée à chaque extrémité par une signalisation indiquant qu'il s'agit d'une zone de débarcadère;  
                    {'\n\n'}
                    (4) plus longtemps que ne l'autorise la signalisation lorsqu'une période limitée y est indiquée.  
            </Text>
            ),
            image: 'rm-31-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 31 (4)',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Temporary parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked longer than the prescribed period when a limited period is indicated on signs.</Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 31 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked, at a place on a public thoroughfare where parking is allowed:   
                    {'\n\n'}
                    (1) more than 24 hours running; 
                    {'\n\n'}
                    (2) for a truck or special mobile equipment, on a public thoroughfare in a prohibited zone marked off by signs in accordance with the By-law concerning trucks and special mobile equipment (R.B.C.M., chapter C-4.01), except the time required for a local delivery; 
                    {'\n\n'}
                    (3) longer than necessary to allow passengers to get on or get off, on the part of a public thoroughfare marked off at each end by signs indicating that it is a loading/unloading zone;  
                    {'\n\n'}
                    (4) longer than the prescribed period when a limited period is indicated on signs.  
            </Text>
            ),
            image: 'rm-31-4+.png',
            analyse: '',
        },
    },
    '32': {
        fr: {
            art: 'Art: 32',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Remorque',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé de la remorque; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Cette remorque a été stationnée sur un chemin public; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Cette remorque n’est pas rattachée à un véhicule automobile. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous aviez un permis d’occupation temporaire du domaine public délivré en vertu du Règlement sur l’occupation du domaine public. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 32 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner sur un chemin public une remorque ou une semi-remorque non rattachée à un véhicule automobile, sauf en conformité d'un permis d'occupation temporaire du domaine public délivré en vertu du Règlement sur l'occupation du domaine public (chapitre O-0.1).  
            </Text>
            ),
            image: 'rm-32.png',
            analyse: '',
        },
        en: {
            art: 'Section 32',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Trailer',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the trailer; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That trailer was parked on a public thoroughfare; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That trailer was not attached to a motor vehicle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You had a temporary occupation permit issued under the By-law concerning the occupancy of public property. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 32 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No trailer or semi-trailer that is not attached to a motor vehicle may be parked on a public thoroughfare, except in accordance with a permit for the temporary occupancy of public property issued under the By-law concerning the occupancy of public property (R.B.C.M., chapter O-0.1). 
            </Text>
            ),
            image: 'rm-32.png',
            analyse: '',
        },
    },
    '37': {
        fr: {
            art: 'Art: 37',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationner un véhicule à plus de 15 centimètres du bord de la chaussée',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouve à plus de 15 cm de la bordure la plus rapprochée de la chaussée. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule se trouve à plus de 15 cm de la ligne blanche parallèle au bord de la chaussée. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 37 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Sous réserve de l'Art: 39, un véhicule routier doit être stationné à au plus 15 cm du bord de la chaussée ou, s'il en est, de la ligne blanche continue ou discontinue parallèle au bord de la chaussée et dont la signalisation indique qu'elle constitue le point de repère à cette fin. Cette distance se mesure à partir de la face externe des pneus du véhicule. 
                    {'\n\n'}
                    <Bold>Art. 39 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Les roues d'un véhicule routier stationné dans une allée de stationnement doivent se trouver à l'intérieur des limites marquées par la ligne blanche continue ou discontinue, s'il en est, et n'empiéter aucunement sur cette ligne. Contrevient au premier alinéa le conducteur qui stationne dans une allée de stationnement un véhicule routier dont la largeur est telle qu'il ne peut se conformer aux exigences de cet alinéa.   
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 37',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Parking a vehicle more than 15 centimeters from the near edge of the roadway',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle is more than 15 cm from the near edge of the roadway. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle is more than 15 cm from the white line parallel to the edge of the roadway. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 37 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    Subject to Art: 39, no road vehicle may be parked more than 15 cm from the edge of the roadway or, as the case may be, from the continuous or discontinuous white line parallel to the edge of the roadway and whose sign indicates that it is a reference mark for that purpose. The distance is measured from the outer side of tires of the vehicle.
                    {'\n\n'}
                    <Bold>S. 39 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    The wheels of a road vehicle parked on a parking lane must be within the limits marked off by a continuous or discontinuous white line, if any, and may not encroach on that line. Any driver who parks on a parking lane a road vehicle whose width is such that it does not conform to the first paragraph contravenes that paragraph.  
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
    },
    '38': {
        fr: {
            art: 'Art: 38',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement oblique',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule était stationné en oblique. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était stationné en sens inverse de la circulation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était stationné en oblique puisque la signalisation l’impose. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 38 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Un véhicule routier ne peut être stationné en oblique que lorsque la signalisation l'impose. Lorsqu'il est stationné en oblique, un véhicule routier doit être placé dans le sens de la circulation. 
            </Text>
            ),
            image: 'rm-38+.png',
            analyse: '',
        },
        en: {
            art: 'Section 38',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Temporary parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked diagonally. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was not parked in the direction of traffic. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was parked diagonally as the signs required.  </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 38 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    A road vehicle may be parked diagonally only where signs so require. Every road vehicle parked diagonally must be in the direction of traffic.  
            </Text>
            ),
            image: 'rm-38+.png',
            analyse: '',
        },
    },
    '42': {
        fr: {
            art: 'Art: 42',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement résident',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un stationnement réservé aux résidents; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Votre véhicule était muni d’une vignette n’étant pas complètement visible. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre véhicule était muni d’une vignette collée autrement que prévu. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 42 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Le conducteur d'un véhicule de promenade pour lequel un permis de stationnement réservé aux résidants a été délivré, conformément à une résolution prévue au paragraphe 7 de l'Art: 4, peut stationner ce véhicule dans une place de stationnement réservée aux résidants d'un secteur désigné par une telle résolution. Le permis de stationnement réservé aux résidants est délivré sous la forme d'une vignette autocollante. Cette vignette doit être collée sur le véhicule visé par le permis de la manière indiquée par une résolution prévue au paragraphe 7 de l'Art: 4 et être complètement visible en tout temps.
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
        en: {
            art: 'Section 42',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Resident parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place reserved for residents; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Your vehicle was bearing a sticker that is not fully visible. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Your sticker is not placed at its prescribed location on the vehicle. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 42 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    Any driver of a passenger vehicle for which a reserved parking permit was issued under a resolution referred to in paragraph 7 of Art: 4 may park the vehicle in a space reserved for residents in a sector designated under that resolution. The reserved parking permit is issued as a sticker. It must be placed on the vehicle covered by the permit, as specified in the resolution referred to in paragraph 4 of Art: 4, and be fully visible at all times.
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
    },
    '43': {
        fr: {
            art: 'Art: 43',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Stationnement résident',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un stationnement réservé aux résidents; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Votre véhicule n’était pas muni d’une vignette valide. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre véhicule était muni d’une vignette correspondant à un autre véhicule ou à un autre secteur. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Votre véhicule était muni d’une vignette incomplète, invisible ou collée autrement que prévu. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était muni d’une vignette valide l’autorisant à se stationner dans le secteur réservé. </Bold>
                    {'\n\n'}
                    <Bold>• Malgré une signalisation indiquant que le stationnement est réservé aux résidents, il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 60 minutes pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que: </Bold>
                    {'\n\n'}
                    <Bold>(1) Ce véhicule est un camion ou un véhicule commercial. Un véhicule commercial est un véhicule automobile qui appartient à une personne morale (Plaque F). </Bold>
                    {'\n\n'}
                    <Bold>(2) Ces opérations se fassent de façon continue. </Bold>
                    {'\n\n'}
                    <Bold>Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (1) (a) RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Malgré une signalisation indiquant que le stationnement est réservé aux résidents, il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 60 minutes s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis. Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (1) (c) RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Malgré une signalisation indiquant que le stationnement est réservé aux résidents, il est permis au conducteur d’un véhicule routier de stationner pour une période d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial ou un taxi. Cette exception exclue les zones de travaux, d’opérations d'entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al.1 (2) et (3) RRVM C-4.1.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 43 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner dans une place de stationnement réservée aux résidants d'un secteur désigné avec un véhicule:
                    {'\n\n'}
                    (1) non muni d'une vignette;
                    {'\n\n'}
                    (2) muni d'une vignette correspondant à un autre véhicule, à un autre secteur ou à un permis expiré ou annulé;  
                    {'\n\n'}
                    (3) muni d'une vignette incomplète, invisible ou collée autrement qu'en conformité du deuxième alinéa de l'Art: 42. 
                    {'\n\n'}
                    Un permis est annulé lorsqu'il est constaté que le titulaire ne remplit plus les conditions d'émission du permis établies par une résolution prévue au paragraphe 7 de l'Art: 4 ou que les renseignements ou documents qu'il a fournis pour l'obtenir sont faux.
                    {'\n\n'}
                    <Bold>Art. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30 et malgré une signalisation indiquant que le stationnement est réservé aux résidants, il est permis au conducteur d'un véhicule routier de stationner pour une période : 
                    {'\n\n'}
                    (1) d'au plus 60 minutes :
                    {'\n\n'}
                    (a) pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un camion ou un véhicule commercial;  
                    {'\n'}
                    (ii) ces opérations se fassent de façon continue; 
                    {'\n\n'}
                    (b) pendant qu'il exécute des travaux sur la propriété riveraine, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un véhicule-outil, un camion ou un véhicule commercial et qu'il soit nécessaire à l'exécution de ces travaux;  
                    {'\n'}
                    (ii) ces travaux se fassent de façon continue; 
                    {'\n\n'}
                    (c) s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis;
                    {'\n\n'}
                    (2) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial; 
                    {'\n\n'}
                    (3) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, s'il s'agit d'un taxi. 
                    {'\n\n'}
                    Les exceptions prévues au premier alinéa ne s'appliquent pas à l'encontre d'une signalisation interdisant le stationnement :  
                    {'\n\n'}
                    1- à proximité d'une aire de travaux ou aux fins d'événements spéciaux ou d'opérations d'entretien routier;
                    {'\n\n'}
                    2-  près d'une école, d'un terrain de jeu ou d'un parc. 
                    {'\n\n'}
                    Le conducteur d'un véhicule routier peut stationner sans acquitter les droits requis en vertu des articles 46 et 55, durant 30 minutes s'il respecte les conditions prévues au sous-paragraphe (a) du paragraphe 1 du premier alinéa, et durant 15 minutes s'il respecte les conditions prévues aux paragraphes 2 ou 3 de cet alinéa.
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30, il est permis au conducteur d'un corbillard transportant un cercueil ou au conducteur d’un véhicule affecté au transport des cendres d’un défunt de stationner près du salon funéraire ou de l'établissement religieux pendant que la cérémonie funèbre est en cours.
                    {'\n\n'}
                    <Bold>Art. 2 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    «véhicule commercial»: un véhicule automobile qui appartient à une personne morale, autre qu’un camion, un autobus, un minibus ou un véhicule visé aux paragraphes 2 à 11 du premier alinéa de l’Art: 102;
                    {'\n\n'}
                    <Bold>Art. 102 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    À l’exception d’un cyclomoteur et d’une motocyclette, la plaque d’immatriculation des véhicules routiers suivants porte le préfixe «F» ou «FZ»:
                    {'\n\n'}
                    1°  un véhicule commercial; 
                    {'\n\n'}
                    2°  un véhicule affecté au transport d’écoliers; 
                    {'\n\n'}
                    3°  un véhicule routier appartenant à une école de conduite ou à un établissement qui détient un permis pour l’enseignement de la conduite de camions lourds délivré en vertu de l’Art: 10 de la Loi sur l’enseignement privé (chapitre E-9.1); 
                    {'\n\n'}
                    4°  une souffleuse à neige; 
                    {'\n\n'}
                    5°  un véhicule de ferme dont la masse nette est de 3 000 kg ou moins; 
                    {'\n\n'}
                    6°  une habitation motorisée appartenant à une personne morale de même que celle qui a une masse nette de plus de 3 000 kg et qui appartient à une personne physique qui l’utilise principalement à des fins personnelles; 
                    {'\n\n'}
                    7°  un véhicule-outil et un véhicule-outil d’hiver; 
                    {'\n\n'}
                    8°  une dépanneuse d’une masse nette de 3 000 kg ou moins; 
                    {'\n\n'}
                    9°  une dépanneuse d’une masse nette de plus de 3 000 kg, utilisée exclusivement pour le dépannage ou le déplacement d’au plus 2 véhicules routiers; 
                    {'\n\n'}
                    10°  une ambulance et un corbillard; 
                    {'\n\n'}
                    11°  un véhicule de transport d’équipement. 
                    {'\n\n'}
                    Un véhicule de transport d’équipement ne peut tirer une remorque qui transporte autre chose qu’un appareil de levage ou ses accessoires.   
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
        en: {
            art: 'Section 43',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Resident parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place reserved for residents; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Your vehicle was not bearing a valid sticker. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Your vehicle was bearing a sticker issued for another vehicle or another sector. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}Your vehicle was bearing a sticker that is incomplete, invisible or affixed contrary to regulation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was equipped with a valid sticker according to the sector. </Bold>
                    {'\n\n'}
                    <Bold>• Despites signs indicating that parking is reserved for residents, the driver of a road vehicle may park more less than 60 minutes to load or unload goods from or into a vehicle, as long as: </Bold>
                    {'\n\n'}
                    <Bold>(1) The vehicle is a truck or a commercial vehicle. Commercial vehicle means a motor vehicle owned by a legal person (F plate). </Bold>
                    {'\n\n'}
                    <Bold>(2) The operations are carried out continuously. </Bold>
                    {'\n\n'}
                    <Bold>This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (1) (a) RRVM C-4.1. </Small>
                    {'\n\n'}
                    <Bold>• Despites signs indicating that parking is reserved for residents, the driver of a road vehicle may park less than 60 minutes, as long as he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (1) (c) RRVM C-4.1 </Small>
                    {'\n\n'}
                    <Bold>• Despites signs indicating that parking is reserved for residents, the driver of a road vehicle may park less than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, as long as the vehicle is a commercial vehicle or a taxi. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par.1 (2) and (3) RRVM C-4.1 </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 43 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No vehicle may be parked in a space reserved for residents: 
                    {'\n\n'}
                    (1) without a sticker; 
                    {'\n\n'}
                    (2) bearing a sticker corresponding to another vehicle, to another sector, or to an expired or a cancelled permit; 
                    {'\n\n'}
                    (3) bearing a sticker that is incomplete, invisible, or affixed contrary to the second paragraph of Art: 42. 
                    {'\n\n'}
                    A permit is cancelled where the holder no longer meets the permit conditions under a resolution referred to in paragraph 7 of Art: 4, or where the information or documents submitted to be granted a permit are false.
                    {'\n\n'}
                    <Bold>S. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30 and despite signs indicating that parking is reserved for residents, no driver of a road vehicle may park:  
                    {'\n\n'}
                    (1) more than 60 minutes: 
                    {'\n\n'}
                    (a) to load or unload goods from or into a vehicle, unless: 
                    {'\n'}
                    (i) the vehicle is a truck or a commercial vehicle;   
                    {'\n'}
                    (ii) the operations are carried out continuously; 
                    {'\n\n'}
                    (b) while carrying out work on a bordering property, unless: 
                    {'\n'}
                    (i) the vehicle is special mobile equipment, a truck or a commercial vehicle required to carry out the work;  
                    {'\n'}
                    (ii) the work is carried out continuously; 
                    {'\n\n'}
                    (c) unless he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States; 
                    {'\n\n'}
                    (2) more than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, unless the vehicle is a commercial vehicle. 
                    {'\n\n'}
                    (3) more than 15 minutes, to pick up or deliver mail or small parcels with that vehicle if it is a taxi.  
                    {'\n\n'}
                    The exceptions provided for in the first paragraph do not apply counter to signs that prohibit parking:   
                    {'\n\n'}
                    (1) near a work area or for special events or for road maintenance operations;
                    {'\n\n'}
                    (2) near a school, a playground or a park. 
                    {'\n\n'}
                    Any driver of a road vehicle may park for 30 minutes without paying the fees required under articles 46 and 55, provided he meets the conditions in subparagraph (a) of paragraph 1 of the first paragraph, and for 15 minutes, provided he meets the conditions of paragraph 2 or 3 of that paragraph. 
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30, any driver of a hearse transporting a casket may park near the funeral home or religious establishment during the funeral ceremony.
                    {'\n\n'}
                    <Bold>S. 2 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    “commercial vehicle” means a motor vehicle owned by a legal person, other than a truck, a bus, a minibus or a vehicle referred to in subparagraphs 2 to 11 of the first paragraph of section 102; (véhicule commercial).
                    {'\n\n'}
                    <Bold>S. 102 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    With the exception of motorcycles and mopeds, the licence plate of the following road vehicles shall bear the prefix “F” or “FZ”:
                    {'\n\n'}
                    (1)  commercial vehicles; 
                    {'\n\n'}
                    (2)  vehicles engaged in the transportation of schoolchildren; 
                    {'\n\n'}
                    (3)  road vehicles owned by a driving school or an educational institution holding a permit to dispense instruction in the driving of heavy trucks issued pursuant to section 10 of the Act respecting private education (chapter E-9.1); 
                    {'\n\n'}
                    (4)  snowblowers; 
                    {'\n\n'}
                    (5)  farm motor vehicles with a net weight of 3,000 kg or less; 
                    {'\n\n'}
                    (6)  motor homes belonging to a legal person and motor homes with a net weight of more than 3,000 kg belonging to a natural person using it mainly for personal purposes; 
                    {'\n\n'}
                    (7)  special mobile equipment and special mobile snow equipment; 
                    {'\n\n'}
                    (8)  tow trucks with a net weight of 3,000 kg or less;
                    {'\n\n'}
                    (9)  tow trucks with a net weight of more than 3,000 kg, used solely for towing a maximum of 2 road vehicles at a time; 
                    {'\n\n'}
                    (10)  ambulances and hearses; 
                    {'\n\n'}
                    (11)  equipment transport vehicles. 
                    {'\n\n'}
                    Equipment transport vehicles may tow trailers carrying only a lifting device or its accessories. 
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
    },
    '49': {
        fr: {
            art: 'Art: 49',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Parcomètre',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par un parcomètre; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le véhicule ne se trouve pas complètement à l’intérieur du périmètre de la place de stationnement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 49 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Quiconque stationne un véhicule routier dans une place de stationnement contrôlée par un parcomètre doit :
                    {'\n\n'}
                    (1) si le parcomètre requiert, pour fonctionner, la manipulation d'un mécanisme, manipuler immédiatement correctement et complètement le mécanisme, jusqu'à la fin de sa course, pour mettre le parcomètre en marche; 
                    {'\n\n'}
                    (2) faire en sorte que les parties extrêmes ou accessoires du véhicule se trouvent à l'intérieur du périmètre de la place de stationnement.  
                    {'\n\n'}
                    Malgré le paragraphe 2 du premier alinéa, lorsque la largeur ou la longueur d'un véhicule routier rend impossible son stationnement à l'intérieur d'une seule place de stationnement, il est permis d'utiliser plus d'une place à condition de payer le tarif requis à chacun des parcomètres visant les places utilisées.
                </Text> 
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 49',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Parking meter',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place controlled by a parking meter; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The vehicle is not completely within the perimeter of the parking space. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 49 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    Every person who parks a motor vehicle in a space controlled by a parking meter must:  
                    {'\n\n'}
                    (1) where the parking meter requires the activation of a mechanism, immediately and properly activate the mechanism to the end of its travel to start the meter;  
                    {'\n\n'}
                    (2) position the vehicle so that its end or accessory parts are within the perimeter of the parking space.  
                    {'\n\n'}
                    Despite paragraph 2 of the first paragraph, where a motor vehicle is too wide or too long to be parked in a single space, more than one space may be used provided the fees for every parking meter are paid.
            </Text>
            ),
            image: 'rm-55+.png',
            analyse: '',
        },
    },
    '51': {
        fr: {
            art: 'Art: 51',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Distributeur',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par un distributeur de tickets; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous aviez payé le stationnement et affiché le ticket à l'intérieur du véhicule, contre le pare-brise avant, du côté gauche, de façon qu'il soit visible et entièrement lisible de l'extérieur. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 51 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Aucun véhicule routier ne peut être stationné dans une place de stationnement contrôlée par un distributeur de tickets de stationnement sans que le tarif du stationnement pour cette place n'ait été payé pour la durée du stationnement.  
                    {'\n\n'}
                    Ce paiement se fait au distributeur, pour la période de stationnement que l’utilisateur entend réserver pour son véhicule, selon l’un ou l’autre des modes suivants: 
                    {'\n\n'}
                    (1) le dépôt de pièces de monnaie canadienne en un montant correspondant au tarif pour la totalité de cette période;
                    {'\n\n'}
                    (2) l’insertion d’une carte de crédit au débit de laquelle l’utilisateur inscrit un montant correspondant au tarif pour la totalité de cette période. 
                    {'\n\n'}
                    Pour attester ce paiement, le ticket de stationnement émis par le distributeur et indiquant la période pour laquelle le tarif du stationnement a été payé doit être placé à l'intérieur du véhicule, contre le pare-brise avant, du côté gauche, de façon qu'il soit visible et entièrement lisible de l'extérieur.     
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 51',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Ticket machine',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place controlled by a ticket machine; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You have paid the parking fees and placed the ticket inside the vehicle, on the left side of the windshield so it is visible from outside. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 51 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked in a parking space controlled by a parking ticket machine unless the parking fees for that space have been paid for the parking period.
                    {'\n\n'}
                    The payment is made by depositing in the ticket machine Canadian coins whose face value corresponds to the numbers indicated on the parking meter. 
                    {'\n\n'}
                    As proof of payment, the parking ticket issued by the ticket machine and specifying the period for which parking fees were paid must be placed inside the vehicle, on the left side of the front windshield, so that it is fully visible and legible from the outside.  
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
    },
    '55': {
        fr: {
            art: 'Art: 55',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Borne de stationnement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par une borne; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un véhicule routier de stationner pour une période d’au plus 30 minutes pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que : </Bold>
                    {'\n\n'}
                    <Bold>(1) Ce véhicule est un camion ou un véhicule commercial. Un véhicule commercial est un véhicule automobile qui appartient à une personne morale (Plaque F). </Bold>
                    {'\n\n'}
                    <Bold>(2) Ces opérations se fassent de façon continue. </Bold>
                    {'\n\n'}
                    <Bold>Cette exception exclue les zones de travaux, d'opérations d’entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al. 3 RRVM C-4.1.</Small>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un véhicule routier de stationner pour une période d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial ou un taxi. Cette exception exclue les zones de travaux, d’opérations d'entretien routier, d'événements spéciaux, de parcs et d’écoles. </Bold>
                    {'\n'}
                    <Small>Référence: art. 33 al. 3 RRVM C-4.1.</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 55 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Aucun véhicule routier ne peut être stationné en un endroit où le stationnement est contrôlé par une borne de stationnement sans que le tarif du stationnement à cet endroit n'ait été payé pour la durée du stationnement. Ce paiement se fait à la borne, pour la période de stationnement que l'utilisateur entend réserver pour son véhicule à la place dont il a enregistré le numéro à la borne, selon l'un ou l'autre des modes suivants: 
                    {'\n\n'}
                    (1) le dépôt de pièces de monnaie canadienne en un montant correspondant au tarif pour la totalité de cette période;  
                    {'\n\n'}
                    (2) l'insertion d'une carte de crédit au débit de laquelle l'utilisateur inscrit un montant correspondant au tarif pour la totalité de cette période.  
                    {'\n\n'}
                    <Bold>Art. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30 et malgré une signalisation indiquant que le stationnement est réservé aux résidants, il est permis au conducteur d'un véhicule routier de stationner pour une période : 
                    {'\n\n'}
                    (1) d'au plus 60 minutes :
                    {'\n\n'}
                    (a) pendant un chargement ou un déchargement de marchandises au moyen de ce véhicule, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un camion ou un véhicule commercial;  
                    {'\n'}
                    (ii) ces opérations se fassent de façon continue; 
                    {'\n\n'}
                    (b) pendant qu'il exécute des travaux sur la propriété riveraine, à condition que :
                    {'\n'}
                    (i) ce véhicule soit un véhicule-outil, un camion ou un véhicule commercial et qu'il soit nécessaire à l'exécution de ces travaux;  
                    {'\n'}
                    (ii) ces travaux se fassent de façon continue; 
                    {'\n\n'}
                    (c) s'il conduit un véhicule muni d'une vignette ou d'une plaque identifiant une personne handicapée, délivrée par l'Office des personnes handicapées du Québec, par la Société de l'assurance-automobile du Québec ou par une autre autorité administrative au Canada ou aux États-Unis;
                    {'\n\n'}
                    (2) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, à condition que ce véhicule soit un véhicule commercial; 
                    {'\n\n'}
                    (3) d'au plus 15 minutes, pendant une cueillette ou une livraison de courrier ou de petit colis effectuée au moyen de ce véhicule, s'il s'agit d'un taxi. 
                    {'\n\n'}
                    Les exceptions prévues au premier alinéa ne s'appliquent pas à l'encontre d'une signalisation interdisant le stationnement :  
                    {'\n\n'}
                    1- à proximité d'une aire de travaux ou aux fins d'événements spéciaux ou d'opérations d'entretien routier;
                    {'\n\n'}
                    2-  près d'une école, d'un terrain de jeu ou d'un parc. 
                    {'\n\n'}
                    Le conducteur d'un véhicule routier peut stationner sans acquitter les droits requis en vertu des articles 46 et 55, durant 30 minutes s'il respecte les conditions prévues au sous-paragraphe (a) du paragraphe 1 du premier alinéa, et durant 15 minutes s'il respecte les conditions prévues aux paragraphes 2 ou 3 de cet alinéa.
                    {'\n\n'}
                    Malgré le paragraphe 1 de l'Art: 30, il est permis au conducteur d'un corbillard transportant un cercueil ou au conducteur d’un véhicule affecté au transport des cendres d’un défunt de stationner près du salon funéraire ou de l'établissement religieux pendant que la cérémonie funèbre est en cours.
                    {'\n\n'}
                    <Bold>Art. 2 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    «véhicule commercial»: un véhicule automobile qui appartient à une personne morale, autre qu’un camion, un autobus, un minibus ou un véhicule visé aux paragraphes 2 à 11 du premier alinéa de l’Art: 102;
                    {'\n\n'}
                    <Bold>Art. 102 Règlement sur l’immatriculation des véhicules routiers: </Bold>
                    {'\n\n'}
                    À l’exception d’un cyclomoteur et d’une motocyclette, la plaque d’immatriculation des véhicules routiers suivants porte le préfixe «F» ou «FZ»:
                    {'\n\n'}
                    1°  un véhicule commercial; 
                    {'\n\n'}
                    2°  un véhicule affecté au transport d’écoliers; 
                    {'\n\n'}
                    3°  un véhicule routier appartenant à une école de conduite ou à un établissement qui détient un permis pour l’enseignement de la conduite de camions lourds délivré en vertu de l’Art: 10 de la Loi sur l’enseignement privé (chapitre E-9.1); 
                    {'\n\n'}
                    4°  une souffleuse à neige; 
                    {'\n\n'}
                    5°  un véhicule de ferme dont la masse nette est de 3 000 kg ou moins; 
                    {'\n\n'}
                    6°  une habitation motorisée appartenant à une personne morale de même que celle qui a une masse nette de plus de 3 000 kg et qui appartient à une personne physique qui l’utilise principalement à des fins personnelles; 
                    {'\n\n'}
                    7°  un véhicule-outil et un véhicule-outil d’hiver; 
                    {'\n\n'}
                    8°  une dépanneuse d’une masse nette de 3 000 kg ou moins; 
                    {'\n\n'}
                    9°  une dépanneuse d’une masse nette de plus de 3 000 kg, utilisée exclusivement pour le dépannage ou le déplacement d’au plus 2 véhicules routiers; 
                    {'\n\n'}
                    10°  une ambulance et un corbillard; 
                    {'\n\n'}
                    11°  un véhicule de transport d’équipement. 
                    {'\n\n'}
                    Un véhicule de transport d’équipement ne peut tirer une remorque qui transporte autre chose qu’un appareil de levage ou ses accessoires. 
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 55',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Pay Station',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place controlled by a pay station; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle may park more less than 30 minutes to load or unload goods from or into a vehicle, as long as: </Bold>
                    {'\n\n'}
                    <Bold>(1) The vehicle is a truck or a commercial vehicle. Commercial vehicle means a motor vehicle owned by a legal person (F plate). </Bold>
                    {'\n\n'}
                    <Bold>(2) The operations are carried out continuously. </Bold>
                    {'\n\n'}
                    <Bold>This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par. 3 RRVM C-4.1. </Small>
                    {'\n\n'}
                    <Bold>• The driver of a road vehicle may park less than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, as long as the vehicle is a commercial vehicle or a taxi. This exception excludes work areas, road maintenance operations, special events, parks and schools. </Bold>
                    {'\n'}
                    <Small>Reference: s. 33 par. 3 RRVM C-4.1. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 55 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No road vehicle may be parked in a place where parking is controlled by a pay station unless the parking fees at that place have been paid for the parking period. The payment is made at the pay station, for the parking period that the user intends to reserve for his vehicle at the space whose number was registered at the pay station, under one of the following modes:  
                    {'\n\n'}
                    (1) by depositing Canadian coins for the amount corresponding to the fees for the full period; 
                    {'\n\n'}
                    (2) by inserting a credit card for which the user enters the amount corresponding to the fees debited for the full period.
                    {'\n\n'}
                    <Bold>S. 33 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30 and despite signs indicating that parking is reserved for residents, no driver of a road vehicle may park:  
                    {'\n\n'}
                    (1) more than 60 minutes: 
                    {'\n\n'}
                    (a) to load or unload goods from or into a vehicle, unless: 
                    {'\n'}
                    (i) the vehicle is a truck or a commercial vehicle;   
                    {'\n'}
                    (ii) the operations are carried out continuously; 
                    {'\n\n'}
                    (b) while carrying out work on a bordering property, unless: 
                    {'\n'}
                    (i) the vehicle is special mobile equipment, a truck or a commercial vehicle required to carry out the work;  
                    {'\n'}
                    (ii) the work is carried out continuously; 
                    {'\n\n'}
                    (c) unless he drives a vehicle bearing a sticker or a plate for persons with disabilities, issued by the Office des personnes handicapées du Québec, the Société de l’assurance-automobile du Québec, or any other administrative authority in Canada or the United States; 
                    {'\n\n'}
                    (2) more than 15 minutes, to pick up or deliver mail or small parcels by means of that vehicle, unless the vehicle is a commercial vehicle. 
                    {'\n\n'}
                    (3) more than 15 minutes, to pick up or deliver mail or small parcels with that vehicle if it is a taxi.  
                    {'\n\n'}
                    The exceptions provided for in the first paragraph do not apply counter to signs that prohibit parking:   
                    {'\n\n'}
                    (1) near a work area or for special events or for road maintenance operations;
                    {'\n\n'}
                    (2) near a school, a playground or a park. 
                    {'\n\n'}
                    Any driver of a road vehicle may park for 30 minutes without paying the fees required under articles 46 and 55, provided he meets the conditions in subparagraph (a) of paragraph 1 of the first paragraph, and for 15 minutes, provided he meets the conditions of paragraph 2 or 3 of that paragraph. 
                    {'\n\n'}
                    Despite paragraph 1 of Art: 30, any driver of a hearse transporting a casket may park near the funeral home or religious establishment during the funeral ceremony.
                    {'\n\n'}
                    <Bold>S. 2 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    “commercial vehicle” means a motor vehicle owned by a legal person, other than a truck, a bus, a minibus or a vehicle referred to in subparagraphs 2 to 11 of the first paragraph of section 102; (véhicule commercial).
                    {'\n\n'}
                    <Bold>S. 102 Regulation respecting road vehicle registration: </Bold>
                    {'\n\n'}
                    With the exception of motorcycles and mopeds, the licence plate of the following road vehicles shall bear the prefix “F” or “FZ”:
                    {'\n\n'}
                    (1)  commercial vehicles; 
                    {'\n\n'}
                    (2)  vehicles engaged in the transportation of schoolchildren; 
                    {'\n\n'}
                    (3)  road vehicles owned by a driving school or an educational institution holding a permit to dispense instruction in the driving of heavy trucks issued pursuant to section 10 of the Act respecting private education (chapter E-9.1); 
                    {'\n\n'}
                    (4)  snowblowers; 
                    {'\n\n'}
                    (5)  farm motor vehicles with a net weight of 3,000 kg or less; 
                    {'\n\n'}
                    (6)  motor homes belonging to a legal person and motor homes with a net weight of more than 3,000 kg belonging to a natural person using it mainly for personal purposes; 
                    {'\n\n'}
                    (7)  special mobile equipment and special mobile snow equipment; 
                    {'\n\n'}
                    (8)  tow trucks with a net weight of 3,000 kg or less;
                    {'\n\n'}
                    (9)  tow trucks with a net weight of more than 3,000 kg, used solely for towing a maximum of 2 road vehicles at a time; 
                    {'\n\n'}
                    (10)  ambulances and hearses; 
                    {'\n\n'}
                    (11)  equipment transport vehicles. 
                    {'\n\n'}
                    Equipment transport vehicles may tow trailers carrying only a lifting device or its accessories. 
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
    },
    '58': {
        fr: {
            art: 'Art: 58',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Terrain privé',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné sur un terrain privé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’aviez pas reçu l’autorisation du propriétaire ou de l’occupant du terrain privé. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 58 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Il est interdit au conducteur d'un véhicule routier de le stationner sur un terrain privé s'il n'y est pas autorisé par le propriétaire ou l'occupant du terrain. Aux fins du présent article, les mots «terrain privé» signifient un emplacement ne faisant pas partie du domaine public de la Ville. 
            </Text>
            ),
            image: 'rm-58.png',
            analyse: '',
        },
        en: {
            art: 'Section 58',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Private lot',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked on a private lot; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not receive the authorization from the owner or the occupant of the lot. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 58 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    No driver of a road vehicle may park on a private lot without the authorization of the owner or occupant of the lot. For the purposes of this article, the words “private lot” mean a site that is not part of public property of the city.
            </Text>
            ),
            image: 'rm-58.png',
            analyse: '',
        },
    },
    '60': {
        fr: {
            art: 'Art: 42',
            type: 'Stationnement',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Parc de stationnement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un stationnement privé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait dans une partie du stationnement non prévu ou non aménagée à une telle fin. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 60 R.R.V.M. c-4.1: </Bold>
                    {'\n\n'}
                    Dans un parc de stationnement auquel le public a accès sur invitation expresse ou tacite, le conducteur d'un véhicule routier ne doit pas stationner dans une partie non prévue ou aménagée à une telle fin. 
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 60',
            type: 'Parking',
            source: 'R.R.V.M. C-4.1',
            infraction: 'Parking lot',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a parking lot; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a part that has not been developed or laid out for that purpose. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was parked in such a way as to hold up or obstruct traffic or the movement of other vehicles. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 60 R.R.V.M. c-4.1:</Bold>
                    {'\n\n'}
                    In a parking lot accessible to the public by express or tacit invitation, no driver of a road vehicle may park in a part that has not been developed or laid out for that purpose, or in such a way as to hold up or obstruct traffic or the movement of other vehicles.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
}

const RM_878 = {
    '61.7': {
        fr: {
            art: 'Art: 61.7',
            type: 'Stationnement',
            source: 'R.M. 878 St-Laurent',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait à un endroit indiqué par un « Signal prohibant le stationnement ». </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule se trouvait à un endroit indiqué par un « Signal de voirie limitant le stationnement ».</Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le véhicule se trouvait à un endroit indiqué par un « Signal de déneigement ». </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 61.7 R.M. 878: </Bold>
                    {'\n\n'}
                    Nul ne peut stationner un véhicule routier: à un endroit indiqué soit par un « Signal prohibant le stationnement », soit par un « Signal de voirie limitant le stationnement » ou soit par un « Signal de déneigement » ou si la situation l’interdit à certaines fins; cette interdiction peut cependant être limitée quant aux heures et aux jours lorsqu'il y a une indication à cet effet sur le panneau d'un tel signal; (modifié par 878-40, a.2) Nonobstant ce qui précède, un véhicule utilisé par une ou plusieurs personnes handicapées pourra être stationné à un endroit indiqué par un « Signal prohibant le stationnement » pendant une période n'excédant pas soixante (60) minutes.  
            </Text>
            ),
            image: 'rm-30-8.png',
            analyse: '',
        },
        en: {
            art: 'Section 61.7',
            type: 'Parking',
            source: 'R.M. 878 St-Laurent',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a place prohibited by a sign. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a place prohibited by a road maintenance sign. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a place prohibited by a snow removal sign. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 61.7 R.M. 878:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Nul ne peut stationner un véhicule routier: à un endroit indiqué soit par un « Signal prohibant le stationnement », soit par un « Signal de voirie limitant le stationnement » ou soit par un « Signal de déneigement » ou si la situation l’interdit à certaines fins; cette interdiction peut cependant être limitée quant aux heures et aux jours lorsqu'il y a une indication à cet effet sur le panneau d'un tel signal; (modifié par 878-40, a.2) Nonobstant ce qui précède, un véhicule utilisé par une ou plusieurs personnes handicapées pourra être stationné à un endroit indiqué par un « Signal prohibant le stationnement » pendant une période n'excédant pas soixante (60) minutes.
            </Text>
            ),
            image: 'rm-30-8.png',
            analyse: '',
        },
    },
    '61.9': {
        fr: {
            art: 'Art: 61.9',
            type: 'Stationnement',
            source: 'R.M. 878 St-Laurent',
            infraction: 'Stationnement temporaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait sur un chemin public plus de trois (3) heures consécutives entre 1h00 et 7h00. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule se trouvait sur un chemin public plus de quatre (4) heures consécutives entre 7h00 et 22h00.</Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était muni d’une vignette permettant le stationnement résident dans ce secteur. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 61.9 R.M. 878: </Bold>
                    {'\n\n'}
                    Nul ne peut stationner un véhicule routier:
                    {'\n\n'}
                    Sur un chemin public plus de trois (3) heures consécutives entre 1h00 et 7h00 et plus de quatre (4) heures entre 7h00 et 20h00, à l'exception des endroits où le stationnement est déjà limité par un « Signal prohibant le stationnement » ou dans une zone de stationnement sur rue réservée aux résidants;    
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 61.9',
            type: 'Parking',
            source: 'R.M. 878 St-Laurent',
            infraction: 'Temporary parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was on a public roadway more than three (3) consecutive hours between 1:00 and 7:00. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was on a public roadway more than four (4) consecutive hours between 7:00 and 22:00. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was equipped with a valid resident sticker according to the sector. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 61.9 R.M. 878:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Nul ne peut stationner un véhicule routier:
                    {'\n\n'}
                    Sur un chemin public plus de trois (3) heures consécutives entre 1h00 et 7h00 et plus de quatre (4) heures entre 7h00 et 20h00, à l'exception des endroits où le stationnement est déjà limité par un « Signal prohibant le stationnement » ou dans une zone de stationnement sur rue réservée aux résidants;  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
}

const RM_2398 ={
    '4.1': {
        fr: {
            art: 'Art: 4.1',
            type: 'Stationnement',
            source: 'R.M. 2398 Côte-St-Luc',
            infraction: 'Stationnement de nuit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans une rue entre 3h AM et 6h AM. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous étiez titulaire d’un permis de stationnement de nuit émis par la Ville. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 4.1 R.M. 2398: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule à moteur dans une rue entre 3 h et 6 h, à moins qu'un permis de stationnement de nuit n'ait été délivré par la Ville. 
            </Text>
            ),
            image: 'rm-2398-4.1.png',
            analyse: '',
        },
        en: {
            art: 'Section 4.1',
            type: 'Parking',
            source: 'R.M. 2398 Côte-St-Luc',
            infraction: 'Overnight parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was on the street between 3:00 AM and 6:00AM.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You had an overnight parking permit issued by the City. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 4.1 R.M. 2398:</Bold>
                    {'\n\n'}
                    It shall be unlawful to Park a Motor Vehicle on a Street between 3:00 AM and 6:00 AM unless an Overnight Parking Permit has been issued by the City. 
            </Text>
            ),
            image: 'rm-2398-4.1.png',
            analyse: '',
        },
    },
}

const RM_1171 = {
    '8.6': {
        fr: {
            art: 'Art: 8.6',
            type: 'Stationnement',
            source: 'R.M. 1171 Outremont',
            infraction: 'Stationnement dans une ruelle',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait dans une ruelle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous étiez en train de charger ou décharger le véhicule. Cette opération doit s’exécuter sans interruption. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 8.6 R.M. 1171: </Bold>
                    {'\n\n'}
                    Stationnement prohibé dans une ruelle.
                    {'\n\n'}
                    Il est défendu de stationner un véhicule dans les ruelles publiques ou privées à l’exception des véhicules que l’on est en train de charger ou de décharger, mais cette opération doit s’exécuter sans interruption.
            </Text>
            ),
            image: 'rm-30-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 8.6',
            type: 'Parking',
            source: 'R.M. 8.6 Outremont',
            infraction: 'Alley parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was on a lane. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You were loading or unloading the vehicle. Operations must be carried out without interruption. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 8.6 R.M. 1171:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Stationnement prohibé dans une ruelle. 
                    {'\n\n'}
                    Il est défendu de stationner un véhicule dans les ruelles publiques ou privées à l’exception des véhicules que l’on est en train de charger ou de décharger, mais cette opération doit s’exécuter sans interruption. 
            </Text>
            ),
            image: 'rm-30-4+.png',
            analyse: '',
        },
    },
    '8.20': {
        fr: {
            art: 'Art: 8.20',
            type: 'Stationnement',
            source: 'R.M. 1171 Outremont',
            infraction: 'Parcomètre',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par une parcomètre, un horodateur ou une borne; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 8.20 R.M. 1171: </Bold>
                    {'\n\n'}
                    Espace de stationnement situé dans une rue d’une durée maximale de deux heures.
                    {'\n\n'}
                    Le tarif horaire applicable pour l’usage d’une place de stationnement située dans une rue contrôlé par un parcomètre, une borne, un horodateur ou tout autre appareil ayant pour fonction de recevoir le paiement du tarif exigé est de 2,00 $ jusqu’à un maximum de deux heures pour les périodes s’étendant du lundi au vendredi de 9 h à 21 h et le samedi de 9 h à 18 h [...].
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 8.20',
            type: 'Parking',
            source: 'R.M. 8.20 Outremont',
            infraction: 'Parcometer',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place controlled by a parco meter, a pay station or any other paying device; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 8.20 R.M. 1171:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Espace de stationnement situé dans une rue d’une durée maximale de deux heures.
                    {'\n\n'}
                    Le tarif horaire applicable pour l’usage d’une place de stationnement située dans une rue contrôlé par un parcomètre, une borne, un horodateur ou tout autre appareil ayant pour fonction de recevoir le paiement du tarif exigé est de 2,00 $ jusqu’à un maximum de deux heures pour les périodes s’étendant du lundi au vendredi de 9 h à 21 h et le samedi de 9 h à 18 h [...].
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
    },
    '8.24.1': {
        fr: {
            art: 'Art: 8.24.1',
            type: 'Stationnement',
            source: 'R.M. 1171 Outremont',
            infraction: 'Terrain privé',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné sur un terrain privé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Vous n’aviez pas reçu l’autorisation du propriétaire ou de l’occupant du terrain privé. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 8.24.1 R.M. 878: </Bold>
                    {'\n\n'}
                    Il est interdit au conducteur d’un véhicule de le stationner ou de l’immobiliser sur un terrain privé s’il n’y est pas autorisé par le propriétaire ou l’occupant du terrain. 
                    {'\n\n'}
                    Aux fins du présent Art: et de l’Art: 8.24.2, on entend par « terrain privé » un emplacement extérieur ne faisant pas partie du domaine public. Cette expression ne vise toutefois pas les terrains de stationnement qui desservent les institutions d’enseignement.  
            </Text>
            ),
            image: 'rm-58.png',
            analyse: '',
        },
        en: {
            art: 'Section 8.24.1',
            type: 'Parking',
            source: 'R.M. 878 Outremont',
            infraction: 'Private lot',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked on a private lot; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> You did not receive the authorization from the owner or the occupant of the lot. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 8.24.1 R.M. 878:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit au conducteur d’un véhicule de le stationner ou de l’immobiliser sur un terrain privé s’il n’y est pas autorisé par le propriétaire ou l’occupant du terrain. 
                    {'\n\n'}
                    Aux fins du présent Art: et de l’Art: 8.24.2, on entend par « terrain privé » un emplacement extérieur ne faisant pas partie du domaine public. Cette expression ne vise toutefois pas les terrains de stationnement qui desservent les institutions d’enseignement.  
            </Text>
            ),
            image: 'rm-58.png',
            analyse: '',
        },
    },
    '8.24.16': {
        fr: {
            art: 'Art: 8.24.16',
            type: 'Stationnement',
            source: 'R.M. 1171 Outremont',
            infraction: 'Immobiliser un véhicule à moins de 5 mètres d’un passage pour piéton',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à moins de 5 mètres d’un passage pour piéton clairement identifié. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 8.24.16 R.M. 878: </Bold>
                    {'\n\n'}
                    Nul ne peut immobiliser un véhicule routier sur un passage pour piétons clairement identifié ni à moins de 5 mètres de celui-ci.  
            </Text>
            ),
            image: 'rm-1171-8.24.16.png',
            analyse: '',
        },
        en: {
            section: 'Section 8.24.16',
            type: 'Parking',
            source: 'R.M. 878 Outremont',
            infraction: 'Stop a vehicle less than 5 metres from a pedestrian crosswalk',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was less than 5 meters from a pedestrian crosswalk. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 8.24.16 R.M. 878:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Nul ne peut immobiliser un véhicule routier sur un passage pour piétons clairement identifié ni à moins de 5 mètres de celui-ci. 
            </Text>
            ),
            image: 'rm-1171-8.24.16.png',
            analyse: '',
        },
    },
    '8.24.24': {
        fr: {
            art: 'Art: 8.24.24',
            type: 'Stationnement',
            source: 'R.M. 1171 Outremont',
            infraction: 'Immobilisation interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était immobilisé à un endroit où le stationnement est interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 8.24.24 R.M. 878: </Bold>
                    {'\n\n'}
                    Nul ne peut immobiliser un véhicule routier dans un endroit où le stationnement est interdit par une signalisation installée conformément au Code de la sécurité routière.  
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
        en: {
            art: 'Section 8.24.24',
            type: 'Parking',
            source: 'R.M. 878 Outremont',
            infraction: 'Prohibited stopping',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where a sign prohibits the parking. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 8.24.24 R.M. 878:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Nul ne peut immobiliser un véhicule routier dans un endroit où le stationnement est interdit par une signalisation installée conformément au Code de la sécurité routière. 
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
    },
    '8.26': {
        fr: {
            art: 'Art: 8.26',
            type: 'Stationnement',
            source: 'R.M. 1171 Outremont',
            infraction: 'Stationnement résident',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où la signalisation indique que le stationnement est réservé aux détenteurs d’un permis. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était muni d’un permis de stationnement valide l’autorisant à se stationner dans le secteur réservé. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 8.26 R.M. 1171: </Bold>
                    {'\n\n'}
                    Le stationnement sur les voies publiques désigné à l’annexe H.1 et par la signalisation appropriée est réservé aux détenteurs d’un permis délivré conformément aux dispositions du présent chapitre. 
                    {'\n\n'}
                    Le permis accordé au résident d’un secteur en vertu de ce chapitre n’est valide que pour le secteur de sa résidence.
            </Text>
            ),
            image: 'rien.png',
            analyse: '',
        },
        en: {
            art: 'Section 8.26',
            type: 'Parking',
            source: 'R.M. 8.6 Outremont',
            infraction: 'Resident parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place and time where signs indicate that parking is reserved resident. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was equipped with a valid parking permit according to the sector. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 8.26 R.M. 1171:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Le stationnement sur les voies publiques désigné à l’annexe H.1 et par la signalisation appropriée est réservé aux détenteurs d’un permis délivré conformément aux dispositions du présent chapitre.  
                    {'\n\n'}
                    Le permis accordé au résident d’un secteur en vertu de ce chapitre n’est valide que pour le secteur de sa résidence.  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
}

const RM_1530 = {
    '31 par. 20': {
        fr: {
            art: 'Art: 31 par. 20',
            type: 'Stationnement',
            source: 'R.M. 1530 Montréal-Nord',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait dans un endroit où le stationnement est interdit par la signalisation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Il s’agissait d’un cas d’urgence. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                    {'\n\n'}
                    <Bold>• Stationnement : immobilisation d'un véhicule pour une période de trois (3) minutes et plus. </Bold>
                    {'\n'}
                    <Small>Référence: art. 11 RM 1530</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 31 par. 20 R.M. 1530: </Bold>
                    {'\n\n'}
                    Sauf en cas d'urgence, il est interdit de stationner un véhicule aux endroits suivants:
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    (20) dans un endroit où le stationnement est interdit par la signalisation;
                    {'\n\n'}
                    <Bold>Art. 11 R.M. 1530: </Bold>
                    {'\n\n'}
                    Stationnement : immobilisation d'un véhicule pour une période de trois (3) minutes et plus.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
        en: {
            art: 'Section 31 (20)',
            type: 'Parking',
            source: 'R.M. 1530 Montréal-Nord',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a place where parking is prohibited by a sign. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• It was a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place. </Bold>
                    {'\n\n'}
                    <Bold>• Parking: immobilization of a vehicle for a period of three (3) minutes and more. </Bold>
                    {'\n'}
                    <Small>Reference: s. 11 RM 1530</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 31 (20) R.M. 1530:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Sauf en cas d'urgence, il est interdit de stationner un véhicule aux endroits suivants:
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    (20) dans un endroit où le stationnement est interdit par la signalisation;
                    {'\n\n'}
                    <Bold>s 11 R.M. 1530: </Bold>
                    {'\n\n'}
                    Stationnement : immobilisation d'un véhicule pour une période de trois (3) minutes et plus.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },

    },
    '31 par. 23': {
        fr: {
            art: 'Art: 31 par. 23',
            type: 'Stationnement',
            source: 'R.M. 1530 Montréal-Nord',
            infraction: 'Déneigement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait dans un endroit interdit par une signalisation temporaire lors d’une opération de déneigement. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule se trouvait dans un endroit interdit par la signalisation permanente. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Il s’agissait d’un cas d’urgence. En d’autres mots, une situation d’urgence pourrait ne vous laisser d’autre choix que d’arrêter votre voiture dans un endroit interdit. </Bold>
                    {'\n\n'}
                    <Bold>• Stationnement : immobilisation d'un véhicule pour une période de trois (3) minutes et plus. </Bold>
                    {'\n'}
                    <Small>Référence: art. 11 RM 1530</Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 31 par. 20 R.M. 1530: </Bold>
                    {'\n\n'}
                    Sauf en cas d'urgence, il est interdit de stationner un véhicule aux endroits suivants:
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    (23) lors de toutes les opérations de déneigement, dans un endroit où le stationnement ou l'immobilisation est interdit par la signalisation permanente ou par une signalisation temporaire lors d'une opération de déneigement. 
                    {'\n\n'}
                    <Bold>Art. 11 R.M. 1530: </Bold>
                    {'\n\n'}
                    Stationnement : immobilisation d'un véhicule pour une période de trois (3) minutes et plus.
            </Text>
            ),
            image: 'rm-30-8.png',
            analyse: '',
        },
        en: {
            art: 'Section 31 (23)',
            type: 'Parking',
            source: 'R.M. 1530 Montréal-Nord',
            infraction: 'Snow removal',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a place prohibited by temporary signs during a snow removal operation. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a place prohibited by permanent signage. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• It was a case of necessity. In other words, an emergency could leave you no choice but to stop your vehicle in a forbidden place. </Bold>
                    {'\n\n'}
                    <Bold>• Parking: immobilization of a vehicle for a period of three (3) minutes and more. </Bold>
                    {'\n'}
                    <Small>Reference: s. 11 RM 1530</Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 31 (23) R.M. 1530:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Sauf en cas d'urgence, il est interdit de stationner un véhicule aux endroits suivants:
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    (23) lors de toutes les opérations de déneigement, dans un endroit où le stationnement ou l'immobilisation est interdit par la signalisation permanente ou par une signalisation temporaire lors d'une opération de déneigement.
                    {'\n\n'}
                    <Bold>s 11 R.M. 1530: </Bold>
                    {'\n\n'}
                    Stationnement : immobilisation d'un véhicule pour une période de trois (3) minutes et plus.
            </Text>
            ),
            image: 'rm-30-8.png',
            analyse: '',
        },

    },
}

const RM_2227 ={
    '22 par. 2': {
        fr: {
            art: 'Art: 22 par. 2',
            type: 'Stationnement',
            source: 'R.M. 2227 Saint-Léonard',
            infraction: 'Immobiliser un véhicule à moins de 5 mètres d’une borne fontaine ou d’un signal d’arrêt',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait à moins de 5 mètres d’une borne fontaine. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule se trouvait à moins de 5 mètres d’un signal d’arrêt. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 22 par. 2 R.M. 2227: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    2° à moins de cinq mètres (5 m) d’une borne-fontaine et d’un signal d’arrêt; 
            </Text>
            ),
            image: '386-2++.png',
            analyse: '',
        },
        en: {
            art: 'Section 22 (2)',
            type: 'Parking',
            source: 'R.M. 2227 Saint-Léonard',
            infraction: 'Stopping a vehicle less than 5 metres from a fire hydrant or a stop sign',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was less than 5 metres from a fire hydrant. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was less than 5 metres from a stop sign. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 22 (2) R.M. 2227:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    2° à moins de cinq mètres (5 m) d’une borne-fontaine et d’un signal d’arrêt;
            </Text>
            ),
            image: '386-2++.png',
            analyse: '',
        },
    },
    '22 par. 4': {
        fr: {
            art: 'Art: 22 par. 4',
            type: 'Stationnement',
            source: 'R.M. 2227 Saint-Léonard',
            infraction: 'Immobiliser un véhicule à moins de 5 mètres d’une intersection ou d’un passage pour piéton',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à moins de 5 mètres d’une intersection. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était à moins de 5 mètres d’un passage pour piéton. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était à moins de 5 mètres d’un passage à niveau. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 22 par. 4 R.M. 2227: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons clairement identifié et sur un passage à niveau ni à moins de 5 mètres de ceux-ci; 
            </Text>
            ),
            image: '386-4++.png',
            analyse: '',
        },
        en: {
            art: 'Section 22 (4)',
            type: 'Parking',
            source: 'R.M. 2227 Saint-Léonard',
            infraction: 'Stopping a vehicle less than 5 metres from a fire hydrant or a stop sign',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was less than 5 meters from an intersection. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was less than 5 meters from a pedestrian crosswalk. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was less than 5 meters from a level crossing. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 22 (4) R.M. 2227:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    4°  dans une intersection, sur un passage pour piétons clairement identifié et sur un passage à niveau ni à moins de 5 mètres de ceux-ci;
            </Text>
            ),
            image: '386-4++.png',
            analyse: '',
        },
    },
    '22 par. 9': {
        fr: {
            art: 'Art: 22 par. 9',
            type: 'Stationnement',
            source: 'R.M. 2227 Saint-Léonard',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit où la signalisation l’interdit. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Il est permis au conducteur d’un véhicule muni d’une vignette identifiant une personne handicapée émise conformément à la loi de stationner ce véhicule pour une période n’excédant pas soixante (60) minutes à tout endroit où la signalisation interdit le stationnement. Cette exception ne s’applique pas lorsque la signalisation interdit l’immobilisation ou le stationnement dans les zones de sécurité incendie, les passages incendie ou les voies d’accès incendie. </Bold>
                    {'\n'}
                    <Small>Référence: art. 38 RM 2227 </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 22 par. 9 R.M. 2227: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    9° dans un endroit où le stationnement est interdit par une signalisation. 
                    {'\n\n'}
                    <Bold>Art. 38 R.M. 2227: </Bold>
                    {'\n\n'}
                    Malgré toute autre disposition du présent règlement, il est permis au conducteur d’un véhicule muni d’une vignette identifiant une personne handicapée émise conformément à la loi de stationner ce véhicule pour une période n’excédant pas soixante (60) minutes à tout endroit où la signalisation interdit le stationnement. 
                    {'\n\n'}
                    Les exceptions prévues au premier alinéa ne s’appliquent pas à l’encontre d’une signalisation interdisant l’immobilisation ou le stationnement dans les zones de sécurité incendie, les passages incendie et les voies d’accès incendie.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
        en: {
            art: 'Section 22 (9)',
            type: 'Parking',
            source: 'R.M. 2227 Saint-Léonard',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was where a sign prohibits the parking. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The driver of a vehicle bearing a sticker identifying a disabled person issued in accordance with the law is authorized to park the vehicle for a period not exceeding sixty (60) minutes at any place where the signs prohibit parking. This exception does not apply where signage prohibits parking in fire safety zones, fire hydrants or fire access lanes. </Bold>
                    {'\n'}
                    <Small>Reference: s. 38 RM 2227 </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 22 (9) R.M. 2227:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    9° dans un endroit où le stationnement est interdit par une signalisation.
                    {'\n\n'}
                    <Bold>S. 38 R.M. 2227: </Bold>
                    {'\n\n'}
                    Malgré toute autre disposition du présent règlement, il est permis au conducteur d’un véhicule muni d’une vignette identifiant une personne handicapée émise conformément à la loi de stationner ce véhicule pour une période n’excédant pas soixante (60) minutes à tout endroit où la signalisation interdit le stationnement.
                    {'\n\n'}
                    Les exceptions prévues au premier alinéa ne s’appliquent pas à l’encontre d’une signalisation interdisant l’immobilisation ou le stationnement dans les zones de sécurité incendie, les passages incendie et les voies d’accès incendie.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },

    },
}

const RCA06_210012 = {
    '29 al. 1': {
        fr: {
            art: 'Art: 29 al. 1',
            type: 'Stationnement',
            source: 'RCA06 210012 Verdun',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où la signalisation l’interdit. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Un véhicule de commerce (Plaque “F”) peut être stationné dans le cas où l’on est en train de charger ou de décharger des marchandises et lorsque cette opération s'effectue sans interruption et ne dure pas plus de 60 minutes. </Bold>
                    {'\n'}
                    <Small>Référence: art.  29 (b) RCA06210012. </Small>
                    {'\n\n'}
                    <Bold>• Un véhicule de commerce (Plaque “F”) peut être stationné dans le cas où l’on est en train de charger ou de décharger des marchandises et lorsque cette opération s'effectue sans interruption et ne dure pas plus de 60 minutes. </Bold>
                    {'\n'}
                    <Small>Référence: art.  29 (a) RCA06210012. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 29 RCA06 210012: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier sur les chemins public aux endroits et aux heures prévus et indiqués à l’annexe “K” laquelle fait partie intégrante des présentes, sauf dans les cas suivants: 
                    {'\n\n'}
                    (a) Le stationnement d’un véhicule routier servant à des travaux d’urgence sur un chemin public ou à des travaux autorisés en vertu du règlement concernant l’occupation l’occupation du domaine public ou du règlement sur les excavations, à la condition que le véhicule routier soit nécessaire à l’excavation de ces travaux et que ces travaux s'accomplissent sans interruption;
                    {'\n\n'}
                    (b) Le stationnement d’un véhicule de commercer dans le cas où l’on est en train de charger ou de décharger des marchandises et lorsque cette opération s'effectue sans interruption et ne dure pas plus de 60 minutes. 
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
        en: {
            art: 'Section 29 par. 1',
            type: 'Parking',
            source: 'RCA06 210012 Verdun',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where and when a sign or signal prohibit the parking. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• A commercial vehicle ("F" plate) may be parked while loading or unloading goods and if this operation is continuous and lasts no more than 60 minutes. </Bold>
                    {'\n'}
                    <Small>Reference: s.  29 (b) RCA06210012. </Small>
                    {'\n\n'}
                    <Bold>• A road vehicle used for emergency work on a public road or for work authorized under the by-law concerning the occupancy of the public domain or the excavation by-law may be parked only if the road vehicle is necessary for the excavation work which is carried out without interruption. </Bold>
                    {'\n'}
                    <Small>Reference: s.  29 (a) RCA06210012. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 29 (1) RCA06 210012:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier sur les chemins public aux endroits et aux heures prévus et indiqués à l’annexe “K” laquelle fait partie intégrante des présentes, sauf dans les cas suivants:
                    {'\n\n'}
                    (a) Le stationnement d’un véhicule routier servant à des travaux d’urgence sur un chemin public ou à des travaux autorisés en vertu du règlement concernant l’occupation l’occupation du domaine public ou du règlement sur les excavations, à la condition que le véhicule routier soit nécessaire à l’excavation de ces travaux et que ces travaux s'accomplissent sans interruption;
                    {'\n\n'}
                    (b) Le stationnement d’un véhicule de commercer dans le cas où l’on est en train de charger ou de décharger des marchandises et lorsque cette opération s'effectue sans interruption et ne dure pas plus de 60 minutes.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
    },
    '33.1': {
        fr: {
            art: 'Art: 33.1',
            type: 'Stationnement',
            source: 'RCA06 210012 Verdun',
            infraction: 'Parcomètre',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par un parcomètre; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Le parcomètre était hors service. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 33.1 RCA06 210012: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier dans un espace de stationnement sur les chemins publics muni d’un parcomètre, décrits à l’annexe “K”m pendant la période décrite dans payer les droits prescrits. Il est interdit de stationner un véhicule routier dans un espace de stationnement muni d’un parcomètre, décrit à l’annexe “K”, lorsque celui-ci est hors service. 
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 33.1',
            type: 'Parking',
            source: 'RCA06 210012 Verdun',
            infraction: 'Parking meter',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place controlled by a parking meter; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The parking meter was out of service. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 33.1 RCA06 210012:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier dans un espace de stationnement sur les chemins publics muni d’un parcomètre, décrits à l’annexe “K”m pendant la période décrite dans payer les droits prescrits. Il est interdit de stationner un véhicule routier dans un espace de stationnement muni d’un parcomètre, décrit à l’annexe “K”, lorsque celui-ci est hors service.
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
    },
    '36 al. 1': {
        fr: {
            art: 'Art: 36 al. 1',
            type: 'Stationnement',
            source: 'RCA06 210012 Verdun',
            infraction: 'Déneigement ou signalisation temporaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait à un endroit prohibé par une pancarte de déneigement. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule se trouvait à un endroit prohibé par une signalisation temporaire. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• L’autorité compétente doit installer une signalisation temporaire prohibant le stationnement au moins quatre (4) heures avant l’exécution de travaux de déneigement et au moins douze (12) heures dans les autres cas. </Bold>
                    {'\n'}
                    <Small>Référence: art. 36 al. 2 RCA06 210012. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 36 al. 1 RCA06 210012: </Bold>
                    {'\n\n'}
                    Le stationnement d’un véhicule routier est interdit dans tous les chemins publics ou parties de chemins publics où ont été placés par l’autorité compétente, une signalisation temporaire prohibant le stationnement pour permettre l'exécution de travaux municipaux, incluant l’enlèvement et le déblaiement de la neige, et pour toute autre raison de nécessité ou d’urgence. 
                    {'\n\n'}
                    Pour les fins de l’application du présent article, l’autorité compétente doit installer une signalisation temporaire prohibant le stationnement au moins quatre (4) heures avant l’exécution de travaux de déneigement et au moins douze (12) heures dans les autres cas.
            </Text>
            ),
            image: 'rm-30-8.png',
            analyse: '',
        },
        en: {
            art: 'Section 36 al. 1',
            type: 'Parking',
            source: 'RCA06 210012 Verdun',
            infraction: 'Snow removal or temporary sign',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a place prohibited by a snow removal sign. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was in a place prohibited by a temporary sign or signal. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• The signs must have been installed at least four (4) hours before the snow removal operation and twelve (12) hours in other cases. </Bold>
                    {'\n'}
                    <Small>Reference: s. 36 par. 2 RCA06 210012. </Small>
                </Text>
            ),           
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 36 RCA06 210012:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Le stationnement d’un véhicule routier est interdit dans tous les chemins publics ou parties de chemins publics où ont été placés par l’autorité compétente, une signalisation temporaire prohibant le stationnement pour permettre l'exécution de travaux municipaux, incluant l’enlèvement et le déblaiement de la neige, et pour toute autre raison de nécessité ou d’urgence.
                    {'\n\n'}
                    Pour les fins de l’application du présent article, l’autorité compétente doit installer une signalisation temporaire prohibant le stationnement au moins quatre (4) heures avant l’exécution de travaux de déneigement et au moins douze (12) heures dans les autres cas.
            </Text>
            ),
            image: 'rm-30-8.png',
            analyse: '',
        },
    },
    '38': {
        fr: {
            art: 'Art: 38',
            type: 'Stationnement',
            source: 'RCA06 210012 Verdun',
            infraction: 'Stationnement dans une ruelle',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans une ruelle. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Vous êtes en train de charger ou de décharger des marchandises d’un véhicule de commerce (Plaque “F”), mais cette opération doit s’exécuter sans interruption et durer moins de soixante (60) minutes. </Bold>
                    {'\n'}
                    <Small>Référence: art. 38 RCA06 210012. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 38 RCA06 210012: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier dans les ruelles publiques, à l’exception du cas où l’on est en train de charger ou de décharger des marchandises d’un véhicule de commerce, mais cette opération doit s’exécuter sans interruption et durer moins de soixante (60) minutes. 
            </Text>
            ),
            image: 'rm-30-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 38',
            type: 'Parking',
            source: 'RCA06 210012 Verdun',
            infraction: 'Alley parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in an alley. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You were loading or unloading goods from a commercial vehicle ("F" plate). This operation must be done without interruption and last less than sixty (60) minutes. </Bold>
                    {'\n'}
                    <Small>Reference: s. 38 RCA06 210012. </Small>
                </Text>
            ),           
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 38 RCA06 210012:</Bold>
                    {'\n\n'}
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule routier dans les ruelles publiques, à l’exception du cas où l’on est en train de charger ou de décharger des marchandises d’un véhicule de commerce, mais cette opération doit s’exécuter sans interruption et durer moins de soixante (60) minutes.
            </Text>
            ),
            image: 'rm-30-4+.png',
            analyse: '',
        },
    },
}

const RM_726 = {
    '49': {
        fr: {
            art: 'Art: 49',
            type: 'Stationnement',
            source: 'R.M. 726 Westmount',
            infraction: 'Stationnement de quatre (4) heures',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné plus de 4 heures. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le stationnement prolongé d’un véhicule-moteur muni d’un autocollant de stationnement valide sera permis dans les rues désignées par l’Autorité compétente en matière de stationnement. </Bold>
                    {'\n'}
                    <Small>Référence: art.  49 A R.M. 726. </Small>
                    {'\n\n'}
                    <Bold>• Au moment de l'infraction le véhicule se trouvait, sans votre consentement, en la possession d'une tierce personne autre que votre chauffeur. </Bold>
                    {'\n'}
                    <Small>Référence: art. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 49 R.M. 726: </Bold>
                    {'\n\n'}
                    Le stationnement de tout véhicule est interdit sur toute rue ou place publique pendant une période de plus de quatre (4) heures.
                    {'\n\n'}
                    <Bold>Art. 49 (A) R.M. 726: </Bold>
                    {'\n\n'}
                    Malgré les dispositions de l’Art: 49, le STATIONNEMENT PROLONGÉ d’un VÉHICULE-MOTEUR muni d’un AUTO-COLLANT DE STATIONNEMENT valide sera permis dans les rues désignées par l’AUTORITÉ.
                    {'\n\n'}
                    <Bold>Art. 72 R.M. 726: </Bold>
                    {'\n\n'}
                    Le propriétaire d'un véhicule automobile sera responsable pour toute infraction commise avec tel véhicule des dispositions de ce règlement, à moins qu'il ne puisse établir qu’au moment de l'infraction le véhicule se trouvait, sans son consentement, en la possession d'une tierce personne autre que son chauffeur.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 49',
            type: 'Parking',
            source: 'R.M. 726 Westmount',
            infraction: 'Four (4) hours parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked longer than 4 hours. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Extended parking of a motor vehicle bearing a valid parking sticker shall be permitted on those streets designated by parking Authority. </Bold>
                    {'\n'}
                    <Small>Reference: s. 49 A R.M. 726. </Small>
                    {'\n\n'}
                    <Bold>• At the time of such violation, the vehicle was, without your consent, in the possession of a third person other than your chauffeur. </Bold>
                    {'\n'}
                    <Small>Reference: s. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 49 R.M. 726:</Bold>
                    {'\n\n'}
                    No vehicle shall be parked on any street or public place for a period longer than four (4) hours.
                    {'\n\n'}
                    <Bold>S. 49 (A) R.M. 726:</Bold>
                    {'\n\n'}
                    Notwithstanding the provisions of Section 49, EXTENDED PARKING of a MOTOR VEHICLE bearing a valid PARKING STICKER shall be permitted on those streets designated by the PARKING AUTHORITY."
                    {'\n\n'}
                    <Bold>S. 72 R.M. 726:</Bold>
                    {'\n\n'}
                    The owner of a motor vehicle shall be responsible for any violation, committed with such vehicle, of the provisions of this By-law unless he proves that, at the time of such violation, the vehicle was, without his consent, in the possession of a third person other than his chauffeur.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '51': {
        fr: {
            art: 'Art: 51',
            type: 'Stationnement',
            source: 'R.M. 726 Westmount',
            infraction: 'Stationnement à six (6) pouces de la bordure du trottoir',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné à plus de 6 pouces (15 cm) de la bordure du trottoir. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule n’était pas stationné parallèlement au trottoir. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Au moment de l'infraction le véhicule se trouvait, sans votre consentement, en la possession d'une tierce personne autre que votre chauffeur. </Bold>
                    {'\n'}
                    <Small>Référence: art. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 51 R.M. 726: </Bold>
                    {'\n\n'}
                    Aucun véhicule ne sera stationné sur toute rue à moins que le côté du véhicule ne soit parallèle et à pas plus de six (6) pouces de la bordure du trottoir, pourvu toutefois que:
                    {'\n\n'}
                    51.1: Dans un endroit où le stationnement angulaire est permis, ou là où le lieu de stationnement est indiqué par un ou plusieurs signaux ou inscriptions, le véhicule doit être stationné dans l'espace tel qu'établi;
                    {'\n\n'}
                    51.2: Le véhicule ne doit pas être stationné de façon à empêcher le déplacement de tout véhicule déjà stationné à proximité. 
                    {'\n\n'}
                    <Bold>Art. 72 R.M. 726: </Bold>
                    {'\n\n'}
                    Le propriétaire d'un véhicule automobile sera responsable pour toute infraction commise avec tel véhicule des dispositions de ce règlement, à moins qu'il ne puisse établir qu’au moment de l'infraction le véhicule se trouvait, sans son consentement, en la possession d'une tierce personne autre que son chauffeur.
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
        en: {
            art: 'Section 51',
            type: 'Parking',
            source: 'R.M. 726 Westmount',
            infraction: 'Parking six (6) inches from the curb',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked more than 6 inches (15 cm) from the curb. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}You vehicle was not parked parallel to the curb. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• At the time of such violation, the vehicle was, without your consent, in the possession of a third person other than your chauffeur. </Bold>
                    {'\n'}
                    <Small>Reference: s. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 51 R.M. 726:</Bold>
                    {'\n\n'}
                    No vehicle shall be parked on any street unless the side of the vehicle is parallel to and not more than 6 inches from the curb; provided, however that:
                    {'\n\n'}
                    51.1: At a place where angle parking is permitted, or where a parking space is indicated by one or more signs or markings, the vehicle must be parked within the space so indicated; 
                    {'\n\n'}
                    51.2: The vehicle must not be so parked as to prevent the removal of any vehicle already parked in the vicinity
                    {'\n\n'}
                    <Bold>S. 72 R.M. 726:</Bold>
                    {'\n\n'}
                    The owner of a motor vehicle shall be responsible for any violation, committed with such vehicle, of the provisions of this By-law unless he proves that, at the time of such violation, the vehicle was, without his consent, in the possession of a third person other than his chauffeur.
            </Text>
            ),
            image: '383-1+.png',
            analyse: '',
        },
    },
    '52.13': {
        fr: {
            art: 'Art: 52.13',
            type: 'Stationnement',
            source: 'R.M. 726 Westmount',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné à un endroit où une pancarte l’interdit. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Au moment de l'infraction le véhicule se trouvait, sans votre consentement, en la possession d'une tierce personne autre que votre chauffeur. </Bold>
                    {'\n'}
                    <Small>Référence: art. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 52.13 R.M. 726: </Bold>
                    {'\n\n'}
                    Aucun véhicule ne sera stationné sur toute rue ou place publique en deçà d'une zone désignée "STATIONNEMENT INTERDIT". 
                    {'\n\n'}
                    <Bold>Art. 72 R.M. 726: </Bold>
                    {'\n\n'}
                    Le propriétaire d'un véhicule automobile sera responsable pour toute infraction commise avec tel véhicule des dispositions de ce règlement, à moins qu'il ne puisse établir qu’au moment de l'infraction le véhicule se trouvait, sans son consentement, en la possession d'une tierce personne autre que son chauffeur.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
        en: {
            art: 'Section 52.13',
            type: 'Parking',
            source: 'R.M. 726 Westmount',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked where signs prohibit the parking. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• At the time of such violation, the vehicle was in possession of someone else without your consent. </Bold>
                    {'\n'}
                    <Small>Reference: s. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 52.13 R.M. 726:</Bold>
                    {'\n\n'}
                    No vehicle shall be parked on any street or public place  within a "NO PARKING" zone.
                    {'\n\n'}
                    <Bold>S. 72 R.M. 726:</Bold>
                    {'\n\n'}
                    The owner of a motor vehicle shall be responsible for any violation, committed with such vehicle, of the provisions of this By-law unless he proves that, at the time of such violation, the vehicle was, without his consent, in the possession of a third person other than his chauffeur.
            </Text>
            ),
            image: 'rm-30-1.png',
            analyse: '',
        },
    },
    '52.14': {
        fr: {
            art: 'Art: 52.14',
            type: 'Stationnement',
            source: 'R.M. 726 Westmount',
            infraction: 'Stationnement pour personne handicapée',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où le stationnement est réservé à l’usage exclusif des personnes handicapées. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Au moment de l'infraction le véhicule se trouvait, sans votre consentement, en la possession d'une tierce personne autre que votre chauffeur. </Bold>
                    {'\n'}
                    <Small>Référence: art. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 52.14 R.M. 726: </Bold>
                    {'\n\n'}
                    Aucun véhicule ne sera stationné sur toute rue ou place publique, en deçà d'une zone réservée pour le stationnement par des personnes handicapées sans détenir l'autorisation requise. 
                    {'\n\n'}
                    <Bold>Art. 72 R.M. 726: </Bold>
                    {'\n\n'}
                    Le propriétaire d'un véhicule automobile sera responsable pour toute infraction commise avec tel véhicule des dispositions de ce règlement, à moins qu'il ne puisse établir qu’au moment de l'infraction le véhicule se trouvait, sans son consentement, en la possession d'une tierce personne autre que son chauffeur.
                </Text>
            ),
            image: '388.png',
            analyse: '',
        },
        en: {
            art: 'Section 52.14',
            type: 'Parking',
            source: 'R.M. 726 Westmount',
            infraction: 'Handicapped person parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where parking is reserved for the exclusive use of handicapped persons. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• At the time of such violation, the vehicle was in possession of someone else without your consent. </Bold>
                    {'\n'}
                    <Small>Reference: s. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 52.14 R.M. 726:</Bold>
                    {'\n\n'}
                    No vehicle shall be parked on any street or public place within a zone reserved for parking by handicapped persons, without the required authorization. 
                    {'\n\n'}
                    <Bold>S. 72 R.M. 726:</Bold>
                    {'\n\n'}
                    The owner of a motor vehicle shall be responsible for any violation, committed with such vehicle, of the provisions of this By-law unless he proves that, at the time of such violation, the vehicle was, without his consent, in the possession of a third person other than his chauffeur.
            </Text>
            ),
            image: '388.png',
            analyse: '',
        },
    },
    '52.15': {
        fr: {
            art: 'Art: 52.15',
            type: 'Stationnement',
            source: 'R.M. 726 Westmount',
            infraction: 'Stationnement réservé',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où la signalisation indique que le stationnement est réservé à d’autres véhicules. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule était muni d’un autocollant ou d’un permis valide l’autorisant à se stationner dans le secteur réservé. </Bold>
                    {'\n\n'}
                    <Bold>• Au moment de l'infraction le véhicule se trouvait, sans votre consentement, en la possession d'une tierce personne autre que votre chauffeur. </Bold>
                    {'\n'}
                    <Small>Référence: art. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 52.15 R.M. 726: </Bold>
                    {'\n\n'}
                    Aucun véhicule ne sera stationné sur toute rue ou place publique à l’intérieur d’une zone désignée «STATIONNEMENT RÉSERVÉ» sans détenir l’AUTO-COLLANT DE STATIONNEMENT ou l’autorisation temporaire émise par l’AUTORITÉ COMPÉTENTE EN MATIÈRE DE STATIONNEMENT».  
                    {'\n\n'}
                    <Bold>Art. 72 R.M. 726: </Bold>
                    {'\n\n'}
                    Le propriétaire d'un véhicule automobile sera responsable pour toute infraction commise avec tel véhicule des dispositions de ce règlement, à moins qu'il ne puisse établir qu’au moment de l'infraction le véhicule se trouvait, sans son consentement, en la possession d'une tierce personne autre que son chauffeur.
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
        en: {
            art: 'Section 52.15',
            type: 'Parking',
            source: 'R.M. 726 Westmount',
            infraction: 'Reserved parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place and time where signs indicate that parking is reserved for other vehicles. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was equipped with a valid sticker according to the sector. </Bold>
                    {'\n\n'}
                    <Bold>• At the time of such violation, the vehicle was in possession of someone else without your consent. </Bold>
                    {'\n'}
                    <Small>Reference: s. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
                </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 52.15 R.M. 726:</Bold>
                    {'\n\n'}
                    No vehicle shall be parked on any street or public place within a RESERVED PARKING zone without the required PARKING STICKER or temporary authorization issued by the PARKING AUTHORITY. 
                    {'\n\n'}
                    <Bold>S. 72 R.M. 726:</Bold>
                    {'\n\n'}
                    The owner of a motor vehicle shall be responsible for any violation, committed with such vehicle, of the provisions of this By-law unless he proves that, at the time of such violation, the vehicle was, without his consent, in the possession of a third person other than his chauffeur.
                </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
    },
    '52.16': {
        fr: {
            art: 'Art: 52.16',
            type: 'Stationnement',
            source: 'R.M. 726 Westmount',
            infraction: 'Stationnement temporaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné plus longtemps que ne l’autorise la signalisation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Au moment de l'infraction le véhicule se trouvait, sans votre consentement, en la possession d'une tierce personne autre que votre chauffeur. </Bold>
                    {'\n'}
                    <Small>Référence: art. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 52.16 R.M. 726: </Bold>
                    {'\n\n'}
                    Aucun véhicule ne sera stationné sur toute rue ou place publique, en contravention de la limite de temps permise indiquée aux panneaux de stationnement. (Règlement/By-law 1038). 
                    {'\n\n'}
                    <Bold>Art. 72 R.M. 726: </Bold>
                    {'\n\n'}
                    Le propriétaire d'un véhicule automobile sera responsable pour toute infraction commise avec tel véhicule des dispositions de ce règlement, à moins qu'il ne puisse établir qu’au moment de l'infraction le véhicule se trouvait, sans son consentement, en la possession d'une tierce personne autre que son chauffeur.
            </Text>
            ),
            image: 'rm-31-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 52.16',
            type: 'Parking',
            source: 'R.M. 726 Westmount',
            infraction: 'Temporary parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> At the time of such violation, the vehicle was in possession of someone else without your consent. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• At the time of such violation, the vehicle was in possession of someone else without your consent. </Bold>
                    {'\n'}
                    <Small>Reference: s. 72 R.M. 726. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 52.16 R.M. 726:</Bold>
                    {'\n\n'}
                    No vehicle shall be parked on any street or public place in contravention of the permissible time limit indicated on the parking signs. (Bylaw 1038). 
                    {'\n\n'}
                    <Bold>S. 72 R.M. 726:</Bold>
                    {'\n\n'}
                    The owner of a motor vehicle shall be responsible for any violation, committed with such vehicle, of the provisions of this By-law unless he proves that, at the time of such violation, the vehicle was, without his consent, in the possession of a third person other than his chauffeur.
            </Text>
            ),
            image: 'rm-31-4+.png',
            analyse: '',
        },
    },
}

const RM_2030 = {
    '194.2': {
        fr: {
            art: 'Art: 194.2',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Cégep André-Laurendeau',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule était dans le stationnement du Cégep André-Laurendeau; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné sans autorisation. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous étiez détenteur d’un permis de stationnement valide. Ce permis doit être attaché au miroir de votre véhicule. </Bold>
                    {'\n\n'}
                    <Bold>• Vous aviez un permis de courtoisie. Ce permis doit être affiché sur le tableau de bord. </Bold>
                    {'\n\n'}
                    <Bold>• Stationnement: L'immobilisation d'un véhicule routier sur un chemin public, durant une période de temps de 3 minutes ou plus, pour un motif autre que celui de satisfaire aux exigences de la circulation ou de faire monter ou descendre des passagers. </Bold>
                    {'\n'}
                    <Small>Référence: 44 R.M. 2030. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 194.2 R.M. 2030: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule sur les terrains de stationnement du Cégep André-Laurendeau sans afficher une des autorisations prévues à l’Art: 194.1.
                    {'\n\n'}
                    <Bold>Art. 194.1 R.M. 2030: </Bold>
                    {'\n\n'}
                    Le stationnement d’un véhicule est autorisé sur les terrains de stationnement du Cégep André- Laurendeau aux endroits prévus à cet effet par une signalisation :
                    {'\n\n'}
                    en affichant un permis valide au miroir avant, de façon à ce qu’il soit visible de l’extérieur ou;
                    {'\n\n'}
                    en affichant sur le tableau de bord, côté conducteur, un billet distribué par un horodateur sur paiement du tarif établi ou;
                    {'\n\n'}
                    en affichant sur le tableau de bord, côté conducteur, un permis de courtoisie ou;
                    {'\n\n'}
                    en affichant sur le tableau de bord, côté conducteur, un billet attestant du paiement des frais exigibles.
                    {'\n\n'}
                    <Bold>Art. 44 R.M. 2030: </Bold>
                    {'\n\n'}
                    Stationnement L'immobilisation d'un véhicule routier sur un chemin public, durant une période de temps de 3 minutes ou plus, pour un motif autre que celui de satisfaire aux exigences de la circulation ou de faire monter ou descendre des passagers.
            </Text>
            ),
            image: 'rm-2030-194.png',
            analyse: '',
        },
        en: {
            art: 'Section 194.2',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Cégep André-Laurendeau',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was in the parking lot of the Cégep André-Laurendeau; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked without authorization.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• You had a valid parking permit. This permit must be attached to the mirror of your vehicle. The proof of that permit may be relevant. </Bold>
                    {'\n\n'}
                    <Bold>• You had a courtesy permit. This permit must be posted on the dashboard. </Bold>
                    {'\n\n'}
                    <Bold>• Parking : The immobilization of a road vehicle on a public road, for a period of time of 3 minutes or more, for an other reasons than meeting the requirements of traffic or getting passengers on and off the vehicle. </Bold>
                    {'\n'}
                    <Small>Reference: 44 R.M. 2030. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 194.2 R.M. 2030:</Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule sur les terrains de stationnement du Cégep André-Laurendeau sans afficher une des autorisations prévues à l’Art: 194.1.
                    {'\n\n'}
                    <Bold>Art. 194.1 R.M. 2030: </Bold>
                    {'\n\n'}
                    Le stationnement d’un véhicule est autorisé sur les terrains de stationnement du Cégep André- Laurendeau aux endroits prévus à cet effet par une signalisation :
                    {'\n\n'}
                    en affichant un permis valide au miroir avant, de façon à ce qu’il soit visible de l’extérieur ou;
                    {'\n\n'}
                    en affichant sur le tableau de bord, côté conducteur, un billet distribué par un horodateur sur paiement du tarif établi ou;
                    {'\n\n'}
                    en affichant sur le tableau de bord, côté conducteur, un permis de courtoisie ou;
                    {'\n\n'}
                    en affichant sur le tableau de bord, côté conducteur, un billet attestant du paiement des frais exigibles.
                    {'\n\n'}
                    <Bold>Art. 44 R.M. 2030: </Bold>
                    {'\n\n'}
                    Stationnement L'immobilisation d'un véhicule routier sur un chemin public, durant une période de temps de 3 minutes ou plus, pour un motif autre que celui de satisfaire aux exigences de la circulation ou de faire monter ou descendre des passagers.
            </Text>
            ),
            image: 'rm2030-194.png',
            analyse: '',
        },
    },
    '195 par. 7': {
        fr: {
            art: 'Art: 195 par. 7',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Immobiliser un véhicule à moins de 5 mètres d’une intersection',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à moins de 5 mètres d’une intersection. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 195 par. 7 R.M. 2030: </Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    dans une intersection ni à moins de cinq mètres (5 m) de celle-ci.
            </Text>
            ),
            image: '386-4++.png',
            analyse: '',
        },
        en: {
            art: 'Section 195 (7)',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Stopping less than 5 metres from an intersection',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was less than 5 meters from an intersection.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 195 par. 7 R.M. 2030:</Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    dans une intersection ni à moins de cinq mètres (5 m) de celle-ci.
            </Text>
            ),
            image: '386-4++.png',
            analyse: '',
        },
    },
    '195 par. 27': {
        fr: {
            art: 'Art: 195 par. 27',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné à un endroit où une pancarte l’interdit. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 195 par. 27 R.M. 2030: </Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    Aux endroits où une signalisation interdit le stationnement ou l'immobilisation; à ces mêmes endroits, la Ville peut émettre une directive à l'aide d'une signalisation adéquate autorisant le stationnement, dans le cas où elle n'entrevoit pas faire de travaux municipaux tels un nettoyage de rue ou l'enlèvement de la neige.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 195 par. 27',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked where sign prohibit the parking.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 195 par. 27 R.M. 2030:</Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    Aux endroits où une signalisation interdit le stationnement ou l'immobilisation; à ces mêmes endroits, la Ville peut émettre une directive à l'aide d'une signalisation adéquate autorisant le stationnement, dans le cas où elle n'entrevoit pas faire de travaux municipaux tels un nettoyage de rue ou l'enlèvement de la neige.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '195 par. 28': {
        fr: {
            art: 'Art: 195 par. 28',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Stationnement temporaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était stationné plus longtemps que ne l’autorise la signalisation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 195 par. 28 R.M. 2030: </Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    au-delà de la limite de temps indiquée par la signalisation appropriée.
            </Text>
            ),
            image: 'rm-31-4+.png',
            analyse: '',
        },
        en: {
            art: 'Section 195 par. 28',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Temporary parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was parked longer than the prescribed period when a limited period is indicated on signs.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 195 par. 28 R.M. 2030:</Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    au-delà de la limite de temps indiquée par la signalisation appropriée.
            </Text>
            ),
            image: 'rm-31-4+.png',
            analyse: '',
        },
    },
    '195 par. 39': {
        fr: {
            art: 'Art: 195 par. 39',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Cases de stationnement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était au-delà des cases de stationnement marquées sur la chaussée. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule était sur une chaussée marquée de hachures. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 195 par. 39 R.M. 2030: </Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    Au-delà des cases de stationnement marquées sur la chaussée et sur une chaussée marquée de hachures. 
            </Text>
            ),
            image: 'rm2030-195-39.png',
            analyse: '',
        },
        en: {
            art: 'Section 195 par. 39',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Marked parking places',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was beyond the marked parking spaces on the roadway.
                    </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}This vehicle was on a roadway marked with hatching. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 195 par. 39 R.M. 2030:</Bold>
                    {'\n\n'}
                    Outre les cas ou une autre disposition du présent règlement l'y oblige, nul ne peut immobiliser ou stationner un véhicule routier : 
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    Au-delà des cases de stationnement marquées sur la chaussée et sur une chaussée marquée de hachures.
            </Text>
            ),
            image: 'rm2030-195-39.png',
            analyse: '',
        },
    },
    '198': {
        fr: {
            art: 'Art: 198',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule se trouvait à un endroit prohibé par des enseignes temporaires. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 198 R.M. 2030: </Bold>
                    {'\n\n'}
                    Nul ne peut laisser un véhicule routier stationné sur un chemin public où a été placé par le directeur des Travaux publics de la Ville ou ses préposés, des enseignes temporaires prohibant le stationnement.
            </Text>
            ),
            image: 'rm-30-8+.png',
            analyse: '',
        },
        en: {
            art: 'Section 198',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was in a place prohibited by temporary signs.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 198 R.M. 2030:</Bold>
                    {'\n\n'}
                    Nul ne peut laisser un véhicule routier stationné sur un chemin public où a été placé par le directeur des Travaux publics de la Ville ou ses préposés, des enseignes temporaires prohibant le stationnement. 
            </Text>
            ),
            image: 'rm-30-8+.png',
            analyse: '',
        },
    },
    '225-k': {
        fr: {
            art: 'Art: 225-k',
            type: 'Stationnement',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Stationnement réservé',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où la signalisation indique que le stationnement est réservé à d’autres véhicules. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le véhicule automobile affichait un permis valide, suspendu au miroir avant intérieur dans le cas de l’accroche-miroir ou apposé sur la lunette avant dans le cas de l’autocollant, pour les heures indiquées dans le(s) dit(s) secteur(s). </Bold>
                    {'\n\n'}
                    <Bold>• Stationnement: L'immobilisation d'un véhicule routier sur un chemin public, durant une période de temps de 3 minutes ou plus, pour un motif autre que celui de satisfaire aux exigences de la circulation ou de faire monter ou descendre des passagers. </Bold>
                    {'\n'}
                    <Small>Référence: art. 44 R.M. 2030. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 225-k R.M. 2030: </Bold>
                    {'\n\n'}
                    Il est prohibé de stationner sur une rue du (des) secteur(s) visé(s) à l'Art: 225-J un véhicule automobile n'affichant pas un permis valide, suspendu au miroir avant intérieur dans le cas de l’accroche-miroir ou apposé sur la lunette avant dans le cas de l’autocollant, pour les heures indiquées à l'Art: 225-J dans le(s) dit(s) secteur(s); Quiconque contrevient au présent règlement commet une infraction et est passible, outre des frais, d'une amende tel que prévue à l'Art: 345 du présent règlement.
                    {'\n\n'}
                    <Bold>Art. 44 R.M. 2030: </Bold>
                    {'\n\n'}
                    Stationnement: L'immobilisation d'un véhicule routier sur un chemin public, durant une période de temps de 3 minutes ou plus, pour un motif autre que celui de satisfaire aux exigences de la circulation ou de faire monter ou descendre des passagers. 
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
        en: {
            art: 'Section 225-k',
            type: 'Parking',
            source: 'R.M. 2030 Lasalle',
            infraction: 'Reserved parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place and time where signs indicate that parking is reserved for other vehicles.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• The vehicle was equipped with a valid sticker according to the sector. The permit must hang from the rear view mirror. </Bold>
                    {'\n\n'}
                    <Bold>• Parking : The immobilization of a road vehicle on a public road, for a period of time of 3 minutes or more, for an other reasons than meeting the requirements of traffic or getting passengers on and off the vehicle. </Bold>
                    {'\n'}
                    <Small>Reference: s. 44 R.M. 2030. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only:</Bold>
                    {'\n\n'}
                    <Bold>S. 225-k R.M. 2030:</Bold>
                    {'\n\n'}
                    Il est prohibé de stationner sur une rue du (des) secteur(s) visé(s) à l'Art: 225-J un véhicule automobile n'affichant pas un permis valide, suspendu au miroir avant intérieur dans le cas de l’accroche-miroir ou apposé sur la lunette avant dans le cas de l’autocollant, pour les heures indiquées à l'Art: 225-J dans le(s) dit(s) secteur(s); Quiconque contrevient au présent règlement commet une infraction et est passible, outre des frais, d'une amende tel que prévue à l'Art: 345 du présent règlement. 
                    {'\n\n'}
                    <Bold>S. 44 R.M. 2030:</Bold>
                    {'\n\n'}
                    Stationnement: L'immobilisation d'un véhicule routier sur un chemin public, durant une période de temps de 3 minutes ou plus, pour un motif autre que celui de satisfaire aux exigences de la circulation ou de faire monter ou descendre des passagers.
            </Text>
            ),
            image: 'rm-30-3+.png',
            analyse: '',
        },
    },
}

const RM_1498 = {
    '6 par. 2': {
        fr: {
            art: 'Art: 6 par. 2',
            type: 'Stationnement',
            source: 'R.M. 1498 Westmount',
            infraction: 'Borne de paiement',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par une borne; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 6 par. 2 R.M. 1498: </Bold>
                    {'\n\n'}
                    Lorsqu'un véhicule est stationné dans un espace unitaire de stationnement, le conducteur doit payer immédiatement le montant présent pour le stationnement en utilisant une borne de paiement de stationnement, une application mobile ou tout autre support relié au central. 
                    {'\n\n'}
                    II est interdit à tout conducteur de stationner son véhicule dans un espace unitaire de stationnement sans payer le montant requis pour chaque plaque d'immatriculation ou de s'y stationner une durée supérieure au délai pour lequel le montant requis a été payé.
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 6 (2)',
            type: 'Parking',
            source: 'R.M. 1498 Westmount',
            infraction: 'Pay station',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a place controlled by a pay station; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 6 par. 2 R.M. 1498: </Bold>
                    {'\n\n'}
                    When a vehicle is parked in a parking space unit, the driver shall immediately pay the prescribed parking fee by using a parking pay station, a mobile application or any other means connected to the central station. 
                    {'\n\n'}
                    It is prohibited for a driver to park his or her vehicle in a parking space unit without paying the required fee for each license plate or to remain parked longer than the period for which the required fee has been paid.  
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
    },
}

const RM_1384 = {
    '25 al. 1': {
        fr: {
            art: 'Art: 25 al. 1',
            type: 'Stationnement',
            source: 'R.M. 1384 Ville Mont-Royal',
            infraction: 'Stationnement dans une voie prioritaire',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement réglementé par une borne; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit où la signalisation indique une voie prioritaire pour les véhicules d’urgence. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Le conducteur d’un véhicule routier qui transporte une personne handicapée peut l’immobiliser pour la période de temps requise pour faire monter ou descendre cette personne. Une copie de la vignette de stationnement handicapé peut être pertinente. </Bold>
                    {'\n'}
                    <Small>Référence: art. 30 R.M. 1384. </Small>
                    {'\n\n'}
                    <Bold>• « stationnement » : l’immobilisation volontaire d’un véhicule routier pendant trois (3) minutes ou plus, sauf si une signalisation ou un policier l’impose. </Bold>
                    {'\n'}
                    <Small>Référence: art. 2 R.M. 1384. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 25 al. 1 R.M. 1384: </Bold>
                    {'\n\n'}
                    Le stationnement de tout véhicule routier autre qu’un véhicule d’urgence est prohibé dans les voies de circulation prioritaires visées aux articles 23 et 24.
                    {'\n\n'}
                    Un  véhicule  routier  stationné  en  contravention  du  premier  alinéa  peut  être déplacé ou remorqué conformément à la section VII.
                    {'\n\n'}
                    <Bold>Art. 30 R.M. 1384: </Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues au présent règlement ou la signalisation installée et dans la mesure où cela peut être effectué sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut l’immobiliser pour la période de temps requise pour faire monter ou descendre cette personne.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 25 (1)',
            type: 'Parking',
            source: 'R.M. 1498 Westmount',
            infraction: 'Priority lane parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where signs indicate a priority lane for emergency vehicles.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Despite the prohibitions provided in this bylaw or the sign or signals, the driver of a road vehicle that transports an handicapped person may immobilize the vehicle for the period of time required to get on or off that person, as long as it can be done without danger. </Bold>
                    {'\n'}
                    <Small>Reference: s. 30 R.M. 1384. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>Art. 25 (1) R.M. 1384: </Bold>
                    {'\n\n'}
                    Le stationnement de tout véhicule routier autre qu’un véhicule d’urgence est prohibé dans les voies de circulation prioritaires visées aux articles 23 et 24.
                    {'\n\n'}
                    Un  véhicule  routier  stationné  en  contravention  du  premier  alinéa  peut  être déplacé ou remorqué conformément à la section VII.
                    {'\n\n'}
                    <Bold>Art. 30 R.M. 1384: </Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues au présent règlement ou la signalisation installée et dans la mesure où cela peut être effectué sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut l’immobiliser pour la période de temps requise pour faire monter ou descendre cette personne.  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '28 par. 1': {
        fr: {
            art: 'Art: 28 par. 1',
            type: 'Stationnement',
            source: 'R.M. 1384 Ville Mont-Royal',
            infraction: 'Immobilisation interdite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit où la signalisation interdit le stationnement. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Malgré les interdictions prévues au présent règlement ou la signalisation installée et dans la mesure où cela peut être effectué sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut l’immobiliser pour la période de temps requise pour faire monter ou descendre cette personne. </Bold>
                    {'\n'}
                    <Small>Référence: art. 30 R.M. 1384. </Small>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 28 par. 1 R.M. 1384: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier:
                    {'\n\n'}
                    (1)  en tout endroit et aux heures où la signalisation interdit le stationnement.
                    {'\n\n'}
                    <Bold>Art. 30 R.M. 1384: </Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues au présent règlement ou la signalisation installée et dans la mesure où cela peut être effectué sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut l’immobiliser pour la période de temps requise pour faire monter ou descendre cette personne.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 28 (1)',
            type: 'Parking',
            source: 'R.M. 1498 Westmount',
            infraction: 'No stopping',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was where a sign prohibits the parking.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• Despite the prohibitions provided in this bylaw or the sign or signals, the driver of a road vehicle that transports an handicapped person may immobilize the vehicle for the period of time required to get on or off that person, as long as it can be done without danger. </Bold>
                    {'\n'}
                    <Small>Reference: s. 30 R.M. 1384. </Small>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>Art. 25 (1) R.M. 1384: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier:
                    {'\n\n'}
                    (1)  en tout endroit et aux heures où la signalisation interdit le stationnement.
                    {'\n\n'}
                    <Bold>Art. 30 R.M. 1384: </Bold>
                    {'\n\n'}
                    Malgré les interdictions prévues au présent règlement ou la signalisation installée et dans la mesure où cela peut être effectué sans danger, le conducteur d’un véhicule routier qui transporte une personne handicapée peut l’immobiliser pour la période de temps requise pour faire monter ou descendre cette personne.  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '33 al. 1': {
        fr: {
            art: 'Art: 33 al. 1',
            type: 'Stationnement',
            source: 'R.M. 1384 Ville Mont-Royal',
            infraction: 'Stationnement réservé à l’usage exclusif des personnes handicapées',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était dans un endroit où le stationnement est réservé à l’usage exclusif des personnes handicapés sans y être autorisé. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous avez une vignette d’identification délivrée conformément à l’Art: 11 du Code; </Bold>
                    {'\n\n'}
                    <Bold>• Vous avez une vignette amovible délivrée par l’Office des personnes handicapées du Québec conformément à l’Art: 30.1 de la Loi assurant l’exercice des droits des personnes handicapées (L.R.Q., chapitre E-20.1); </Bold>
                    {'\n\n'}
                    <Bold>• Vous avez toute  forme  de  vignette  ou  de  plaque  identifiant  une  personne  handicapée délivrée par une autre autorité administrative au Canada ou aux États-Unis. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 33 al. 1 R.M. 1384: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier dans un espace de stationnement réservé à l’usage exclusif des personnes handicapées à moins que ce véhicule ne soit muni d’une des vignettes ou plaques suivantes: 
                    {'\n\n'}
                    (1) vignette d’identification délivrée conformément à l’Art: 11 du Code;
                    {'\n\n'}
                    (2) vignette amovible délivrée par l’Office des personnes handicapées du Québec conformément à l’Art: 30.1 de la Loi assurant l’exercice des droits des personnes handicapées (L.R.Q., chapitre E-20.1);
                    {'\n\n'}
                    (3) toute  forme  de  vignette  ou  de  plaque  identifiant  une  personne  handicapée délivrée par une autre autorité administrative au Canada ou aux États-Unis.
            </Text>
            ),
            image: '388.png',
            analyse: '',
        },
        en: {
            art: 'Section 33 (1)',
            type: 'Parking',
            source: 'R.M. 1498 Westmount',
            infraction: 'Parking for the exclusive use of handicapped persons',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where parking is reserved for the exclusive use of handicapped persons without authorization.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exception:</Bold>
                    {'\n\n'}
                    <Bold>• You had a valid identification sticker allowing you to park in handicapped parking spots. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>Art. 33 (1) R.M. 1384: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner ou d’immobiliser un véhicule routier dans un espace de stationnement réservé à l’usage exclusif des personnes handicapées à moins que ce véhicule ne soit muni d’une des vignettes ou plaques suivantes: 
                    {'\n\n'}
                    (1) vignette d’identification délivrée conformément à l’Art: 11 du Code;
                    {'\n\n'}
                    (2) vignette amovible délivrée par l’Office des personnes handicapées du Québec conformément à l’Art: 30.1 de la Loi assurant l’exercice des droits des personnes handicapées (L.R.Q., chapitre E-20.1);
                    {'\n\n'}
                    (3) toute  forme  de  vignette  ou  de  plaque  identifiant  une  personne  handicapée délivrée par une autre autorité administrative au Canada ou aux États-Unis. 
            </Text>
            ),
            image: '388.png',
            analyse: '',
        },
    },
}

const RCG09_029 = {
    '60': {
        fr: {
            art: 'Art: 60',
            type: 'Stationnement',
            source: 'RCG09-029',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un parc régional; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était en dehors d’un terrain de stationnement identifié par des affiches. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 60 RCG09-029: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule en dehors d’un terrain de stationnement identifié à cet effet par des affiches ou aux endroits réservés spécifiquement à d’autres véhicules. Tout véhicule stationné en contravention au présent règlement peut être remorqué aux frais du contrevenant.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 60',
            type: 'Parking',
            source: 'RCG09-029',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a regional park; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was outside of a marked parking lot.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 60 RCG09-029: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule en dehors d’un terrain de stationnement identifié à cet effet par des affiches ou aux endroits réservés spécifiquement à d’autres véhicules. Tout véhicule stationné en contravention au présent règlement peut être remorqué aux frais du contrevenant.   
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
    '62': {
        fr: {
            art: 'Art: 62',
            type: 'Stationnement',
            source: 'RCG09-029',
            infraction: 'Stationnement payant',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace de stationnement payant; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’ont pas été payés. </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• Vous aviez préalablement acquitté le tarif fixé et avez placé le ticket contre le pare-brise avant, du côté gauche, à l’intérieur du véhicule, de façon à être lisible dans son entier de l’extérieur. </Bold>
                    {'\n\n'}
                    <Bold>• Vous aviez un permis de stationnement annuel valide que vous avez placé contre le pare-brise avant, du côté gauche, à l’intérieur du véhicule, de façon à être lisible dans son entier de l’extérieur. </Bold>
                    {'\n\n'}
                    <Bold>• Vous aviez l’original d’un permis temporaire dûment signé par le directeur que vous avez placé contre le pare-brise avant, du côté gauche, à l’intérieur du véhicule, de façon à être lisible dans son entier de l’extérieur. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>Art. 62 RCG09-029: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule dans un terrain de stationnement, à moins d’avoir préalablement acquitté le tarif fixé et d’avoir placé contre le pare-brise avant, du côté gauche, à l’intérieur du véhicule, de façon à être lisible dans son entier de l’extérieur, soit un ticket valide émis par un distributeur automatique, soit un permis annuel de stationnement valide, soit un permis d’occupation ou l’original d’un permis temporaire dûment signé par le directeur. Les tarifs d’utilisation des stationnements sont fixés au règlement annuel sur les tarifs. 
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 62',
            type: 'Parking',
            source: 'RCG09-029',
            infraction: 'Paying parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked  in a paying parking place; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid.
                    </Bold>
                </Text>
            ),
            exceptions: (
                <Text>
                    <Bold>Exceptions:</Bold>
                    {'\n\n'}
                    <Bold>• You paid the parking fees and placed the ticket against the windshield, on the left side, inside the vehicle, so it can be legible in its entirety from the outside. </Bold>
                    {'\n\n'}
                    <Bold>• You had a valid annual parking permit that you placed against the windshield, on the left side, inside the vehicle, so it can be legible in its entirety from the outside. </Bold>
                    {'\n\n'}
                    <Bold>• You had the original version of a temporary permit issued by the director that you placed against the windshield, on the left side, inside the vehicle, so it can be legible in its entirety from the outside. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>S. 62 RCG09-029: </Bold>
                    {'\n\n'}
                    Il est interdit de stationner un véhicule dans un terrain de stationnement, à moins d’avoir préalablement acquitté le tarif fixé et d’avoir placé contre le pare-brise avant, du côté gauche, à l’intérieur du véhicule, de façon à être lisible dans son entier de l’extérieur, soit un ticket valide émis par un distributeur automatique, soit un permis annuel de stationnement valide, soit un permis d’occupation ou l’original d’un permis temporaire dûment signé par le directeur. Les tarifs d’utilisation des stationnements sont fixés au règlement annuel sur les tarifs.  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
}

const RM_685 = {
    '10': {
        fr: {
            art: 'Art: 10',
            type: 'Stationnement',
            source: 'R.M. 685 Westmount',
            infraction: 'Stationnement payant',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un espace payant; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Les frais de stationnement n’étaient pas payés. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 10 R.M. 685: </Bold>
                    {'\n\n'}
                    Il est interdit à tout conducteur de garer son véhicule dans un espace unitaire de stationnement sans payer le montant requis ou de l'y laisser pendant une période d'une durée supérieure au délai pour lequel il a payé le montant requis.  Le compteur doit être équipé d'un indicateur établissant que le paiement n'a pas été déposé ou que la période de temps payée est écoulée.
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
        en: {
            art: 'Section 10',
            type: 'Parking',
            source: 'R.M. 685 Westmount',
            infraction: 'Paying parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked in a paying parking place; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The parking fees were not paid.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 10 R.M. 685: </Bold>
                    {'\n\n'}
                    No vehicle shall be permitted to park in a parking unit without paying the required fee nor remain parked for a period longer than that for which the required fee has been paid. The meter shall be equipped with a signal indicating either that no fee has been paid or that the period paid for has expired.   
            </Text>
            ),
            image: 'rm-55.png',
            analyse: '',
        },
    },
}

const RCG10_009 = {
    '132': {
        fr: {
            art: 'Art: 132',
            type: 'Stationnement',
            source: 'RCG10-009',
            infraction: 'Poste d’attente',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le propriétaire immatriculé du véhicule;
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous êtes un chauffeur autorisé en service régulier; </Bold>
                  </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné dans un poste de taxi en attente aux fins d’un transport rémunéré; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Le taxi n’était pas en service. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous n’avez pas stationné le taxi à l’intérieur des limites du poste d’attente. </Bold>
                    {'\n'}
                    {"     "}OU
                    {'\n'}
                    <Bold>{"     "}Vous avez utilisé un poste d’attente situé sur une voie réservée lorsque cette même voie est en opération. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 132 RCG10-009: </Bold>
                    {'\n\n'}
                    Malgré l’Art: 131, un titulaire d’un permis de propriétaire de taxi en services réguliers, ainsi que tout chauffeur autorisé par ce titulaire à exploiter son véhicule en vertu d’une convention de garde peut, aux fins d’un transport rémunéré, stationner son véhicule à un poste d'attente public, privé ou en commun.
                    {'\n\n'}
                    Sur un poste d’attente, le chauffeur doit stationner un taxi à l’intérieur des limites d’un poste d’attente. 
                    {'\n\n'}
                    Nul ne doit utiliser un poste d’attente situé sur une voie réservée lorsque cette même voie est en opération. 
                    {'\n\n'}
                    La voie réservée est réputée en opération durant les heures indiquées à la signalisation installée à cet effet.
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 132',
            type: 'Parking',
            source: 'RCG10-009',
            infraction: 'Taxi stand',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the holder of a regular service taxi owner’s permit; </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You are authorized by that holder to operate his vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked at a public, private or common stand for the purpose of remunerated transportation; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> The taxi was not in service.
                    </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}The taxi was not parked within the limits of the stand. </Bold>
                    {'\n'}
                    {"     "}OR
                    {'\n'}
                    <Bold>{"     "}You used a stand on a reserved lane when the lane is in operation. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>S. 132 RCG10-009: </Bold>
                    {'\n\n'}
                    Despite Art: 131, the holder of a regular service taxi owner’s permit, as well as any owner authorized by that holder to operate his vehicle under a custody agreement, may, for the purpose of remunerated transportation, park his vehicle at a public, private or common stand.
                    {'\n\n'}
                    At a stand, the driver must park the taxi within the limits of a stand. 
                    {'\n\n'}
                    No driver may use a stand on a reserved lane when the lane is in operation. 
                    {'\n\n'}
                    The reserved lane is deemed to be in operation during the time shown on signs.  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
}

const RM_1333 = {
    '118 par. 17': {
        fr: {
            art: 'Art: 118 par. 17',
            type: 'Stationnement',
            source: 'R.M. 1333 Anjou',
            infraction: 'Stationnement interdit',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes propriétaire immatriculé du véhicule;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été stationné; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était à un endroit et aux heures où la signalisation interdit le stationnement. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 118 par. 17 R.M. 1333: </Bold>
                    {'\n\n'}
                    En outre des autres interdictions prévues au présent chapitre, et sauf en cas de nécessité, nul ne peut stationner un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    (17) à tout autre endroit où une signalisation permanente ou temporaire prohibe le stationnement pendant la période de prohibition indiquée. 
            </Text>
            ),
            image: '386-9+.png',
            analyse: '',
        },
        en: {
            art: 'Section 118 (17)',
            type: 'Parking',
            source: 'R.M. 1333 Anjou',
            infraction: 'No parking',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was parked; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place and time where signs prohibit the parking.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>Art. 118 par. 17 R.M. 1333: </Bold>
                    {'\n\n'}
                    En outre des autres interdictions prévues au présent chapitre, et sauf en cas de nécessité, nul ne peut stationner un véhicule routier :
                    {'\n\n'}
                    [...]
                    {'\n\n'}
                    (17) à tout autre endroit où une signalisation permanente ou temporaire prohibe le stationnement pendant la période de prohibition indiquée.  
            </Text>
            ),
            image: '386-9+.png',
            analyse: '',
        },
    },
    '121 par. 4': {
        fr: {
            art: 'Art: 118 par. 4',
            type: 'Stationnement',
            source: 'R.M. 1333 Anjou',
            infraction: 'Immobilisation interdite',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>trois conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes propriétaire immatriculé du véhicule;</Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule a été immobilisé; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> Ce véhicule était sur la bordure de la chaussée où une signalisation interdit l’arrêt. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 121 R.M. 1333: </Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité, nul ne peut immobiliser un véhicule routier :
                    {'\n\n'}
                    (1) dans une intersection; 
                    {'\n\n'}
                    (2) dans un passage ou traverse pour piétons; 
                    {'\n\n'}
                    (3) sur un trottoir; 
                    {'\n\n'}
                    (4) sur la bordure de la chaussée à tout endroit où une signalisation interdit l’arrêt;  
                    {'\n\n'}
                    (5) dans l’emprise d’une bande cyclable, d’une piste cyclable ou d’un sentier polyvalent, durant la période où celle-ci est opérationnelle, en fonction de la signalisation en place.
            </Text>
            ),
            image: 'rm-26+.png',
            analyse: '',
        },
        en: {
            art: 'Section 121 (4)',
            type: 'Parking',
            source: 'R.M. 1333 Anjou',
            infraction: 'No stopping',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>three conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the registered owner of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> That vehicle was stopped; </Bold>
                    {'\n\n'}
                    <Bold><Color>3-</Color> That vehicle was at a place where signs prohibit stopping.
                    </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>S. 121 R.M. 1333: </Bold>
                    {'\n\n'}
                    Sauf en cas de nécessité, nul ne peut immobiliser un véhicule routier :
                    {'\n\n'}
                    (1) dans une intersection; 
                    {'\n\n'}
                    (2) dans un passage ou traverse pour piétons; 
                    {'\n\n'}
                    (3) sur un trottoir; 
                    {'\n\n'}
                    (4) sur la bordure de la chaussée à tout endroit où une signalisation interdit l’arrêt;  
                    {'\n\n'}
                    (5) dans l’emprise d’une bande cyclable, d’une piste cyclable ou d’un sentier polyvalent, durant la période où celle-ci est opérationnelle, en fonction de la signalisation en place. 
            </Text>
            ),
            image: 'rm-26+.png',
            analyse: '',
        },
    },
}

const RRVM_B3 = {
    '6 par. 2': {
        fr: {
            art: 'Art: 6 par. 2 ',
            type: 'Circulation',
            source: 'R.R.V.M. B-3',
            infraction: 'Régime excessif',
            conditions: (
                <Text>
                    <Bold>L’infraction est commise lorsque les <Color>deux conditions</Color> suivantes sont remplies: </Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> Vous êtes le conducteur du  véhicule; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> Ce véhicule émet du bruit en raison de l’utilisation excessive du moteur. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    Aucun point d'inaptitude
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>Art. 6 R.R.V.M. B-3 : </Bold>
                    {'\n\n'}
                    Outre le bruit mentionné à l'Art: 4, est spécifiquement prohibé : 
                    {'\n\n'}
                    1º le bruit provenant du claquement d'un objet transporté sur le véhicule ou du claquement d'une partie du véhicule;  
                    {'\n\n'}
                    2º le bruit provenant de l'utilisation du moteur d'un véhicule à des régimes excessifs, notamment lors du démarrage ou de l'arrêt, ou produit par des accélérations répétées;  
                    {'\n\n'}
                    3º le bruit provenant de l'utilisation inutile ou abusive d'un sifflet, d'une sirène ou d'un appareil analogue dans un véhicule automobile; 
                    {'\n\n'}
                    4º le bruit excessif ou insolite provenant de la radio ou d'un appareil propre à reproduire des sons dans un véhicule automobile. 
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
        en: {
            art: 'Section 6 (2)',
            type: 'Circulation',
            source: 'R.R.V.M. B-3',
            infraction: 'Excessive motor revving',
            conditions: (
                <Text>
                    <Bold>The offence is committed when the following <Color>two conditions</Color> are met:</Bold>
                    {'\n\n'}
                    <Bold><Color>1-</Color> You are the driver of the vehicle; </Bold>
                    {'\n\n'}
                    <Bold><Color>2-</Color> This vehicle emits noises while the engine is revving excessively. </Bold>
                </Text>
            ),
            point: (
                <Text>
                    No demerit point
            </Text>
            ),
            loi: (
                <Text>
                    <Bold>French only: </Bold>
                    {'\n\n'}
                    <Bold>S. 6 R.R.V.M. B-3 : </Bold>
                    {'\n\n'}
                    Outre le bruit mentionné à l'Art: 4, est spécifiquement prohibé : 
                    {'\n\n'}
                    1º le bruit provenant du claquement d'un objet transporté sur le véhicule ou du claquement d'une partie du véhicule;  
                    {'\n\n'}
                    2º le bruit provenant de l'utilisation du moteur d'un véhicule à des régimes excessifs, notamment lors du démarrage ou de l'arrêt, ou produit par des accélérations répétées;  
                    {'\n\n'}
                    3º le bruit provenant de l'utilisation inutile ou abusive d'un sifflet, d'une sirène ou d'un appareil analogue dans un véhicule automobile; 
                    {'\n\n'}
                    4º le bruit excessif ou insolite provenant de la radio ou d'un appareil propre à reproduire des sons dans un véhicule automobile.  
            </Text>
            ),
            image: 'rien',
            analyse: '',
        },
    },
}

const infractionsArray = [CSR,RRVM_C41,RM_878,RM_2398,RM_1171,RM_1530, RM_2227,RCA06_210012, RM_726, RM_2030, RM_1498,RM_1384, RCG09_029, RM_685, RCG10_009,RM_1333,RRVM_B3  ]



export const connectInfraction = function(article) {
    let matchArticle 
     infractionsArray.forEach( (arrayItem) => {
        for (let key in arrayItem) {
              let value = arrayItem[key];
              if (article === value.fr.art) {
                matchArticle = value.fr
                return 
              }
          }

    })
    return matchArticle


};
