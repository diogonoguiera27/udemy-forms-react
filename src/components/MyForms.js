import './MyForms.css'

const MyForms = () => {
  return (
    <div>
        {/* Criação de Forms */}
        <form>
            <div>
                <label htmlFor="name">nome:</label>
                <input type='text' name='name' placeholder='Digite o Seu Nome'/>
            </div>
            {/* 2 - label envolvendo input */}
            <label >
                <span>Email:</span>
                <input type="text" name='email' placeholder='Digite o seu e-mail'/>
            </label>
            <input type='submit' value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForms