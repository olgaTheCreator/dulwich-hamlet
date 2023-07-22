import {
  backGroundTransparentVariants,
  backGroundVariants,
} from "../../themes/colorVariants";
import {
  Match,
  MatchDate,
  Matches,
  UpcomingProps,
} from "../../utilities/types/types";

const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
const dateToString = (date: Date): MatchDate => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];
  const dayInMonth = dayOfWeek + " " + ordinal(day);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time =
    (hours > 11 ? hours - 11 : hours + 1) +
    ":" +
    (minutes == 0 ? "00" : minutes) +
    (hours > 11 ? " PM" : " AM");

  return {
    month,
    day: dayInMonth,
    time,
  };
};

const displayingMatches = (arr: Matches) => {
  const newArr = arr.map(({ date, opponent }: Match) => ({
    ...dateToString(new Date(date)),
    opponent,
  }));
  return newArr.map(({ month, day, time, opponent }, i) => (
    <div
      className={`h-fit  w-11/12 md:w-3/5 lg:w-2/5 ${backGroundTransparentVariants["primary"]} text-center text-2xl font-medium p-4`}
      key={i + 1}
    >
      {month}
      <br />
      {day}
      <br />
      {time}
      <br />
      vs {opponent}
    </div>
  ));
};

export const UpcomingMatches = ({ matches }: UpcomingProps) => {
  console.log(matches);
  return (
    <div
      className={`mx-auto max-w-screen-xl h-full py-8 px-4 w-full flex flex-col lg:flex-row lg:flex-wrap justify-center place-items-center gap-8`}
    >
      {displayingMatches(matches)}
    </div>
  );
};
