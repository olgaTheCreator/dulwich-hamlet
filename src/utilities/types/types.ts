export type ThemeColor = "pink" | "dark" | "cyan" | "light";

export interface ThemeContextInterface {
  theme: ThemeColor;
  setTheme: React.Dispatch<React.SetStateAction<ThemeColor>>;
}

export interface ButtonPropsInterface {
  children?: React.ReactNode;
  color: "primary" | "secondary";
  key: ThemeColor;
  handleTheme: () => void;
}

export interface ThemeButtonPropsInterface {
  color: ThemeColor;
  children?: React.ReactNode;
  key: ThemeColor;
}

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  backgroundTransparent: string;
  secondary: string;
  secondaryLight: string;
  textBase: string;
}
export interface Theme {
  "--theme-primary": ThemeColors["primary"];
  "--theme-primary-light": ThemeColors["primaryLight"];
  "--theme-background-transparent": ThemeColors["backgroundTransparent"];
  "--theme-secondary": ThemeColors["secondary"];
  "--theme-secondary-light": ThemeColors["secondaryLight"];
  "--theme-text-base": ThemeColors["textBase"];
}

export type Matches = Array<Match>;

export interface Match {
  date: string;
  opponent: string;
}

export interface UpcomingProps {
  matches: Matches;
}

export interface MatchDate {
  month: string;
  day: string;
  time: string;
}

export type TweetAuthor = {
  url: string;
  username: string;
  profile_image_url: string;
  id: string;
  name: string;
};
export type PublicMetrics = {
  like_count: number;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
};

export type Attachments = {
  media_keys: string[];
};

export type Media = Array<{
  height: number;
  media_key: string;
  type: string;
  url: string;
  width: number;
}>;

export interface TweetData {
  author_id: string;
  public_metrics: PublicMetrics;
  attachments?: Attachments;
  created_at: string;
  id: string;
  text: string;
  author: TweetAuthor;
  media: Media;
}
