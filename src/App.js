import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
     </Routes>
    </div>
  );
}

export default App;
