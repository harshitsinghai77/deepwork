import { memo } from "react";
import { Link } from "react-router-dom";

import { Header } from "grommet";
import { Performance } from "grommet-icons";
import { Title } from "./Elements";
import "../css/header.css";

const HeaderContainer = ({ textcolor, children }) => (
  <Header>
    <div className="header-container" id="#timer-header">
      <Link to="/">
        <Title title="Noisli" color={textcolor} />
      </Link>
      <div className="header-container-center">{children}</div>

      <Link to="/settings">
        <Performance color="#ffffff" />
      </Link>

      <Link to="/deepwork">
        <Performance color="#ffffff" />
      </Link>
    </div>
  </Header>
);

export default memo(HeaderContainer);
