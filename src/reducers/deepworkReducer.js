import {
  SET_DESCRIPTION,
  SET_TIMER,
  SET_PROJECT,
  ADD_TASK,
  REMOVE_TASK,
  REORDER_TASK,
} from "../actions/deepworkTypes";

export default function DeepWorkReducer(state, action) {
  switch (action.type) {
    case SET_DESCRIPTION: {
      const taskIndex = state.tasks.findIndex(
        (element) => element.id === action.payload.id
      );
      const updatedTask = [...state.tasks];
      updatedTask[taskIndex].desciption = action.payload.desciption;

      return { ...state, tasks: updatedTask };
    }
    case SET_PROJECT: {
      const taskIndex = state.tasks.findIndex(
        (element) => element.id === action.payload.id
      );
      const updatedTask = [...state.tasks];
      updatedTask[taskIndex].projectName = action.payload.newProject;

      return { ...state, tasks: updatedTask };
    }
    case SET_TIMER: {
      const taskIndex = state.tasks.findIndex(
        (element) => element.id === action.payload.id
      );
      const updatedTask = [...state.tasks];
      updatedTask[taskIndex].projectTimer = action.payload.newTimer;

      return { ...state, tasks: updatedTask };
    }
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case REMOVE_TASK: {
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, tasks: filteredTasks };
    }
    case REORDER_TASK: {
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    }
    default:
      return {};
  }
}
