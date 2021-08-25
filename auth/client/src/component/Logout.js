import React from "react";
import { Button } from "reactstrap";
import { logout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
};

export default Logout;
