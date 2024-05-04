import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import {toast} from "react-toastify"


const NovaPessoa = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const [urlAvatar, setUrlAvatar] = useState("")

    const saveUser =  async(event) => {
      event.preventDefault()
      const formData = new FormData(formRef.current)
      const name = formData.get ("name")
      const email = formData.get ("email")
      const password = formData.get ("password")
      const avatar = formData.get ("avatar")

      const user = {
        name: name,
        email: email,
        cpf: cpf,
        avatar: avatar,
      }

      try{
        const {data} = await axios.post("https://65ec99620ddee626c9b0a8b4.mockapi.io/api/v1/Pessoas", user)

        if(data.id) {
          toast.success("Pessoa salvo com sucesso")
          navigate("/Pessoas/")
        }

      }catch (erro){
        toast.error("Erro ao salvar Pessoa")
      }
    }

return(
  <UserContainer className="container">
    <div className="row">
      <div className="col-12 text-center mt-5">
        <h1>Nova Pessoa</h1>
      </div>

      <div className="col">
        <form ref= {formRef} onSubmit={saveUser}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" name="name"/>
          </div>

          <div className="mb-3">
            <label htmlFor="endereço" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="endereço" name="endereço"/>
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">Telefone</label>
            <input type="telefone" className="form-control" id="telefone" name="telefone" />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input type="cpf" className="form-control" id="cpf" name="cpf" />
          </div>

          <div className="row">
            <div className="mb-3 col col-md-8">
              <label htmlFor="avatar" className="form-label">Avatar</label>
              <input 
                type="text" 
                className="form-control" 
                id="avatar" 
                name="avatar"
                onInput={e => setUrlAvatar(e.targed.value)}/>
            </div>

            <div className="col">
               {urlAvatar && (
                 <img className="avatar shadow " src={urlAvatar} alt="imagem avatar" />
               )}
            </div>
          </div>

          <div className="col-12 col-md-4 d-grid "> 
            <button className="btn btn-primary">Salvar</button>
          </div>


        </form>

      </div>
    </div>
  </UserContainer>

)
}

export default NovaPessoa

const UserContainer = styled.div`
  .btn-primary {
   background-color: #A020F0;
   border: none;

   &:hover {
    background-color: #aa37f2;
   }
  }
  .avatar{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #A020F0;
    padding: 5px;
    box-shadow: 2px 2px 2px 1px ;


  
}
`


