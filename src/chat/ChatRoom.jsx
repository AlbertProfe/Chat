import {
  GridRow,
  GridColumn,
  Grid,
  Container,
} from "semantic-ui-react";
import ChatMenu from "./ChatMenu";
import ChatConversation from "./ChatConversation";
import { WebSocketContext } from "../APICommunication/SocketProvider";
import { useContext, useState } from "react";

export default function ChatRoom() {

 // access to context to see context variables
  const [isConnected, message, send] = useContext (WebSocketContext);

  const [isLogin, setIsLogin] = useState(false);
  //const [chatId, setChatId] = useState("");
  //const [userId, setUserId] = useState("");

   // handle user button to login
   const sendFakeLogin = () => {

    let fakeDataLogin = {
      action : "login",
      chatId : "party",
      userId : "olga",

    }

    if (isConnected) send(JSON.stringify(fakeDataLogin));
    setIsLogin(true);


   };



  return (
    <>

      { !isConnected ? "Connecting ...." : !isLogin  ?
      
      <button onClick={sendFakeLogin}> Fake Login user: Olga & chat: party </button>

      :

      <Container
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={4}>
              <ChatMenu />
            </GridColumn>
            <GridColumn width={12}>
              <ChatConversation />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
      }
    
    </>
  );
}
