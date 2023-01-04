import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { UserFormField } from '../../components/UserFormField/UserFormField'
import { API } from '../../services/api'
import { CreateUserInfo } from '../../types/types'
import { Link } from 'react-router-dom'
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage'
import { Loader } from '../../components/Loader/Loader'

export const EditUser = () => {
    
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
    const {id} = useParams()
  
    useEffect(()=>{
      getUser(id!)
    },[id])

    const getUser = async(id:string)=>{
        const res = await API.get(`user/${id}`)
        setValues({
            name:res.data.name,
            email:res.data.email,
            tel:res.data.tel,
            cpf:res.data.cpf,
            address:res.data.address
        })
    }

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>)=>{
        setIsLoading(true)
        e.preventDefault()
        setIsLoading(false)
        setIsSuccess(true)
        await API.patch(`${id}/update`,values)
    } 

    setTimeout(()=>setIsSuccess(false), 30000);
    
  return (
    <section id='edit-user'>
        <div className='User-form-container'>
        <div className='user-text'>
            <h2>Escolha quais os campos <br/> você deseja fazer alterações</h2>
        </div>
        <div className='link'><Link to='/users' className='back'>Voltar</Link></div>
        <form onSubmit={handleSubmit}>
            <UserFormField
                inputType={'text'}
                value={values.name}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'name'}
                placeholder={'Nome'}
            />
            <UserFormField
                inputType={'email'}
                value={values.email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'email'}
                placeholder={'Email'}
            />
            <UserFormField
                inputType={'tel'}
                value={values.tel}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'tel'}
                placeholder={'Telefone'}
            />
            <UserFormField
                inputType={'text'}
                value={values.cpf}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'cpf'}
                placeholder={'CPF'}
            />
            <UserFormField
                inputType={'text'}
                value={values.address}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                name={'address'}
                placeholder={'Endereço'}
            />
            {isSuccess ? <SuccessMessage title='Usuário Atualizado com Sucesso !'/> : ''}
            { isLoading ? <Loader/> :<button type='submit' className='user-btn'>Salvar Alterações</button>}
        </form>
        </div>
    </section>
  )
}
