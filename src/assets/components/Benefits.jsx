import React from 'react'
import { useState } from 'react'

const Benefits = () => {

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

    const [isShow6, setIsShow6] = useState(false)
    const handleShow6 = () => {setIsShow6(!isShow6)}

    const [isShow7, setIsShow7] = useState(false)
    const handleShow7 = () => {setIsShow7(!isShow7)}

    const [isShow8, setIsShow8] = useState(false)
    const handleShow8 = () => {setIsShow8(!isShow8)}

    const [isShow9, setIsShow9] = useState(false)
    const handleShow9 = () => {setIsShow9(!isShow9)}

  return (
    <>
    <div className='benefitsContent'>
        <div className='cardBenefitsContent'>
            <div className='oneTitle'>
             <span > TODO LO QUE APRENDERÁS CON I.A. ACELERA:</span>
            </div>
            
            <div className='cartTitle'>
                <span>Tendrás más de +60 lecciones grabadas en full HD, siempre actualizadas con las herramientas más nuevas en el mercado y actualizaciones permanentes. Aprenderás el paso a paso desde cero y en tiempo récord todo lo que necesitas saber para dominar las herramientas de Inteligencia Artificial.</span>
            </div><br/>
            <p>(Haz click en el botón amarillo para expandir/cerrar las lecciones de cada módulo)</p>
            <div className='despleCardContent'>
                <div className='cardBenefits'>
                    <div className='despleCard'>
                        <span>INTRODUCCIÓN AL CURSO IA ACELERA PARA TU NEGOCIO / 4 LECCIONES</span>
                        <button onClick={handleShow}>{isShow?'-':'+'}</button>                    
                    </div><div className={`despleCardContents ${isShow ? 'show' : ''}`}>
                            <div className='despleList'> <ul>
                                    <li>⭐BIENVENIDA</li>
                                    <li>⭐TU INSTRUCTOR</li>
                                    <li>⭐¡INSTRUCCIONES IMPORTANTES!! NO SIGAS ADELANTE SIN VER ESTA LECCIÓN</li>
                                    <li>⭐BREVE INTRODUCCIÓN A LA INTELIGENCIA ARTIFICIAL</li>
                                </ul>
                            </div>
                         </div>                            
                    <div className='despleCard'>
                        <span>CHATGPT MODO EXPERTO / 19 LECCIONES</span>
                        <button onClick={handleShow2}>{isShow2?'-':'+'}</button>                        
                    </div><div className={`despleCardContents ${isShow2 ? 'show' : ''}`}>
                            <div className='despleList'> 
                                <ul>
                                    <li>⭐INTRODUCCIÓN Y CONSIDERACIONES IMPORTANTES</li>
                                    <li>⭐CHATGPT: CREANDO LA CUENTA Y PRIMEROS PASOS</li>
                                    <li>⭐QUÉ ES UN PROMPT Y QUÉ CRITERIOS DEBE CUMPLIR</li>
                                    <li>⭐PREPARANDO A CHATGPT PARA MODO EXPERTO</li>
                                    <li>⭐PROMTPS PARA NOMBRE DE NEGOCIO / MARCA</li>
                                    <li>⭐PROMPTS PARA INVESTIGACIÓN DE MERCADO</li>
                                    <li>⭐PROMPTS PARA INVESTIGACIÓN DEL CLIENTE</li>
                                    <li>⭐PROMPTS PARA CREACIÓN DE CONTENIDO</li>
                                    <li>⭐PROMPT PARA PLAN DE CONTENIDO DE TODO EL MES</li>
                                    <li>⭐TRANSCRIBE Y RESUME VIDEOS DE YOUTUBE CON ESTA EXTENSION DE CHROME</li>
                                    <li>⭐PROMPT PARA CREAR LEAD MAGNETS</li>
                                    <li>⭐OCHO PROMPTS PARA CHATGPT EN MODO EXPERTO</li>
                                    <li>⭐PROMPTS PARA ANUNCIOS DE FACEBOOK</li>
                                    <li>⭐PROMPTS PARA TÍTULOS DE ANUNCIOS Y LLAMADAS A LA ACCIÓN (CTA´s)</li>
                                    <li>⭐PROMPT PARA LANDING PAGE</li>
                                    <li>⭐PROMPTS PARA EMAIL MARKETING</li>
                                    <li>⭐ChatPDF: Transforma tus PDF en información accesible para chatgpt</li>
                                    <li>⭐PROMPTS AUTOMATICOS CON LA EXTENSION AIPRM</li>
                                    <li>⭐CONTENIDO PARA TODO EL AÑO CON CHATGPT+CANVA+GOOGLE SHEETS</li> 
                                </ul>
                            </div>
                            </div>
                    <div className='despleCard'>
                        <span>OTRAS HERRAMIENTAS DE IA PARA GENERAR TEXTO / 4 LECCIONES</span>
                        <button onClick={handleShow3}>{isShow3?'-':'+'}</button>     
                    </div><div className={`despleCardContents ${isShow3 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                    <li>⭐MICROSOFT BING</li>
                                    <li>⭐GOOGLE BARD</li>
                                    <li>⭐WRITESONIC</li>
                                    <li>⭐COPY.AI</li>
                                </ul> 
                            </div>
                            </div>      
                    <div className='despleCard'>
                        <span>CREACIÓN Y EDICIÓN DE IMÁGENES / 11 LECCIONES</span>
                        <button onClick={handleShow4}>{isShow4?'-':'+'}</button>                        
                    </div><div className={`despleCardContents ${isShow4 ? 'show' : ''}`}>                    
                            <div className='despleList'>
                                <ul>
                                    <li>⭐3 HERRAMIENTAS DE I.A. PARA GENERAR EL LOGOTIPO Y NOMBRE DE TU NEGOCIO</li>
                                    <li>⭐BING IMAGE CREATOR (DALL-E)</li>
                                    <li>⭐TEXTO A IMAGEN USANDO CANVA</li>
                                    <li>⭐ADOBE EXPRESS</li>
                                    <li>⭐MIDJOURNEY</li>
                                    <li>⭐MDI JOURNEY MODO PRO+PROMPTS</li>
                                    <li>⭐CREA TU PROPIO SERVIDOR PRIVADO EN MIDJOURNEY</li>
                                    <li>⭐3 HACKS PARA IMAGENES INCREIBLES EN MIDJOURNEY</li>
                                    <li>⭐LEONARDO AI</li>
                                    <li>⭐IDEOGRAM: GENERACIÓN DE IMAGENES CON TEXTO INCLUIDO</li>
                                    <li>⭐TEXTOS OCULTOS EN IMAGENES CON GLIF</li>                
                                </ul></div>
                            </div>
                    <div className='despleCard'>
                        <span>HERRAMIENTAS PARA CREAR CONTENIDOS Y ANUNCIOS / 11 LECCIONES</span>
                        <button onClick={handleShow5}>{isShow5?'-':'+'}</button>
                    </div><div className={`despleCardContents ${isShow5 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                    <li>⭐MICROSOFT DESIGNER (GRATUITA)</li>
                                    <li>⭐PREDIS 1: PRIMEROS PASOS</li>
                                    <li>⭐PREDIS 2: CONTENIDOS Y UNIR CUENTAS DE REDES SOCIALES</li>
                                    <li>⭐PREDIS 3: CONTENIDOS, MEMES, CHATS</li>
                                    <li>⭐PREDIS 4: ANALISIS DE LA COMPETENCIA</li>
                                    <li>⭐GAMMA IA: PRESENTACIONES TIPO POWER POINT / DOCUMENTOS /PÁGINAS WEB</li>
                                    <li>⭐FLIKI 1: TEXTO A VOZ</li>
                                    <li>⭐FLIKI 2: TEXTO A VIDEO / BLOG A VIDEO / IDEA A VIDEO</li>
                                    <li>⭐AD CREATIVE 1: CREATIVOS PARA ANUNCIOS</li>
                                    <li>⭐AD CREATIVE 2: CONTENIDOS PARA REDES SOCIALES</li>
                                    <li>⭐AD CREATIVE 3: GENERACIÓN DE TEXTOS Y COPYS</li>  
                                </ul> 
                            </div>
                            </div>                              
                </div>

                <div className='cardBenefits'>   
                    <div className='despleCard'>
                        <span>CREACIÓN Y EDICIÓN DE VIDEO Y AUDIO / 7 LECCIONES</span>
                        <button onClick={handleShow6}>{isShow6?'-':'+'}</button>
                    </div><div className={`despleCardContents ${isShow6 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                    <li>⭐CLIPCHAMP 1: GENERA VIDEOS AUTOMÁTICOS CON IA Y ENTRADAS PARA TU CANAL DE YOUTUBE</li>
                                    <li>⭐CLIPCHAMP 2: CÓMO GRABAR VIDEOS PARA TUTORIALES O REDES, TEXTO A VOZ</li>
                                    <li>⭐CLIPCHAMP 3: EDICIÓN DE VIDEO DESDE CERO</li>
                                    <li>⭐RUNWAY: ELIMINA EL FONDO DE CUALQUIER VIDEO O ELIMINA ELEMENTOS DE UN VIDEO</li>
                                    <li>⭐RUNWAY GEN1 Y GEN2 : GENERA VIDEOS INCREIBLES</li>
                                    <li>⭐RUNWAY: LIMPIAR AUDIO, VOZ A TEXTO Y AÑADIR SUBTITULOS</li>
                                    <li>⭐VIDEOS FANTÁSTICOS CON KAIBER</li>     
                                </ul> 
                            </div>
                            </div>
                    <div className='despleCard'>
                        <span>PAGINAS WEB CON IA / 2 LECCIONES</span>
                        <button onClick={handleShow7}>{isShow7?'-':'+'}</button>
                    </div><div className={`despleCardContents ${isShow7 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                <li>⭐MIXO</li>
                                <li>⭐DURABLE</li> 
                                </ul> 
                            </div>
                            </div>
                    <div className='despleCard'>
                        <span>VIDEOS E IMAGENES CON AVATARES / 4 LECCIONES</span>
                        <button onClick={handleShow8}>{isShow8?'-':'+'}</button>
                    </div><div className={`despleCardContents ${isShow8 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                    <li>⭐D-ID : AVATAR CON TU CARA Y VOZ</li>
                                    <li>⭐SYNTHESIA PARTE 1 PRIMEROS PASOS</li>
                                    <li>⭐SYNTHESIA 2: CONFIGURACIÓN DEL AVATAR / ESCENAS / GENERAR EL GUÍON CON IA</li>
                                    <li>⭐LENSA: IMÁGENES DE AVATARES FANTÁSTICOS CON TU PROPIA CARA</li> 
                                </ul> 
                            </div>
                            </div>
                    <div className='despleCard'>
                        <span>CREACIÓN DE MÚSICA ORIGINAL / 2 LECCIONES</span>
                        <button onClick={handleShow9}>{isShow9?'-':'+'}</button>
                    </div><div className={`despleCardContents ${isShow9 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                    <li>⭐AIVA</li>
                                    <li>⭐BANDLAB</li> 
                                </ul> 
                            </div>
                            </div>
                    <div className='despleCard'>
                        <span>BONO: PROMPTS DE MARKETING PARA CHATGPT</span>
                        <button onClick={handleShow1}>{isShow1?'-':'+'}</button>
                    </div><div className={`despleCardContents ${isShow1 ? 'show' : ''}`}>
                            <div className='despleList'>
                                <ul>
                                    <li>⭐ INGRESA HOY Y OBTEN ESTE  BONO DE 200 PROMTS CUIDADOSAMENTE PREDISEÑADOS PARA AHORRARTE HORAS Y OBTENER LOS MEJORES RESULTADOS DE CHATGPT. </li> 
                                </ul> 
                            </div>
                            </div>
                </div>
            </div>
        </div>               
    </div>
    </>
  )
}

export default Benefits