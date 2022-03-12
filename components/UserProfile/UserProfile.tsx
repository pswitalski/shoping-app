import { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface UserProfileProps {
    username: string;
    src?: string;
    showIcon?: boolean;
    small?: boolean;
}

const UserProfile: FunctionComponent<UserProfileProps> = ({username, src, showIcon, small}) => {
    return(
            <Avatar
                alt={username}
                src={src}
                sx={{
                    height: small ? 20 : 50,
                    width: small ? 20 : 50,
                }}
            >
                {!showIcon && username[0].toUpperCase()}
                {showIcon && <AccountCircleIcon />}
            </Avatar>
    )
}

export default UserProfile;