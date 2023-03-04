import PropTypes from 'prop-types';
import {
  ProfileContainer,
  UserData,
  StatsList,
  Image,
  Name,
  Tag,
  Location,
  Span,
  Quantity,
  StatElement,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileContainer>
      <UserData>
        <Image src={avatar} alt={username} width="320" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </UserData>
      <StatsList>
        <StatElement key={stats.followers}>
          <Span>Followers</Span>
          <Quantity>{stats.followers}</Quantity>
        </StatElement>
        <StatElement key={stats.views}>
          <Span>Views</Span>
          <Quantity>{stats.views}</Quantity>
        </StatElement>
        <StatElement key={stats.likes}>
          <Span>Likes</Span>
          <Quantity>{stats.likes}</Quantity>
        </StatElement>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
