import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserFormField } from "../../../components/UserFormField/UserFormField";
import { API } from "../../../services/api";
import { CreateUserInfo } from "../../../types/types";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import illustration2 from "../../../assets/illustration2.png";
import Transition from "../../../components/Transition";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// CSS É O MESMO DO "CREATE USER"

export const EditUser = () => {
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
  const { id } = useParams();

  useEffect(() => {
    getUser(id!);
  }, [id]);

  const getUser = async (id: string) => {
    const res = await API.get(`user/${id}`);
    setValues({
      name: res.data.name,
      email: res.data.email,
      tel: res.data.tel,
      cpf: res.data.cpf,
      address: res.data.address,
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsLoading(true);
      await API.patch(`${id}/update`, values);
      toast.success('Usuário Atualizado com Sucesso!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
      })
      setIsLoading(false);
    } catch (error) {
      toast.error('Erro na hora de atualizar o usuário', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
      })
    }
  };

  return (
    <section className="User">
      <div className="User-form-container">
        <div className="user-text">
          <h2>
            Edite as informações <br /> que desejar abaixo.
          </h2>
        </div>
        <div className="link">
          <Link to="/users" className="back">
            Voltar
          </Link>
          <Transition direction="down">
            <form onSubmit={handleSubmit} className="form-user">
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
                  Salvar Modificações
                </button>
              )}
            </form>
          </Transition>
        </div>
        <ToastContainer/>
      </div>
      <div className="user-content">
        <Transition direction="right">
          <img src={illustration2} alt="ilustração" className="illustration" />
        </Transition>
      </div>
    </section>
  );
};
