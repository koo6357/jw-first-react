import styled from "@emotion/styled";
import { DialogProps } from "@/components/LayerContainer";
import ButtonGroup from "@/ui/Button/ButtonGroup.tsx";
import Button from "@/ui/Button";
import Typography from "@/components/Typography";

interface Props extends DialogProps {
  closeDialog: () => void;
}

const Dialog = ({
  title,
  content,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  closeDialog,
}: Props) => {
  return (
    <Container>
      <Content>
        <Typography
          tag={"h3"}
          type={"subtitle18"}
          weight={"bold"}
          style={{ marginBottom: "15px" }}
        >
          {title}
        </Typography>
        <Typography
          tag={"p"}
          type={"body14"}
          color={"medium-emphasis"}
          style={{ marginBottom: "20px" }}
        >
          {content}
        </Typography>
        <ButtonGroup>
          {cancelText && onCancel && (
            <Button onClick={onCancel} theme={"secondary"}>
              {cancelText}
            </Button>
          )}
          <Button onClick={onConfirm}>{confirmText}</Button>
        </ButtonGroup>
      </Content>
      <Dim onClick={closeDialog} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  width: 260px;
  padding: 30px 24px 16px;
  text-align: center;
  border-radius: 16px;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  white-space: pre-line;
  line-height: 1.5;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export default Dialog;
