
import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h2>forms</h2>
      <MyForms user={ {name:"Diogo" , email:"Diogo@gmail.com"}}/>

    </div>
  );
}

export default App;
