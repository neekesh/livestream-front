import {createStore} from "redux"

import RecordingReducer from "./recordingReducer"

export const recordingStore = createStore(RecordingReducer)