import React from "react";
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow } from "@ionic/react";
import { callOutline } from "ionicons/icons";
import "./Noodoproep.css";

const NoodoproepgeenAuth: React.FC = () => {
  
    return (
    <IonPage>
      <IonContent>
        <IonGrid className="gridNoodoproep">
          <IonRow className="rowNoodoproep" class="ion-text-center">
            <IonCol class="ion-align-self-center">
              <h1>112 bellen...</h1>
              <IonButton color="danger" routerLink="/page/Spoed">
                <IonIcon icon={callOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NoodoproepgeenAuth;