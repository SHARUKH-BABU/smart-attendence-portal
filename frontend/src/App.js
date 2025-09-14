import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './admin/AdminPage';
import UserPage from './user/User';
import CheckStatus from './admin/CheckStatus';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<UserPage />} />  
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/checkstatus" element={<CheckStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
