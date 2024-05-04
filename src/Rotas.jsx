import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Cursos from "./pages/cursos/Cursos"
import Pessoas from "./pages/pessoas/Pessoas"
import Login from "./pages/login/Login"
import NaoEncontrado from "./pages/404/NaoEncontrado"
import { userAuth } from "./AuthContext"
import Usuarios from "./pages/Usuários/Usuários"
import NovoUsuario from "./pages/Usuários/NovoUsuario"
import EditarUsuario from "./pages/Usuários/EditarUsuario"
import NovaPessoa from "./pages/pessoas/NovaPessoa"

const Rotas =() => {
    const {userLogged} = userAuth()
    return (
        <Routes>
              <Route path="/login" element={<Login/>}/>

            { !userLogged ? (
                <Route path="*" element={<Login/>}/>
            ) : (
            <>

            <Route path="/" element={<Home/>}/>

            <Route path="/Cursos" element={<Cursos/>}/>

            <Route path="/Pessoas" element={<Pessoas/>}/>

            <Route path="/Usuarios" element={<Usuarios/>}/>
            
            <Route path="/Usuarios/novo" element={<NovoUsuario/>}/>

            <Route path="/Usuarios/:id" element={<EditarUsuario/>}/>

            <Route path="/Pessoas/novo" element={<NovaPessoa/>}/>

             <Route path="/*" element={<NaoEncontrado/>}/>

           
            </>
           )}
        </Routes>
    )
}
export default Rotas