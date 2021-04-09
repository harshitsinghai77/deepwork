import { useState } from "react";
import { Main, Box, Heading, Text, Select, CheckBox } from "grommet";

import SideBar from "./components/sidebar";

const Settings = () => {
  const [dailyGoal, setDailyGoals] = useState("4 hr");
  const [emailReport, setEmailReport] = useState(false);
  const [notification, setNotification] = useState(false);
  const [sound, setSound] = useState(false);

  return (
    <Box direction="row">
      <SideBar />
      <Main pad="xlarge" responsive background={{ color: "#ffffff" }}>
        <Box margin={{ bottom: "large" }} pad="medium" responsive gap="small">
          <Box direction="row" justify="between">
            <Heading level={2}>Daily Goal</Heading>
            <Select
              options={["1 hr", "2 hr", "3 hr", "4 hr", "5 hr", "6 hr"]}
              width="10px"
              value={dailyGoal}
              onChange={({ option }) => setDailyGoals(option)}
              size="small"
            />
          </Box>
          <Text size="small">
            Change the daily goal that shows up on your dashboard.
          </Text>

          <Box direction="row" justify="between" margin={{ top: "large" }}>
            <Heading level={2}>Email Daily Report</Heading>
            <CheckBox
              toggle
              checked={emailReport}
              onChange={(event) => setEmailReport(event.target.checked)}
            />
          </Box>
          <Text size="small">
            Get an email every morning with your accomplishments from the
            previous day.
          </Text>

          <Box direction="row" justify="between" margin={{ top: "large" }}>
            <Heading level={2}>Notifications</Heading>
            <CheckBox
              toggle
              checked={notification}
              onChange={(event) => setNotification(event.target.checked)}
            />
          </Box>
          <Text size="small">
            Get a reminder to do deep work each weekday morning.
          </Text>

          <Box direction="row" justify="between" margin={{ top: "large" }}>
            <Heading level={2}>Sound</Heading>
            <CheckBox
              toggle
              checked={sound}
              onChange={(event) => setSound(event.target.checked)}
            />
          </Box>
          <Text size="small">
            Control if the bell rings when a task's timer expires.
          </Text>
        </Box>
      </Main>
    </Box>
  );
};

export default Settings;
