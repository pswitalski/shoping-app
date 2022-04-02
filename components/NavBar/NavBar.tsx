import { FunctionComponent } from 'react';
import { signOut, useSession } from "next-auth/react"
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import UserProfile from '../UserProfile/UserProfile';

interface NavBarProps {
    title: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({title}) => {
    const { status, data } = useSession();

    const isLogOutButtonVisible = status === 'authenticated';

    console.log(status)
    console.log(data)

    return(
        <Box sx={{ flexGrow: 1, mb: 1 }} >
            <AppBar
                position="static"
                color="primary"
                sx={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                >
                    <MenuIcon />
                </IconButton>

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
                    {isLogOutButtonVisible &&
                    <UserProfile
                        username={data?.user?.name || 'user'}
                        src={data?.user?.image || undefined}
                        showIcon
                        small
                        />
                    }

                    {isLogOutButtonVisible &&
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