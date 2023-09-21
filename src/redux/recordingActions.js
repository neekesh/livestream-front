import { START_RECORDING, STOP_RECORDING } from "./recordingTypes"

export const StartRecording =  () => {
    return {
        type: START_RECORDING
    }
}
export const StopRecording =  () => {
    return {
        type: STOP_RECORDING
    }
}