import { backGroundTransparentVariants } from "../../themes/colorVariants";
import { Match, MatchDate, Matches } from "../../utilities/types/types";

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

export const displayingMatches = (arr: Matches) => {
  const newArr = arr.map(({ date, opponent }: Match) => ({
    ...dateToString(new Date(date)),
    opponent,
  }));
  return newArr.map(({ month, day, time, opponent }) => (
    <div
      className={`h-fit  w-11/12 md:w-3/5 lg:w-2/5 ${backGroundTransparentVariants["primary"]} ring-4 ring-offset-4 ring-offset-primary-light ring-secondary-light text-center text-2xl font-medium p-4`}
      key={month + day}
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
