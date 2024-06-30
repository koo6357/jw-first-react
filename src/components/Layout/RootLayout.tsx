import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import Header from "@/components/Header";
import { useThemesColor } from "@/components/Typography/useThemesColor.ts";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { getThemesColor } = useThemesColor();
  const bgColor = getThemesColor("background-white");
  const handleSidebarToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <Header onSidebarToggle={handleSidebarToggle} />
      {children}
    </Container>
  );
};

const Container = styled.main``;

export default RootLayout;
