import styled from 'styled-components';
import { colors, Page } from '../../style/utils';

export const Container = styled(Page)`
    .projects {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        max-width: 100rem;
    }

    .project-card {
        position: relative;
        z-index: 2;
        background-color: white;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 0.3rem;
        box-shadow: 0px 0px 4px 2px gray;
        transition: all 0.3s;
        margin-bottom: 5rem;
        position: relative;
        width: 100%;
        cursor: pointer;

        a {
            color: black;
        }

        &:hover {
            transform: translateY(-0.5rem);
            box-shadow: 0 0px 10px 3px gray;
        }

        &:active {
            transform: translateY(-0.5rem);
            box-shadow: 0 0px 4px 1px gray;
        }

        .img-header {
            img {
                width: 100%;
            }
        }

        .card-label {
            padding: 2.5rem;
            box-shadow: 0px -3px 10px 0 gray;
            font-size: 3rem;
            background: ${colors.second};
            color: white;
        }
    }
`;
