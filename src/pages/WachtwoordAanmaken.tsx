import React, { useState } from "react";
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
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const WachtwoordAanmaken: React.FC = () => {
  const [showAlertSucces, setShowAlertSucces] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [email, setGebruikersnaam] = useState<string>('');
  const [wachtwoord, setWachtwoord] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');


  let history = useHistory();

  const auth = getAuth();
  function gebruikerAanmaken (){
  createUserWithEmailAndPassword(auth, email, wachtwoord)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setShowAlertSucces(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..

      switch(errorMessage) {
        case "Firebase: Error (auth/invalid-email)." :{
          setErrorMessage("Ongeldig emailadres");
          break;
        }

        case "Firebase: Password should be at least 6 characters (auth/weak-password)." : {
          setErrorMessage("Het wachtwoord moet tenminste 6 tekens lang zijn.");
          break;
        }

        case "Firebase: Error (auth/email-already-in-use)." : {
          setErrorMessage("Dit email adres is al in gebruik.");
          break;
        }
      }

      setShowAlertError(true);
      console.log(errorMessage);
    })
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">Wachtwoord aanmaken</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
        <IonItem>
          <p>
            Welkom bij de huisartsenzorg app. Maak eerst een account aan:
          </p>
        </IonItem>
        <IonItem>
          <IonLabel>email:</IonLabel>
          <IonInput
            type="text"
            id="inputGebruikersnaam"
            onIonChange={(e: any) => setGebruikersnaam(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Wachtwoord:</IonLabel>
          <IonInput
            type="password"
            id="inputWachtwoord"
            onIonChange={(e: any) => setWachtwoord(e.target.value)}
          ></IonInput>
        </IonItem>
        <IonRow class="ion-text-center">
          <IonCol>
            <IonButton onClick={gebruikerAanmaken}>Aanmaken</IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
            <IonCol>
              <p style={{ fontSize: "medium" }}>
                Heb je al een account?{" "}
                <a href="/page/Login">Inloggen</a>
              </p>
            </IonCol>
          </IonRow>
          </IonGrid>
      </IonContent>
      <IonFooter>
        <IonButton expand="full" routerLink="/page/Spoed">
          SPOED
        </IonButton>
      </IonFooter>
      <IonAlert
        isOpen={showAlertSucces}
        onDidDismiss={() => setShowAlertSucces(false)}
        header={"Succes"}
        message={"wachtwoord en gebruikersnaam aangemaakt"}
        buttons={[
          {
            text: "OK",
            handler: () => {
              history.push("/page/Login");
            },
          },
        ]}
      />

<IonAlert
        isOpen={showAlertError}
        onDidDismiss={() => setShowAlertError(false)}
        header={"Error"}
        message={errorMessage}
        buttons={[
          {
            text: "OK",
          },
        ]}
      />
    </IonPage>
  );
};

export default WachtwoordAanmaken;
