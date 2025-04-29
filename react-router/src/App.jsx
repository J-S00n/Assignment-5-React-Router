import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView.jsx';
import LoginView from '../Views/LoginView.jsx';
import RegisterView from '../Views/RegisterView.jsx';
import ErrorView from '../views/ErrorView.jsx';
import MoviesView from '../views/MoviesView.jsx';
import GenreView from '../Views/GenreView.jsx';
import DetailView from '../views/DetailView.jsx';
import ProtectedRoutes from '../Views/ProtectedRoutes.jsx';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/movies" element={<MoviesView />}>
            <Route path="genre/:id" element={<GenreView />}></Route>
            <Route path="details/:id" element={<DetailView />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
