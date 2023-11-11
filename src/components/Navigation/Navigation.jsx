import { Link } from './Navigation.styled';
import { useAuth } from 'hooks';

import { Typography } from '@mui/material';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Typography component="p" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </Typography>
    );
};