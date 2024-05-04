import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Rotas from './Rotas'
import { AuthProvider } from './AuthContext'
import Navbar from './components/Navbar'


function App() {
  
 

  return (

   <AuthProvider>
     <BrowserRouter>
     
      <Navbar/>
      <Rotas/>
    </BrowserRouter>
   </AuthProvider>
  )
    
}

export default App
