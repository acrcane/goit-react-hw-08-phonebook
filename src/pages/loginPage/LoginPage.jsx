import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';


export default function LoginPage() {
    return (
        <Container component="main">
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm />
        </Container>
    );
}