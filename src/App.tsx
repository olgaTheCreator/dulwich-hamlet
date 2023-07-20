import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
//import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { applyTheme } from "./themes/utils";
import { baseTheme } from "./themes/base";
import { backGroundVariants } from "./themes/colorVariants";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  return (
    <main className={`${backGroundVariants["secondary"]} flex flex-col`}>
      <Wrapper />
      <Header />
      <div className="h-96"></div>
      {/* <WatchUsPlay /> */}
    </main>
  );
}

export default App;
