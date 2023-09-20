import React, {Dispatch,SetStateAction, createContext, useState } from "react";
import { User } from "../../Types/Types";
import { UserProviderProps } from "../../Types/PropsList";
import { dummyData } from "../ObjectArrays/DummyUser";
import { useNavigate } from "react-router";

export interface userInitialContextInterface {
    userData: User,
    Login: () => void
    login: boolean
    setLogin: Dispatch<SetStateAction<boolean>>
}

const userContextInitialState = {
    userData: {
        id:0,
        name:"",
        email:"",
        totalOrders:0,
        address:[]
    },
    Login: () => null,
    login: false,
    setLogin: () => null
} as userInitialContextInterface



export const userSignInContext = createContext(userContextInitialState);

const SignInContext = ({children}: UserProviderProps) => {

    const navigate = useNavigate()
    const [userData,setUserData] = useState<User>(userContextInitialState.userData);
    const [login, setLogin] = useState<boolean>(false)

    const Login = () => {
        setUserData(dummyData)
        setLogin(true)
        navigate('/')
    }

    return(
        <userSignInContext.Provider value = {{Login, userData, login, setLogin }}>
        {children}
        </userSignInContext.Provider>
    )

}

export default SignInContext;