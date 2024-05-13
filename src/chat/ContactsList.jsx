import {
  Grid,
  Image,
  List,
} from "semantic-ui-react"

export default function ContactsList() {
  return (
    <>
      <List divided relaxed>
        {/* Dummy list of chats */}
        <List.Item>
          <Grid>
            <Grid.Column width={5}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                circular
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <List.Header>Elliot</List.Header>
              <List.Description>Last seen...</List.Description>
            </Grid.Column>
          </Grid>
        </List.Item>

        {/* Add more chat items here */}
      </List>
    </>
  );
}
