<<<<<<< HEAD
import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://doctors-portal-server-main.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
=======
import { useEffect, useState } from "react"

const useToken = email =>{
    const [token,setToken]= useState('')
    useEffect(()=>
    {
        if(email)
        {
            fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.accessToken)
            {
              localStorage.setItem('accessToken',data.accessToken)
                setToken(data.accessToken)
            } 
        })
        }
    },[email])
    return [token];
}

export default useToken;
>>>>>>> 2abe198f66b5fb957757574e4f1f21993a829e2b
