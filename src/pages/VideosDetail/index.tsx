import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const VideosDetail = () => {
  const routeParams = useParams();
  const videosId = routeParams.id;
  return (
    <Container>
      VideosDetail
      <p>{videosId}</p>
    </Container>
  );
};

const Container = styled.div``;

export default VideosDetail;
