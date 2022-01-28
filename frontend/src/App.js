import DotRing from "./components/dotRing/dotRing";
import MouseProvider from "./context/mouseContext"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Account from "./pages/account";
import DesignSystem from "./pages/designSystem";

function App() {
  return (
      <MouseProvider>
      <DotRing/>
      <Router basename="/">
          <Layout>
          <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route exact path={'/account'} component={Account} />
              <Route exact path={'/design'} component={DesignSystem} />
          </Switch>
          </Layout>
      </Router>
      </MouseProvider>
  );
}

export default App;
