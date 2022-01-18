import { UserProfile, Avatar, Description, Name, Text, Stats, StatsItem, Label, Quantity} from './Profile.styled.js'
import PropTypes from 'prop-types';

// ///
export const Profile = ({ username, tag, location, avatar,  stats }) => {
    return (
                <UserProfile key={username}>
                        <Description >
                            <Avatar
                                src={avatar}
                                alt={avatar}
                                />
                            <Name>{username}</Name>
                            <Text>@{tag}</Text>
                            <Text>{location}</Text>
                        </Description>

                        <Stats >
                            <StatsItem>
                                <Label >Followers: </Label>
                                <Quantity >{stats.followers}</Quantity>
                            </StatsItem>
                            <StatsItem>
                                <Label >Views: </Label>
                                <Quantity >{stats.views}</Quantity>
                            </StatsItem>
                            <StatsItem>
                                <Label >Likes: </Label>
                                <Quantity >{stats.likes}</Quantity>
                            </StatsItem>
                        </Stats>
                </UserProfile>
         
    );
}




// прописываем правильно ПРОПтайп для МАСИВА и обьекта
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};




