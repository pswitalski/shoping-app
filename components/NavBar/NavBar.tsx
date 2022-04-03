import { FunctionComponent } from 'react';
import { signOut, useSession } from "next-auth/react"
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import UserProfile from '../UserProfile/UserProfile';

interface NavBarProps {
    title: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({title}) => {
    const dispatch = useDispatch();
    const { status, data } = useSession();
    const isUserAuthenticated = status === 'authenticated';

    return(
        <Box sx={{ flexGrow: 1, mb: 1 }} >
            <AppBar
                position="static"
                color="primary"
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 50,
                    pl: !isUserAuthenticated ? '56px' : 'auto'
                }}
            >
                {isUserAuthenticated &&
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                    onClick={() => dispatch({ type: 'FETCH_ITEMS' })}
                >
                    <RefreshIcon />
                </IconButton>}

                <Typography variant='h6' component='p'>
                    {title}
                </Typography>

                <Box
                    sx={{
                        ml: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {isUserAuthenticated &&
                    <UserProfile
                        username={data?.user?.name || 'user'}
                        src={data?.user?.image || undefined}
                        showIcon
                        small
                        />
                    }

                    {isUserAuthenticated &&
                    <Button
                        color="inherit"
                        sx={{ mx: 1 }}
                        onClick={() => signOut()}
                    >
                        Logout
                    </Button>
                    }
                </Box>

            </AppBar>
        </Box>
    )
}

export default NavBar;