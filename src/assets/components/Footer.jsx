import React from 'react'
import mentors from './images/mentors.png'

const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='footerContent'>
        <img src={mentors} alt="mentors" /> 
        <span>© 2024 – Mentors Expert | Todos los derechos reservados | Políticas de Privacidad</span><hr/>
        <span>Descargo de Responsabilidad:</span>          
        <span>Este sitio no es parte del sitio web de Facebook o Facebook Inc. Adicionalmente, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de Facebook, Inc.</span>
         <span> <b>2024 | MENTORS EXPERT | TODOS LOS DERECHOS RESERVADOS.</b></span> 
            
      </div>
    </div>
    
  )
}

export default Footer