import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";

function App() {
  return (
    <main className="bg-off_white">
      <Header />
      <WatchUsPlay />
    </main>
  );
}

export default App;
