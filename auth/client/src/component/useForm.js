import { useState } from "react";

const useForm = () => {
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogIn = (e) => {
    e.preventDefault();
  };
  return {
    handleChange,
    handleSubmit,
    formInfo,
    handleInputs,
    handleLogIn,
    loginForm,
  };
};

export default useForm;
