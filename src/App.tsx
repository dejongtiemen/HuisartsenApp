import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import ChatMetDeArts from "./pages/ChatMetDeArts";
import ConsultAanvraag from "./pages/ConsultAanvraag";
import Doorverwijzing from "./pages/Doorverwijzing";
import Bloedonderzoek from "./pages/Bloedonderzoek";
import MijnMedicijnen from "./pages/MijnMedicijnen";
import Spoed from "./pages/Spoed";
import Noodpoproep from "./pages/Noodoproep";
import VervolgschermSpoed from "./pages/vervolgschermSpoed";
import AdresHuisartsenpost from "./pages/AdresHuisartsenpost";
import AdresSlachtoffer from "./pages/AdresSlachtoffer";
import AdresSlachtofferMap from "./pages/AdresSlachtofferMap";
import Login from "./pages/Login";
import WachtwoordAanmaken from "./pages/WachtwoordAanmaken";
import { authStore } from "./authStore"
import meldingNoodoproep from "./pages/meldingNoodoproep"
import AdresHuisartsenpostGeenAuht from "./pages/AdresHuisartsenpostGeenAuth";
import AdresSlachtofferGeenAuth from "./pages/AdresSlachtofferGeenAuth";
import AdresSlachtofferMapGeenAuth from "./pages/adresSlachtofferMapGeenAuth";
import meldingNoodoproepGeenAuth from "./pages/meldingNoodoproepGeenAuth";
import VervolgschermSpoedGeenAuth from "./pages/vervolgschermSpoedGeenAuth";
import NoodoproepGeenAuth from "./pages/NoodOproepGeenAuth";
import SpoedGeenAuth from "./pages/SpoedGeenAuth";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useRef } from "react";

const App: React.FC = () => {
  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  const isAuthenticated = authStore.useState(s => s.authenticated);
  const userId = authStore.useState(s => s.userId);
  console.log(isAuthenticated);

  return (
    <IonApp>
      {isAuthenticated ? (
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/page/Login" exact={true}>
                <Redirect to="/page/Home" />
              </Route>
              <Route path="/page/Home" exact={true} component={Home} />
              <Route path="/page/Chat met de arts" exact={true} component={ChatMetDeArts} />
              <Route path="/page/Consultaanvraag" exact={true} component={ConsultAanvraag} />
              <Route path="/page/Doorverwijzing" exact={true} component={Doorverwijzing} />
              <Route path="/page/Bloedonderzoek" exact={true} component={Bloedonderzoek} />
              <Route path="/page/Mijn medicijnen" exact={true} component={MijnMedicijnen} />
              <Route path="/page/Spoed" exact={true} component={Spoed} />
              <Route path="/page/Noodoproep" exact={true} component={Noodpoproep} />
              <Route path="/page/VervolgschermSpoed" exact={true} component={VervolgschermSpoed} />
              <Route path="/page/AdresHuisartsenpost" exact={true} component={AdresHuisartsenpost} />
              <Route path="/page/AdresSlachtoffer" exact={true} component={AdresSlachtoffer} />
              <Route path="/page/AdresSlachtofferMap" exact={true} component={AdresSlachtofferMap} />
              <Route path="/page/MeldingNoodoproep" exact={true} component={meldingNoodoproep} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      ) : (
        <IonReactRouter>
          <IonRouterOutlet>
          <Route path="/page/Login" exact={true} component={Login} />
          <Route path="/page/WachtwoordAanmaken" exact={true} component={WachtwoordAanmaken}/>
          <Route path="/page/Spoed" exact={true} component={SpoedGeenAuth} />
          <Route path="/page/Noodoproep" exact={true} component={NoodoproepGeenAuth} />
          <Route path="/page/VervolgschermSpoed" exact={true} component={VervolgschermSpoedGeenAuth} />
          <Route path="/page/AdresHuisartsenpost" exact={true} component={AdresHuisartsenpostGeenAuht} />
          <Route path="/page/AdresSlachtoffer" exact={true} component={AdresSlachtofferGeenAuth} />
          <Route path="/page/AdresSlachtofferMap" exact={true} component={AdresSlachtofferMapGeenAuth} />
          <Route path="/page/MeldingNoodoproep" exact={true} component={meldingNoodoproepGeenAuth} />
          <Redirect from="/" to="/page/Login" exact={true}/>
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
