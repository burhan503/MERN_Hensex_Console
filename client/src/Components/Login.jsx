import React, { useEffect, useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import Login_icon from '../assets/login_icon.png'
export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/admin_access_control')
        }
    },[])
    const handleLogin = async () =>{
      let result = await fetch("http://14.97.210.198:7081/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
      })
      result = await result.json()
      console.warn(result)
      if(result.name){
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/admin_access_control')
      }else{
        alert("please enter correct details")
      }
    }
    return (
        <>
            <main>
                <div className='container'>
                    <section className='min-vh-100 d-flex flex-column align-items justify-content-center py-4'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                                    {/* <div className='d-flex justify-content-center py-4'><Link className='logo d-flex align-items-center w-auto'><span>Hensex Console</span></Link></div> */}

                                    <div className='card mb-4'>
                                        <div className='card-body'>
                                            <div className='pt-4 pb-2'>
                                            <img src={Login_icon} className='logo-size' alt="React logo" />
                                                <h5 className='card-title text-center pb-0 '>Login to Your Account</h5>
                                                <p className="text-center small">Enter existing user ID</p>
                                            </div>
                                            <form className='row g-3 needs-validation'>
                                                <div className="col-12">
                                                    <label className="form-label">Email</label>
                                                    <div className="input-group has-validation">

                                                        <input type="email" className="form-control"  value={email} required
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Password</label>

                                                    <input type="password" className="form-control" value={password} required 
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="remember" value="true" />
                                                        <label className="form-check-label" >Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button className="btn btn-primary w-100" onClick={handleLogin} type="button">Login</button>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <div className='flex-column justify-content-center align-items-center'>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
