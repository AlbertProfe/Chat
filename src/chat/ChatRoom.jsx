import  { useContext, useState } from "react";
import {
  GridRow,
  GridColumn,
  Grid,
  Container,
  Button,
} from "semantic-ui-react";
import ChatMenu from "./ChatMenu/ChatMenu";
import ChatConversation from "./ChatConversation/ChatConversation";
import { WebSocketContext } from "../APICommunication/SocketProvider";

export default function ChatRoom() {
  const [isConnected, , send] = useContext(WebSocketContext);
  const [isLogin, setIsLogin] = useState(false);
  //const [chatId, setChatId] = useState("");
  const [userId, setUserId] = useState("");

  const sendFakeLogin = (chatId, userId) => {
    const fakeDataLogin = {
      action: "login",
      chatId,
      userId,
    };

    if (isConnected) send(JSON.stringify(fakeDataLogin));
    setIsLogin(true);
    setUserId(userId); // Set userId state when logging in
  };

  const fakeLogins = [
    { chatId: "party", userId: "olga" },
    { chatId: "party", userId: "jordi" },
    { chatId: "party", userId: "larissa" },
    { chatId: "party", userId: "edu" },
    { chatId: "party", userId: "catherine" },
    { chatId: "party", userId: "raquel" },
  ];

  return (
    <>
      {!isConnected ? (
        "Connecting ...."
      ) : !isLogin ? (
        <Container textAlign="center" style={{ marginTop: "100px" }}>
          {fakeLogins.map((login, index) => (
            <Button
              color="blue"
              circular
              style={{
                marginBottom: "25px",
                marginLeft: "25px",
              }}
              key={index}
              onClick={() => sendFakeLogin(login.chatId, login.userId)}
            >
              Fake Login user: {login.userId} & chat: {login.chatId}
            </Button>
          ))}
        </Container>
      ) : (
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
                <ChatConversation userId={userId} />
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>
      )}
    </>
  );
}
