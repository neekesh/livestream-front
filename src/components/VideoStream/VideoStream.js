import React,{  useRef, useState } from "react";
import RecordRTC from 'recordrtc';
import {LiveButton, StreamContainer, VideoContainer} from "./VideoStram.elements"
import { VscDebugStart, VscDebugPause } from "react-icons/vsc";

const VideoStream = () => {
  const video = useRef(null);
  const [recording, setRecording] = useState(false)
  const [recorder, setRecorder] = useState(null);

  const startRecord = () => {
    setRecording(true)
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
    console.log("am i here", recorder)
    console.log(recording)
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
    setRecording(false)
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
      {!recording ?
        (<>
          <p>Please click start button to go live</p>
          <LiveButton onClick={startRecord}> <VscDebugStart /> Start </LiveButton>
        </>) : (
          <>
          <p>To stop live, please click stop</p>
          <LiveButton onClick={stopRecord}> <VscDebugPause /> Stop </LiveButton>
        </>
        )
      }
      <h4>You are about to record</h4>
       <VideoContainer ref={video} controls autoPlay={true} playsInline={true} />
    </StreamContainer>
  );
}

export default VideoStream