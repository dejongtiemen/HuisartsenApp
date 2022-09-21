import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { warningOutline } from "ionicons/icons";
import { useState } from "react";
import Header from "../components/Header";

const VervolgschermSpoed: React.FC = () => {
  const [letsel, setLetsel] = useState<string[]>([]);
  const [drugschecked, setdrugsChecked] = useState(false);

  return (
    <IonPage>
      <Header title="SPOED!!!" ></Header>
      <IonContent class="ion-text-start">
        <IonGrid>
        <IonItem lines="none">
          <IonCol class="ion-text-start">
            <p>(Vermoedelijk) letsel:</p>
          </IonCol>
          <IonSelect
            value={letsel}
            placeholder="Maak een keuze"
            onIonChange={(e) => setLetsel(e.detail.value)}
            multiple={true}
          >
            <IonSelectOption value="Botbreuk of ernstige kneuzing/verstuiking">
              Botbreuk of ernstige kneuzing/verstuiking
            </IonSelectOption>
            <IonSelectOption value="Bloeding">Bloeding</IonSelectOption>
            <IonSelectOption value="Ernstig val">Ernstig val</IonSelectOption>
            <IonSelectOption value="Hoofdletsel">Hoofdletsel</IonSelectOption>
            <IonSelectOption value="Verbranding">Verbranding</IonSelectOption>
            <IonSelectOption value="Overdosis of vergiftiging">
              Overdosis of vergiftiging
            </IonSelectOption>
            <IonSelectOption value="Bewusteloosheid">
              Bewusteloosheid
            </IonSelectOption>
            <IonSelectOption value="Hersenletsel">Hersenletsel</IonSelectOption>
            <IonSelectOption value="Onbekend of niet te achterhalen">
              Onbekend of niet te achterhalen
            </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonItem lines="full">
              Geselecteerd Letsel:{" "}
              {letsel.length
                ? letsel.reduce((curr, prev) => prev + ", " + curr, "")
                : "(geen geslecteerd)"}
            </IonItem>
          </IonCol>
        </IonRow>
        <IonItem>
          <IonCol>
            <p>
              Het slachtoffer heeft alcohol/drugs gebruikt:{" "}
              {JSON.stringify(drugschecked)}
            </p>
          </IonCol>
          <IonCheckbox
            checked={drugschecked}
            onIonChange={(e) => setdrugsChecked(e.detail.checked)}
          />
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton expand="block" routerLink="/page/AdresHuisartsenpost">
              Het slachtoffer is mobiel <br /> en kan vervoer regelen
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton expand="block" routerLink="/page/AdresSlachtoffer">
              Het slachtoffer is niet mobiel <br /> en/of kan geen vervoer
              regelen
            </IonButton>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter class="ion-text-center">
          <IonButton routerLink="/page/meldingNoodoproep" expand="full">Terug</IonButton>
        </IonFooter>
    </IonPage>
  );
};

export default VervolgschermSpoed;
