import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useParams} from 'react-router-dom'
import { UsersInfo } from '../../types/types'
import './userDetail.css'
import { API } from '../../services/api'

export const UserDetail = () => {

  const {id} = useParams()
  const[user,setUser]=useState<UsersInfo>()

  useEffect(()=>{
    getUser()
  },[id])

  const getUser = async()=>{
    const res = await API.get<UsersInfo>(`user/${id}`)
    setUser(res.data)
  }


  return (
    <section>
        <div className='header-detail'>
            <h2>Detalhes do Usuário</h2>
            <Link to='/users'>Voltar</Link>
        </div>
       <div className='user-details-container'>
          <label>Nome:</label>
          <p>{user?.name}</p>
          <label>Email:</label>
          <p>{user?.email}</p>
          <label>Telefone:</label>
          <p>{user?.tel}</p>
          <label>Endereço:</label>
          <p>{user?.address}</p>
          <label>CPF:</label> 
          <p>{user?.cpf}</p>
       </div>
    </section>
  )
}
