import styled from 'styled-components';
import { colors } from '../../style/colors';

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 320px;
    background: ${colors.main};
    color: white;
    position: fixed;

    img {
        width: 200px;
        height: auto;
        margin-bottom: 20px;
    }
`;

export const NavItem = styled.a`
    text-decoration: none;
    color: ${props => (props.active ? 'white' : 'gray')};
    margin: 10px 0;
    font-size: 28px;

    :hover {
        color: white;
    }
`;
