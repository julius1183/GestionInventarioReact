// src/components/HeaderSection.js
import React from 'react';

function HeaderSection() {
  return (
    <>
      {/* Primera Fila: Título, Párrafo y Imagen */}
      <div className="row">
        {/* Columna de Texto */}
        <div className="col-lg-6">
          <h1 className="text-center text-dark">SISTEMA DE GESTION DE INVENTARIO</h1>
          <p className="text-justify">
            Bienvenido. Acceda a un inventario donde la calidad del software se traduce en decisiones más inteligentes y un crecimiento sin límites. 
            Empecemos a optimizar. 
          </p>
          {/* Usa una etiqueta <a> o el componente <Link> de react-router-dom si lo usas */}
          <a href="login.html" className="btn btn-success">EMPECEMOS</a>
        </div>
        
        {/* Columna de Imagen */}
        <div className="col-lg-6 bg-primary">
          {/* NOTA: En React, las imágenes se importan o se referencian desde la carpeta 'public' */}
          <img 
            src="copilot_20250821_103819.png" 
            className="img-fluid rounded" 
            alt="Hot" 
            // Para un ejemplo funcional, podrías usar una imagen de placeholder:
            // src="https://via.placeholder.com/500x300?text=Sistema+Inventario"
          />
        </div>
      </div>

      {/* Segunda Fila: Por Qué Elegirnos, Características, Contacto */}
      <div className="row mt-4">
        {/* Sección: ¿POR QUÉ ELEGIRNOS? */}
        <div className="col-lg-4 col-md-4"> {/* Ajustado a col-lg-4 col-md-4 para consistencia de Bootstrap */}
          <h2 className="text-center text-dark">¿POR QUÉ ELEGIRNOS?</h2>
          <ul className="list-unstyled"> 
            <li>Interfaz amigable y fácil de usar.</li>
            <li>Acceso desde cualquier dispositivo con conexión a internet.</li>
            <li>Soporte técnico disponible 24/7 para resolver cualquier duda o problema.</li>
          </ul>
        </div>

        {/* Sección: CARACTERÍSTICAS PRINCIPALES */}
        <div className="col-lg-4 col-md-4">
          <h2 className="text-center text-dark">CARACTERÍSTICAS PRINCIPALES</h2>
          <ul className="list-unstyled">
            <li>Gestión de productos: Añade, edita y elimina productos de tu inventario de manera sencilla.</li>
            <li>Control de stock: Monitorea los niveles de inventario en tiempo real y recibe alertas cuando los productos estén bajos.</li>
            <li>Reportes detallados: Genera informes personalizados sobre ventas, movimientos de inventario y más.</li>
          </ul>
        </div>

        {/* Sección: CONTACTANOS */}
        <div className="col-lg-4 col-md-4">
          <h2 className="text-center text-dark">CONTACTANOS</h2>
          <ul className="list-unstyled">
            <li>Email: gestion_inventario@hotmail.com</li>
            <li>Teléfono: 323 567 8900</li>
          </ul>
        </div>
      </div>
      <br/>
    </>
  );
}

export default HeaderSection;