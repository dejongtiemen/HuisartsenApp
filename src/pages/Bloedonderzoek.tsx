import React, { useState } from "react";
import {IonAlert, IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea} from "@ionic/react"
import Header from "../components/Header";
import "./Bloedonderzoek.css"
import { waterOutline } from "ionicons/icons";


const Bloedonderzoek : React.FC = () => {
    const [doel, setDoel] = useState<string>();
    const [allergie, setAllergie] = useState<string>();
    const [eerderOnderzocht, setEerderOnderzocht] = useState<string>();
    const [eerderBijHuisarts, setEerderBijHuisarts] = useState<string>();
    const [contactMetArts, setContactMetArts] = useState<string>();
    const [showAlertError, setShowAlertError] = useState<boolean>(false);
    const [showAlertSucces, setShowAlertSucces] = useState<boolean>(false);

    const submit = () => {
        if (!doel || !allergie || !eerderOnderzocht || !eerderBijHuisarts || !contactMetArts) {
            setShowAlertError(true);
        }
        else {
            setShowAlertSucces(true);
            setDoel("");
            setAllergie("");
            setEerderOnderzocht("");
            setEerderBijHuisarts("");
            setContactMetArts("");
        }
    }


    return(
        <IonPage>
            <Header title="Bloedonderzoek" ></Header>

            <IonContent>
                <IonGrid>
                <IonList>
                    <IonItem>
                        <div text-wrap><p>Doel onderzoek:</p></div>
                        <IonInput  value={doel} placeholder="Type hier uw klacht" onIonChange={e => setDoel(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel >Allergie:</IonLabel>
                        <IonSelect className="select_allergie" value={allergie} placeholder="Selecteer een allergie" onIonChange={e => setAllergie(e.detail.value)}>
                            <IonSelectOption value="Ik heb geen allergie">Ik heb geen allergie</IonSelectOption>
                            <IonSelectOption value="Pollenallergie">Pollenallergie</IonSelectOption>
                            <IonSelectOption value="Huisstofmijtallergie">Huisstofmijtallergie</IonSelectOption>
                            <IonSelectOption value="Koemelkallergie">Koemelkallergie</IonSelectOption>
                            <IonSelectOption value="Schaaldierenallergie">Schaaldierenallergie</IonSelectOption>
                            <IonSelectOption value="Kattenallergie">Kattenallergie</IonSelectOption>
                            <IonSelectOption value="Pinda-allergie">Pinda-allergie</IonSelectOption>
                            <IonSelectOption value="Insectenbeetallergie">Insectenbeetallergie</IonSelectOption>
                            <IonSelectOption value="Hondenallergie">Hondenallergie</IonSelectOption>
                            <IonSelectOption value="Parfumallergie">Parfumallergie</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonRadioGroup value={eerderOnderzocht} onIonChange={e => setEerderOnderzocht(e.detail.value)}>
                            <IonRow>
                            <div text-wrap><p>Bent u hier al eerder op onderzocht?</p></div>
                                <IonItem lines="none">
                                    <IonLabel slot="end">Ja</IonLabel>
                                    <IonRadio slot="end" value="Ja" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel slot="end">Nee</IonLabel>
                                    <IonRadio slot="end" value="Nee" />
                                </IonItem>
                            </IonRow>
                        </IonRadioGroup>
                    </IonItem>
                    <IonItem>
                        <IonRadioGroup value={eerderBijHuisarts} onIonChange={e => setEerderBijHuisarts(e.detail.value)}>
                            <IonRow>
                                <div text-wrap><p>Bent u hier al eerder voor bij de huisarts geweest?</p></div>
                                <IonItem lines="none">
                                    <IonLabel slot="end">Ja</IonLabel>
                                    <IonRadio slot="end" value="Ja" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel slot="end">Nee</IonLabel>
                                    <IonRadio slot="end" value="Nee" />
                                </IonItem>
                            </IonRow>
                        </IonRadioGroup>
                    </IonItem>
                    <IonItem>
                        <IonRadioGroup value={contactMetArts} onIonChange={e => setContactMetArts(e.detail.value)}>
                            <IonRow>
                            <div text-wrap><p>Wilt u vooraf contact met de arts hierover hebben?</p></div>
                                <IonItem lines="none">
                                    <IonLabel slot="end">Ja</IonLabel>
                                    <IonRadio slot="end" value="Ja" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel slot="end">Nee</IonLabel>
                                    <IonRadio slot="end" value="Nee" />
                                </IonItem>
                            </IonRow>
                        </IonRadioGroup>
                    </IonItem>
                </IonList>
                <IonItem lines="none">
                    <IonButton slot="end" onClick={submit}>Submit</IonButton>
                </IonItem>

                <IonAlert
                    isOpen={showAlertError}
                    onDidDismiss={() => setShowAlertError(false)}
                    cssClass='my-custom-class'
                    header={'Error'}
                    subHeader={''}
                    message={'Vul alle velden in.'}
                    buttons={['OK']}
                />

                <IonAlert
                    isOpen={showAlertSucces}
                    onDidDismiss={() => setShowAlertSucces(false)}
                    cssClass='my-custom-class'
                    header={'Succes'}
                    subHeader={''}
                    message={'Bloedonderzoek aangevraagd!'}
                    buttons={['OK']}
                />
                </IonGrid>
            </IonContent>
        </IonPage>
    );

};

export default Bloedonderzoek;