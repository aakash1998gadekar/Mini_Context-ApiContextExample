import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} =useContext(UserContext)
    
    if (!user) return <div className='text-blue-500'>Please login</div>
    return <div><h1 className='text-blue-500 text-center text-pretty'>Welcome {user.username}</h1></div>
}

export default Profile
