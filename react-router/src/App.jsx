import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView.jsx';
import LoginView from '../views/LoginView.jsx';
import RegisterView from '../Views/RegisterView.jsx';
import ErrorView from '../views/ErrorView.jsx';
import MoviesView from '../views/MoviesView.jsx';


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
