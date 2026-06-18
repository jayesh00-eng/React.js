import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login({ credentials }) {
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const getemail = (e) => {
    setUser((user) => ({ ...user, email: e.target.value }))
  }

  const getpassword = (e) => {
    setUser((user) => ({ ...user, password: e.target.value }))
  }

  const handleLogin = (e) => {
   

    if (
      user.email === credentials.email &&
      user.password === credentials.password
    ) {
      navigate('/Home')
    } else {
      alert('invalid Email or Password')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
    <div
      className="container d-flex flex-column align-items-center justify-content-center bg-black text-white rounded-4"
      style={{ height: '400px', width: '400px' }}
    >
      <form>
        <div>
          <h1 className="text-center mb-3">Login</h1>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getemail}
            value={user.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={getpassword}
            value={user.password}
          />
        </div>

        <button onClick={handleLogin} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
    </div>
  )
}
