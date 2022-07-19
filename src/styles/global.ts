import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;800&display=swap');
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    html, body {
    overflow-x: hidden;
    }

    body{
        background: #f5f5f5;
        font-size: 14px;
        font-family: 'Noto Sans', sans-serif;
    }
`;