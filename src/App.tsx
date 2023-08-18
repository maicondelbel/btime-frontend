import isValidProp from '@emotion/is-prop-valid'
import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { ModalProvider } from './contexts/ModalContext'
import { TasksProvider } from './contexts/TasksContext'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <StyleSheetManager shouldForwardProp={(propName) => isValidProp(propName)}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ModalProvider>
            <TasksProvider>
              <Router />
            </TasksProvider>
          </ModalProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </StyleSheetManager>
  )
}
