import { fetchVideos } from "@/api/videos.ts";
import { useEffect, useState } from "react";
import { IVideosItem } from "@/models/videos.ts";

type RequestStatus = "idle" | "loading" | "success" | "error";

export const useVideos = () => {
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [videos, setVideos] = useState<IVideosItem[]>([]);

  const getVideos = async () => {
    setStatus("loading");
    const data = await fetchVideos();
    if (data === null) {
      // 통신 에러 케이스
      // 에러 핸들링
      setStatus("error");
      return;
    }

    setVideos(data.items);
    setStatus("success");
  };

  useEffect(() => {
    getVideos();
  }, []);

  return {
    videos,
    isPending: status !== "success" && status !== "error",
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
  };
};
