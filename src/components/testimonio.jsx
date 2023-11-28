import React from 'react';
import '../style/testimonio.css'

function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../image/testimonio-${props.imagen}.jpg`)} 
        alt='Imagen de la persona que da testimonio' 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.name}</strong> en {props.country}</p>
        <p className='cargo-testimonio'>{props.job} en <strong>{props.corp}</strong></p>
        <p className='texto-testimonio'>"{props.coment}"</p>
      </div>
    </div>
  );
}

export default Testimonio;