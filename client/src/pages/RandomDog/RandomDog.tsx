import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './randomDog.css'
import {Loader} from '../../components/Loader/Loader'

export const RandomDog = () => {

    const[dog,setDog] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/api/randomDogs')
            .then(res=>setDog(res.data))

    },[])

    const randomDog = ()=>{
        window.location.reload();
    }

  return (
    <section id='RandomDog'>
        <div className='dog-header'>
            <h2>Random Dog</h2>
            <button onClick={randomDog} className='refresh-btn'>Clique aqui para gerar outra foto</button>
        </div>
       <div className='dog-container'>
        { dog ? <img src={`https://random.dog/${dog}`}/> : <Loader/>}
       </div>
    </section>
  )
}
