import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { cameraOutline, sendOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import "./ChatMetDeArts.css";
import Header from "../components/Header";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const ChatMetDeArts: React.FC = () => {
  const [messages, setMessages] = useState<message[]>([
    {
      text: "Goedemorgen, ik heb een vraag.",
      sender: "Patient",
      time: "18:13",
      filepath: "",
      webviewPath: undefined,
    },

    {
      text: "Goedemorgen, zegt u het maar.",
      sender: "Arts",
      time: "18:15",
      filepath: "",
      webviewPath: undefined,
    },
  ]);
  //const { takePhoto } = usePhotoGallery();

  const messageInputRef = useRef<HTMLIonInputElement>(null);
  const contentRef = useRef<HTMLIonContentElement>(null);

  setTimeout(() => {
    contentRef.current?.scrollToBottom(200);
  });

  const addMessage = () => {
    const enteredMessage = messageInputRef.current!.value?.toString();
    const date = new Date();
    if (!enteredMessage) {
      return;
    }

    const updateMessages = [
      ...messages,

      {
        text: enteredMessage,
        sender: "Patient",
        time: date.getHours() + ":" + date.getMinutes(),
        filepath: "",
        webviewPath: undefined,
      },
    ];

    setMessages(updateMessages);
    messageInputRef.current!.value = "";
  };

  

  const takePhoto = async () => {
    const date = new Date();
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = new Date().getTime() + ".jpeg";
    const newPhotos = [
      ...messages,
      {
        text: "",
        sender: "Patient",
        time: date.getHours() + ":" + date.getMinutes(),
        filepath: fileName,
        webviewPath: photo.webPath,
      },

    ];
    setMessages(newPhotos);
  };

  interface message {
    text: string,
    sender: string,
    time: string,
    filepath: string,
    webviewPath?: string,
  }

  return (
    <IonPage>
      <Header title="Chat met de arts"></Header>

      <IonContent fullscreen ref={contentRef}>
        <IonGrid>
        {messages.map((message) => {
          if (message.sender === "Patient") {
            if(message.webviewPath == undefined){
            return (
              <IonRow>
                <IonCol size="6" color="secondary">
                  <IonCard color="secondary" className="ion-no-margin">
                    <IonChip>
                      <IonAvatar>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                      </IonAvatar>
                      <IonLabel>{message.sender}</IonLabel>
                    </IonChip>
                    <IonCardContent>
                      <span>{message.text}</span>
                      <div className="ion-text-end">{message.time}</div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            );
            } else {
            return (
              <IonRow>
                <IonCol size="6" color="secondary">
                  <IonCard color="secondary" className="ion-no-margin">
                    <IonChip>
                      <IonAvatar>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                      </IonAvatar>
                      <IonLabel>{message.sender}</IonLabel>
                    </IonChip>
                    <IonCardContent>
                      <span>{message.text}</span>
                      <IonImg src={message.webviewPath}/>
                      <div className="ion-text-end">{message.time}</div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            );
          }
        }
         

          if (message.sender === "Arts") {
            return (
              <IonRow>
                <IonCol offset="5">
                  <IonCard color="tertiary" className="ion-no-margin">
                    <IonChip>
                      <IonAvatar>
                        <img src="https://www.w3schools.com/w3images/avatar6.png" />
                      </IonAvatar>
                      <IonLabel>{message.sender}</IonLabel>
                    </IonChip>
                    <IonCardContent>
                      <span>{message.text}</span>
                      <div className="ion-text-end">{message.time}</div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            );
          }
        })}
        </IonGrid>
      </IonContent>

      <IonFooter>
        <IonItem>
          <IonInput
            id="mssgInput"
            type="text"
            ref={messageInputRef}
            placeholder="Type een bericht"
          ></IonInput>
          <IonButton onClick={addMessage}>
            <IonIcon icon={sendOutline} />
          </IonButton>
          <IonFabButton size="small">
            <IonIcon icon={cameraOutline} onClick={() => takePhoto()} />
          </IonFabButton>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

export default ChatMetDeArts;
