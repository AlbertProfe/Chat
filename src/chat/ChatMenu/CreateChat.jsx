/* eslint-disable react/prop-types */
import  { useState } from "react";
import {
  Button,
  Form,
  Input,
  List,
  Grid,
  Image,
  Container, Divider, Checkbox
} from "semantic-ui-react";
//import AWS from "aws-sdk";

// AWS S3 configuration
/* const S3_BUCKET = "chatavatars";
const REGION = "eu-central-1";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
}); */

export default function CreateChat({ user, handleCreateChat, handleCancel }) {
  console.log("CreateChat:", user);

  const [avatar, setAvatar] = useState(null);
  const [chatName, setChatName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: 'S3_BUCKET',
      Key: file.name,
    };

    /* myBucket.putObject(params).send((err, data) => {
      if (err) console.log(err);
      else
        setAvatar(
          `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${file.name}`
        );
    }); */
  };

  const handleMemberSelect = (chatId) => {
    setSelectedMembers((prevMembers) =>
      prevMembers.includes(chatId)
        ? prevMembers.filter((id) => id !== chatId)
        : [...prevMembers, chatId]
    );
  };

  const handleSubmit = () => {
    const newChat = {
      avatar,
      name: chatName,
      members: selectedMembers,
    };
    handleCreateChat(newChat);
  };

  return (
    <Container>
      <Divider />
      <Form>
        <Form.Field>
          <label>Avatar</label>
          <Input type="file" onChange={handleAvatarUpload} />
        </Form.Field>

        <Form.Field>
          <label>Chat Name</label>
          <Input
            size="mini"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Members</label>
          <List divided relaxed>
            {user.chats
              .filter((contact) => contact.type === "contact-chat")
              .map((contact) => (
                <List.Item key={contact.chatId}>
                  <Grid>
                    <Grid.Column width={2}>
                      <Checkbox
                        onChange={() => handleMemberSelect(contact.chatId)}
                        checked={selectedMembers.includes(contact.chatId)}
                      />
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <Image
                        src={`https://react.semantic-ui.com/images/avatar/small/${contact.avatar}.jpg`}
                        circular
                        size="mini"
                      />
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <List.Header>{contact.name}</List.Header>
                    </Grid.Column>
                  </Grid>
                </List.Item>
              ))}
          </List>
        </Form.Field>
        <Button circular size="mini" onClick={handleSubmit}>
          Create
        </Button>
        <Button circular size="mini" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
