import React from 'react'
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'


const ProfileSection = () => {
  return (
    <>
       <div className='profileSection'>
        <div className='bonusTitleContent'>
          <div className='bonusTitle'>          
            <span className='titleProfile'> SI TE SIENTES IDENTIFICADO(A) CON AL MENOS UNA DE ESTAS SITUACIONES, ENTONCES DEFINITIVAMENTE ¡ESTO ES PARA TI!</span>          
          </div>
        </div>
        <div className='profileContent' >
            <div className='profileText'>Eres un emprendedor y te gustaría usar internet para generar ingresos, pero no sabes por donde empezar. Has oido hablar de la I.A pero crees que es complicada</div>
            <div className='profileText'>Tienes un negocio online, físico, vendes bienes o servicios. Te has vuelto esclavo de tu negocio y quieres recuperar tu tiempo. Te gustaría ahorrar significativamente en gastos innecesarios</div>
            <div className='profileText'>Eres creador de contenido y sientes que pasas mucho tiempo haciendo creativos, pero a pesar de tanto esfuerzo,  no logras aumentar tus seguidores en las redes sociales. </div>
        </div>
        <div className='cardContent'>
              <div className='card'>
                <span className='cartTitle'>¡La inteligencia artificial ya no es una opción, es una necesidad!</span>
                <img src={profile1} alt="profile1" />
                <span className='cardDescription'>«Gracias a la inteligencia artificial, ahora tengo en mi negocio un trabajador que nunca se cansa, que no cobra y que obtiene más y mejores resultados en sólo una fracción de tiempo, ahora puedo pasar más tiempo con mi familia»</span>
                <span className='cardAutor'>Hector Benavidez. Dueño de un pequeño comercio</span>
            </div>
        </div>
        <div className='bonusTitleContent'>
          <div className='bonusTitle'>
            <hr/>
            <span className='titleProfile'> ¡Miles de emprendedores de todo el mundo ya están obteniendo resultados!</span>
            <hr/>
          </div>
        </div>
        <div className='cardContent'>
          <div className='card'>           
              <img src={profile2} alt="profile2" />
              <span className='cardDescription'>«Después de la pandemia, tenía problemas para recuperar clientes. Gracias a que aprendí a usar la I.A. no sólo ahorré dinero en contrataciones, sino que mis anuncios  llamaron tanto la atención que no podía creer la cantidad de personas solicitando citas. Gracias I.A. Acelera»</span>
              <span className='cardAutor'>(Silvana Martinez. Empresaria y dueña de un salón de belleza)</span>
          </div>
        </div>
       </div>
    </>
  )
}

export default ProfileSection