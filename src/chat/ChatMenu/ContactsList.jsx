/* eslint-disable react/prop-types */
import {
  Grid,
  Image,
  List,
} from "semantic-ui-react"

export default function ContactsList({user}) {

console.log("list:", user);
  
  return (
    <>
      <List divided relaxed>
        {user.chats.map((chat) => (
          <List.Item key={chat.chatId} onClick={(e) => console.log(e)}>
            <Grid>
              <Grid.Column width={5}>
                <Image
                  src={`https://react.semantic-ui.com/images/avatar/small/${chat.avatar}.jpg`}
                  circular
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <List.Header>{chat.name}</List.Header>
                <List.Description>
                  {" "}
                  {new Date(chat.lastSeen).toDateString()} 
                </List.Description>
              </Grid.Column>
            </Grid>
          </List.Item>
        ))}
      </List>
    </>
  );
}
