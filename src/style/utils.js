import styled from 'styled-components';

export const colors = {
    main: 'rgb(21,27,71)',
    second: 'rgb(26,188,156)',
    third: 'rgb(26,37,46)',
};

export const size = {
    navbar: '32rem',
};

export const Page = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 6rem;
    margin-left: ${size.navbar};
    box-shadow: 0px 2px 10px -8px ${colors.second};

    .content {
        max-width: 120rem;
    }

    .impact {
        color: ${colors.second};
    }

    .mb-30 {
        margin-bottom: 3rem;
    }

    .mb-60 {
        margin-bottom: 6rem;
    }

    .mt-60 {
        margin-top: 6rem;
    }

    .font-24 {
        font-size: 2.4rem;
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Skill = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    i {
        font-size: 5rem;
        margin-right: 1.4rem;
        color: ${colors.main};
    }

    p {
        margin-right: 5rem;
    }
`;
