
import { 

  Header, Label

} from "semantic-ui-react";

export default function ChatInfo(login) {
  //console.log("ChatInfo", login);

  return (
    <>
      <Header as="h3" floated="left">
        {login.loginUser.userId} / {login.loginUser.chatId}
      </Header>
      <Header as="h5" floated="right">
        <Label circular color={"green"} key={"green"}>
          Connected
        </Label>
        <Label circular color={"grey"} key={"grey"}>
          Log out
        </Label>
      </Header>
    </>
  );
}
