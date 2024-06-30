import { youtubeV3 } from "@/api/httpClient.ts";
import { IVideosResponse } from "@/models/videos.ts";

export const fetchVideos = async () => {
  try {
    const { data } = await youtubeV3<IVideosResponse>({
      method: "GET",
      url: "/videos",
      params: {
        key: "AIzaSyDdu741Fj-GDNgh02j88ZM4SFTbOsDoHRA",
        chart: "mostPopular",
        part: "snippet",
        maxResults: 50,
        regionCode: "KR",
      },
    });

    return data;
  } catch (err) {
    console.log("@@ err", err);
    return null;
  }
};
