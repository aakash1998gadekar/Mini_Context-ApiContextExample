import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  

  return (
    <UserContextProvider>
      <h1 className='text-center text-red-400'>Learning Context Api with examples </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
