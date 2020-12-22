import { memo } from "react";
import { Link } from "react-router-dom";
import { Header } from "grommet";

import { themePrimaryColor } from "../themes";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill={textcolor ? themePrimaryColor : "currentColor"}
              d="M6.44 0h1.12c.188 0 .355.12.415.3l.775 2.325h-3.5L6.025.299C6.085.121 6.252 0 6.44 0zM7.56 14.001H6.44a.438.438 0 0 1-.415-.3l-.775-2.325h3.5l-.775 2.326A.438.438 0 0 1 7.56 14zM11.554 1.655l.791.791a.438.438 0 0 1 .082.505l-1.096 2.193-2.475-2.475 2.193-1.096a.437.437 0 0 1 .505.082zM2.445 12.346l-.791-.792a.437.437 0 0 1-.082-.505l1.096-2.193 2.475 2.475-2.193 1.097a.437.437 0 0 1-.505-.082zM14 6.44v1.12c0 .187-.12.355-.299.414l-2.326.775v-3.5l2.326.776c.179.06.3.227.3.415zM0 7.56V6.44c0-.187.121-.355.3-.414l2.325-.776v3.5L.3 7.975A.438.438 0 0 1 0 7.56zM12.346 11.554l-.791.792a.437.437 0 0 1-.505.082L8.857 11.33l2.475-2.475 1.096 2.193a.438.438 0 0 1-.082.505zM1.655 2.446l.791-.792a.438.438 0 0 1 .505-.082L5.144 2.67 2.669 5.144 1.573 2.95a.438.438 0 0 1 .082-.505z"
            ></path>
            <path
              fill={textcolor ? themePrimaryColor : "currentColor"}
              fillRule="nonzero"
              d="M7 12A5 5 0 1 1 7 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            ></path>
            <path d="M0 0h14v14H0z"></path>
          </g>
        </svg>
      </Link>
    </div>
  </Header>
);

export default memo(HeaderContainer);
