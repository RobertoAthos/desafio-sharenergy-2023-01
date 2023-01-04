import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage'
import { UserFormField } from '../../components/UserFormField/UserFormField'
import { API } from '../../services/api'
import { CreateUserInfo } from '../../types/types'
import './userForm.css'

export const CreateUser = () => {

    const[isLoading,setIsLoading] = useState(false)
    const[isSuccess,setIsSuccess] = useState(false)
    const[values,setValues]= useState<CreateUserInfo>({
        name:"",
        email:"",
        tel: "",
        cpf:"",
        address: ""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }

    const createUser = async (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsLoading(true)
        setIsSuccess(true)
        await API.post('registerUser',values)
        setIsLoading(false)
    }  

    setTimeout(()=>setIsSuccess(false), 30000);


  return (
    <section id='createUser'>
       <div className='User-form-container'>
        <div className='user-text'>
            <h2>Complete os campos abaixo <br/> para criar um novo usuário</h2>
        </div>
        <div className='link'><Link to='/users' className='back'>Voltar</Link></div>
       <form onSubmit={createUser}>
            <span className='errors'>Campo obrigatório</span>
            <UserFormField
                inputType={'text'}
                value={values.name}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'name'}
                placeholder={'Nome'}
            />
            <span className='errors'>Campo obrigatório</span>
            <UserFormField
                inputType={'email'}
                value={values.email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'email'}
                placeholder={'Email'}
            />
            <span className='errors'>Campo obrigatório</span>
            <UserFormField
                inputType={'tel'}
                value={values.tel}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'tel'}
                placeholder={'Telefone'}
            />
            <span className='errors'>Campo obrigatório</span>
            <UserFormField
                inputType={'text'}
                value={values.cpf}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'cpf'}
                placeholder={'CPF'}
            />
            <span className='errors'>Campo obrigatório</span>
            <UserFormField
                inputType={'text'}
                value={values.address}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'address'}
                placeholder={'Endereço'}
            />
            {isSuccess ? <SuccessMessage title='Usuário Criado com Sucesso !'/> : ''}
            {isLoading ?  <Loader/> : <button type='submit' className='user-btn'>criar usuário</button> } 
        </form>
       </div>
    </section>
  )
}
