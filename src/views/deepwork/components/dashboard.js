import {
  Box,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "grommet";

const defaultBoxProps = {
  pad: "medium",
  margin: { bottom: "large" },
  border: { size: "small" },
  animation: { type: "slideLeft", duration: 400 },
  responsive: true,
};

export const DailyGoals = () => (
  <Box {...defaultBoxProps}>
    <Text size="medium">
      Congratulations! You've done&nbsp;<Text color="brand">5.1</Text>
      &nbsp;hours of deep work today,&nbsp;<Text color="brand">1.1</Text>
      &nbsp;hours more than your daily goal.
    </Text>
  </Box>
);

export const RecentStats = () => (
  <Box
    {...defaultBoxProps}
    pad={{ vertical: "small" }}
    direction="row"
    gap="xlarge"
    justify="center"
  >
    <Box>
      <Text textAlign="center">Daily Avg.</Text>
      <Text size="xxlarge">3.5 Hours</Text>
      <Text color="brand" textAlign="center">
        + 61.0%
      </Text>
    </Box>
    <Box>
      <Text textAlign="center">Deep Work Score</Text>
      <Text size="xxlarge" textAlign="center">
        54
      </Text>
      <Text color="brand" textAlign="center">
        + 1.0%
      </Text>
    </Box>
    <Box>
      <Text textAlign="center">Streak</Text>
      <Text size="xxlarge">10 days</Text>
    </Box>
  </Box>
);

export const DeepWorkPerHoursPerMonth = () => {
  const tableHeaders = ["Month", "Total Hours", "Change from Prev. Month"];
  const tableData = [
    {
      month: "Dec 2020",
      totalHours: 6.1,
      changeFromPrevMonth: "-19.4%",
    },
    {
      month: "Nov 2020",
      totalHours: 6.1,
      changeFromPrevMonth: "-19.4%",
    },
    {
      month: "Oct 2020",
      totalHours: 6.1,
      changeFromPrevMonth: "-19.4%",
    },
    {
      month: "Oct 2020",
      totalHours: 6.1,
      changeFromPrevMonth: "-19.4%",
    },
  ];

  return (
    <Box
      margin={{ bottom: "large" }}
      animation={{ type: "slideLeft", duration: 400 }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((el, index) => (
              <TableCell key={index} scope="col" border="bottom">
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((el, index) => (
            <TableRow key={index}>
              <TableCell scope="row">
                <strong>{el.month}</strong>
              </TableCell>
              <TableCell>{el.totalHours}</TableCell>
              <TableCell>{el.changeFromPrevMonth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
