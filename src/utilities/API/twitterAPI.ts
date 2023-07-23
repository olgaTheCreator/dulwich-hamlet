import { TweetAuthor, Media, TweetData } from "../types/types";
import { API_key, API_key_secret, BearerToken } from "./twitter";

export const getTimeline = async () => {
  const queryParams = new URLSearchParams({
    expansions: "author_id,attachments.media_keys",
    "tweet.fields": "attachments,author_id,public_metrics,created_at,id,text",
    "user.fields": "id,name,profile_image_url,url,username",
    "media.fields":
      "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
    max_results: "5",
  });

  const bearer = await fetch(
    "https://api.twitter.com/oauth2/token?grant_type=client_credentials",
    {
      method: "POST",
      headers: {
        Authorization: `${API_key}:${API_key_secret}`,
      },
    }
  );
  console.log(bearer);

  // curl --request POST -u$API_KEY:$API_SECRET_KEY \
  //   --url 'https://api.twitter.com/oauth2/token?grant_type=client_credentials'

  //   const response = await fetch(
  //     `https://api.twitter.com/2/users/137097968/tweets?${queryParams}`,
  //     {
  //       mode: "same-origin",
  //       headers: {
  //         Authorization: `Bearer ${BearerToken}`,
  //       },
  //     }
  //   );

  //   const tweets = await response.json();
  //   console.log(tweets);
  //   const media: Media = tweets.includes.media;
  //   const author: TweetAuthor = tweets.includes.users[0];

  //   return tweets.data.map((tweet: TweetData) => {
  //     const singleTweet = {
  //       ...tweet,
  //       author: author,
  //       media:
  //         tweet?.attachments?.media_keys.map((key) =>
  //           media.find((media) => media.media_key === key)
  //         ) || [],
  //     };
  //     return singleTweet;
  //   });
};
