import { useContext } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { AuthContext } from './context/AuthProvider'
import { CreateUser } from './pages/CRUD/CreateUser/CreateUser'
import { EditUser } from './pages/CRUD/EditUser/EditUser'
import { Home } from './pages/Home/Home'
import { HttpCat } from './pages/HttpCat/HttpCat'
import { Login } from './pages/Login/Login'
import { RandomDog } from './pages/RandomDog/RandomDog'
import { UserDetail } from './pages/CRUD/UserDetail/UserDetail'
import { Users } from './pages/CRUD/Users/Users'

function App() {
  const auth = useContext(AuthContext)
  return (
    <BrowserRouter>
        {!auth.token ? '' : <Header/> }
        <Routes>
          <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
          <Route path='/randomDogs' element={<ProtectedRoutes><RandomDog/></ProtectedRoutes>}/>
          <Route path='/users' element={<ProtectedRoutes><Users/></ProtectedRoutes>}/>
          <Route path='/userDetail/:id' element={<ProtectedRoutes><UserDetail/></ProtectedRoutes>}/>
          <Route path='/createUser' element={<ProtectedRoutes><CreateUser/></ProtectedRoutes>}/>
          <Route path='/updateUser/:id' element={<ProtectedRoutes><EditUser/></ProtectedRoutes>}/>
          <Route path='/httpCat' element={<ProtectedRoutes><HttpCat/></ProtectedRoutes>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
