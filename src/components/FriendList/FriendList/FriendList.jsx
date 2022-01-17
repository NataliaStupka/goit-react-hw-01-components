import {FriendMenu, FriendItem} from './FriendList.styled.js'
import {FriendListItem} from '../FriendListItem/FriendListItem'
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        
            <FriendMenu >
                {friends.map(({id, avatar, name, isOnline}) => (
                    <FriendItem key={id}>
                    <FriendListItem 
                            avatar={avatar}
                            name={name}
                            userStatus={isOnline} 
                        /> 
                        
                    </FriendItem>
                ))}
            </FriendMenu>
       
    )
}


// прописать тип пропсов
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};