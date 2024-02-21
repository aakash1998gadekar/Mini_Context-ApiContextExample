import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword] = useState('')

    const {setUser} =useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }


  return (
    <div className='flex-center'>
      <h2 className='text-red-400'>Login</h2>
      <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='username' />
      { "     "}
      <input type='text' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password' />
      <button
       className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
      onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
