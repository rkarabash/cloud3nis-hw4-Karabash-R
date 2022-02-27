import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";
import InputSection from "./components/InputSection";
import NotesSection from "./components/NotesSection";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Заметки с Redux</h1>
        <InputSection />
        <NotesSection />
      </div>
    </Provider>
  );
}

export default App;
