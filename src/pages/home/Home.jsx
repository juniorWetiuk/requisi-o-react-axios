import { FaUsers } from "react-icons/fa6";
import { SiCurseforge } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { userAuth } from "../../AuthContext";
const Home = () => {
    const {Logoff} = userAuth()
    return(
      
    <div className="container">
       <div className="row justify-content-center">
            <div className="col-12 text-center my-5">
        <h1>Bem Vindos!</h1>
         </div>

         <button className="m-5 btn btn-info" onClick={() => Logoff()}>Logoff</button>
           <div className="col-6 col-md-3 text-center">
           <Card>
            <Link to="/Pessoas">
              <IoPeopleSharp size={80}/>
                PESSOAS
            </Link>
            </Card>
            </div>
            
            <div className="col-6 col-md-3 text-center">
            <Card>
            <Link to="/Cursos">
            <SiCurseforge size={80} />
                Cursos
            </Link>
            </Card>
            </div>

            <div className="col-6 col-md-3 text-center">
            <Card>
            <Link to="/Usuarios">
            <FaUsers size={80} />
                Usuários
            </Link>
            </Card>
            </div>

        </div>
    </div>

    )
}
export default Home
export const Card = styled.div `
background-color: #A020F0;
color:#ffff;
border-radius:8px;
height: 200px;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

a{
    display: flex;
    flex-direction: column;
    color: #ffff;
    text-decoration: none;
}

&:hover{
    cursor: pointer;
    background-color: #8B008B;

}

`