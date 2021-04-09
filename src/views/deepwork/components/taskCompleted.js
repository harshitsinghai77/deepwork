import { useState } from "react";
import { Box, Heading, Text, RangeInput, TextArea, Button } from "grommet";

const TaskCompleted = ({ onSave }) => {
  const [focus, setFocuse] = useState(10);
  const [difficulty, setDifficulty] = useState(10);
  const [notes, setNotes] = useState("");

  return (
    <Box pad="medium" responsive gap="medium" width="35rem">
      <Box gap="small">
        <Heading level={3}>Focus Level</Heading>
        <Text size="small">
          How focused were you while you worked on this task?
        </Text>
        <RangeInput
          value={focus}
          onChange={(event) => setFocuse(event.target.value)}
          step="number"
          min={1}
          max={10}
        />
        <Box direction="row" justify="between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <Text size="medium">{el}</Text>
          ))}
        </Box>
      </Box>

      <Box gap="small">
        <Heading level={3}>Task Difficulty</Heading>
        <Text size="small">
          How much did this task push you intellectually?
        </Text>
        <RangeInput
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          step="number"
          min={1}
          max={10}
        />
        <Box direction="row" justify="between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <Text size="medium">{el}</Text>
          ))}
        </Box>
      </Box>

      <Box>
        <Heading level={3}>Notes</Heading>
        <TextArea
          resize
          placeholder="- Ran into issue x&#10;- Learned y&#10;- Need to ask about z"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
      </Box>

      <Box align="end">
        <Button primary label="Save" onClick={onSave} />
      </Box>
    </Box>
  );
};

export default TaskCompleted;
