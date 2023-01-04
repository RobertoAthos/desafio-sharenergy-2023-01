import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { RandomUsers } from "../../types/types";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const [user, setUser] = useState<RandomUsers[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const pages = Math.ceil(user.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = user.slice(startIndex, endIndex);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await axios.get("http://localhost:5000/api/randomUsers");
      setUser(res.data);
    };
    loadUsers();
  }, []);

  return (
    <section id="home-users">
      <div className="home-text">
        <h2>Random Users</h2>
        <input
          type="text"
          placeholder="buscar usuário"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="person-box">
         <table className="table">
         <thead>
           <tr>
             <th>#</th>
             <th>Nome</th>
             <th>Email</th>
             <th>Username</th>
             <th>Idade</th>
           </tr>
         </thead>
         <tbody>
           {currentItems
             .filter((user) => {
               if (search == "") {
                 return user;
               } else if (
                 user.email.toLowerCase().includes(search.toLowerCase()) ||
                 user.name.title.toLowerCase().includes(search.toLowerCase())||
                 user.name.first.toLowerCase().includes(search.toLowerCase()) ||
                 user.name.last.toLowerCase().includes(search.toLowerCase()) ||
                 user.login.username.toLowerCase().includes(search.toLowerCase())
               ) {
                 return user;
               }
             })
             .map((person, index) => (
               <tr key={index}>
                 <td>
                   <img src={person.picture.large} alt="userImage" className="userImage" />
                 </td>
                 <td>
                   {person.name.title} {person.name.first} {person.name.last}
                 </td>
                 <td>{person.email}</td>
                 <td>{person.login.username}</td>
                 <td>{person.dob.age} anos</td>
               </tr>
             ))}
         </tbody>
       </table>
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
