import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { arrowBackOutline } from "ionicons/icons";
import { authStore } from "../authStore";


const Login: React.FC = () => {
  const [showAlertError, setShowAlertError] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [resetEmail, setResetEmail] = useState<string>("");
  const [wachtwoord, setWachtwoord] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showModalResetWachtoowrd, setShowModalResetWachtwoord] = useState(false);
  const [showAlertSucces, setShowAlertSucces] = useState(false);


  const auth = getAuth();

  function inloggen() {
    if (email == "") {
      setAlertMessage("Vul een emailadres in.");
      console.log("email geen input");
      setShowAlertError(true);
    } else if (wachtwoord == "") {
      setAlertMessage("Vul een wachtwoord in.");
      console.log("wachtwoord geen input");
      setShowAlertError(true);
    } else {
      signInWithEmailAndPassword(auth, email, wachtwoord)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          authStore.update(s => {
            s.authenticated = true
            s.userId = user.uid
            console.log("authstore updated");
          })
          console.log(user.uid);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          switch (errorMessage) {
            case wachtwoord === "": {
              setAlertMessage("Vul een wachtwoord in.");
              break;
            }

            case "Firebase: Error (auth/invalid-email).": {
              setAlertMessage("Ongeldig emailadres.");
              break;
            }

            case "Firebase: Error (auth/wrong-password).": {
              setAlertMessage("Verkeerd wachtwoord.");
              break;
            }
          }

          setShowAlertError(true);
          console.log(errorMessage);
          // ..
        });

      console.log("inloggen succevol");
    }
  }

  function resetPassword() {
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        // Password reset email sent!
        // ..
        setAlertMessage("Wachtwoord reset email is verzonden!");
        setShowAlertSucces(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAlertMessage("Voer een geldig emailadres in");
        setShowAlertError(true);
        // ..
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonItem>
            <IonLabel>Email:</IonLabel>
            <IonInput
              type="text"
              onIonChange={(e: any) => setEmail(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Wachtwoord:</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e: any) => setWachtwoord(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonRow class="ion-text-center">
            <IonCol>
              <IonButton onClick={inloggen}>Inloggen</IonButton>
              <IonButton onClick={() => setShowModalResetWachtwoord(true)} >Wachtwoord vergeten</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <p style={{ fontSize: "medium" }}>
                Nieuwe gebruiker?{" "}
                <a href="/page/WachtwoordAanmaken">Account aanmaken</a>
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
        isOpen={showAlertError}
        onDidDismiss={() => setShowAlertError(false)}
        header="Error"
        message={alertMessage}
        buttons={[
          {
            text: "OK",
          },
        ]}
      />

      <IonAlert
        isOpen={showAlertSucces}
        onDidDismiss={() => setShowAlertSucces(false)}
        header="Succes"
        message={alertMessage}
        buttons={[
          {
            text: "OK",
          },
        ]}
      />  


      <IonModal  isOpen={showModalResetWachtoowrd}>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle className="ion-text-center">Reset wachtwoord</IonTitle>
            <IonButtons slot="start">
                <IonButton onClick={() => setShowModalResetWachtwoord(false)}>
                    <IonIcon slot="start" icon={arrowBackOutline} />
                </IonButton>
            </IonButtons>
            <IonButtons slot="end">
                <IonButton>
                    <IonIcon slot="start"  />
                </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRow className="ion-padding-horizontal">
            <IonCol>
              <p>Geef het emailadres waarmee u uw account heeft geregistreerd. Als het emailadres geregistreerd is krijg u een link om uw wachtwoord te resetten.</p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-horizontal">
            <IonCol>
              <IonInput value={resetEmail} placeholder="Type uw emailadres" onIonChange={e => setResetEmail(e.detail.value!)}></IonInput>
            </IonCol>
          </IonRow>
        </IonContent>
        <IonFooter>
            <IonButton color="primary" fill="solid" expand="full" onClick={resetPassword}>Verzenden</IonButton>
        </IonFooter>
      </IonModal>
      
    </IonPage>
  );
};

export default Login;
