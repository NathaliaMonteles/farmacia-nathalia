import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/components/navbar/NavBar';
import Footer from './components/components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastro" element={<FormularioCategoria />} />
              <Route path="/editarCategorias/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;