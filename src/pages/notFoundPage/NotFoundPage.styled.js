import styled from '@emotion/styled';

export const Container = styled.div`
    /* min-height: 'calc(100vh - 50px)'; */
    height: 'calc(100vh - 50px)';
    display: flex;
    flex-direction: column;
    gap: 40px;

    align-items: 'center';
    justify-content: 'center';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    margin: 0;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 48ps;
    margin: 0;
`;