//import { TiposBasicos } from "./typescript/TiposBasicos";
//import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { Contador } from './components/Contador';
//import { ContadorConHook } from './components/ContadorConHook';

// import { Logeo } from "./components/Logeo";
// import { Usuarios } from './components/Usuarios';
import { Formularios } from './components/Formularios';


// Es comentado porque es JavaScript
// Es la pantalla principal de la aplicación
const App = () => {
  // Aquí funciona así
  return (
    /*Aquí funciona así o como el anterior*/
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr />
      {/* Importado de el archivo o componente TiposBasicos.tsx */}
      {/*<TiposBasicos />*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones />*/}
      {/*<Contador />*/}
      {/*<ContadorConHook /> */}
      {/* <Logeo /> */}
      {/* <Usuarios />  */}
      <Formularios />
    </div>
  )
}

export default App;