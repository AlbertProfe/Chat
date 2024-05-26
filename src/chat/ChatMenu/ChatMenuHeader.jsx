//import React from 'react'
import {Header,Button} from "semantic-ui-react";


export default function ChatMenuHeader() {

  
  return (
    <>
      <Header as="h5">Chats</Header>
      <Button
        circular
        size="mini"
        color="#B2BEB5"
        content="Chat"
        icon="chat"
        labelPosition="right"
      />
      <Button
        circular
        size="mini"
        color="#B2BEB5"
        content="Contact"
        icon="user"
        labelPosition="right"
      />{" "}
    </>
  );
}
