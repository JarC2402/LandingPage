import React from 'react'
import videoIa from './video/videoSell.mp4'


const VideoSection = () => {
  return (
    <>
        <div className="videoContainer">
        <div className="video">
          <video controls poster="https://i.vimeocdn.com/video/1810746567-39b14be3243be19d5f2ac6c4d585a031d70258631fdbb9a4aff99191abd25b75-d?mw=1100&mh=619">
            <source src={videoIa} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className='text1'>          
            La inteligencia artificial llegó para ayudarte a encontrar nuevas formas de generar ingresos para tí y para tu negocio, a ahorrarte mucho tiempo y muchos dolores de cabeza. Desde la generación de contenido increíble hasta la toma de decisiones estratégicas para lograr el éxito, es la inversión más inteligente que podrás hacer hoy en día.
          
        </div>
      </div>

        
    </>
  )
}

export default VideoSection

