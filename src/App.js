import './App.css';
import Navbar from './components/Navbar/Navbar';
import Convert from './components/Form/Convert';

// import * as currency from 

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Navbar />
      <Convert />
    </div>
  );
}

export default App;

// crypto api: 82D118AA-509E-4DF7-B4BA-DC028CBF53AA