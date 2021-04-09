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
} from "../actions/noisliTypes";

export default function NoisliReducer(state, action) {
  switch (action.type) {
    case TOGGLE_MUTE: {
      return { ...state, audioMute: !state.audioMute };
    }
    case SET_AUDIO: {
      return { ...state, audio: action.payload };
    }
    case SET_TIMER: {
      return {
        ...state,
        settings: { ...state.settings, timer: action.value },
      };
    }
    case SET_TIME_END_NOTIFICATION: {
      return {
        ...state,
        settings: { ...state.settings, timeEndNotification: action.value },
      };
    }
    case SET_TIMER_ON_BROWSER: {
      return {
        ...state,
        settings: { ...state.settings, showTimerOnBrowser: action.value },
      };
    }
    case SET_WEB_NOTIICATION: {
      return {
        ...state,
        settings: { ...state.settings, webNotification: action.value },
      };
    }
    case SET_TOTAL_SESSION: {
      return {
        ...state,
        settings: { ...state.settings, totalSessions: action.value },
      };
    }
    case SET_CURRENT_SESSION: {
      return {
        ...state,
        settings: { ...state.settings, currentSession: action.value },
      };
    }
    case SET_COUNTDOWN: {
      return {
        ...state,
        settings: { ...state.settings, countdownValue: action.value },
      };
    }
    case TOGGLE_IMAGE: {
      return {
        ...state,
        audioImages: {
          ...state.audioImages,
          [action.title]: !state.audioImages[action.title],
        },
      };
    }
    default:
      return {};
  }
}
