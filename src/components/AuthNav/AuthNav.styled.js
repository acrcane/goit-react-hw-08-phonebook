import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    font-size: 18px;
    color: #fff;

    &.active {
        border-bottom: 3px solid #fff;
    }
    &:hover {
        color: #ccc;
    }
`;