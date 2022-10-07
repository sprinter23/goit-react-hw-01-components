import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
