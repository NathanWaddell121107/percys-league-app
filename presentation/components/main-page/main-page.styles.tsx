import styled from 'styled-components';

export const MainPageWrapper = styled.div`
    margin: 0 auto;
    margin-top: 5rem;
    max-width: 1200px;
    width: 88%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    align-items: center;
    margin: 20px 0;
    > input {
        width: 45%;
        margin-right: 20px;
    }
    > div {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
        height: 80%;
        border-radius: 4px;
        cursor: pointer;
    }
`;
