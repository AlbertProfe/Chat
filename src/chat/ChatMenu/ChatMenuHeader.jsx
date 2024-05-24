//import React from 'react'
import {Header,Container,Button} from "semantic-ui-react";


export default function ChatMenuHeader() {

  
  return (
    <>
        <Header as="h3">Chats</Header>
        <Container
          style={{
            border: "none",
            paddingLeft: "10px",
            paddingBottom: "5px",
          }}
        >
          <Button basic fluid content="Chat" icon="add" labelPosition="right" />
        </Container>
        <Container
          style={{
            border: "none",

            paddingLeft: "10px",
          }}
        >
          <Button
            basic
            fluid
            content="Contact"
            icon="add"
            labelPosition="right"
          />{" "}
        </Container>
    </>
  );
}
