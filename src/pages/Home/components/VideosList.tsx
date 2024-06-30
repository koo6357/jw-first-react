import styled from "@emotion/styled";
import { IVideosItem } from "@/models/videos.ts";
import VideosItem from "@/pages/Home/components/VideosItem.tsx";
interface Props {
  data: IVideosItem[];
}

const VideosList = ({ data }: Props) => {
  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col>
            <VideosItem item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  margin: 0 -15px;
`;

const Col = styled.div`
  width: 25%;
  padding: 0 15px;
`;

export default VideosList;
