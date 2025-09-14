import AdminPage from './admin/AdminPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './user/User';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<UserPage />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
