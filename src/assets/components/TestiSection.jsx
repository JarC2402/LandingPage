import React from 'react'
import testiAdriana from './video/testiAdriana.mp4'
import testiAngel from './video/testiAngel.mp4'
import testiLaura from './video/testiLaura.mp4'
import testiSyara from './video/testiSyara.mp4'

const TestiSection = () => {
  return (
    <>
    <div className='testiContainer'>
        <div className='descriptionTesti'>Miles de emprendedores y dueños de negocios en todo el mundo ya están ahorrando MUCHO tiempo y dinero gracias a que adquirieron I.A. Acelera.</div>
        <div className='tittleTesti'>Mira sus testimonios aquí:</div>
        <div className='videoContent'>
            <div className='videoTesti'>
                <video controls >
                    <source src={testiAdriana} type="video/mp4" />
                </video>
            </div>
            <div className='videoTesti'>
                <video controls >
                    <source src={testiAngel} type="video/mp4" />
                </video>
            </div>
            <div className='videoTesti'>
                <video controls >
                    <source src={testiLaura} type="video/mp4" />
                </video>
            </div>
            <div className='videoTesti'>
                <video controls >
                    <source src={testiSyara} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestiSection