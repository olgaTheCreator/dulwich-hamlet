import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
//import { WatchUsPlay } from "./components/WatchUsPlay/WatchUsPlay";
import { Wrapper } from "./components/ThemeButtons/ThemeButtonsComponent";
import { applyTheme } from "./themes/utils";
import { baseTheme } from "./themes/base";
import { backGroundVariants } from "./themes/colorVariants";
import { getTimeline } from "./utilities/API/twitterAPI";
import { TweetData } from "./utilities/types/types";
import { Tweet } from "./components/Tweet/Tweet";

// const tweets = await getTimeline();

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  return (
    <main className={`${backGroundVariants["secondary"]} flex flex-col`}>
      <Wrapper />
      <Header />
      {/* <div className=" h-96">
        {tweets.map((tweet: TweetData) => (
          <Tweet key={tweet.id} {...tweet} />
        ))} */}
      {/* <div className="h-96 z-50"></div> */}
      {/* <WatchUsPlay /> */}
    </main>
  );
}

export default App;
