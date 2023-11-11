import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';

import { useAuth } from 'hooks';

import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Wrapper, Username, Text } from './UserMenu.styled';

const theme = createTheme({
    palette: {
        secondary: {
        contrastText: '#1976d2',
        main: '#fff',
        },
    },
});




export const UserMenu = () => {

    const dispatch = useDispatch();
    const { user } = useAuth();

    
    const handleLogOut = () => {
        dispatch(logOut());
    }
    return (
        <ThemeProvider theme={theme}>
        <Wrapper>
        
            <Username>{user.name}</Username>
            
            <Text>{user.email}</Text>
        
            <Button
            type="button"
            onClick={handleLogOut}
            variant="outlined"
            color="secondary"
            >
            Logout
            </Button>
        </Wrapper>
        </ThemeProvider>
    );
};