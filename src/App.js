import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './component/Navs';
import { UserProvider } from './component/context/userContext'


function App() {

  return (
    <>
      <UserProvider>
      <Navs/>
      </UserProvider>
    </>
    
  
    
     

    
  );
}

export default App;
