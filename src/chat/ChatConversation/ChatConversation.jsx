
import {Segment, Container} from "semantic-ui-react";
import ChatInfo from "./ChatInfo";
import ConversationFeed from "./ConversationFeed"
import WriteMessage from "./WriteMessage"

export default function ChatConversation(user) {
 
  return (
    <>
      <Segment clearing>
        <ChatInfo userId={user.userId} />
      </Segment>

      <Container
        style={{
          border: "none",
          paddingTop: "10px",
          paddingLeft: "15px",
          paddingBottom: "25px",
        }}
      >
        <ConversationFeed userId={user.userId} />
      </Container>

      <Container
        
      >
        <WriteMessage />
      </Container>
    </>
  );
}
