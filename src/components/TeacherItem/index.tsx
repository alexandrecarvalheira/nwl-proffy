import React from 'react'

import './style.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/65663665?s=460&u=122ee813abd90bd3702576eb5d434e8d64f37c9c&v=4" alt="Arex"/>
                    <div>
                        <strong>Arex Carvalheira</strong>
                        <span>Culinária Avançada</span>
                    </div>
                </header>

                <p>
                    Estusiasta gastronomico 
                    <br/><br/>
                    brabo d+
                </p>
                <footer>
                    <p>Preço/hora
                    <strong>R$99,99</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    )
}

export default TeacherItem