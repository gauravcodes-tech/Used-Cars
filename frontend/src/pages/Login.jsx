import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/api";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const [loading,setLoading]=useState(false);

  const { login } = useAuth();

  const [form,setForm]=useState({

    email:"",
    password:""

  });

  const handleChange=(e)=>{

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit=async(e)=>{

    e.preventDefault();

    setLoading(true);

    try{

      const res=await API.post("/auth/login",form);

      login(res.data.user, res.data.token);

      alert("Login Successful ✅");

      if(res.data.user.role==="admin"){

        navigate("/admin");

      }

      else{

        navigate("/");

      }

    }

    catch(err){

      alert(err.response?.data?.message||"Login Failed");

    }

    finally{

      setLoading(false);

    }

  };

  return(

<div className="container py-5">

<h2 className="mb-4">

Login

</h2>

<form onSubmit={handleSubmit}>

<input

className="form-control mb-3"

type="email"

name="email"

placeholder="Enter Email"

required

onChange={handleChange}

/>

<input

className="form-control mb-3"

type="password"

name="password"

placeholder="Enter Password"

required

onChange={handleChange}

/>

<button

className="btn btn-primary"

disabled={loading}

>
    <hr />

<p>

<b>Admin Demo</b>

</p>

<p>

Email :
admin@gmail.com

</p>

<p>

Password :
123456

</p>

{

loading

?

"Logging in..."

:

"Login"

}

</button>

</form>

</div>

  );

}

export default Login;