import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import AddAddressBookComponent from './components/AddAddressBookComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewAddressBookComponent from './components/ViewAddressBookComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
          <div className='container'>
            <Routes>
              <Route path="/" element={<AddAddressBookComponent />}></Route>
              <Route path="/view" element={<ViewAddressBookComponent />}></Route>
            </Routes>
          </div>
          
      </Router>
    </div>
  );
}

export default App;
