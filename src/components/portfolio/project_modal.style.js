import styled from 'styled-components';
import { colors, size } from '../../style/utils';

export const ModalScreen = styled.div`
    .gray-screen {
        position: fixed;
        padding-left: ${size.navbar};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: rgb(55, 55, 55, 0.8);
        z-index: 2;
        top: 0;
    }

    .project-modal {
        position: fixed;
        z-index: 3;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
        transform: translate(-50%, -50%);
        border: 2px solid white;
        color: black;
        background: white;

        h1 {
            margin-bottom: 3rem;
        }

        img {
            max-width: 80rem;
            box-shadow: 0px 0px 5px 0px gray;
            margin-bottom: 2rem;
        }

        p {
            margin: 2rem;
            text-align: center;
            line-height: 1.5;
        }

        .project-links {
            display: flex;
            align-items: center;

            a,
            a:visited {
                text-decoration: none;
                margin: 0.5rem 1.5rem;
            }

            i {
                font-size: 4rem;
                color: black;
            }

            i:hover {
                color: orangered;
            }

            .link-btn {
                background: ${colors.second};
                color: white;
                padding: 1rem 2rem;
                border-radius: 20px;

                &:hover {
                    background: orangered;
                }
            }
        }
    }
`;
