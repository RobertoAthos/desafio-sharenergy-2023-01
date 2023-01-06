import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'

const sharLink = () => {
    window.location.href = "https://www.sharenergy.com.br/";
  };

export const RightSide = () => {
  return (
    <>
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
    </>
  )
}
