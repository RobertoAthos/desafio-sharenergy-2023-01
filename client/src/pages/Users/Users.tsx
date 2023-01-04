import React,{useEffect,useState} from 'react'
import { UsersInfo } from '../../types/types'
import {FaEdit} from 'react-icons/fa'
import {AiFillDelete,AiOutlinePlus,AiOutlineEye} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './users.css'
import { API } from '../../services/api'
import { Loader } from '../../components/Loader/Loader'

export const Users = () => {

  const[users,setUser] = useState<UsersInfo[]>([])
  const navigate = useNavigate()

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async()=>{
    const res = await API.get('users')
    setUser(res.data)
  }

  const deleteUser = async(id:string)=>{
    await API.delete(`${id}/delete`)
    getUsers()
  }

  const userDetails = async(id:string)=>{
    navigate(`/userDetail/${id}`)
  }
  
  const updateUser = (id:string)=>{
    navigate(`/updateUser/${id}`)
  }

  return (
    <section>
        <div className="user-box">
          <div className="users-text">
            <h2>Usuários</h2>
            <Link to='/createUser'><button className='add-user'><AiOutlinePlus/>Criar Usuário</button></Link>
          </div>
          {!users ? <Loader/> : (
            <table className='table-user'>
            <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>CPF</th>
                  <th>Endereço</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
              {users.map((user)=>(
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.tel}</td>
                  <td>{user.cpf}</td>
                  <td>{user.address}</td>
                  <td>
                  <div className='icons-container'>
                  <div onClick={()=>updateUser(user._id)}><FaEdit className='action-icon' id='edit'/></div>
                  <div onClick={()=>deleteUser(user._id)}><AiFillDelete className='action-icon' id='delete'/></div>
                  <div onClick={()=>userDetails(user._id)}><AiOutlineEye className='action-icon' id='eye'/></div>
                  </div>
                  </td>
                </tr>
               
              ))}
            </tbody>
          </table>
          ) }
        </div>
    </section>
  )
}
