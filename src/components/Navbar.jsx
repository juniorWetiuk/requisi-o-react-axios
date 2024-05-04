import { Link } from "react-router-dom"
import styled from "styled-components"
import logoBranco from "../assets/logo_branco.png"
import logoRoxo from "../assets/logo_roxo.png"
import { useState } from "react"
import { userAuth } from "../AuthContext"

const Navbar = () => {
    const [isHover,setIsHover]=useState(false)
    const {userLogged} = userAuth()

    return(
       <>
       {userLogged && (
        <Container>
            <div className="container">
                <div className="row justify-content-center">
                    <Link to="/" className="text-center"> 
                        <img 
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)} 
                        className="img-fluid"
                        src={isHover ? logoRoxo : logoBranco} 
                        alt="Logo"/>
                    </Link>
                </div>
            </div>
        </Container>
       )}
      </>
    )
}

export default Navbar;

const Container = styled.header`
    background-color:#A020F0;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 150px;
    }

    a {
        text-decoration: none;
    }
 `