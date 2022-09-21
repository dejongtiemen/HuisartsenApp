import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton,
  IonList,
  IonTitle,
  IonModal,
  IonPage,
  IonFooter,
} from "@ionic/react";
import React, { useState } from "react";
import KlachtenFormulier from "./Klachtenformulier";


const Agenda: React.FC<{
  datum: string;
  setTijdstip: (tijdstip: string) => void;
  closeAgenda: () => void;
}> = (props) => {
  const [tijdstippen, setTijdstip] = useState([
    { beginTijd: "10:00", eindTijd: "10:10", beschikbaar: false },
    { beginTijd: "10:10", eindTijd: "10:20", beschikbaar: true },
    { beginTijd: "10:20", eindTijd: "10:30", beschikbaar: false },
    { beginTijd: "10:30", eindTijd: "10:40", beschikbaar: true },
    { beginTijd: "10:40", eindTijd: "10:50", beschikbaar: true },
    { beginTijd: "10:50", eindTijd: "11:00", beschikbaar: false },
    { beginTijd: "11:00", eindTijd: "11:10", beschikbaar: true },
    { beginTijd: "11:10", eindTijd: "11:20", beschikbaar: true },
    { beginTijd: "11:20", eindTijd: "11:30", beschikbaar: true },
    { beginTijd: "11:30", eindTijd: "11:40", beschikbaar: false },
    { beginTijd: "11:40", eindTijd: "11:50", beschikbaar: false },
    { beginTijd: "11:50", eindTijd: "12:00", beschikbaar: true },
    { beginTijd: "12:00", eindTijd: "12:10", beschikbaar: true },
    { beginTijd: "12:10", eindTijd: "12:20", beschikbaar: true },
    { beginTijd: "12:20", eindTijd: "12:30", beschikbaar: true },
    { beginTijd: "12:30", eindTijd: "12:40", beschikbaar: false },
  ]);
  const [segment, setSegment] = useState("Kort consult");
  const [gekozentijdstip, setGekozenTijdstip] = useState<string>();
  const [showModal, setShowModal] = useState(false);

  const segmentInputChanged = (event: CustomEvent) => {
    setSegment(event.detail.value);
  };

  function clickTijdstipHandler(tijd: string) {
    props.setTijdstip(tijd);
    setGekozenTijdstip(tijd);
    setShowModal(true);
  }

  function closeKlachtenFormHandler() {
    setShowModal(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonRow>
            <IonCol>
              <IonTitle class="ion-text-center">Agenda</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="ion-text-center">{props.datum}</IonCol>
          </IonRow>
        </IonToolbar>
        <IonSegment value={segment} onIonChange={segmentInputChanged}>
          <IonSegmentButton value="Kort consult">
            <IonLabel>Kort consult</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Lang consult">
            <IonLabel>Lang consult</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        <IonList class="ion-text-center">
          {tijdstippen.map((tijdstip, index) => {
            if (segment === "Kort consult") {
              if (tijdstip.beschikbaar === true) {
                return (
                  <IonRow>
                    <IonCol>
                      <IonButton
                        class="tijdstipBtn"
                        onClick={() =>
                          clickTijdstipHandler(
                            tijdstip.beginTijd + " - " + tijdstip.eindTijd
                          )
                        }
                      >
                        {tijdstip.beginTijd + " - " + tijdstip.eindTijd}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                );
              }
            } else if (segment === "Lang consult") {
              if (
                tijdstip.beschikbaar === true &&
                tijdstippen[index + 1].beschikbaar === true
              ) {
                return (
                  <IonRow>
                    <IonCol>
                      <IonButton
                        class="tijdstipBtn"
                        onClick={() =>
                          clickTijdstipHandler(
                            tijdstip.beginTijd + " - " + tijdstip.eindTijd
                          )
                        }
                      >
                        {tijdstip.beginTijd +
                          " - " +
                          tijdstippen[index + 1].eindTijd}
                      </IonButton>
                    </IonCol>
                  </IonRow>
                );
              } else {
                return;
              }
            }
          })}
        </IonList>

        <IonModal isOpen={showModal}>
          <KlachtenFormulier
            datum={props.datum}
            tijdstip={gekozentijdstip!}
            closeKlachtenForm={closeKlachtenFormHandler}
            closeAgenda={props.closeAgenda}
          ></KlachtenFormulier>
        </IonModal>
      </IonContent>
      <IonFooter class="ion-text-center">
        <IonButton onClick={props.closeAgenda}>Terug</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Agenda;
