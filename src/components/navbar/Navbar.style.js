import styled from 'styled-components';
import { colors, size } from '../../style/utils';

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: ${size.navbar};
    background: ${colors.second};
    color: white;
    position: fixed;

    img {
        width: 200px;
        height: auto;
        margin-bottom: 2rem;
    }

    .social-icons {
        margin-top: 3rem;

        a {
            display: inline-block;
            height: 4.5rem;
            width: 4.5rem;
            background-color: ${colors.main};
            color: #fff !important;
            border-radius: 100%;
            text-align: center;
            font-size: 2.3rem;
            line-height: 4.7rem;
            margin: 0 1rem;

            :hover {
                background: orangered;
            }
        }
    }
`;

export const NavItem = styled.a`
    text-decoration: none;
    /* color: ${props => (props.active ? 'white' : 'gray')}; */
    color: white;
    margin: 1rem 0;
    font-size: 2.4rem;

    :hover {
        color: orangered;
    }
`;
