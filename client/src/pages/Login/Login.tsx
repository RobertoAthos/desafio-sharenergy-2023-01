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

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await auth.authenticate(username, password);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      alert("Credenciais Inválidas ou Conexão ruim");
    }
  };
  const sharLink = () => {
    window.location.href = "https://www.sharenergy.com.br/";
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
          <h3>Bem Vindo de Volta !</h3>
          <ul>
            <h4>O que você pode fazer:</h4>
            <li>
              <BsCheckCircleFill className="icon-check" />
              Veja listagem de usuários da api Random Users.
            </li>
            <li>
              <BsCheckCircleFill className="icon-check" />
              Veja imagem de gatos de acordo com protocólos http.
            </li>
            <li>
              <BsCheckCircleFill className="icon-check" />
              Veja imagem de cachorros aleatoriamente.
            </li>
            <li>
              <BsCheckCircleFill className="icon-check" />
              Criar, atualizar,ver e deletar usuários.
            </li>
          </ul>
          <div className="github">
            <button onClick={sharLink}>
              <AiOutlineLink className="icon-github" /> Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

