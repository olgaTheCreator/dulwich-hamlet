import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";

function App() {
  return (
    <main className="bg-off_white flex flex-col gap-10">
      <Header />
      <div className="h-96"></div>
      {/* <WatchUsPlay /> */}
    </main>
  );
}

export default App;
