import React,{ useContext } from 'react'
import { Main, LiveStreamImage } from './Welcome.elements'
import {Context} from "../../utils/Context"


const Welcome = () => {
  const Logo = useContext(Context)
  return (
    <Main>
        <LiveStreamImage src={Logo} />
        <h1>Welcome to the live stream Project</h1>
        <h3>This project is created to learn about webrtc.</h3>
         <h5> This project wil have livestream features with chat.</h5>
    </Main>
  )
}

export default Welcome