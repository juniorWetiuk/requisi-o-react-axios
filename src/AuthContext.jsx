import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  

    const LoginUser = async(user) => {
        const { data } = await axios.get("https://65ec99620ddee626c9b0a8b4.mockapi.io/api/v1/Users")

        if(data) {
            const user_data = data.filter(item => {
                if(item.email === user.email && item.password === user.password){
                    return item
                }
            })
            if(user_data[0]){
                localStorage.setItem('@user', JSON.stringify(user_data[0]))
                setUser(user_data[0])
                toast.success(`bem vindo ${user_data[0].name}!`)
                return true
            };
            return false
        }

        return false

    }
    const Logoff = () => {
        setUser(null)
        localStorage.removeItem('@user')
    }
     useEffect(() => {
        const storageUser = localStorage.getItem('@user')
        if(storageUser) {
            setUser(JSON.parse(storageUser))
        }
           
     },[])

    return(
        <AuthContext.Provider value={{
            user,
            userLogged: Boolean(user),
            LoginUser,
            Logoff

            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function userAuth() {
    const context = useContext(AuthContext)
    return context
}