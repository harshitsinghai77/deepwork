import { useState, memo } from "react";
import {
  Clock,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormField,
  TextInput,
  Box,
  Meter,
  Text,
  Heading,
  Layer,
} from "grommet";
import { Trash, Play, Pause, Checkmark } from "grommet-icons";
import { SelectProjectName, SelectTimer } from "./select";
import TaskCompleted from "./taskCompleted";

export const CurrentTask = memo(({ currentTask, onPlay }) => {
  const { desciption, projectTimer } = currentTask;
  console.log("currentTask", currentTask);
  const [openDialog, setOpenDialog] = useState(false);
  const [pause, setPause] = useState(true);

  const onClose = () => setOpenDialog(false);

  return (
    <>
      <Box
        responsive
        margin={{ bottom: "medium" }}
        alignSelf="center"
        gap="medium"
        animation={{ type: "slideLeft", duration: 400 }}
      >
        <Text size="large" alignSelf="center">
          Current Task
        </Text>
        <Heading weight="bold" level={2} alignSelf="center">
          {desciption}
        </Heading>

        <Clock
          type="digital"
          run={pause ? false : "backward"}
          size="xxlarge"
          time={projectTimer}
          alignSelf="center"
        />
        <Meter
          values={[
            {
              value: 45,
              label: "sixty",
              onClick: () => {},
            },
          ]}
          thickness="xsmall"
          aria-label="meter"
        />

        <Box
          gap="medium"
          direction="row"
          alignSelf="center"
          animation={{ type: "slideLeft", duration: 400 }}
        >
          <Button
            icon={<Play size="medium" />}
            onClick={() => {
              onPlay();
              setPause(false);
            }}
            hoverIndicator
          />
          <Button
            icon={<Pause size="medium" plain />}
            onClick={() => setPause(true)}
            hoverIndicator
          />

          <Button
            icon={<Checkmark size="medium" />}
            onClick={() => setOpenDialog(true)}
            hoverIndicator
          />
        </Box>
      </Box>
      {openDialog && (
        <Layer
          position="center"
          animation="fadeIn"
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <TaskCompleted onSave={onClose} />
        </Layer>
      )}
    </>
  );
});

export const CurrentTaskStats = ({ completedTask }) => {
  return (
    <Box
      direction="row"
      margin={{ bottom: "small" }}
      pad="medium"
      gap="large"
      justify="center"
      animation={{ type: "slideLeft", duration: 400 }}
      responsive
    >
      <Box gap="small">
        <Text weight="bold" alignSelf="center" size="medium">
          Start Time
        </Text>
        <Text weight="bold" size="1.5rem" alignSelf="center">
          {new Date().toLocaleTimeString()}
        </Text>
      </Box>
      <Box gap="small">
        <Text weight="bold" size="medium">
          Time Elapsed
        </Text>
        <Text weight="bold" size="1.5rem" alignSelf="center">
          0 hrs 24 min
        </Text>
      </Box>
      <Box gap="small">
        <Text weight="bold" size="medium">
          Tasks Completed
        </Text>
        <Text weight="bold" size="1.5rem" alignSelf="center">
          {completedTask}
        </Text>
      </Box>
    </Box>
  );
};

export const CreateDeepTask = ({
  description,
  setDescription,
  projectTimer,
  handleTimer,
  projectName,
  hanldeProject,
  onSubmit,
}) => {
  return (
    <Box
      margin={{ bottom: "xsmall", horizontal: "large" }}
      pad="small"
      animation={{ type: "slideLeft", duration: 400 }}
      align="center"
      responsive
    >
      <Form
        validate="blur"
        onReset={(event) => console.log(event)}
        onValidate={(event) => console.log("Validate", event)}
        onSubmit={onSubmit}
      >
        <Box width="medium">
          <FormField name="desciption" required>
            <TextInput
              plain
              name="desciption"
              placeholder="Add task description"
              value={description}
              onChange={setDescription}
            />
          </FormField>
        </Box>

        <Box direction="row" gap="medium" width="34rem" align="baseline">
          <FormField name="projectTimer" required>
            <SelectTimer
              plain
              projectTimer={projectTimer}
              handleTimer={handleTimer}
            />
          </FormField>
          <FormField name="projectName" required>
            <SelectProjectName
              plain
              projectName={projectName}
              hanldeProject={hanldeProject}
            />
          </FormField>
          <Box width="small">
            <Button label="Add Task" size="medium" type="submit" />
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

export const TaskCard = ({
  task,
  changeTimer,
  changeProject,
  onProjectDelete,
}) => {
  const { id, desciption, projectName, projectTimer } = task;

  return (
    <Box align="center">
      <Card width="large" background="light-1">
        <CardHeader pad="medium">
          <Text size="large" weight="bold">
            {desciption}
          </Text>
          <Text size="large">Project: {projectName}</Text>
        </CardHeader>

        <CardBody pad="medium" gap="small" direction="row" justify="between">
          <SelectTimer
            projectTimer={projectTimer}
            handleTimer={({ option }) => changeTimer(id, option)}
          />
          <SelectProjectName
            projectName={projectName}
            hanldeProject={(projectName) => changeProject(id, projectName)}
          />
          <Button
            icon={<Trash color="red" size="medium" />}
            onClick={() => onProjectDelete(id)}
            hoverIndicator
          />
        </CardBody>
      </Card>
    </Box>
  );
};
