import { backGroundVariants } from "../../themes/colorVariants";
import { Matches } from "../../utilities/types/types";
import { displayingMatches } from "./DisplayingMatches";

export const UpcomingMatches = ({
  matches,
  scrolled,
}: {
  matches: Matches;
  scrolled: boolean;
}) => {
  return (
    <div
      className={`bg-repeat-x bg-halftones bg-top w-full bg-cover  text-text-base  ${
        backGroundVariants["secondary"]
      } h-max transition-all duration-500 z-20  ${
        scrolled ? "opacity-100 invert-0" : " opacity-0"
      }`}
    >
      <div
        className={`mx-auto max-w-screen-xl h-full py-8 px-4 w-full flex flex-col lg:flex-row lg:flex-wrap justify-center place-items-center gap-8 `}
      >
        {displayingMatches(matches)}
      </div>
    </div>
  );
};
