import styled from "@emotion/styled";
import ContentContainer from "@/components/ContentContainer";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Typography from "@/components/Typography";
import { useDisplayMode } from "@/providers/DisplayModeProvider";
import { useContext } from "react";
import { LayerContainerContext } from "@/components/LayerContainer";

interface Props {
  onSidebarToggle: () => void;
}

const menus = [
  {
    to: "/",
    name: "home",
    label: "홈",
  },
];

const Header = ({ onSidebarToggle }: Props) => {
  const { mode, toggleMode } = useDisplayMode();
  const value = useContext(LayerContainerContext);
  return (
    <Container>
      <ContentContainer>
        <Typography
          tag={"div"}
          type={"title28"}
          weight={"bold"}
          color={"high-emphasis"}
        >
          Logo {value?.name}
        </Typography>
        <Gnb>
          <nav>
            {menus.map(({ to, name, label }) => {
              return (
                <div className="nav-item" key={name}>
                  <Link className="nav-link" to={to}>
                    {label}
                  </Link>
                </div>
              );
            })}
          </nav>
          <button className="btn-menu" onClick={onSidebarToggle}>
            <IoMdMenu />
          </button>
          <button onClick={toggleMode}>모드: {mode}</button>
        </Gnb>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  nav {
    display: flex;
    align-items: center;
    .nav-link {
      display: flex;
      align-items: center;
      height: 70px;
      padding: 0 20px;
      text-transform: capitalize;
    }
  }

  .btn-menu {
    display: flex;
    font-size: 24px;
    transition: 0.25s;
    &:hover {
      color: #18f;
    }
  }
`;

export default Header;
