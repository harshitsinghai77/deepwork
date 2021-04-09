import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Box, DataChart, Button } from "grommet";
import { generateData } from "../utils";

export const DeepWorkHours = () => {
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    setLineData(generateData("last7days"));
  }, []);

  return (
    <Box
      margin={{ bottom: "large" }}
      border={{ size: "small" }}
      pad="medium"
      gap="medium"
    >
      <Box>
        <DataChart
          a11yTitle="This is my label"
          alignSelf="center"
          pad="small"
          data={lineData}
          series={[
            {
              label: "hrs",
              property: "date",
              render: (value) => format(new Date(value), "E, do MMM"),
            },
            {
              label: "amount",
              property: "amount",
              render: (value) => Math.round(value) + " hrs",
            },
          ]}
          chart={[
            {
              property: "amount",
              type: "line",
              thickness: "xsmall",
            },
          ]}
          detail={true}
          guide={{ y: { granularity: "medium" } }}
          axis={{
            y: { granularity: "fine", property: "amount" },
            x: { granularity: "medium", property: "date" },
          }}
          size={{ width: "650", height: "200" }}
        />
      </Box>
      <Box direction="row" alignSelf="center" gap="large">
        <Button
          label="Last 7 days"
          onClick={() => setLineData(generateData("last7days"))}
        />
        <Button
          label="Last 14 days"
          onClick={() => setLineData(generateData("last14days"))}
        />
        <Button
          label="Last 30 days"
          onClick={() => setLineData(generateData("last30days"))}
        />
        <Button
          label="All Time"
          onClick={() => setLineData(generateData("alltime"))}
        />
      </Box>
    </Box>
  );
};

export const DeepWorkHoursPerDay = () => {
  const dataperday = [
    { date: "2020-08-21", mytask: 14, habitt: 8, anton: 6 },
    { date: "2020-08-21", mytask: 19, habitt: 6, anton: 8 },
    { date: "2020-08-21", mytask: 18, habitt: 7, anton: 8 },
    { date: "2020-08-21", mytask: 17, habitt: 8, anton: 8 },
    { date: "2020-08-21", mytask: 16, habitt: 9, anton: 8 },
    { date: "2020-08-22", mytask: 15, habitt: 10, anton: 8 },
    { date: "2020-08-22", mytask: 11, habitt: 4, anton: 8 },
    { date: "2020-08-22", mytask: 13, habitt: 6, anton: 8 },
    { date: "2020-08-22", mytask: 12, habitt: 8, anton: 8 },
  ];

  return (
    <Box margin={{ bottom: "large" }} pad="medium" border={{ size: "small" }}>
      <DataChart
        data={dataperday}
        alignSelf="center"
        gap="small"
        series={["mytask", "habitt", "anton"]}
        guide={{ y: { granularity: "medium" } }}
        axis={{
          y: { granularity: "fine", property: "amount" },
          x: { granularity: "medium", property: "date" },
        }}
        size={{ width: "650", height: "300" }}
        legend
      />
    </Box>
  );
};

export const AvgSessionLength = () => {
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    setLineData(generateData("last7days"));
  }, []);

  return (
    <Box
      margin={{ bottom: "large" }}
      border={{ size: "small" }}
      pad="medium"
      gap="medium"
    >
      <DataChart
        a11yTitle="This is my label"
        alignSelf="center"
        pad="small"
        data={lineData}
        series={[
          {
            label: "hrs",
            property: "date",
            render: (value) => format(new Date(value), "E, do MMM"),
          },
          {
            label: "amount",
            property: "amount",
            render: (value) => Math.round(value) + " hrs",
          },
        ]}
        chart={[
          {
            property: "amount",
            type: "line",
            thickness: "xsmall",
          },
        ]}
        detail={true}
        guide={{ y: { granularity: "medium" } }}
        axis={{
          y: { granularity: "fine", property: "amount" },
          x: { granularity: "medium", property: "date" },
        }}
        size={{ width: "650", height: "200" }}
      />

      <Box direction="row" margin="auto" gap="large">
        <Button
          label="Last 30 days"
          onClick={() => setLineData(generateData("last7days"))}
        />
        <Button
          label="All Time"
          onClick={() => setLineData(generateData("last14days"))}
        />
      </Box>
    </Box>
  );
};
