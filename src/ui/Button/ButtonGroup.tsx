import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const ButtonGroup = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > button {
    flex: 1;
  }
`;

export default ButtonGroup;
