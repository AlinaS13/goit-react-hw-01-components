import PropTypes from 'prop-types';
import FriendListElem from '../friendsListItem/FriendListItem';
import { Friends } from './FriendsList.styled';

const FriendList = props => {
  return (
    <Friends>
      {props.friends.map(friend => (
        <FriendListElem friend={friend} key={friend.id} />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
