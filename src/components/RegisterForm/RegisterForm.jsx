import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { useAuth } from 'hooks';


const theme = createTheme();



export const RegisterForm = () => {

    const dispatch = useDispatch();
    const { isAuthError} = useAuth();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
        );

        form.reset();
    };

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                mt: '64px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
            >
                    <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    
                    />
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{ mt: 3 }}
                    />
                    <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{ mt: 3, mb: 3 }}
                    />
                {isAuthError && <div>Error occured while Sign Up </div>}
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 5, p: 2 }}
                >
                Register
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
};