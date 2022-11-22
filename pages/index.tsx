import * as React from "react";
import Header from "../components/Header"
import UserTable from "../components/UserTable";
import { userList } from "../types/UserContext";
export { getServerSideProps } from "../types/UserContext";


function Home() {
  const { users } = userList()

  return (
    <div>
      <Header />
      <UserTable userList={users} />


    </div>
  );
};

export default Home;

