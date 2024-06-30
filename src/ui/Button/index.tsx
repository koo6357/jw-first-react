import styled from "@emotion/styled";

export type ButtonThemeType = "primary" | "secondary";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  theme?: ButtonThemeType;
}

const getButtonTheme = (theme: ButtonThemeType) => {
  switch (theme) {
    case "primary": {
      return {
        backgroundColor: "#ffcc00",
        color: "#333333",
      };
    }
    case "secondary": {
      return {
        backgroundColor: "#ddd",
        color: "#333333",
      };
    }
    default: {
      return {
        backgroundColor: "#ffffff",
        color: "#333",
      };
    }
  }
};

const Button = ({ children, theme = "primary", onClick = () => {} }: Props) => {
  const { backgroundColor, color } = getButtonTheme(theme);
  return (
    <Container
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </Container>
  );
};

const Container = styled.button<{ backgroundColor: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-radius: 100px;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

export default Button;
