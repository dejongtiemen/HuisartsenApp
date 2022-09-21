import React, { useState } from "react";
import {
    IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonPopover,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonPopover,
} from "@ionic/react";
import Header from "../components/Header";
import {
  addOutline,
  caretDownCircleOutline,
  helpOutline,
  medkitOutline,
  receiptOutline,
} from "ionicons/icons";
import { type } from "os";
import { Console } from "console";
import { map } from "@firebase/util";

const MijnMedicijnen: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });
  const [idGekliktMedicijn, setIdGekliktMedicijn] = useState<number>();
  const [showModalBijsluiter, setShowModalBijsluiter] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModalFAQ, setShowModalFAQ] = useState(false);
  const [bijsluiter, setBijsluiter] = useState<string>("");
  const [FAQ, setFAQ] = useState<{Vraag: string, Antwoord:string}[]>();
  const [gesteldeVragen, setGesteldeVragen] = useState<string[]>([]);
  const [medicijnen, setMedicijnen] = useState([
    {
      naam: "nabumeton",
      receptAangevraagd: false,
      vraagGesteld: false,
      Bijsluiter: "Nabumeton stilt pijn, remt ontstekingen en verlaagt koorts." +
     "Bij reumatoïde artritis en artrose (versleten gewrichten)" + 
     "De pijn wordt binnen enkele uren minder. Dit effect houdt meer dan een dag aan. Roodheid en zwelling verminderen binnen week." +
      "Let op: kans op maag- en darmzweren en bloedingen. Bent u ouder dan 70 jaar, heeft u eerder een maag- of darmzweer gehad, of gebruikt u anti-bloedstollingsmedicijnen? Dan heeft u een maagbeschermer nodig. Vraag uw arts of apotheker hiernaar." +
      "Pas op met alcohol. Alcohol vergroot de kans op maagklachten." +
      "Veel wisselwerkingen met andere geneesmiddelen. Vraag uw apotheker of u nabumeton veilig kunt gebruiken met uw andere medicijnen, ook als u die zonder recept heeft gekocht." +
      "Bent u zwanger of wilt u zwanger worden? Vraag aan uw arts of u dit medicijn mag gebruiken. Dit medicijn kan slecht zijn voor de baby. NIET gebruiken bij pijn in de laatste 3 maanden van uw zwangerschap.", 
      FAQ :[
        {
          Vraag: "Wat doet nabumeton en waarbij gebruik ik het?",
          Antwoord: "Nabumeton is een ontstekingsremmende pijnstiller. Dit soort pijnstillers wordt ook wel NSAID's genoemd. Het werkt pijnstillend, ontstekingsremmend en koortsverlagend." +
          "Artsen schrijven het voor bij reumatoïde artritis en artrose."
        },
        {
          Vraag: "Hoe gebruik ik het medicijn?",
          Antwoord: "Omhulde tabletten innemen met een glas water."
        },
        {
          Vraag: "Wat moet ik doen als ik een dosis ben vergeten?",
          Antwoord: "Duurt het nog meer dan 8 uur voor u de volgende dosis normaal inneemt? Neem dan de vergeten dosis alsnog in. Zo niet, sla hem dan over."
        }
      ] 
    },
    {
      naam: "Bactrimel",
      receptAangevraagd: false,
      vraagGesteld: false,
      Bijsluiter: "Co-trimoxazol (trimethoprim met sulfamethoxazol) is een antibioticum. Het doodt bacteriën. Het doodt ook de Pneumocystis-schimmel. Werkt binnen enkele dagen." +
      "Bij infecties van blaas, prostaat, luchtpijp, longen en middenoor. En bij Q-koorts, geslachtsziekten (zoals gonorroe), en maagdarminfecties." +
      "Tabletten: neem in met een glas water." +
      "Drank: goed omschudden voor gebruik. Meet de hoeveelheid af met een maatbekertje of maatlepel." +
      "Gebruikt u het 2 keer per dag? Neem het dan bij het ontbijt en bij de avondmaaltijd. Dan heeft u minder kans op misselijkheid." +
      "Drink anderhalf tot 2 liter vocht per dag. Dan heeft u minder kans op nierstenen door dit medicijn." +
      "Andere bijwerkingen: buikpijn, diarree en een verminderde eetlust. Ook kunt u overgevoelig reageren op zonlicht of UV-licht. Ga niet in de zon tussen 10.00 en 15.00 uur en bescherm u zelf met een zonnebrandmiddel met hoge beschermingsfactor. Ga niet onder de zonnebank." +
      "U kunt allergisch zijn voor dit medicijn. Dit merkt u aan jeukende huiduitslag, blaren op de huid, benauwdheid, een opgezwollen gezicht of flauwvallen. Waarschuw dan een arts." +
      "De kuur duurt meestal tussen de 3 en 14 dagen, soms langer. Maak de hele kuur af. Ook als de infectie over lijkt, want misschien zijn er nog bacteriën of schimmels over.",
      FAQ : [
        {
          Vraag: "Wat doet trimpethoprim en waarbij gebruik ik het?",
          Antwoord: "Trimethoprim en sulfamethoxazol zijn antibiotica. De combinatie heet co-trimoxazol. Het werkt tegen infecties met bacteriën. De combinatie van deze twee antibiotica werkt tegen meer soorten bacteriën dan elk van beide afzonderlijk." +
          "Artsen schrijven co-trimoxazol voor bij infecties met bacteriën. Bijvoorbeeld bronchitis, middenoorontsteking, blaasontsteking, Q-koorts en brucellose (infectie overgedragen door besmette dieren). Artsen schrijven het ook voor bij een longontsteking die door de Pneumocystis-schimmel wordt veroorzaakt."
        },
        {
          Vraag: "Hoe gebruik ik dit medicijn?",
          Antwoord: "Innemen met een glas water. Rond eten innnemen om de kans op misselijkheid te verkleinen. Onderbreek de kuur niet en maak hem helemaal af."
        },
        {
          Vraag: "Wat moet ik doen als ik een dosis ben vergeten?",
          Antwoord: "Duurt het nog meer dan 8 uur voor u de volgende dosis normaal inneemt? Neem dan de vergeten dosis alsnog in. Zo niet, sla hem dan over."
        }
      ]
    },
    {
      naam: "Celebrex",
      receptAangevraagd: false,
      vraagGesteld: false,
      Bijsluiter: "Celecoxib stilt pijn, remt ontstekingen en verlaagt koorts." +
      "Bij gewrichtspijn, reumatoïde artritis en de ziekte van Bechterew. Soms ook gebruikt bij andere soorten pijn, zoals artrose (versleten gewrichten) of menstruatiepijn." +
      "De pijn wordt 1 tot 2 uur na inname minder. De werking houdt 12 tot 24 uur aan. Bij ontstekingen verminderen roodheid en zwelling binnen een tot twee weken." +
      "Let op: kans op maag- en darmzweren en bloedingen. Bent u ouder dan 60 jaar, heeft u eerder een maag- of darmzweer gehad, of gebruikt u anti-bloedstollingsmedicijnen? Dan heeft u een maagbeschermer nodig. Vraag uw arts of apotheker hiernaar" +
      "Pas op met alcohol. Alcohol vergroot de kans op maagklachten." +
      "Veel wisselwerkingen met andere geneesmiddelen. Vraag uw apotheker of u celecoxib veilig kunt gebruiken met uw andere medicijnen, ook medicijnen die u zonder recept heeft gekocht." +
      "Bent u zwanger of wilt u zwanger worden? Vraag aan uw arts of u dit medicijn mag gebruiken. Dit medicijn kan slecht zijn voor de baby. NIET gebruiken bij pijn in de laatste 3 maanden van uw zwangerschap.",
      FAQ : [
        {
          Vraag: "Wat doet celebrex en waarbij gebruik ik het?",
          Antwoord: "Celecoxib is een ontstekingsremmende pijnstiller. Dit soort pijnstillers worden ook wel NSAIDs genoemd. Celecoxib behoort tot een speciale groep NSAID-pijnstillers, namelijk de coxibs." +
          "Het werkt pijnstillend, ontstekingsremmend en koortsverlagend." +
          "Artsen schrijven het voor bij pijn waarbij ook sprake is van een ontsteking, zoals bij gewrichtspijn, reumatoïde artritis en de ziekte van Bechterew. Het wordt soms ook gebruikt bij andere soorten pijn, zoals bij artrose of menstruatiepijn."
        },
        {
          Vraag: "Hoe gebruik ik dit medicijn?",
          Antwoord: "Tijdens of na het eten om de kans op bijwerkingen op de maag te verkleinen. Overleg met de arts over de duur van de inname."
        },
        {
          Vraag: "Wat moet ik doen als ik een dosis ben vergeten?",
          Antwoord: "Duurt het nog meer dan 8 uur voor u de volgende dosis normaal inneemt? Neem dan de vergeten dosis alsnog in. Zo niet, sla hem dan over."
        }
      ]
    },
  ]);

  const receptAanvragen = (id: number) => {
    const nieuwMedicijnen = medicijnen.map((medicijn, index) =>{
        if (index === id) {
            const updatedItem = {
              ...medicijn,
              receptAangevraagd: true,
            };
            console.log(medicijn);
            console.log(id);
            return updatedItem;
          }
    
          return medicijn;
    });

    setMedicijnen(nieuwMedicijnen);
    setShowPopover({ showPopover: false, event: undefined });
  }



  const vraagStellen = () =>{
    setShowAlert(true);
    setShowPopover({ showPopover: false, event: undefined });
  }

  const showBijsluiter = (bijsluiter : string) =>{
    setBijsluiter(bijsluiter);
    setShowModalBijsluiter(true);
    setShowPopover({ showPopover: false, event: undefined });
  }

  const showFAQ = (FAQ : {Vraag: string, Antwoord:string}[]) =>{
    setFAQ(FAQ)
    setShowModalFAQ(true);
    setShowPopover({ showPopover: false, event: undefined });
  }

  

  return (
    <IonPage>
      <Header title="Mijn medicijnen"></Header>
      <IonContent>
        <IonGrid>
        {medicijnen.map((medicijn, index) => {
          return (
            <IonCard key={index}>
              <IonCardContent>
                <IonRow>
                  <IonCol>{medicijn.naam}</IonCol>
                  <IonCol>
                    {medicijn.receptAangevraagd && <p>Recept aangevraagd</p>}
                  </IonCol>
                  <IonButton
                    color="white"
                    fill="clear"
                    expand="block"
                    onClick={(e: any) => {
                      e.persist();
                      setIdGekliktMedicijn(index);
                      setShowPopover({ showPopover: true, event: e });
                    }}
                  >
                    <IonIcon color="primary" icon={caretDownCircleOutline} />
                  </IonButton>
                </IonRow>
              </IonCardContent>

              <IonPopover
                cssClass="my-custom-class"
                event={popoverState.event}
                isOpen={popoverState.showPopover}
                onDidDismiss={() =>
                  setShowPopover({ showPopover: false, event: undefined })
                }
              >
                <IonContent>
                  <IonList>
                    <IonListHeader>
                      <h3>Acties</h3>
                    </IonListHeader>
                    <IonItem
                      button
                      onClick={() => (showBijsluiter(medicijnen[idGekliktMedicijn!].Bijsluiter))}
                    >
                      Bijsluiter
                    </IonItem>
                    <IonItem
                      button
                      onClick={() => (receptAanvragen(idGekliktMedicijn!))}
                    >
                      Nieuw recept aanvragen
                    </IonItem>
                    <IonItem button onClick={() => vraagStellen()}>
                      Vraag stellen over gebruik
                    </IonItem>
                    <IonItem button onClick={() => showFAQ(medicijnen[idGekliktMedicijn!].FAQ)}>
                      FAQ
                    </IonItem>
                  </IonList>
                </IonContent>
              </IonPopover>
            </IonCard>
          );
        })}

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass="my-custom-class"
          header={"Stel een vraag"}
          inputs={[
            {
              name:"vraag",
              type: "textarea",
            },
          ]}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
            },
            {
              text: "verzend",
              handler: (alertData) => {
                setGesteldeVragen( gesteldeVragen => [...gesteldeVragen, alertData.vraag]);
              }
            },
          ]}
        />

        <IonModal isOpen={showModalBijsluiter}>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Bijsluiter</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonRow>
              <IonCol className="ion-margin">
            <IonTextarea>{bijsluiter}</IonTextarea>
            </IonCol>
            </IonRow>
          </IonContent>
          <IonButton onClick={() => setShowModalBijsluiter(false)}>Sluiten</IonButton>
        </IonModal>

        <IonModal isOpen={showModalFAQ}>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>FAQ</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {FAQ?.map((qa, index) =>{
              return(
                <IonCard>
                  <IonRow>
                    <IonCol>
                      {<p><b>Vraag:</b> {qa.Vraag}</p> }
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {<p><b>Antwoord:</b> {qa.Antwoord}</p> }
                    </IonCol>
                  </IonRow>
                </IonCard>
              );
            })}
          </IonContent>
          <IonButton onClick={() => setShowModalFAQ(false)}>Sluiten</IonButton>
        </IonModal>

        <IonRow>
          <IonCol class="ion-text-center">
        <IonText><h4><b>Gestelde vragen</b></h4></IonText>
        </IonCol>
        </IonRow>
        {gesteldeVragen?.map((vraag, index) =>{
              return(
                <IonCard>
                  <IonCardContent>
                  <IonRow>
                    <IonCol>
                      {<p><b>Vraag:</b> {vraag}</p> }
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {<p><b>Antwoord:</b> Nog geen antwoord ontvagen</p> }
                    </IonCol>
                  </IonRow>
                  </IonCardContent>
                </IonCard>
              );
            })}
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MijnMedicijnen;
