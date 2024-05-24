import { Segment, Container } from "semantic-ui-react";
import ChatInfo from "./ChatInfo";
import ConversationFeed from "./ConversationFeed";
//import WriteMessage from "./WriteMessage"

export default function ChatConversation({user}) {

  //console.log("ChatConversation: ", user);
  return (
    <>
      <Segment clearing>
        <ChatInfo user={user} />
      </Segment>

      <Container>
        <ConversationFeed user={user} />
      </Container>

      {/*  <Container>
        <WriteMessage />
      </Container> */}
    </>
  );
}
