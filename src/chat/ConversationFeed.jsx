
import { Feed} from "semantic-ui-react";
import DetailConversationFeed from './DetailConversationFeed'

export default function ConversationFeed() {
  return (
    <>
      <Feed>
        <DetailConversationFeed />
      </Feed>
    </>
  );
}
