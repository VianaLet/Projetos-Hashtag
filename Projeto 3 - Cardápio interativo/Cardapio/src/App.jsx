import Hashtaurante from "./assets/hashtaurante.webp"
import "./App.css"
import { Navegacao } from './Navegacao.jsx'
import { ItemCardapio } from "./ItemCardapio.jsx"
export function App(){
  
  return <>
          <img src={Hashtaurante} alt="" className="capa" />
          <Navegacao/>
          <ItemCardapio/>
        </>
}