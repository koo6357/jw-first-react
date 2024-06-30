import styled from "@emotion/styled";
import { useThemesColor } from "@/components/Typography/useThemesColor.ts";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  tag:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "div"
    | "strong"
    | "em"
    | "i"
    | "b"
    | "u"
    | "ul"
    | "li"
    | "ol"
    | "dl"
    | "dt"
    | "dd"
    | "caption";
  type:
    | "title28"
    | "title26"
    | "title24"
    | "title20"
    | "subtitle18"
    | "body16"
    | "body15"
    | "body14"
    | "body13"
    | "caption12"
    | "caption10";
  color?:
    | "high-emphasis"
    | "medium-emphasis"
    | "low-emphasis"
    | "disabled"
    | "blue"
    | "red"
    | "yellow";
  weight?: "regular" | "bold";
  style: React.CSSProperties;
}

const getFontSize = (type: Props["type"]) => {
  return type.substring(type.length - 2);
};

const Typography = ({
  children,
  className,
  tag,
  type,
  color = "high-emphasis",
  weight = "regular",
  style,
}: Props) => {
  const { getThemesColor } = useThemesColor();

  const fontSize = getFontSize(type);
  const fontWight = weight === "bold" ? "bold" : "normal";
  const fontColor = getThemesColor(color);
  return (
    <Container
      className={className}
      as={tag}
      type={type}
      fontSize={fontSize}
      fontWight={fontWight}
      fontColor={fontColor}
      style={style}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{
  type: Props["type"];
  fontSize: string;
  fontWight: "bold" | "normal";
  fontColor?: string;
}>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWight};
  color: ${(props) => props.fontColor};
`;

export default Typography;
