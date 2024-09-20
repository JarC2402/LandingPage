import React from 'react';

const WhatsapSection = () => {
  return (
    <div className='whatsappSection'>
      <div className='whatsappContent'>
        <div className='whatsappText'>
          <span className='whatsappTitle'>¿Tienes preguntas?</span>
          <hr/>
          <span>ENVÍA UN MENSAJE DE WHATSAPP Y CON TODO GUSTO TE AYUDARÉ A RESOLVER CUALQUIER DUDA QUE TENGAS, A LA MAYOR BREVEDAD POSIBLE.</span>
          <a href="https://walink.co/af0188" target="_blank" rel="noopener noreferrer">
            <button>
              ESCRÍBENOS AHORA <i className="fab fa-whatsapp"></i>
            </button>
          </a>
        </div>        
        <div >
          <a href="https://walink.co/af0188" target="_blank" rel="noopener noreferrer">
            <img src="https://i0.wp.com/mentors.expert/wp-content/uploads/2023/05/WHATSAPP.png?w=320&ssl=1" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatsapSection;
