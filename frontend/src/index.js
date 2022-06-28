import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* Modal */
import ReactModal from "react-modal";
/* Redux , Redux Persist */
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./Redux/Reducer/index";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactModal.setAppElement("#root");

/* Redux Persist */
const store = createStore(rootReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
