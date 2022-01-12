import { BsFillCircleFill } from "react-icons/bs";
import { Item, MarkerGreen } from './FriendListItem.styled'


export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <Item >
            <span  className="status"><BsFillCircleFill /></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </Item>
        
    )
    
}



