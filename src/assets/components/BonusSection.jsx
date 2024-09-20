import React from 'react'
import bono1 from './images/BONO1.png'
import bono2 from './images/BONO2.png'
import bono3 from './images/BONO3.png'
import bono4 from './images/BONO4.png'

const Bonus = () => {
  return (
    <>
    <div className='bonusSection'>
      <div className='bonusTitleContent'>
        <div className='bonusTitle'>          
          <span className='BonusBigTitle'>4 Bonos Adicionales</span>          
          <span >Y porque nuestro objetivo es apoyarte, solo si inviertes hoy en este curso, obtendrás 4 bonos adicionales que te ayudaran a complementar tu aprendizaje, todo esto valorado en $329 dólares, hoy gratis.</span>
        </div>
      </div>
      <div className='bonusContent'>
        <div className='bonus'>
          <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/03/1-1.png?w=300&ssl=1"} alt="bono1" />
          <span className='bonusNumber'>BONO 1</span>
          <span className='bonusDescription'>«Incrementa tus ventas con 200 prompts de ChatGPT para marketing»</span>
          <span className='bonusPrice'>VALOR $100  = HOY GRATIS</span>
        </div>
        <div className='bonus'>
          <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/03/2-1.png?w=300&ssl=1"} alt="bono2" />
          <span className='bonusNumber'>BONO 2</span>
          <span className='bonusDescription'>Canal exclusivo para que no te pierdas ninguna de las actualizaciones importantes.</span>
          <span className='bonusPrice'>VALOR $79  = HOY GRATIS</span>
        </div>
        <div className='bonus'>
          <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/03/3-1.png?resize=300%2C300&ssl=1"} alt="bono3" />
          <span className='bonusNumber'>BONO 3</span>
          <span className='bonusDescription'>Te otorgaremos un certificado avalado por Hotmart que te acredita como profesional en Inteligencia Artificial.</span>
          <span className='bonusPrice'>VALOR $50  = HOY GRATIS</span>
        </div>
        <div className='bonus'>
          <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/03/4-1.png?resize=300%2C300&ssl=1"} alt="bono4" />
          <span className='bonusNumber'>BONO 4</span>
          <span className='bonusDescription'>Te daremos este complemento que hará que tengas actualizaciones constantes de nuestro programa sin costo alguno.</span>
          <span className='bonusPrice'>VALOR $100  = HOY GRATIS</span>
        </div>
      </div>
      <div className='bonusFooterContent'>
        <div className='bonusFooter'>
        Últimos cupos disponibles para ingresar a los paquetes de IA Acelera con los bonos de acción rápida
        </div>
      </div>
    </div>
    </>
  )
}

export default Bonus