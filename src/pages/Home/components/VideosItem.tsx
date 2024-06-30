import styled from "@emotion/styled";
import { IVideosItem } from "@/models/videos.ts";
import { Link } from "react-router-dom";
import Typography from "@/components/Typography";

interface Props {
  item: IVideosItem;
}
const VideosItem = ({ item }: Props) => {
  const { thumbnails, title, description, channelTitle } = item.snippet;
  return (
    <Container>
      <Link to={`/videos/${item.id}`}>
        <div className="ratio-box">
          <img src={thumbnails.high.url} alt={title} />
        </div>


        <div className="desc">
          <Typography tag={"h3"} type={"subtitle18"}>
            {title}
          </Typography>
          <Typography tag="p" type="body14" color={"medium-emphasis"}>
            {description}
          </Typography>
          <Typography tag="p" type="body14" color={"medium-emphasis"}>
            {channelTitle}
          </Typography>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  a {
    display: block;
  }
  .ratio-box {
    position: relative;
    padding-bottom: 56%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    padding: 15px 0;

    p {
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
`;

export default VideosItem;
