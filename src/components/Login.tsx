import { useReducer, useEffect } from 'react';

interface AuthState {
    validando: Boolean,
    token: string | null,
    username: String,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: "",
    nombre: ""
}

type LogPayload = {
    username: string,
    nombre: string
}

type AutAction =
    | { type: "LogOut", payload: "singOut" }
    | { type: "LogIn", payload: LogPayload };


const authReducer = (state: AuthState, action: AutAction): AuthState => {
    switch (action.type) {
        case "LogOut":
            return {
                validando: false,
                token: null,
                username: "",
                nombre: ""
            }
        case "LogIn":
            const { nombre, username } = action.payload
            return {
                validando: false,
                token: "asjkdhksjdhksjd",
                username: username,
                nombre: nombre
            }

        default:
            return state;
    }
}

const Login = () => {

    const [{ validando, token, username, nombre }, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {

        setTimeout(() => {
            dispatch({ type: "LogOut", payload: "singOut" })
        }, 1500)
    }, [])

    const login = () => {
        dispatch({ type: "LogIn", payload: { nombre: "El Hector Rafael", username: "hector4like6gorillaz" } });
    }

    const logout = () => {
        dispatch({ type: "LogOut", payload: "singOut" });
    }

    return (
        <>
            <h1>Login</h1>
            {validando && <div>Validando...</div>}
            {token
                ? <div>Autenticado como {username} y te llamas {nombre} </div>
                : <div>No Autenticado</div>
            }

            {token ?
                < button
                    onClick={logout}
                > LogOut</button>

                : <button
                    onClick={login}
                >LogIn</button>
            }
        </>
    )
}

export default Login
