import React from "react";
import { withRouter } from "react-router";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="dashboard">
      <header>
        <NavBar {...user} />
      </header>
      <h2>
        Welcome welcome <span>{user.username && user.username}</span>
      </h2>
    </div>
  );
};

export default withRouter(DashBoard);
