import { Provider } from "react-redux";

import Routes from "./routes";
import configureStore from "./store/configureStore";
// import { PageView, initGA } from "./tracking/tracking";

function App() {
  return (
    <Provider store={configureStore()}>
      <Routes />
    </Provider>
  );
}

export default App;
