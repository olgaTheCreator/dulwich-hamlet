import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

import { ThemeButtonsComponent } from "./components/ThemeButtons/ThemeButtonsComponent";
import { applyTheme } from "./themes/utils";
import { baseTheme } from "./themes/base";
import { backGroundVariants } from "./themes/colorVariants";
import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";
import { UpcomingMatches } from "./components/UpcomingMatches/UpcomingMatches";
import upcomingMatches from "./data/upcomingMatches.json";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrollButton = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScrollButton);
    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);
  return (
    <main
      className={`${backGroundVariants["secondary"]} flex flex-col relative`}
    >
      <ThemeButtonsComponent />
      <LandingPage scrolled={scrolled}>
        <WatchUsPlay scrolled={scrolled} />
        <UpcomingMatches scrolled={scrolled} matches={upcomingMatches} />
      </LandingPage>
    </main>
  );
}

export default App;
