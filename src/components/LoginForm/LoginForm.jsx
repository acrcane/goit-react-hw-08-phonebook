import { useAuth } from 'hooks/index';

import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();



export default function LoginForm() {
    
    const dispatch = useDispatch();
    const { isAuthError } = useAuth();


    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(logIn({
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
                Log in
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type='email'
                defaultValue =" "
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                {isAuthError && <div>Incorrect email or password </div>}
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 5, p: 2 }}
                >
                Log In
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}