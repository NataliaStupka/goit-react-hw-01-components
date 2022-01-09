import {UserProfile, Avatar, Description, Name, Tag, Location, Stats, StatsItem} from './Profile.styled.js'


export const Profile = ({user}) => {
    return (
        <div>
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
                            <span class="label">Followers: </span>
                            <span class="quantity">{stats.followers}</span>
                            </StatsItem>
                            <StatsItem>
                            <span class="label">Views: </span>
                            <span class="quantity">{stats.views}</span>
                            </StatsItem>
                            <StatsItem>
                            <span class="label">Likes: </span>
                            <span class="quantity">{stats.likes}</span>
                            </StatsItem>
                        </Stats>
                </UserProfile>)
                
            )}
        </div>
    );
}







