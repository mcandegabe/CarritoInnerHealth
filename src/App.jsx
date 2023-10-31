import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer innerHealthRound="" mensajeBienvenida="Su espacio de Homeopatía, Impregnología, AgroHomeopatía y Terapias para el Enriquecimiento de la Consciencia Humana" introduccion="Todos los Cursos de la Universidad Candegabe, créditos para el Algoritmo Candegabe, libros de UCH Editores y licencias para el Complete Repertory, en un sólo lugar" />

    </>
  )
}

export default App
