
import {Segment} from "semantic-ui-react";
import ChatInfo from "./ChatInfo";
import ConversationFeed from "./ConversationFeed"
import WriteMessage from "./WriteMessage"

export default function ChatConversation(user) {
 
  return (
    <>
      <Segment clearing>
        <ChatInfo userId={user.userId} />
      </Segment>

      <Segment
        style={{
          border: "none",
          paddingTop: "10px",
          paddingLeft: "15px",
          paddingBottom: "5px",
        }}
      >
        <ConversationFeed />
      </Segment>

      <Segment
        style={{
          border: "none",
          paddingTop: "10px",
          paddingLeft: "15px",
          paddingBottom: "5px",
        }}
      >
        <WriteMessage />
      </Segment>
    </>
  );
}
