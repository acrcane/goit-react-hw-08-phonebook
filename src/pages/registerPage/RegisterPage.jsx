import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';


export default function RegisterPage() {

    return (
        <Container component="main">
        <Helmet>
            <title>Registration</title>
        </Helmet>
        <RegisterForm />
        </Container>
    );
}