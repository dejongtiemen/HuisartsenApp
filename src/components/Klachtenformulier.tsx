import {
  IonAlert,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { consultafspraakStore } from "../consultafspraakStore"

const KlachtenFormulier: React.FC<{
  datum: string;
  tijdstip: string;
  closeKlachtenForm: () => void;
  closeAgenda: () => void;
}> = (props) => {
  const [klacht, setKlacht] = useState<string>();
  const [showAlertError, setShowAlertError] = useState<boolean>(false);
  const [showAlertVerzenden, setShowAlertVerzenden] = useState<boolean>(false);
  const [showAlertSucces, setShowAlertSucces] = useState<boolean>(false);

  const consultafspraken = consultafspraakStore.useState(s => s.consultafspraken);

  function clickVerzendenHandler() {
    if (!klacht) {
      setShowAlertError(true);
    } else {
      const newConsultafspraken = [
        ...consultafspraken,
        {
          datum : props.datum,
          tijd : props.tijdstip,
          klacht: klacht,
        }
      ] 

      consultafspraakStore.update(s => {
        s.consultafspraken = newConsultafspraken
      })
      
      setShowAlertVerzenden(true);
    }
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle class="ion-text-center">Klachtenformulier</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTextarea
          value={klacht}
          onIonChange={(e) => setKlacht(e.detail.value!)}
          rows={27}
          placeholder="Vul uw klacht in"
        ></IonTextarea>

        <IonAlert
          isOpen={showAlertError}
          onDidDismiss={() => setShowAlertError(false)}
          cssClass="my-custom-class"
          header={"Error"}
          subHeader={""}
          message={"Vul uw klacht in."}
          buttons={["OK"]}
        />

        <IonAlert
          isOpen={showAlertVerzenden}
          onDidDismiss={() => setShowAlertVerzenden(false)}
          cssClass="my-custom-class"
          header={"Consultafspraak maken?"}
          subHeader={""}
          message={
            "Datum: " +
            props.datum +
            "<br/>" +
            "Tijdstip: " +
            props.tijdstip +
            "<br/>" +
            "Klacht: " +
            klacht
          }
          buttons={[
            {
              text: "OK",
              handler: () => {
                props.closeAgenda();
              },
            },
          ]}
        />
      </IonContent>
      <IonFooter>
        <IonToolbar class="ion-text-center">
          <IonButton onClick={props.closeKlachtenForm}>Terug</IonButton>
          <IonButton onClick={clickVerzendenHandler}>Verzenden</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default KlachtenFormulier;
