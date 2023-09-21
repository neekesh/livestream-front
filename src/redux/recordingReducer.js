import { START_RECORDING, STOP_RECORDING } from "./recordingTypes"

const recordingState = {
    recording: false
}

const RecordingReducer = (state = recordingState, action) =>{
    switch (action.type) {
        case START_RECORDING: return {
            recording: true,
        }
        case STOP_RECORDING: return {
            recording: false,
        }
        default: return  state
    }
}
export default RecordingReducer