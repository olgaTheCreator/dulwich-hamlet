import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
//import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { applyTheme } from "./themes/utils";
import { baseTheme } from "./themes/base";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
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
