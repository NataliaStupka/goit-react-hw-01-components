import { BsFillCircleFill } from "react-icons/bs";
import { Status, Avatar, Name} from './FriendListItem.styled'

// ----
export const FriendListItem = ({ avatar, name, userStatus}) => {
    return (
        <>
            <Status userStatus={userStatus}><BsFillCircleFill /></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name >{name}</Name>
            
        </>
        
    )
    
}



