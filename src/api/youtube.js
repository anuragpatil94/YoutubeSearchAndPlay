import axios from "axios";

const KEY = "AIzaSyDsT_ye3PJ8nFiOVmObCTcS1iHLmWuvpkQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
