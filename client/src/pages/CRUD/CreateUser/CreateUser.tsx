import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { SuccessMessage } from "../../../components/SuccessMessage/SuccessMessage";
import { UserFormField } from "../../../components/UserFormField/UserFormField";
import { API } from "../../../services/api";
import { CreateUserInfo } from "../../../types/types";
import illustration from "../../../assets/illustration.png";
import "./userForm.css";
import Transition from "../../../components/Transition";

export const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [values, setValues] = useState<CreateUserInfo>({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    address: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createUser = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      setIsLoading(true);
      await API.post("registerUser", values);
      setIsLoading(false);
    } catch (error) {
      alert("ERRO");
    }
  };

  setTimeout(() => setIsSuccess(false), 5000);

  return (
    <section className="User">
      <div className="User-form-container">
        <div className="user-text">
          <h2>
            Complete os campos abaixo <br /> para criar um novo usuário
          </h2>
        </div>
        <div className="link">
          <Link to="/users" className="back">
            Voltar
          </Link>
          <Transition direction="down">
          <form onSubmit={createUser} className="form-user">
            <UserFormField
              inputType={"text"}
              value={values.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              name={"name"}
              placeholder={"Nome"}
            />
            <UserFormField
              inputType={"email"}
              value={values.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              name={"email"}
              placeholder={"Email"}
            />
            <UserFormField
              inputType={"tel"}
              value={values.tel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              name={"tel"}
              placeholder={"Telefone"}
            />
            <UserFormField
              inputType={"text"}
              value={values.cpf}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              name={"cpf"}
              placeholder={"CPF"}
            />
            <UserFormField
              inputType={"text"}
              value={values.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              name={"address"}
              placeholder={"Endereço"}
            />
            {isSuccess ? (
              <SuccessMessage title="Usuário Criado com Sucesso !" />
            ) : (
              ""
            )}
            {isLoading ? (
              <Loader />
            ) : (
              <button type="submit" className="user-btn">
                criar usuário
              </button>
            )}
          </form>
          </Transition>
        </div>
      </div>
      <div className="user-content">
        <Transition direction="right">
            <img src={illustration} alt="ilustração" className="illustration" />
        </Transition>
      </div>
    </section>
  );
};
