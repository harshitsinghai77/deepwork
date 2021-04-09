import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { SetAudio, ToggleMute } from "../actions/noisliActions";

import { LoadSound } from "../js/utils";
// import Header from "../components/Header";
// import Timer from "../components/Timer";
import Sounds from "../components/Sounds";
import Introduction from "../components/Introduction";
import "../css/noisly.css";

function Dashboard(props) {
  const { SetAudio, ToggleMute, audio, audioMute } = props;

  useEffect(() => {
    const audioDict = LoadSound();
    SetAudio(audioDict);
  }, []);

  const onMuteClickToggle = () => {
    ToggleMute();
    for (const a of Object.values(audio)) {
      a.muted = !a.muted;
    }
  };

  const onMusicStop = () => {
    if (audio) {
      for (const a of Object.values(audio)) {
        a.muted = true;
      }
    }
  };

  return (
    <div id="#dashboard" className="dashboard">
      {/* <Header>
        <Timer onMusicStop={onMusicStop} />
      </Header> */}
      <div className="flex-container">
        <h1>Noisli</h1>

        <Introduction />
        <button
          className={
            audioMute
              ? "fa fa-volume-off active btn-mute dashboard-button"
              : "fa fa-volume-up active btn-mute dashboard-button"
          }
          title="Mute/Unmute"
          onClick={() => onMuteClickToggle()}
        ></button>

        <Sounds />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    audio: state.audio,
    audioMute: state.audioMute,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetAudio,
      ToggleMute,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
