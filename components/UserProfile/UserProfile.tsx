import { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';

interface UserProfileProps {
    username: string;
    src?: string;
}

const UserProfile: FunctionComponent<UserProfileProps> = ({username, src}) => {
    return(
            <Avatar alt={username} src={src}>
                {username[0].toUpperCase()}
            </Avatar>
    )
}

export default UserProfile;