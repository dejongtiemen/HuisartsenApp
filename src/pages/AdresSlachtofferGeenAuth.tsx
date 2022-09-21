import {
    IonAlert,
    IonButton,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonItemDivider,
    IonList,
    IonListHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { warningOutline } from "ionicons/icons";
  import React, { useState } from "react";
  import Header from "../components/Header";
  
  const AdresSlachtofferGeenAuth: React.FC = () => {
    const [plaats, setPlaats] = useState<string>();
    const [straat, setStraat] = useState<string>();
    const [nummer, setNummer] = useState<string>();
    const [showAlertError, setShowAlertError] = useState<boolean>(false);
    const [showAlertSucces, setShowAlertSucces] = useState<boolean>(false);
  
    const submit = () => {
      if (!plaats || !straat || !nummer ) {
          setShowAlertError(true);
      }
      else {
          setShowAlertSucces(true);
      }
  }
  
    return (
      <IonPage>
        <IonHeader>
                <IonToolbar color="primary" className="ion-text-center">
                    <IonTitle>SPOED!!!</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent>
          <IonGrid>
          <IonList>
            <IonListHeader>Geef uw adres door:</IonListHeader>
            <IonItem>
              <IonInput
                value={plaats}
                placeholder="Plaats"
                onIonChange={(e) => setPlaats(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                value={straat}
                placeholder="Straat"
                onIonChange={(e) => setStraat(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                value={nummer}
                placeholder="Huisnummer"
                onIonChange={(e) => setNummer(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonRow class="ion-text-center">
              <IonCol>
                <IonButton onClick={() => submit()} class="spoedBtn">Doorgeven</IonButton>
              </IonCol>
            </IonRow>
            <IonRow class="ion-text-center">
              <IonCol>
            <IonButton routerLink="/page/AdresSlachtofferMap" class="spoedBtn">Ik ben niet op een adres, ga naar <br/> de locatie van dit apparaat</IonButton>
            </IonCol>
            </IonRow>
          </IonList>
          </IonGrid>
        </IonContent>
        <IonFooter>
        <IonButton expand="full" routerLink="/page/VervolgschermSpoed">Terug</IonButton>
        </IonFooter>
  
        <IonAlert
                      isOpen={showAlertError}
                      onDidDismiss={() => setShowAlertError(false)}
                      cssClass='my-custom-class'
                      header={'Error'}
                      subHeader={''}
                      message={'Vul alle velden in.'}
                      buttons={['OK']}
                  />
  
                  <IonAlert
                      isOpen={showAlertSucces}
                      onDidDismiss={() => setShowAlertSucces(false)}
                      cssClass='my-custom-class'
                      header={'Succes'}
                      subHeader={''}
                      message={'Er is hulp onderweg, blijf waar u bent'}
                      buttons={['OK']}
                  />
  
      </IonPage>
    );
  };
  
  export default AdresSlachtofferGeenAuth;
  