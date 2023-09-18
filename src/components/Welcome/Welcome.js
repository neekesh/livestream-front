import React from 'react'
import { Main, LiveStreamImage } from './Welcome.elements'
import LiveStreamIcon from "../../images/livestream.png"

const Welcome = () => {
  return (
    <Main>
        <LiveStreamImage src={LiveStreamIcon} />
        <h1>Welcome to the live stream Project</h1>
        <h3>This project is created to learn about webrtc.</h3>
         <h5> This project wil have livestream features with chat.</h5>
    </Main>
  )
}

export default Welcome