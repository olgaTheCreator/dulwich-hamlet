import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useThemeContext } from "./utilities/hooks/useThemeContext";
import { ThemeContextInterface } from "./utilities/types";

function App() {
  return (
    <main className="bg-off_white flex flex-col">
      <Wrapper />
      <Header />
      <div className="h-96"></div>
      {/* <WatchUsPlay /> */}
    </main>
  );
}

export default App;
