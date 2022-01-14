import {FriendMenu, FriendItem} from './FriendList.styled.js'
import {FriendListItem} from '../FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        
            <FriendMenu >
                {friends.map(friend => (
                    <FriendItem key={friend.id}>
                    <FriendListItem 
                            avatar={friend.avatar}
                            name={friend.name}
                            userStatus={friend.isOnline} 
                        /> 
                        
                    </FriendItem>
                ))}
            </FriendMenu>
       
       
        
    )
}



