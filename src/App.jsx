import Perfil from "./components/perlfil/perfil"
import Formulario from "./components/perlfil/formulario"
import ReposList from "./components/ReposList"

function App() {
  const nome = "kaua"

  function retornaNome(){
    return nome
  }

  const pessoa = {
    nome: "maria",
  }

  let estaDeDia = true

  return (
    <>
      <Perfil nomeUsuario="kauatorresfranca"/>
      <ReposList nomeUsuario="kauatorresfranca"/>
      <Formulario/>
    </>
  );
  
}

export default App
