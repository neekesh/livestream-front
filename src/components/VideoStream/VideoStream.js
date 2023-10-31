import React,{  useRef, useState } from "react";
import RecordRTC from 'recordrtc';
import {LiveButton, StreamContainer, VideoContainer,PlayButton, PauseButton} from "./VideoStram.elements"
import { StartRecording, StopRecording } from "../../redux";
import { connect } from "react-redux";


const VideoStream = (props) => {
  const video = useRef(null);
  const [recorder, setRecorder] = useState(null);

  const startRecord = () => {
    props.startRecording()
    console.log(props.recording)
    captureCamera(function (camera) {
      video.current.muted = true;
      video.current.volume = 0;
      video.current.srcObject = camera;

     const  recorderMedia = RecordRTC(camera, {
        type: "video"
      });

      recorderMedia.startRecording();
      setRecorder(recorderMedia)

      // release camera on stopRecording
      setRecorder((prev) =>{
       return{ ...prev,
        camera: camera,}
      })
    });
  };

  const stopRecord = () => {

    recorder?.stopRecording?.(stopRecordingCallback);

  };
  
  const stopRecordingCallback = () => {

    video.current.src = video.srcObject = null;
    video.current.muted = false;
    video.current.volume = 1;
    video.current.srcObject = null;
    video.current.src = URL.createObjectURL(recorder.getBlob());
    

    recorder.camera?.stop();
    recorder.destroy();
    setRecorder(null)
    props.stopRecording()
  };

  const captureCamera = (callback) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(function (camera) {
        callback(camera);
      })
      .catch(function (error) {
        console.log(
          "Unable to capture your camera. Please check console logs."
        );
        console.error(error);
      });
  };


  return (
    <StreamContainer>
      {
          !props.recording ?
            (
              <>
                <p>Please click start button to go live</p>
                <LiveButton onClick={startRecord}> <PlayButton /> Start </LiveButton>
              </>
            ) : (
              <>
                <p>To stop live, please click stop</p>
                <LiveButton onClick={stopRecord}> <PauseButton /> Stop </LiveButton>
              </>
            )
      }
       <VideoContainer ref={video} controls autoPlay={true} playsInline={true} />
    </StreamContainer>
  );
}

const mapStateToProps = state => {
  return {
    recording: state.recording
  }
}

const mapDispatchToProps =  dispatch =>{
  
  return {
    startRecording: () => dispatch(StartRecording()),
    stopRecording: () => dispatch(StopRecording()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoStream)