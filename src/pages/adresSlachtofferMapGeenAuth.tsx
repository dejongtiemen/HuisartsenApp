import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Header from "../components/Header";
import { Geolocation } from "@capacitor/geolocation";
import { Marker } from "@react-google-maps/api";

const AdresSlachtofferMapGeenAuth: React.FC = () => {
  const [lat, getLat] = useState<number>(0);
  const [lng, getLng] = useState<number>(0);
  const [zoom, setZoom] = React.useState(3); // initial zoom

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat,
    lng,
  };

  const CurrentPosition = async () => {
    // get the users current position
    const position = await Geolocation.getCurrentPosition();

    // grab latitude & longitude

    getLat(position.coords.latitude);
    getLng(position.coords.longitude);

    console.log("positie:" + lat + " " + lng);
  };

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar color="primary" className="ion-text-center">
          <IonTitle>SPOED!!!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scroll-y="false">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h4>Er is hulp onderweg, blijf waar u bent</h4>
            </IonCol>
          </IonRow>
          </IonGrid>
              <LoadScript googleMapsApiKey="AIzaSyDVTSYWpPAl0ROU_KnqA7U8AfRuHDn_WcE">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                  onLoad={CurrentPosition}
                >
                  <Marker onLoad={onLoad} position={center} />
                </GoogleMap>
              </LoadScript>
      </IonContent>
      <IonFooter class="ion-text-center">
        <IonButton routerLink="/page/AdresSlachtoffer" expand="full">
          Terug
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default AdresSlachtofferMapGeenAuth;
