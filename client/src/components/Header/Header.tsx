import React,{useState} from 'react'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import './header.css'

export const Header = () => {

  const[activeMenu, setActiveMenu] = useState(false)

  const menuMobile = ()=> setActiveMenu(!activeMenu)

  return (
   <>
    <header id='header'>
        <div className='logo'>
            <Link to='/'><img src={logo} alt='sharenergy logo'/></Link>
        </div>
        <nav className='navigation'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/httpCat'>Http Cat</Link></li>
                <li><Link to='/randomDogs'>Random Dogs</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </nav>
        {activeMenu ? <AiOutlineClose onClick={menuMobile} className='menu-burguer'/> : <HiMenu className='menu-burguer' onClick={menuMobile}/>}
    </header>

    <nav className={activeMenu ? 'menu-mobile menuOpen' : 'menu-mobile menuClose' }>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/httpCat'>Http Cat</Link></li>
            <li><Link to='/randomDogs'>Random Dogs</Link></li>
            <li><Link to='/users'>Users</Link></li>
          </ul>
    </nav>
   </>
  )
}
