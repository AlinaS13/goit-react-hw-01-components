import PropTypes from 'prop-types';
import { FriendListItem, Status, Image, Name } from './FriendListItem.styled';

const FriendListElem = props => {
  return (
    <FriendListItem>
      <Status status={props.friend.isOnline} />
      <Image src={props.friend.avatar} alt={props.friend.name} />
      <Name>{props.friend.name}</Name>
    </FriendListItem>
  );
};

FriendListElem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default FriendListElem;
