import apiClient from "../apiClient";
import {
  TOGGLE_MUTE,
  SET_AUDIO,
  SET_TIMER,
  SET_TIME_END_NOTIFICATION,
  SET_TIMER_ON_BROWSER,
  SET_WEB_NOTIICATION,
  SET_TOTAL_SESSION,
  SET_CURRENT_SESSION,
  SET_COUNTDOWN,
  TOGGLE_IMAGE,
} from "./noisliTypes";

export function SetAudio(payload) {
  return (dispatch) => {
    dispatch({ type: SET_AUDIO, payload: payload });
  };
}

export function ToggleMute() {
  return (dispatch) => {
    dispatch({ type: TOGGLE_MUTE });
  };
}

export function ToggleImages(title) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_IMAGE, title: title });
  };
}
