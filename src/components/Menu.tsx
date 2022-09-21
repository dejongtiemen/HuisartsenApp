import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { chatbubbleOutline, medkitOutline, peopleOutline, receiptOutline, warningOutline, waterOutline } from 'ionicons/icons';
import './Menu.css';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Chat met de arts',
    url: '/page/Chat met de arts',
    iosIcon: chatbubbleOutline,
    mdIcon: chatbubbleOutline
  },
  {
    title: 'Consultaanvraag',
    url: '/page/Consultaanvraag',
    iosIcon: peopleOutline,
    mdIcon: peopleOutline
  },
  {
    title: 'Doorverwijzing',
    url: '/page/Doorverwijzing',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline
  },
  {
    title: 'Bloedonderzoek',
    url: '/page/Bloedonderzoek',
    iosIcon: waterOutline,
    mdIcon: waterOutline
  },
  {
    title: 'Mijn medicijnen',
    url: '/page/Mijn medicijnen',
    iosIcon: medkitOutline,
    mdIcon: medkitOutline
  },
  {
    title: 'SPOED!!!',
    url: '/page/Spoed',
    iosIcon: warningOutline,
    mdIcon: warningOutline
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu menuId='Menu' contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            if(appPage.title == "SPOED!!!"){
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} color="warning" />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            } else {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          }
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
