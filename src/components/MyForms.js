import { useState } from "react";
import "./MyForms.css";

const MyForms = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
   setName(e.target.value);
  };
  console.log(name)
  
  return (
    <div>
      {/* Criação de Forms */}
      <form>
        <div>
          <label htmlFor="name">nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o Seu Nome"
            onChange={handleName}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>Email:</span>
          <input type="text" name="email" placeholder="Digite o seu e-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
