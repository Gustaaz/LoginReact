import styled from "styled-components";

export const CardLogin = styled.div`
    width: 60%;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #000000;
    h1{
        color: #00ff88;
        font-weight: 800;
        margin: 0;
    };
    @media (max-width: 950px) {
        width: 80%;
    }
    @media (max-width:430px) {
        width: 95%;
    }
    
`

export const FormLogin = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
`

export const TextFild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0;
    width: 100%;

`

export const LabelLogin = styled.label`
    color: #f0ffffde;
    margin-bottom: 10px;
`

export const InputLogin = styled.input`
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    ::placeholder{
        color: #f0ffff94;
    }

`

export const ButtonLogin = styled.button`
    width: 100%;
    padding: 16px 0;
    margin: 25px 25px 5px 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #2b134b;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px #00ff8052;
    :hover{
            background: #E6E8E6;
    }
`

export const TextFildLink = styled(TextFild)`
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8px;
    .link{
        text-decoration: none;
        font-size: 12px;
        text-align: center;
        width: 100%;
        padding: 15px 0px;
        border: none;
        border-radius: 8px;
        outline: none;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
        color: #2b134b;
        background: #00ff88;
        cursor: pointer;
        box-shadow: 0px 10px 40px -12px #00ff8052;
        :hover{
                background: #E6E8E6;
        }

    }
    @media (max-width:2024px){
        font-size:10px
    };
    @media (max-width:830px){
        .link{
            font-size:8px;
        }
    }

`