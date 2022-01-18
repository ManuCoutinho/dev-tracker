import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import { FiMoon, FiGithub} from "react-icons/fi";

import { Container, HeaderContainer } from "./style";

export function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <Container>
        <h1>DEV.tracker </h1>
        <FiGithub size={44} role="logo" />
      </Container>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        onColor={theme.primary}
        offColor={theme.primary}
        offHandleColor={theme.text}
        onHandleColor={theme.text}
        height={20}
        width={60}
        handleDiameter={30}
        uncheckedIcon={
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              paddingRight: 2,
            }}
          >
            <WiDaySunny />
          </span>
        }
        checkedIcon={
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              paddingRight: 2,
              paddingBottom: 2,
            }}
          >
            <FiMoon />
          </span>
        }
      />
    </HeaderContainer>
  );
}
