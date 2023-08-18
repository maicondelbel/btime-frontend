import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

// O primeiro componente Route é para definição do Layout (parte fixa e dinâmica da página)
// o componente Home e History (as paginas), vão ser exibidas dentro do Componente <Outlet/> do DefaultLayout
// Componente Route recebe o caminho (path) e qual elemento é renderizado (element)
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  )
}
