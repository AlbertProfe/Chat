import  { useContext, useState, useReducer, useEffect } from "react";
import { WebSocketContext } from "../../APICommunication/SocketProvider";
//import { Feed} from "semantic-ui-react";
//import DetailConversationFeed from './DetailConversationFeed'

export default function ConversationFeed(user) {
  //console.log(user.userId);
  const [text, setText] = useState("");
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
      {/*  <Feed><DetailConversationFeed />  </Feed>*/}
      <p>Conversation</p>
      {conversation.map((item) => (
        <p key={item.id}>
          {" "}
          {item.userId} : {item.text}
        </p>
      ))}
    
      <input
        type="text"
        name="content"
        placeholder="say hello"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch({ type: "send", payload: text });
          setText("");
        }}
      >
        Send
      </button>
    </>
  );
}
