import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import MailImg from '../assets/MailImg';

function Contact () {
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_404lg0h";
        const templateId = "template_1f6qhwr";

        const apiKey = "MaKV5Mj_XzF-ue66j";

        emailjs.sendForm
        emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(result => console.log(result.text)).catch(e => console.log(e))
    }
    return (
        <>
            <section className='ContactSection' data-bs-spy="scroll" id="scrollspyHeading5">
                <h2>Contacto</h2>
                <div className='ContactContainer'>
                    <div className='ContactImage'>
                        <MailImg />
                    </div>
                    <div>
                        <form ref={form} onSubmit={handleSubmit}>
                            <fieldset>
                                <div className='FormName'>
                                    <input name='userName' type="text" placeholder='Nombre' required />
                                    <input name='userLastname' type="text" placeholder='Apellido' required />
                                </div>
                                <div className='FormEmail'>
                                    <input name='email' type='email' id="email" placeholder='Email' required />
                                </div>
                                <div>
                                    <textarea maxLength={500} placeholder='Escribe tu mensaje' name='message'  />
                                </div>
                                <div className='FormButton'>
                                    <button>Enviar</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact