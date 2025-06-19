import { useState } from "react";
import "./MyForms.css";

const MyForms = ({user}) => {
    // 6 - controlled inputs

  // 3 Gerenciamento de dados  Input
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  // console.log(name);
  // console.log(email);
 const handleSubmit =(event)=>{
    event.preventDefault();
    console.log("Enviando Formulario");
    console.log(name,email,bio,role);

    // 7  Limpar Form
    setName("");
    setEmail("");
    setBio("");
    setRole("");

 }
  

  return (
    <div>
        {/*5 - Envio de form */}
      {/*1 - Criação de Forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o Seu Nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>Email:</span>
          {/* 4 -Simplificação de manipulação de state */}
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/*  8 textarea */}
        <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder="Descrição" onChange={(e) => setBio(e.target.value)} value={bio}/>
        </label>
        {/*  9 select input */}
        <label>
            <span>função no sistema</span>
            <select name="role" onChange={(e)=>setRole(e.target.value)} value={role}>
                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Adimistrador</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
