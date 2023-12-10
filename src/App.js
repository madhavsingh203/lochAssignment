import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-center h-full w-full">
   
      <div className='md:w-[60vw]'>

     <Dashboard/>
      </div>
      <div className='md:w-[40vw]'>
        
     <Signup/>
      </div>
    </div>
  );
}

export default App;
