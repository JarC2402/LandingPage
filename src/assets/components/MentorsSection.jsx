import React from 'react'
import icono1 from './images/icono-1.png'
import francisco from './images/FRANCISCO-1.png'
import alejo from './images/Alejo.png'
import yeison from './images/Yeison.png'

const MentorsSection = () => {
  return (
    <div className='mentorsSection' >
    
    <div className='mentorCard'>
        <span className='mentorTitle'>Conoce a los mentores que transformarán tu estrategia de Marketing.</span>
        <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/01/icono-1.webp?w=392&ssl=1"} alt="icono1" /><hr/>
        <span> FRANCISCO BENITES es Licenciado en Administración de Empresas por la Universidad Anáhuac (México). Es un emprendedor y consultor profesional de Marketing Digital con más de 10 años de experiencia. También es Productor Musical y audiovisual. Ha trabajado desde hace más de 30 años con algunos de los artistas más reconocidos de México.</span><hr/>
        <span>Fundador de la comunidad «Músicos Exitosos» y de «FB Digital Plaza», donde asesora negocios y forma emprendedores en Marketing. Siempre en constante aprendizaje y con el afán de estar a la vanguardia, se ha especializado en I.A. y es creador de varios cursos sobre I.A. generativa.</span><hr/>
        <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/01/FRANCISCO-1.jpg?w=512&ssl=1"} alt="mentor francisco" /><hr/>
        <span>«IA Acelera es como si manejaras un Ferrari en piloto automático, que te lleva por la autopista del progreso a gran velocidad y te permite llegar a la línea de meta del éxito, mucho más rápido, y sin tanto esfuerzo.»</span>
    </div><hr/>    
    <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2024/01/icono-1.webp?w=392&ssl=1"} alt="icono1" />
    <div className='mentors'>
    <div className='mentorsCard two'>
     <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2023/06/Alejo.png?w=300&ssl=1"} alt="mentor alejo" />
     <span className='mentorName'>ALEJANDRO SARRIA</span><hr/>
     <span><b>Ingeniero en electrónica y telecomunicaciones</b>, Master en dirección de Marketing Digital, <b>Co fundador de Conexo Digital y Mentors Expert</b>. Además, es especialista en gerencia de proyectos informáticos, <b>con más de 12 años de experiencia</b> implementando estrategias de marketing digital para empresas en Latinoamérica como <b>Porvenir, Facebook, Google Colombia</b>, es conferencista invitado para el programa de aceleración de empresas en <b>Google Launchpad</b>.</span>
    </div>
    
    <div className='mentorsCard two'>
        <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2023/06/Yeison.png?w=300&ssl=1"} alt="mentor yeison" />
        <span className='mentorName'>YEISON CAJAS</span><hr/>
        <span><b>Conferencista de marketing digital</b> y creatividad. Desde los 17 años ha emprendido en la industria digital, <b>siendo finalista en 4 competencias de emprendimiento e innovación en el país</b>. Actualmente es <b>Co-Fundador de Mentors Expert</b>, programa de acompañamiento que busca mejorar la calidad de vida de miles de familias hispanas, <b>generando mejores ingresos gracias al e-commerce de productos digitales con hotmart</b>.</span>
    </div>
    </div>
    </div>
  )
}

export default MentorsSection