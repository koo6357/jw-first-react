export interface IVideosResponse {
  kind: string;
  etag: string;
  items: IVideosItem[];
  nextPageToken: string;
  pageInfo: PageInfo;
}
interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface IVideosItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}
interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: Localized;
  defaultAudioLanguage?: string;
}
interface Localized {
  title: string;
  description: string;
}
interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres?: Default;
}
interface Default {
  url: string;
  width: number;
  height: number;
}
