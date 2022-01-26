import axios from "axios";

const KEY = "AIzaSyA21WZPK3tbr0eZYvU5EfovnGJ7nlFlGTk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
