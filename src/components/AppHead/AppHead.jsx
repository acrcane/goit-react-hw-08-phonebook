import { AppBar, Toolbar } from '@mui/material';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { useAuth } from 'hooks';

export const AppHead = () => {

  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="sticky">
        <Toolbar component="nav">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
    </AppBar>
    );
};