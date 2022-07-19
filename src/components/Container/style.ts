import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #201b2c;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const RightLogin = styled.div`
    height: 100vh;
    width: 50vw;
    display:flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        height: auto;
        width: 100%;
    }
`

export const LeftLogin = styled(RightLogin)`
    flex-direction: column;
`

export const TitleLeft = styled.h1`
    color: #77ffc0;
    font-size: 3vw;
`

export const LeftImage = styled.img`
    width: 35vw;
    height: 480px;
    @media (max-width: 600px) {
        height: auto;
        width: 50vw;
        margin-bottom: 30px;
    }
`