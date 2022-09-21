import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
  IonCard,
  IonCol,
  IonRow,
  IonCardContent,
  IonGrid,
  IonText,
} from "@ionic/react";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ConsultAanvraag.css";
import Agenda from "../components/Agenda"
import { consultafspraakStore } from "../consultafspraakStore"


const ConsultAannvraag: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [gekozentijdstip, setGekozenTijdstip] = useState<string>();
  const [klacht, setKlacht] = useState<string>();
  const consultafspraken = consultafspraakStore.useState(s => s.consultafspraken);

  
  interface consultafspraak {
    tijd : string,
    datum : string,
    klacht : string
  }

  function clickDayHandler() {
    setShowModal(true)
  }

  function setTijdstipHandler(tijdstip:string) {
    setGekozenTijdstip(tijdstip);
  }

  function closeAgendaHandler() {
    setShowModal(false);
  }
  
  return (
    <IonPage>
      <Header title="Consultaanvraag" ></Header>
      <IonContent fullscreen={true}>
        <IonGrid>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="small">Kies een datum</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Calendar
         className="calendar"
          locale="nl"
          onChange={onChange}
          value={value}
          onClickDay={clickDayHandler}
          minDate={new Date()}
        ></Calendar>
        <IonRow>
          <IonCol class="ion-text-center">
        <IonText><h4><b>Geplande afspraken</b></h4></IonText>
        </IonCol>
        </IonRow>
        {consultafspraken?.map((afspraak, index) =>{
          if (index == 0){
            
          } else {
              return(
                <IonCard>
                  <IonCardContent>
                  <IonRow>
                    <IonCol>
                      {<p><b>Datum:</b> {afspraak.datum}</p> }
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {<p><b>Tijd:</b> {afspraak.tijd}</p> }
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {<p><b>Klacht:</b> {afspraak.klacht}</p> }
                    </IonCol>
                  </IonRow>
                  </IonCardContent>
                </IonCard>
              );
            }
            })}
            </IonGrid>
      </IonContent>

      <IonModal isOpen={showModal}>
        <Agenda datum={value.toLocaleDateString()} setTijdstip={setTijdstipHandler} closeAgenda={closeAgendaHandler}></Agenda>
      </IonModal>

    </IonPage>

    
  );
};

export default ConsultAannvraag;
