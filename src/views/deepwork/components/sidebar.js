import { Link } from "react-router-dom";

import { Avatar, Button, Box, Nav, Stack, Text, Sidebar } from "grommet";
import {
  Analytics,
  Archive,
  Launch,
  Configure,
  Java,
  Compliance,
} from "grommet-icons";

const dummyPhoto = "https://avatars.githubusercontent.com/u/30886142?v=4";

const SidebarHeader = () => (
  <Box align="center" gap="small" direction="row" margin={{ bottom: "large" }}>
    <Stack alignSelf="start" align="center" anchor="top-right">
      <Avatar src={dummyPhoto} />
      <Box pad="xsmall" background="orange" round responsive />
    </Stack>
    <Text>Harshit Singhai</Text>
  </Box>
);

const SidebarButton = ({ icon, label, href, ...rest }) => (
  <Link to={href}>
    <Box pad="small">
      <Button
        plain
        gap="medium"
        alignSelf="start"
        icon={icon}
        label={label}
        {...rest}
      />
    </Box>
  </Link>
);

const MainNavigation = () => (
  <Nav gap="mediumn">
    <SidebarButton icon={<Java />} label="Home" href="/" />
    <SidebarButton icon={<Analytics />} label="Dashboard" href="/deepwork" />
    <SidebarButton
      icon={<Launch />}
      label="Start Session"
      href="/deepwork/start-session"
    />
    <SidebarButton
      icon={<Archive />}
      label="Last Session"
      href="/deepwork/start-session"
    />
    <SidebarButton
      icon={<Compliance />}
      label="Kanban"
      href="/deepwork/kanban"
    />
    <SidebarButton
      icon={<Configure />}
      label="Settings"
      href="/deepwork/settings"
    />
  </Nav>
);

const SidebarMenu = () => (
  <div className="min-h-screen">
    <Sidebar
      responsive
      background="light-2"
      header={<SidebarHeader />}
      pad={{ horizontal: "small", vertical: "medium" }}
    >
      <MainNavigation />
    </Sidebar>
  </div>
);

export default SidebarMenu;
