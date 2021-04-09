import apiClient from "../apiClient";
import {
  ADD_TASK,
  REMOVE_TASK,
  REORDER_TASK,
  SET_DESCRIPTION,
  SET_PROJECT,
  SET_TIMER,
} from "./deepworkTypes";

export function AddTask(payload) {
  return (dispatch) => {
    dispatch({ type: ADD_TASK, payload: payload });
    // return apiClient
    //   .get_india_details_history()
    //   .then((res) => {
    //     if (res) {
    //       const { data } = res;
    //       return data;
    //     }
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
  };
}

export function RemoveTask(payload) {
  return (dispatch) => {
    console.log("payload", payload);
    dispatch({ type: REMOVE_TASK, payload: payload });
    // return apiClient
    //   .get_india_details_history()
    //   .then((res) => {
    //     if (res) {
    //       const { data } = res;
    //       return data;
    //     }
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
  };
}

export function ReorderTask(payload) {
  return (dispatch) => {
    dispatch({ type: REORDER_TASK, payload: payload });
  };
}

export function SetDescription(payload) {
  return (dispatch) => {
    dispatch({ type: SET_DESCRIPTION, payload: payload });
  };
}

export function SetProject(payload) {
  return (dispatch) => {
    dispatch({ type: SET_PROJECT, payload: payload });
  };
}

export function SetTimer(payload) {
  return (dispatch) => {
    dispatch({ type: SET_TIMER, payload: payload });
  };
}
