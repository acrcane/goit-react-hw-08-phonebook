import { Link } from './AuthNav.styled';

import { Typography } from '@mui/material';

export const AuthNav = () => {
    return (
        <Typography component="p" sx={{ flexGrow: 0 }}>
            <Link to="/signup">Register</Link>
            <Link to="/login">Log In</Link>
        </Typography>
    );
  };