import styled from 'styled-components';
import { size } from '../../style/utils';

export const ModalScreen = styled.div`
    position: fixed;
    padding-left: ${size.navbar};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgb(55, 55, 55, 0.5);
    z-index: 2;
    top: 0;

    .project-modal {
        position: fixed;
        z-index: 3;
        top: 50%;
        left: 50%;
        width: 60rem;
        height: 80rem;
        transform: translate(-50%, -50%);
        border: 1px solid yellow;
        color: black;
    }
`;
