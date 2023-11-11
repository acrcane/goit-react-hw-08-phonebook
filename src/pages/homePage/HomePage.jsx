import { Helmet } from 'react-helmet-async';

import { Container, Title, Text } from './HomePage.styled';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function HomePage() {
  
    const { isLoggedIn, user } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
        if (!isLoggedIn) {
            navigate('/login', { replace: true });
            };
        }, 3000);
    }, [isLoggedIn, navigate]);

    return (
        <Container>
        <Helmet>
            <title>Home</title>
        </Helmet>

        <Title>Welcome to Home page</Title>
        {!isLoggedIn
        ?(<Text>
            You should login or register, if you haven't done it yet!
            </Text>)
        :(<Text>
            { user.name }, you are logged in, use the App with pleasure!
            </Text>)}
        
        </Container>
    );
}