import styled from 'styled-components';
import { colors, Page } from '../../style/utils';

export const Container = styled(Page)`
    .projects {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }

    .project-card {
        background-color: white;
        /* padding: 1rem; */
        font-size: 1.5rem;
        text-align: center;
        border-radius: 0.3rem;
        box-shadow: 0px 0px 5px black;
        transition: all 0.3s;
        margin-bottom: 5rem;
        position: relative;
        height: 65rem;

        a {
            color: black;
        }

        &:hover {
            transform: translateY(-0.5rem);
            box-shadow: 0 1px 3px black;
        }

        &:active {
            transform: translateY(-0.5rem);
            box-shadow: 0 0px 1px rgba(0, 0, 0, 0.6);
        }

        .img-header {
            img {
                max-width: 100%;

                &:hover {
                    border: 2px solid yellow;
                }
            }
        }

        .card-label {
            padding: 1rem;
        }

        .git-card-icon {
            position: absolute;
            bottom: 1.5rem;
            right: 1.5rem;

            &:hover {
                transform: scale(1.1);
            }

            &:active {
                transform: translateY(-0.5rem);
            }
        }
    }
`;
