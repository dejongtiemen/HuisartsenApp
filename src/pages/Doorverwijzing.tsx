import React, { useState } from "react";
import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import Header from "../components/Header"
import "./Bloedonderzoek.css"
import { receiptOutline } from "ionicons/icons";

const Doorverwijzing: React.FC = () => {

    const [klacht, setKlacht] = useState<string>();
    const [specialist, setSpecialist] = useState<string>();
    const [eerderBehandeld, setEerderBehandeld] = useState<string>();
    const [eerderBijSpecialist, setEerderBijSpecialist] = useState<string>();
    const [contactMetArts, setContactMetArts] = useState<string>();
    const [showAlertError, setShowAlertError] = useState<boolean>(false);
    const [showAlertSucces, setShowAlertSucces] = useState<boolean>(false);

    const submit = () => {
        if (!klacht || !specialist || !eerderBehandeld || !eerderBijSpecialist || !contactMetArts) {
            setShowAlertError(true);
        }
        else {
            setShowAlertSucces(true);
            setKlacht("");
            setSpecialist("");
            setEerderBehandeld("");
            setEerderBijSpecialist("");
            setContactMetArts("");
        }
    }


    return (
        <IonPage>
            <Header title="Doorverwijzing" ></Header>

            <IonContent>
                <IonGrid>
                <IonList>
                    <IonItem>
                        <IonLabel position="fixed" >Klacht:</IonLabel>
                        <IonTextarea value={klacht} placeholder="Type hier uw klacht" onIonChange={e => setKlacht(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                    <div text-wrap><p>Specialist: </p></div>
                        <IonSelect class="ion-margin-horizontal" className="select_specialiteit" value={specialist} placeholder="Selecteer een specialist" onIonChange={e => setSpecialist(e.detail.value)}>
                            <IonSelectOption value="Cardioloog">Cardioloog</IonSelectOption>
                            <IonSelectOption value="Dermatoloog">Dermatoloog</IonSelectOption>
                            <IonSelectOption value="Gynaecoloog">Gynaecoloog</IonSelectOption>
                            <IonSelectOption value="Internist">Internist</IonSelectOption>
                            <IonSelectOption value="Keel-neus-oorarts">Keel-neus-oorarts</IonSelectOption>
                            <IonSelectOption value="Neuroloog">Neuroloog</IonSelectOption>
                            <IonSelectOption value="Oncoloog">Oncoloog</IonSelectOption>
                            <IonSelectOption value="Oogarts">Oogarts</IonSelectOption>
                            <IonSelectOption value="Reumatoloog">Reumatoloog</IonSelectOption>
                            <IonSelectOption value="Sportarts">Sportarts</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonRadioGroup value={eerderBehandeld} onIonChange={e => setEerderBehandeld(e.detail.value)}>
                            <IonRow>
                            <div text-wrap><p>Bent u al eerder voor deze klacht behandeld?</p></div>
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
                        <IonRadioGroup value={eerderBijSpecialist} onIonChange={e => setEerderBijSpecialist(e.detail.value)}>
                            <IonRow>
                            <div text-wrap><p>Bunt u al eerder bij deze specialist geweest?</p></div>
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
                            <div text-wrap><p>Wilt u vooraf contact met de arts hierover?</p></div>
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
                    message={'Doorverwijzing aangevraagd!'}
                    buttons={['OK']}
                />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Doorverwijzing;