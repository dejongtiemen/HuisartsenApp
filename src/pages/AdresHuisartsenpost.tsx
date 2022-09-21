import React from "react";
import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonGrid, IonPage } from "@ionic/react";
import Header from "../components/Header";
import { warningOutline } from "ionicons/icons"

const AdresHuisartsenpost:React.FC = () =>{

    return(
        <IonPage>
            <Header title="SPOED!!!" ></Header>
            <IonContent>
                <IonGrid>
                    <IonCard >
                        <IonCardContent>
                        <h2>Ga naar deze medische post. Men is op de hoogte van uw komst:</h2><br/>
                            <b>Adres:</b><br/>
                            Kranepoort 4,<br/>
                            2831 AK Gouderak
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
            </IonContent>
            <IonFooter class="ion-text-center">
          <IonButton routerLink="/page/VervolgschermSpoed" expand="full">Terug</IonButton>
        </IonFooter>
        </IonPage>
    );
}

export default AdresHuisartsenpost;