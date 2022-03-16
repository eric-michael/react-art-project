import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";

/* Styles */
import "./App.css";
/* End Styles */

/* Pages */
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import NewEntry from "./pages/NewEntry";
/* End Pages */

/* Components */
import MainNav from "./components/layout/MainNav";
import Footer from "./components/layout/Footer";
/* End Components */

import FavoritesContext, {
  FavoritesContextProvider,
} from "./store/favorites-context";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { favoriteActions } from "./store";
/* End Redux */

/* Custom Hooks */
import useWindowDimensions from "./hooks/windowDimensions";
/* End Custom Hooks */

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// library creation for fontawesome
library.add(fas, far);

function App() {
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    fetch("/api").then((res) => {
      res.json().then((data) => {
        setConnected(data.message);
      });
    });
  });

  /* Redux */
  const favoritesFromRedux = useSelector((state) => state.favorites.art);
  const dispatch = useDispatch();
  /* End Redux */

  const { height, width } = useWindowDimensions();

  if (!connected) {
    return <div>Cannot connect to server</div>;
  }

  return (
    <div>
      <FavoritesContextProvider>
        <div style={{ minHeight: height - 87 }}>
          <MainNav />
          <Switch>
            <Route path="/" exact>
              <Main favorites={favoritesFromRedux} />
            </Route>
            <Route path="/favorites" exact>
              <Favorites favorites={favoritesFromRedux} />
            </Route>
            <Route path="/new" exact>
              <NewEntry />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
