import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1200;
`;
export const Box = styled.div`
    padding: 30px 40px;
    width: 440px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 0 auto;
    /* margin: 30px auto; */

`;

export const ModalField = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`;