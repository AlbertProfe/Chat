import  { useContext,  useReducer, useEffect } from "react";
import { WebSocketContext } from "../../APICommunication/SocketProvider";
import { Feed} from "semantic-ui-react";
import DetailConversationFeed from './DetailConversationFeed'
import WriteMessage from "./WriteMessage";


export default function ConversationFeed(user) {
  //console.log(user.userId);
  //const [text, setText] = useState("");
  const [isConnected, message, send] = useContext(WebSocketContext);
  const [conversation, dispatch] = useReducer(conversationReducer, []);

  function conversationReducer(conversation, action) {
    switch (action.type) {
      case "send": {
        let data = {
          action: "conversation",
          chatId: "party",
          userId: user.userId,
          text: action.payload,
        };
        if (isConnected) send(JSON.stringify(data));

        return [
          ...conversation,
          {
            id: Date.now(),
            time: Date.now(),
            chatId: "party",
            userId: user.userId,
            text: action.payload,
          },
        ];
      }
      case "receive": {
        return [
          ...conversation,
          {
            id: Date.now(),
            time: JSON.parse(message).time,
            chatId: JSON.parse(message).chatId,
            userId: JSON.parse(message).userId,
            text: JSON.parse(message).text,
            message,
          },
        ];
      }
      default: {
        return conversation;
      }
    }
  }

   useEffect(() => {
    if (message) {
     var isConversation = false;
     let stringMessage = JSON.stringify(message);
     if (!stringMessage.includes("sent at")) {
       isConversation = JSON.parse(message).action === "conversation";
       if (isConversation) dispatch({ type: "receive", payload: message });
      
     }}
    //console.log("isConversation: " + isConversation + " - message: " + message);
   }, [message]);

  //console.log(conversation); 
  return (
    <>
      
      <Feed style={{paddingLeft:"20px"}}>
        <DetailConversationFeed conversation={conversation} />
      </Feed>

      <WriteMessage dispatch={dispatch} />
    </>
  );
}
