// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
  // 1. Usamos useState para crear un objeto de estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    comentarios: '',
    opcion: 'Seleccione una opción',
    fecha: '',
    // Nota: El manejo de archivos (formfile) es más complejo y a menudo 
    // se maneja por separado del resto del estado de texto.
  });

  // 2. Función genérica para manejar los cambios en cualquier campo de entrada
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value // Actualiza la propiedad correspondiente en el estado
    }));
  };

  // 3. Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento de envío por defecto del HTML
    console.log('Datos del formulario enviados:', formData);
    alert('Formulario enviado (¡Revisa la consola para ver los datos!)');
    
    // Aquí es donde típicamente enviarías los datos a una API
    // fetch('/api/submit', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    // Usamos el componente <form> y manejamos el evento onSubmit
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Campo Nombre */}
        <div className="col-lg-6">
          <div className="mb-3"> {/* mb-3 para un mejor espaciado */}
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              id="nombre" 
              placeholder="Escribe tu nombre"
              value={formData.nombre} // Controlado por el estado de React
              onChange={handleChange} // Maneja los cambios de valor
            />
          </div>
        </div> 
        
        {/* Campo Comentarios */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="comentarios" className="form-label">Comentarios</label>
            <textarea 
              className="form-control" 
              id="comentarios" 
              rows="3" 
              placeholder="Escribe tus comentarios"
              value={formData.comentarios}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Campo Select */}
        <div className="col-lg-4">
          <div className="mb-3">
            <label htmlFor="opcion" className="form-label">Seleccionar</label>
            <select 
              className="form-select" 
              id="opcion" 
              value={formData.opcion}
              onChange={handleChange}
            >
              <option disabled>Seleccione una opción</option>
              <option>Control de Stock</option>
              <option>Gestión de Proveedores</option>
              <option>Gestión de Productos</option>
              <option>Usuarios y Roles</option>
              <option>Informes y Análisis</option>
              <option>Entregas y Pedidos</option>
              <option>Alertas y Notificaciones</option>
            </select>
          </div>
        </div>

        {/* Campo Subir archivo (manejo de archivos simplificado, solo visual) */}
        <div className="col-lg-4">
          <div className="mb-3">
            <label htmlFor="formfile" className="form-label">Subir archivo</label>
            <input className="form-control" type="file" id="formfile" />
          </div>
        </div>

        {/* Campo Fecha */}
        <div className="col-lg-4">
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Seleccionar fecha</label>
            <input 
              className="form-control" 
              type="date" 
              id="fecha" 
              placeholder="dd/mm/aaaa"
              value={formData.fecha}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      
      {/* Botón de Envío */}
      <div className="row mt-3">
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Enviar Comentarios
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;