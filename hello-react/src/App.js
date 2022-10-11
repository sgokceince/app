
import './App.css';
import Form from'./component/Form.js';
import User from './component/User.js';

function App() {
  return (
    <div className="App">


      <User 
         name="Sakiz" 
         surname="İnce" 
         //isLoggedIn={true}
         age = {3} 
         friends ={["Gusta", "Sunay", "Orhan"]} 
         address = {{title: "Mersin", zip: 33410}}/>
       <h2>Kullanıcı Kayıt Formu</h2>
       <Form />
    </div>
  );
}

export default App;
