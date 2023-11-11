import styled from '@emotion/styled';

export const FormStyle = styled.div`
    margin: 0px;
    color: block;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 0;
    border-radius: 15px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: 500;
`;

export const Input = styled.input`
    margin-top: 5px;
    width: 400px;
    height: 25px;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 5px 15px;
    letter-spacing: 1.5px;
    font-size: 18px;
`;

export const Button = styled.button`
    width: 96px;
    height: 24px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;

    &:hover,
    &:focus {
        cursor: pointer;
        border-color: green;
        color: green;
    }

    &:disabled {
        cursor: auto;
        border-color: gray;
        color: gray;
        background-color: lightgray;
    }
`;

export const Text = styled.h2`
    margin: 0 0 10px 0;
`;
