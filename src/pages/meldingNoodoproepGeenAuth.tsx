import React from "react";
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";


const meldingNoodoproepGeenAuth:React.FC = () =>{
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar color="primary" class="ion-text-center">
            <IonTitle>SPOED!!!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-text-center">
          <IonGrid>
          <IonRow class="ion-text-center">
            <IonCol>
          <IonCard>
            <IonCardContent>
              LET OP!!! U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie.
            </IonCardContent>
          </IonCard>
          </IonCol>
          </IonRow>
          <IonRow class="ion-align-items-center">
            <IonCol>
              <IonButton class="spoedBtn" routerLink="/page/Noodoproep">LEVENSBEDREIGENDE SITUATIE</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-align-self-center">
              <IonButton class="spoedBtn" routerLink="/page/VervolgschermSpoed">
                NIET LEVENDBEDREIGEND <br /> MAAR WEL SPOEDEISEND
              </IonButton>
            </IonCol>
          </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter class="ion-text-center">
          <IonButton routerLink="/page/Spoed" expand="full">Terug</IonButton>
        </IonFooter>
      </IonPage>
    );
}

export default meldingNoodoproepGeenAuth;