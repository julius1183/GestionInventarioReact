// src/App.js
import React from 'react';
import HeaderSection from './components/HeaderSection';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // Reemplaza el <div class="container-fluid bg-info p-5"> original
    // con la estructura de la aplicación.
    <div className="container-fluid bg-info p-5">
      
      {/* 1. Sección de Cabecera y Características */}
      <HeaderSection />

      {/* 2. Sección del Formulario de Ingreso */}
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-5">Formulario de ingreso</h1>
          {/* El formulario está en su propio componente */}
          <div className="bg-white py-3">
            <ContactForm />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;