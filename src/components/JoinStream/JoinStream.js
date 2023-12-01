import React,{  useRef } from "react";
import { JoinStreamContainer, VideoContainer, ChatContainer, MessageBox, Message} from "./JoinStream.elements"


const JoinStream = (props) => {
  const video = useRef(null);
  return (
    <JoinStreamContainer>
       <VideoContainer ref={video} controls autoPlay={true} playsInline={true}  id="video1"/>
      <ChatContainer>
        <Message>
          Message from client 0
        </Message> <Message>
          Message from client 1
        </Message> <Message>
          Message from client 2
        </Message>
        <MessageBox placeholder="Write a message" >

        </MessageBox>
      </ChatContainer>
    </JoinStreamContainer>
  );
}

export default JoinStream 
