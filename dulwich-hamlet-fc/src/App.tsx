import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";
import { MainPage } from "./components/Page/Page";

function App() {
  return (
    <MainPage >
    <main className=" flex flex-col gap-10">
      <Header />
      <div className="h-96"></div>
      {/* <WatchUsPlay /> */}
    </main></MainPage>
  );
}

export default App;
