import {Container, UserProfile, Avatar, Description, Name, Tag, Location, Stats, StatsItem, Label, Quantity} from './Profile.styled.js'
import PropTypes from 'prop-types';


export const Profile = ({user}) => {
    return (
        <Container>
            {user.map(({avatar, username, tag, location, stats}) =>
                (<UserProfile key={username}>
                        <Description >
                            <Avatar
                                src={avatar}
                                alt={avatar}
                                />
                            <Name>{username}</Name>
                            <Tag >{tag}</Tag>
                            <Location >{location}</Location>
                        </Description>

                        <Stats >
                            <StatsItem>
                                <Label class="label">Followers: </Label>
                                <Quantity >{stats.followers}</Quantity>
                            </StatsItem>
                            <StatsItem>
                                <Label class="label">Views: </Label>
                                <Quantity >{stats.views}</Quantity>
                            </StatsItem>
                            <StatsItem>
                                <Label class="label">Likes: </Label>
                                <Quantity >{stats.likes}</Quantity>
                            </StatsItem>
                        </Stats>
                </UserProfile>)
                
            )}
        </Container>
    );
}


// прописываем правильно ПРОПтайп для МАСИВА и обьекта
Profile.propTypes = {
    user: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        
    }))
   
}



// stats: PropTypes.arrayOf(PropTypes.number).isRequired,

