
import { 

  Header, Label

} from "semantic-ui-react";

export default function ChatInfo() {
  return (
    <>
      <Header as="h3" floated="left">
        Elliot Fu
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
