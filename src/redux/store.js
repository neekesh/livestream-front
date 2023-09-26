import {configureStore} from "@reduxjs/toolkit"

import RecordingReducer from "./recordingReducer"

export const recordingStore = configureStore(RecordingReducer)