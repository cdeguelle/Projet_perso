import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-family: 'Montserrat Alternates', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        scroll-behavior: smooth;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    p {
        line-height: 25px!important;
        letter-spacing: 2px!important;
    }
`

export default StyledGlobalStyle