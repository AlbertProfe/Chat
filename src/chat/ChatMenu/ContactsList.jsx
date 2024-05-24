import {
  Grid,
  Image,
  List,
} from "semantic-ui-react"

export default function ContactsList() {

  const id1 = 1;
  const id2 = 2;
   const id3 = 33333;
  
  return (
    <>
      <List divided relaxed>
        {/* Dummy list of chats */}
        <List.Item id={id1} onClick={(e) => console.log(e, "id: ", id1)}>
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

        <List.Item id={id2} onClick={(e) => console.log(e, "id: ", id2)}>
          <Grid>
            <Grid.Column width={5}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                circular
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <List.Header>Joe</List.Header>
              <List.Description>Last seen...</List.Description>
            </Grid.Column>
          </Grid>
        </List.Item>

        <List.Item id={id3} onClick={(e) => console.log(e, "id: ", id3)}>
          <Grid>
            <Grid.Column width={5}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/diana.jpg"
                circular
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <List.Header>Diana</List.Header>
              <List.Description>Last seen...</List.Description>
            </Grid.Column>
          </Grid>
        </List.Item>

        {/* Add more chat items here */}
      </List>
    </>
  );
}
