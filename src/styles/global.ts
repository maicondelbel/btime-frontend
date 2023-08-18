import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme['--white']};
    color: ${(props) => props.theme['--base-text']};

  }

  h1,h2,h3,h4,h5 {
    color: ${(props) => props.theme['--base-heading']};
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  button, input {
    all: unset;
  }

  ::-webkit-scrollbar {
    height: 8px;
    width: 8px
}

::-webkit-scrollbar-button {
    height: 0;
    width: 0
}

::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['--gray-700']};
    border: 8px #fff;
    border-radius: 10px
}

::-webkit-scrollbar-track {
    background: ${(props) => props.theme['--gray-400']};
    border: 9px #fff;
    border-radius: 10px;
    margin: 6px 0
}

::-webkit-scrollbar-corner {
    background: 0 0
}

:focus {
	outline: 0;
}
`
