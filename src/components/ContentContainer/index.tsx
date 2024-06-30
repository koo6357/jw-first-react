import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ContentContainer;
