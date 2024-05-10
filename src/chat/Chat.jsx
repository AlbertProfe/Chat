import {
  GridRow,
  GridColumn,
  Grid,
  Image,
  Segment,
  Header,
  List,
  Container,
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLike,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
  Icon,
  Input,
  Button
} from "semantic-ui-react";

export default function Chat() {
  return (
    <>
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
              <Header as="h3">Chats</Header>
              <Container
                style={{
                  border: "none",
                  paddingLeft: "10px",
                  paddingBottom: "5px",
                }}
              >
                <Button
                  basic
                  fluid
                  content="Chat"
                  icon="add"
                  labelPosition="right"
                />
              </Container>
              <Container
                style={{
                  border: "none",

                  paddingLeft: "10px",
                }}
              >
                <Button
                  basic
                  fluid
                  content="Contact"
                  icon="add"
                  labelPosition="right"
                />{" "}
              </Container>
              <Container
                style={{
                  border: "none",
                  paddingTop: "30px",
                  paddingLeft: "15px",
                  paddingBottom: "5px",
                }}
              >
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
              </Container>
            </GridColumn>
            <GridColumn width={12}>
              <Segment clearing>
                <Header as="h3" floated="left">
                 
               
                </Header>
                <Header as="h3" floated="right">
                 
                </Header>
              </Segment>

              <Segment>
                <Feed>
                  <FeedEvent>
                    <FeedLabel>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                    </FeedLabel>
                    <FeedContent>
                      <FeedSummary>
                        <FeedUser>Elliot Fu</FeedUser> added you as a friend
                        <FeedDate>1 Hour Ago</FeedDate>
                      </FeedSummary>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />4 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                 

                

                  <FeedEvent>
                    <FeedLabel image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                    <FeedContent>
                      <FeedSummary>
                        <a>Joe Henderson</a> posted on his page
                        <FeedDate>3 days ago</FeedDate>
                      </FeedSummary>
                      <FeedExtra text>
                        Ours is a life of constant reruns. We are always circling
                        back to where we would we started, then starting all over
                        again. Even if we do not run extra laps that day, we
                        surely will come back for more of the same another day
                        soon.
                      </FeedExtra>
                      <FeedMeta>
                        <FeedLike>
                          <Icon name="like" />5 Likes
                        </FeedLike>
                      </FeedMeta>
                    </FeedContent>
                  </FeedEvent>

                  
                </Feed>
              </Segment>

              <Input
                fluid
                action={{ icon: "send" }}
                placeholder='"Hello how are you, the spy from the cold...'
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
}


