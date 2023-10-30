import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SignUp from "./components/SignUp";

const App = ({ store, persistor }: any) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SignUp />
    </PersistGate>
  </Provider>
);

export default App;
