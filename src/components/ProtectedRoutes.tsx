import { useRouter } from "next/router";
import { useEffect } from "react";


const ProtectedRoutes = ({children})=>{

  const routes = useRouter()
  useEffect(()=>{
    //si el usuario no est alogeado
    routes.replace('/signup')
  })

    return(
       <div>
         <p>esto viene de protected routes</p>
         {children}
       </div>
    )
}

export default ProtectedRoutes;