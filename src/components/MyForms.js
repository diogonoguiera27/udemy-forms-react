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
            <input type='submit' value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForms