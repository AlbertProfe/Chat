import {
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLike,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Icon
} from "semantic-ui-react";

export default function DetailConversationFeed() {
  return (
    <>
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
            Ours is a life of constant reruns. We are always circling back to
            where we would we started, then starting all over again. Even if we
            do not run extra laps that day, we surely will come back for more of
            the same another day soon.
          </FeedExtra>
          <FeedMeta>
            <FeedLike>
              <Icon name="like" />5 Likes
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
            Dont break my flowwwwwwwwwwwwwww the same another day soon.
          </FeedExtra>
          <FeedMeta>
            <FeedLike>
              <Icon name="like" />5 Likes
            </FeedLike>
          </FeedMeta>
        </FeedContent>
      </FeedEvent>

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

      
    </>
  );
}
