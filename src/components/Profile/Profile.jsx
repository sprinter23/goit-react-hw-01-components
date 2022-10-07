import PropTypes from 'prop-types';
import {
  UserCard,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  StatsList,
  Description,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{stats.likes} </Quantity>
        </StatsList>
      </Stats>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
