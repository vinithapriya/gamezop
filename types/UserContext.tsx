import {  createContext, useContext } from "react";
import { UsersType } from "./types";

export async function getServerSideProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  return {
    props: {
      users: await resp.json(),
    },
  };
}

const userController = (users: UsersType[]) => {
  return {
    users: users,
  };
};

const UserContext = createContext<ReturnType<typeof userController>>({
  users: [],
});

export const UserProvider = ({ users, children }) => (
  <UserContext.Provider value={userController(users)}>
    {children}
  </UserContext.Provider>
);

export const userList = () => useContext(UserContext);
