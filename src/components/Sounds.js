import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { ToggleImages } from "../actions/noisliActions";
import { RangeInput } from "grommet";

// import { Event } from "../tracking/tracking";
import SoundData from "../data/sounds.json";

function Sounds(props) {
  const { ToggleImages, audio, audioImages } = props;

  console.log(audioImages);
  const onImageClick = (title, dataKey) => {
    // Event("Sounds", "Selected", title);
    console.log("title", title);
    ToggleImages(title);
    playAudio(dataKey);
  };

  const playAudio = (datakey) => {
    const aud = audio[datakey];
    if (aud) aud.paused ? aud.play() : aud.pause();
  };

  const onSliderChange = (event, dataKey) => {
    const { value, min, max } = event.target;
    const aud = audio[dataKey];
    if (aud) aud.volume = value / (max - min);
  };

  return (
    <div className="flex-container sound-types">
      {SoundData.map((el, index) => {
        const { imgsrc, dataKey, title } = el;
        return (
          <div
            key={index}
            data-key={dataKey}
            className="flex-container sound-container"
          >
            <img
              src={require(`../images/${imgsrc}`).default}
              alt={title}
              title={title}
              onClick={() => onImageClick(title, dataKey)}
              className={audioImages[title] ? "active sound-img" : "sound-img"}
            />
            <RangeInput
              min="0"
              max="100"
              className={
                audioImages[title]
                  ? "dashboard-input slider-active "
                  : "dashboard-input"
              }
              onChange={(event) => onSliderChange(event, dataKey)}
            />
            {/* <input
                type="range"
                min="0"
                max="100"
                className={
                  activeImage[title]
                    ? "flex-item slider-active dashboard-input"
                    : "flex-item dashboard-input"
                }
                onChange={(event) => onSliderChange(event, dataKey)}
              /> */}
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    audio: state.audio,
    audioImages: state.audioImages,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ToggleImages,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sounds));
