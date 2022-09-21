import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import { chatbubbleOutline, helpCircleOutline, homeOutline, settingsOutline } from "ionicons/icons";
import React from "react";


const Header : React.FC<{title:string}>  = props => {

    

    return (
    <IonHeader>
        <IonToolbar color="primary">
            <IonButtons slot="start">
                <IonMenuButton />
                <IonButton routerLink="/page/Home">
                    <IonIcon slot="start" icon={homeOutline} />
                </IonButton>
            </IonButtons>
            <IonTitle class="ion-text-center" size="small">{props.title} </IonTitle>
            <IonButtons slot="end">
                <IonButton>
                    <IonIcon slot="start" icon={settingsOutline} />
                </IonButton>
                <IonButton>
                    <IonIcon slot="start" icon={helpCircleOutline} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
    );
};

export default Header;