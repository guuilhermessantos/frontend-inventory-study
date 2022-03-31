import React, {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../services/api'
import { useToasts } from "@geist-ui/react";

const AuthContext = createContext({});

export default function AuthProvider({children}: any) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [, setToast] = useToasts();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.get.authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(false)
        }
        setLoading(false)
    }, [])

    async function handleLogin(email: string, password: string) {
        try {

            if (email.length < 3 && password.length < 1) {
                return setToast({
                    text: 'Email e senha precisam estar preenchidos!',
                    type: 'warning'
                  })

            }
            const {data: {token, user}}: any = await api.post("/login", {
                email: email,
                password: password,
            })

            localStorage.setItem("user_logged",JSON.stringify(user))

            localStorage.setItem('token', JSON.stringify(token))
            api.defaults.headers.get.authorization = `Bearer ${token}`

            setAuthenticated(true)
            navigate("/products ")
        } catch (error) {
            console.log('oi')
            setToast({
                text: 'Email e senha incorretos!.',
                type: 'warning'
              })
        }
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem("user_logged");
        api.defaults.headers.get.authorization = "";
        navigate('/')
    }


    return(
        <AuthContext.Provider value={{ authenticated, handleLogin , handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext}