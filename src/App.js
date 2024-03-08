import './App.css';
import{Route,Routes} from 'react-router-dom';
import Mainpagee from './components/Mainpagee';
import Welcomeback from './components/Welcomeback';
import Forgotpwd from './components/Forgotpwd';
import Createpassword from './components/Createpassword';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpagee/>}/>
      <Route path='/welcomeback' element={<Welcomeback/>}/>
      <Route path='/forgotpwd' element={<Forgotpwd/>}/>
      <Route path='/createpwd' element={<Createpassword/>}/>
    </Routes>
  );
}

export default App;
