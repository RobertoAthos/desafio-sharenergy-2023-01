import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { UserFormField } from "../../../components/UserFormField/UserFormField";
import { API } from "../../../services/api";
import { CreateUserInfo } from "../../../types/types";
import illustration from "../../../assets/illustration.png";
import Transition from "../../../components/Transition";
import { ToastContainer, toast } from "react-toastify";
import "./userForm.css";

export const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    try {
      setIsLoading(true);
      await API.post("registerUser", values);
      toast.success("Usuário Criado com Sucesso!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
      });
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro na hora de criar usuário", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
      });
    }
  };

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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                name={"name"}
                placeholder={"Nome"}
              />
              <UserFormField
                inputType={"email"}
                value={values.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                name={"email"}
                placeholder={"Email"}
              />
              <UserFormField
                inputType={"tel"}
                value={values.tel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                name={"tel"}
                placeholder={"Telefone"}
              />
              <UserFormField
                inputType={"text"}
                value={values.cpf}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                name={"cpf"}
                placeholder={"CPF"}
              />
              <UserFormField
                inputType={"text"}
                value={values.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                name={"address"}
                placeholder={"Endereço"}
              />
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
      <ToastContainer />
    </section>
  );
};
