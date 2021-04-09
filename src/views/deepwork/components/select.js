import { useState } from "react";
import { Select } from "grommet";
import { Alarm, Projects } from "grommet-icons";

import { getRegExp } from "../utils";

// the prefix name of the Create option entry
const prefix = "Create";

const defaultOptions = [];
for (let i = 1; i <= 5; i += 1) {
  defaultOptions.push(`option ${i}`);
}

const updateCreateOption = (text) => {
  const len = defaultOptions.length;
  if (defaultOptions[len - 1].includes(prefix)) {
    // remove Create option before adding an updated one
    defaultOptions.pop();
  }
  defaultOptions.push(`${prefix} '${text}'`);
};

export const SelectProjectName = ({ projectName, hanldeProject, ...rest }) => {
  const [options, setOptions] = useState(defaultOptions);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Select
      {...rest}
      name="projectName"
      size="medium"
      placeholder="Select"
      icon={<Projects />}
      value={projectName}
      options={options}
      multiple={false}
      onChange={({ option }) => {
        if (option && option.includes(prefix)) {
          defaultOptions.pop(); // remove Create option
          defaultOptions.push(searchValue);
          hanldeProject(searchValue);
        } else {
          hanldeProject(option);
        }
      }}
      onClose={() => setOptions(defaultOptions)}
      onSearch={(text) => {
        updateCreateOption(text);
        const exp = getRegExp(text);
        setOptions(defaultOptions.filter((o) => exp.test(o)));
        setSearchValue(text);
      }}
    />
  );
};

const defaultTimerOption = [
  { label: "5 min", value: "PT00H05M00S" },
  { label: "15 min", value: "PT00H15M00S" },
  { label: "30 min", value: "PT00H30M00S" },
  { label: "45 min", value: "PT00H45M00S" },
  { label: "1 hr", value: "PT01H00M00S" },
  { label: "1 hr 30 min", value: "PT01H30M00S" },
  { label: "2 hr", value: "PT02H00M00S" },
  { label: "2 hr 30 min", value: "PT02H30M00S" },
  { label: "3 hr", value: "PT03H00M00S" },
  { label: "3 hr 30 min", value: "PT03H30M00S" },
  { label: "4 hr", value: "PT04H00M00S" },
];

export const SelectTimer = ({ projectTimer, handleTimer, ...rest }) => (
  <Select
    {...rest}
    id="select"
    name="projectTimer"
    size="medium"
    placeholder="Select"
    labelKey="label"
    valueKey={{ key: "value", reduce: true }}
    value={projectTimer}
    options={defaultTimerOption}
    onChange={handleTimer}
    multiple={false}
    icon={<Alarm color="plain" />}
  />
);
