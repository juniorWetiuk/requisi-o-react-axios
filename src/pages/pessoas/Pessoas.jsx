import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { BiSolidEdit } from "react-icons/bi";
import { FaRemoveFormat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pessoas = () => {
  const [pessoas, setPessoas] =useState([])

  const listarPessoas = async () => {
      try{
       const {data} = await axios.get("https://65ec99620ddee626c9b0a8b4.mockapi.io/api/v1/Pessoas")
       setPessoas(data)
      } catch(error){
          // se der erro 
          toast.error("Erro ao buscar pessoas")
      }
  } 
  const deletePessoa = async(id) => {
    try{
      const {data} = await axios.delete(`https://65ec99620ddee626c9b0a8b4.mockapi.io/api/v1/Pessoas/${id}`)

      if(data.id){
        toast.success("Pessoa removida com sucesso")
        const novalista = pessoas.filter(item => item.id !== id )
        setPessoas(novalista)
      } else{
        toast.error("Erro ao excluir Pessoa")
      }
    } catch( error){
      toast.error("Erro ao excluir Pessoa")
    }
  }

  useEffect( () => {
    listarPessoas()
  },[])
  
    return(
      
      <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Pessoas</h1>
        </div>

        <div className="col-12">
          <div>
            <Link to= "/Pessoas/novo">
            <button className="btn btn-primary">Novo</button>
            </Link>
          </div>
        <table className="table table-hover">
         <thead>
          <tr>
          <th scope="col">Nome</th>
          <th scope="col">cpf</th>
          <th scope="col">telefone</th>
          <th scope="col">Endereço</th>
          <th scope="col">Ações</th>
        </tr>
        </thead>
        <tbody>
          {
            pessoas.map(item => (
              <tr key={item.id}>
              
              <td>{item.name}</td>
              <td>{item.cpf}</td>
              <td>{item.telefone}</td>
              <td>{item.endereco}</td>

              <td>
              <Link to={`/Pessoas/${item.id}`}>
              <button className="btn btn-outline-primary btn-sm "><BiSolidEdit /></button>
              </Link>
                <button className="btn btn-outline-danger btn-sm-ms-2 " onClick={() => deletePessoa (item.id) }><FaRemoveFormat /></button>
              </td>
              </tr>
            ))
          }
        
            </tbody>
          </table>

                </div>
              </div>
  </div>


    

   
    

  )
}
export default Pessoas