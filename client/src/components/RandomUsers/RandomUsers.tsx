import React from "react";
import { RandomUsers } from "../../types/types";

export const RandomUser = ({ currentItems, search }: any) => {
  return (
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
          .filter((user: RandomUsers) => {
            if (search == "") {
              return user;
            } else if (
              user.email.toLowerCase().includes(search.toLowerCase()) ||
              user.name.title.toLowerCase().includes(search.toLowerCase()) ||
              user.name.first.toLowerCase().includes(search.toLowerCase()) ||
              user.name.last.toLowerCase().includes(search.toLowerCase()) ||
              user.login.username.toLowerCase().includes(search.toLowerCase())
            ) {
              return user;
            }
          })
          .map((person: RandomUsers, index: React.Key) => (
            <tr key={index}>
              <td>
                <img
                  src={person.picture.large}
                  alt="userImage"
                  className="userImage"
                />
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
  );
};
