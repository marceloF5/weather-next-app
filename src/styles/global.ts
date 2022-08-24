import {
    createGlobalStyle,
    DefaultTheme,
    GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
    removeBg?: boolean
    theme?: string
}

const GlobalStyles: GlobalStyleComponent<
    GlobalStylesProps,
    DefaultTheme
> = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/Montserrat-Italic-VariableFont_wght.ttf');
        src: url('/fonts/Montserrat-VariableFont_wght.ttf');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/Montserrat-Italic-VariableFont_wght.ttf');
        src: url('/fonts/Montserrat-VariableFont_wght.ttf');
    }
    
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/Montserrat-Italic-VariableFont_wght.ttf');
        src: url('/fonts/Montserrat-VariableFont_wght.ttf');
    }

    html {
        font-size: 62.5%;
    } 

    body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        color: #fff;
    }

    input {
        background-color: #1A191C;
        color: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before,
        &::after{
            box-sizing: inherit;
        }
    }


`

export default GlobalStyles
