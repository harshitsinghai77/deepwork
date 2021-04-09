import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import {
  AddTask,
  RemoveTask,
  ReorderTask,
  SetTimer,
  SetProject,
  SetDescription,
} from "../../actions/deepworkActions";

import { Main, Box } from "grommet";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  CurrentTask,
  CreateDeepTask,
  TaskCard,
  CurrentTaskStats,
} from "./components/session";
import SideBar from "./components/sidebar";
import { reorder } from "./utils";

const StartSession = (props) => {
  const {
    AddTask,
    RemoveTask,
    SetProject,
    SetTimer,
    ReorderTask,
    tasks,
  } = props;

  const [description, setDescription] = useState("");
  const [projectimer, setProjectimer] = useState({
    label: "1 hr",
    value: "PT01H00M00S",
  });
  const [projectName, setProjectName] = useState("");
  const [taskStats, setTaskStats] = useState(false);
  const [completedTask, setCompletedTask] = useState(0);

  const handleDescription = (event) => setDescription(event.target.value);
  const handleTimer = ({ value: nextValue }) => setProjectimer(nextValue);
  const hanldeProject = (projecName) => setProjectName(projecName);

  const onSubmit = ({ value }) => {
    console.log("OnSubmit called");
    value.id = Math.ceil(Math.random() * 75);
    setDescription("");
    AddTask(value);
  };

  const changeTimer = (id, newTimer) => {
    SetTimer({ id: id, newTimer: newTimer.value });
  };

  const changeProject = (id, newProject) => {
    SetProject({ id: id, newProject: newProject });
  };

  const onProjectDelete = (id) => {
    RemoveTask({ id: id });
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const orderedTask = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );

    setTaskStats(false);
    ReorderTask({
      tasks: orderedTask,
    });
  };

  return (
    <Box direction="row" overflow="hidden">
      <SideBar />
      <Main
        pad="medium"
        responsive
        background={{ color: "#ffffff" }}
        overflow="hidden"
      >
        {tasks[0] && (
          <CurrentTask
            currentTask={tasks[0]}
            onPlay={() => setTaskStats(true)}
          />
        )}
        {taskStats && <CurrentTaskStats completedTask={completedTask} />}
        <CreateDeepTask
          description={description}
          projectTimer={projectimer}
          projectName={projectName}
          setDescription={handleDescription}
          handleTimer={handleTimer}
          hanldeProject={hanldeProject}
          onSubmit={onSubmit}
        />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={`dragable ${task.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="mb-5"
                      >
                        <TaskCard
                          key={index}
                          task={task}
                          changeTimer={changeTimer}
                          changeProject={changeProject}
                          onProjectDelete={onProjectDelete}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Main>
    </Box>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddTask,
      RemoveTask,
      SetDescription,
      SetProject,
      SetTimer,
      ReorderTask,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StartSession));
