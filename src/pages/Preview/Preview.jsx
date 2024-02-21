import {  useNavigate } from "react-router-dom";
import "./preview.css";

function Preview() {
  const navigate = useNavigate();

  const handleClickLogin = (e) => {
    e.preventDefault()
    navigate('/login')
  }
  const handleClickRegister = (e) => {
    e.preventDefault()
    navigate('/register')
  }

  return (
    <div className="containerLogin">
      <div className="titleWelcome">
        <h1>WELCOME TO </h1>
        <h1>STARRRING SHOP</h1>
        <div className="containerButtons">
          <button onClick={handleClickLogin} className="btnLoginAndRegister">
            <span>Login</span>
          </button>
          <button onClick={handleClickRegister} className="btnLoginAndRegister">
            <span>Register</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
