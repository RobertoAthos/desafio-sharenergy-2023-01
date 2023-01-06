import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { RandomUsers } from "../../types/types";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import { RandomUser } from "../../components/RandomUsers/RandomUsers";

export const Home = () => {
  const [user, setUser] = useState<RandomUsers[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const[error,setError] = useState('')

  const pages = Math.ceil(user.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = user.slice(startIndex, endIndex);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await axios.get("http://localhost:5000/api/randomUsers");
      setUser(res.data);
      if(res.data.length === 0){
        setError('Erro ao se conectar com a api 😔 , verifique sua conexão com a internet')
      }
    };
    loadUsers();
  }, []);

  return (
    <section id="home-users">
      <div className="home-text">
        <h2>Random Users API</h2>
        <input
          type="text"
          placeholder="Buscar Usuário"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="person-box">
        <RandomUser currentItems={currentItems} search={search} />
        <h2 className="empty-error">{error}</h2>
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
