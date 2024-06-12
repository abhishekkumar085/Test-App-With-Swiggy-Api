import { createContext } from "react";

const userContext=createContext({
    user:{
        name:"Dummy nameeeee",
        email:"Dummy@gmail.com"
    }
})

export default userContext;