import React from 'react'
import garantia from './images/garantia.png'
import { useState } from 'react'

const Questions = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => {setIsShow(!isShow)}

    const [isShow1, setIsShow1] = useState(false)
    const handleShow1 = () => {setIsShow1(!isShow1)}

    const [isShow2, setIsShow2] = useState(false)
    const handleShow2 = () => {setIsShow2(!isShow2)}

    const [isShow3, setIsShow3] = useState(false)
    const handleShow3 = () => {setIsShow3(!isShow3)}

    const [isShow4, setIsShow4] = useState(false)
    const handleShow4 = () => {setIsShow4(!isShow4)}

    const [isShow5, setIsShow5] = useState(false)
    const handleShow5 = () => {setIsShow5(!isShow5)}

  
  return (
    <div className='questionSection'>
    <div className='garantContent'>
        <span>«Adicionalmente, tu inversión es con <b className='blueQuestion'>CERO RIESGO</b>. Si sientes que este curso no cumple tus expectativas, podrás pedir el reembolso del 100% y te será devuelto sin hacer ninguna pregunta.</span>
        <img src={"https://i0.wp.com/mentors.expert/wp-content/uploads/2023/09/7-dias-de-garantia.png?w=500&ssl=1"} alt="IA Acelera" />
    </div>   
    
    <div className='questionsContent'>
    <span>La revolución de la Inteligencia Artificial ya está aquí, y aquellos que estén preparados tendrán la oportunidad de cambiar sus vidas para siempre. ¿Quieres ser uno de ellos? Este curso te proporcionará las habilidades y el conocimiento para estar listo. ¡Únete ahora y comienza tu camino hacia el éxito!</span>
    
    <span className='oneTitle'>PREGUNTAS FRECUENTES</span><hr/>
       <div className='dcqs'>
            <div className='despleCardTree'>
            <div className='despleCardQ'>
                    <span>¿LAS HERRAMIENTAS QUE ENSEÑAN SON GRATIS O DE PAGO?</span>
                    <button onClick={handleShow}>{isShow?'-':'+'}</button>           
            </div><div className={`despleCardContents ${isShow ? 'show' : ''}`}>
              <span>Este curso te enseñará a utilizar las herramientas de IA para crear contenido, incluyendo las gratuitas, las que ofrecen créditos gratis y las de pago.  Aunque se da prioridad a las herramientas gratuitas, la decisión de invertir en las versiones de pago es tuya y dependerá de si consideras que es rentable para tu negocio.</span>
            </div>
            <div className='despleCardQ'>
                <span>¿POR QUÉ VEO EL PRECIO EN DÓLARES?</span>
                <button onClick={handleShow1}>{isShow1?'-':'+'}</button>           
            </div><div className={`despleCardContents ${isShow1 ? 'show' : ''}`}>Este curso se vende en más de 180 países, es por eso que el precio aparece en dólares, sin embargo, al hacer click en el botón de compra, verás el precio en tu moneda local y todas las opciones de pago disponible en tu país. En algunos países puede aplicar impuestos, por favor revisa antes de completar tu pago.</div>
            
            <div className='despleCardQ'>
                <span>¿CÓMO ACCEDO AL CURSO?</span>
                <button onClick={handleShow2}>{isShow2?'-':'+'}</button>        
            </div><div className={`despleCardContents ${isShow2 ? 'show' : ''}`}>Ingresar es muy sencillo. Una vez realices el pago, recibirás en tu correo electrónico un enlace y  las instrucciones para que puedas acceder inmediatamente al curso.</div>   
                       
            </div>
            <div className='despleCardTree'>
            <div className='despleCardQ'>
                <span>¿DEBO TENER EXPERIENCIA PARA TOMAR EL CURSO?</span>
                <button onClick={handleShow3}>{isShow3?'-':'+'}</button>          
            </div><div className={`despleCardContents ${isShow3 ? 'show' : ''}`}>No, nuestro curso está desarrollado con una metodología práctica y sencilla para que apliques con éxito todo, ¡incluso si estás desde cero!</div>
                    
            <div className='despleCardQ'>
                <span>¿CUÁL ES EL HORARIO DE ESTUDIO?</span>
                <button onClick={handleShow4}>{isShow4?'-':'+'}</button>           
            </div><div className={`despleCardContents ${isShow4 ? 'show' : ''}`}>Una vez ingreses al programa podrás entrar en el horario de tu preferencia, ya que todas las clases han sido grabadas para que puedas encontrarlas cuando desees ingresar, incluso  podrás verla desde cualquier dispositivo móvil por medio de nuestra app.</div>
                    
            <div className='despleCardQ'>
                    <span>¿SE PUEDE APRENDER BIEN CON UN CURSO ONLINE?</span>
                    <button onClick={handleShow5}>{isShow5?'-':'+'}</button>           
            </div><div className={`despleCardContents ${isShow5 ? 'show' : ''}`}>Totalmente, la metodología es muy sencilla, y el curso está diseñado para que puedas aprender desde casa a tu propio tiempo siguiendo los videos, donde todo se explica de manera muy clara y sencilla. Además, recuerda que siempre estará disponible de contactar a tu mentor directamente por medio de nuestros canales exclusivos para resolver cualquier duda que tengas. No estás sólo y cuentas con el apoyo de Francisco en todo momento</div>
                        
            </div>
       </div>
    </div>
    </div>
  )
}

export default Questions