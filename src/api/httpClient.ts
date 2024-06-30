import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 6000,
});

export const youtubeV3 = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 6000,
});
