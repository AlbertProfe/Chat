//import React from 'react'
import {Container} from "semantic-ui-react"
import ChatMenuHeader from "./ChatMenuHeader";
import ContactsList from "./ContactsList";
//import { WebSocketContext } from "../APICommunication/SocketProvider";
//import { useContext } from "react";

export default function ChatMenu() {
    //const [isConnected, message] = useContext(WebSocketContext);


  return (
    <>

      <Container>
        <ChatMenuHeader />
      </Container>

      <Container
        style={{
          border: "none",
          paddingTop: "30px",
          paddingLeft: "15px",
          paddingBottom: "5px",
        }}
      >
        <ContactsList />
      </Container>
      </>
  );
}
