import './App.css';
import{Route,Routes} from 'react-router-dom';
import Mainpagee from './components/Mainpagee';
import Welcomeback from './components/Welcomeback';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpagee/>}/>
      <Route path='/welcomeback' element={<Welcomeback/>}/>
    </Routes>
  );
}

export default App;
