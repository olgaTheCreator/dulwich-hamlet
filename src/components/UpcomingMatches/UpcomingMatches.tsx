import { backGroundVariants } from "../../themes/colorVariants";
import { Matches } from "../../utilities/types/types";
import { displayingMatches } from "./helpers/DisplayingMatches";

export const UpcomingMatches = ({
  matches,
  scrolled,
}: {
  matches: Matches;
  scrolled: boolean;
}) => {
  return (
    <div
      className={`bg-repeat-x bg-halftones bg-top w-full bg-cover font-rubik text-2xl font-semibold text-text-base  flex place-content-center ${
        backGroundVariants["secondary"]
      } h-max transition-all duration-500 z-20  ${
        scrolled ? "opacity-100 invert-0" : " opacity-0"
      }`}
    >
      <div
        className={` max-w-screen-xl h-full py-8 px-8  w-full flex flex-col lg:flex-row lg:flex-wrap justify-center place-items-center gap-8 transition-all delay-200 duration-700 z-20  ${
          scrolled
            ? "opacity-100 invert-0 ml-0 mt-0"
            : " opacity-0 mx-auto -ml-10 -mt-10"
        }`}
      >
        {displayingMatches(matches)}
      </div>
    </div>
  );
};
