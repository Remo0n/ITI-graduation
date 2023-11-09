import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import SignUp from "./components/SignUp";
import NavComponent from "./components/Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = ({ store, persistor }: any) => (
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <SignUp /> */}
        <NavComponent />
        <Routes>
          <Route path="" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

export default App;
