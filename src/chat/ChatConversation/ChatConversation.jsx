
import {Segment, Container} from "semantic-ui-react";
import ChatInfo from "./ChatInfo";
import ConversationFeed from "./ConversationFeed"
//import WriteMessage from "./WriteMessage"

export default function ChatConversation(login) {
  //console.log("ChatConversation", login);
 
  return (
    <>
      <Segment clearing>
        <ChatInfo loginUser={login.loginUser} />
      </Segment>

      <Container>
        <ConversationFeed loginUser={login.loginUser} />
      </Container>

      {/*  <Container>
        <WriteMessage />
      </Container> */}
    </>
  );
}
