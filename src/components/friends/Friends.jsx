import PropTypes from 'prop-types';
import { Friends, FriendListItem, Status, Image, Name } from './Friends.styled';

const FriendList = props => {
  return (
    <Friends>
      {props.friends.map(friend => (
        <FriendListItem key={friend.id}>
          <Status status={friend.isOnline} />
          <Image src={friend.avatar} alt={friend.name} />
          <Name>{friend.name}</Name>
        </FriendListItem>
      ))}
    </Friends>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
