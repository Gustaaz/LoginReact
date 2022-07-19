import styled from "styled-components";

export const Container = styled.div`
    height: 8vh;
    width: 100vw;
    background: #2f2841;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`