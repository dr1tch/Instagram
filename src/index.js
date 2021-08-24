import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import FirebaseContext from './context/firbase';
import {firebase, FieldValue} from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}} >
    <App />
    </FirebaseContext.Provider>,
  document.getElementById("root")
);

