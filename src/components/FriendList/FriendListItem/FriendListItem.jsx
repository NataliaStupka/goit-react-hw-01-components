import { BsFillCircleFill } from "react-icons/bs";
import { Status, Avatar, Name} from './FriendListItem.styled'
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, userStatus}) => {
    return (
        <>
            <Status userStatus={userStatus}><BsFillCircleFill /></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name >{name}</Name>
        </>
        
    )
}


// прописать тип пропсов
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userStatus: PropTypes.bool.isRequired,
}

