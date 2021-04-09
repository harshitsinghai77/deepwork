import { Main, Box } from "grommet";

import {
  DailyGoals,
  RecentStats,
  DeepWorkPerHoursPerMonth,
} from "./components/dashboard";

import {
  DeepWorkHours,
  DeepWorkHoursPerDay,
  AvgSessionLength,
} from "./components/chart";
import { Title } from "./utils";
import Sidebar from "./components/sidebar";

const DeepWork = () => {
  return (
    <Box direction="row">
      <Sidebar />
      <Main pad="large" responsive background={{ color: "#fffff" }}>
        <Title titleText="Daily Goal" />
        <DailyGoals />

        <Title titleText="Recent Stats" />
        <RecentStats />

        <Title titleText="Deep Work Hours" />
        <DeepWorkHours />

        <Title titleText="Deep Work Hours per Day (by project)" />
        <DeepWorkHoursPerDay />

        <Title titleText="Deep Work Hours per Month" />
        <DeepWorkPerHoursPerMonth />

        <Title titleText="Avg. Session Length per Week" />
        <AvgSessionLength />
      </Main>
    </Box>
  );
};

export default DeepWork;
