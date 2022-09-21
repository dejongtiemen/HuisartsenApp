import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";

const Home: React.FC = () => {
  

  return (
    <IonPage>
      <Header title="Home"></Header>

      <IonContent fullscreen>
        <IonGrid>
        <IonList>
        <IonRow>
            <IonCol className="ion-text-center">
            <IonText><h4><b>Nieuws van uw huisarts</b></h4></IonText>
            </IonCol>
        </IonRow>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Covid vaccinatie</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Op dindag en donderdag is er van 16:00 tot 17:00 een 
              inloopuur voor een 1e of 2e vaccinatie. U bent zonder afspraak welkom.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Tijdelijke vervanger Dr. koekoek</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Vanaf 1 november gaat Dr. Koekoek met vaderschapsverlof. Hij wordt tijdelijk vervangen
              door Dr. Kim.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Covid maatregelen</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Let erop dat u in de praktijk altijd een mondkapje draagt
              en bij binnenkomst uw handen desinfecteert.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Nieuwe stoelen wachtkamer</IonCardTitle>
            </IonCardHeader>
            <IonImg src="https://www.super-seat.com/wp-content/uploads/2020/08/velvet-velours-fluwelen-eetkamer-design-stoelen-kuipstoelen-parma-stoel.jpg"/>
            <IonCardContent>
              De wachtkamer is voorzien van nieuw stoelen!
            </IonCardContent>
          </IonCard>
        </IonList>
        
        <IonInfiniteScroll>
          <IonInfiniteScrollContent loadingSpinner="circular" />
        </IonInfiniteScroll>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
