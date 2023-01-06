import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BsCheckCircleFill } from "react-icons/bs";
import "./login.css";
import { Loader } from "../../components/Loader/Loader";
import { AiOutlineLink } from "react-icons/ai";
import Transition from "../../components/Transition";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { RightSide } from "../../components/LoginRightSide/RightSide";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const[error,setError] = useState('')


  const validateForm = ()=>{
    if(username  === '' || password === ''){
      setError('Preencha os campos necessários')
      setIsLoading(false)
    } else if(username !== 'desafiosharenergy' || password !== 'sh@r3n3rgy'){
      setError('Credenciais inválidas')
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      await auth.authenticate(username, password);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      validateForm()
    }
  };


  return (
    <section id="form-container-login">
      <div className="login-content">
        <form onSubmit={handleLogin} className="login">
          <div className="logo">
            <img src={logo} alt="sharenergy logo" />
          </div>
          <Transition direction="up">
            <div className="form">
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="error">{error}</p>
              {isloading ? (
                <Loader />
              ) : (
                <button type="submit" className="login-btn">
                  Entrar
                </button>
              )}
            </div>
          </Transition>
        </form>
        <div className="login-text">
            <RightSide/>
        </div>
      </div>
    </section>
  );
};

