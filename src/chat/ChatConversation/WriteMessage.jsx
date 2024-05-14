import {Input, Container} from "semantic-ui-react";

export default function WriteMessage() {
  return (
    <>
      <Container
        style={{
          border: "none",
          paddingTop: "0px",
          paddingLeft: "0px",
          paddingBottom: "5px",
  
        }}
      >
        <Input
          fluid
          action={{ icon: "send" }}
          placeholder='"Hello how are you, the spy from the cold...'
        />
      </Container>
    </>
  );
}
