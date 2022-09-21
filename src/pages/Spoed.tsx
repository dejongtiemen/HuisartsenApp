import React, { useState } from "react";
import {
    IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/Header";
import "../pages/Spoed.css";
import { useHistory } from "react-router";


const Spoed: React.FC = () => {
  let history = useHistory();

  return (
    <IonPage>
      <Header title="SPOED!!!" ></Header>
      <IonContent class="ion-text-center">
        <IonGrid className="gridSpoed">
          <IonRow className="rowSpoed" class="ion-align-items-center">
            <IonCol>
              <IonButton size="large" routerLink="/page/MeldingNoodoproep">
                Alarmeer huisarts
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
            <IonButton expand="full" onClick={() => history.push("/page/Login")}>Annuleer</IonButton>
        </IonFooter>
    </IonPage>
  );
};


export default Spoed;

