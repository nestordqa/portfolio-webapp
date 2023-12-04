import { useForm } from "react-hook-form";
// import emailjs from '@emailjs/browser';
import MailImg from '../assets/MailImg';

function Contact () {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const serviceId = "service_404lg0h";
    //     const templateId = "template_1f6qhwr";

    //     const apiKey = "MaKV5Mj_XzF-ue66j";

    //     emailjs.sendForm
    //     emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(result => console.log(result.text)).catch(e => console.log(e))
    // }
    return (
        <>
            <section className='ContactSection' data-bs-spy="scroll" id="scrollspyHeading5">
                <h2>Contacto</h2>
                <div className='ContactContainer'>
                    <div className='ContactImage'>
                        <MailImg />
                    </div>
                    <div className='formContainer'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset>
                                <div className="form__group field">
                                    <input 
                                        type="input" 
                                        className="form__field" 
                                        placeholder="Nombre" 
                                        {...register("userName", { 
                                            required: true, 
                                            maxLength: 20,
                                        })} 
                                    />
                                    <label htmlFor="name" className="form__label">Nombre</label>
                                </div>
                                {
                                    errors?.userName?.type === 'required' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        Este campo es requerido.
                                    </span>
                                }
                                {
                                    errors?.userName?.type === 'maxLength' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        No se admite mas de 20 caracteres.
                                    </span>
                                }
                                <div className="form__group field">
                                    <input 
                                        className="form__field" 
                                        type="text" 
                                        placeholder='Apellido' 
                                        {...register("userLastname", { 
                                            required: true, 
                                            maxLength: 20,
                                        })} 
                                        />
                                    <label htmlFor="userLastname" className="form__label">Apellido</label>
                                </div>
                                {
                                    errors?.userLastname?.type === 'required' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        Este campo es requerido.
                                    </span>
                                }
                                {
                                    errors?.userLastname?.type === 'maxLength' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        No se admite mas de 20 caracteres.
                                    </span>
                                }
                                <div className="form__group field">
                                    <input 
                                        className="form__field" 
                                        placeholder='Email' 
                                        {...register("email", { 
                                            required: true, 
                                            pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
                                        })}                                        
                                        />
                                    <label htmlFor="email" className="form__label">Email</label>
                                </div>
                                {
                                    errors?.email?.type === 'required' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        Este campo es requerido.
                                    </span>
                                }
                                {
                                    errors?.email?.type === 'pattern' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        El correo electronico ingresado es invalido.
                                    </span>
                                }
                                <div className="form__group field">
                                    <textarea 
                                        className="form__field" 
                                        maxLength={500} 
                                        placeholder='Escribe tu mensaje' 
                                        {...register("form", { 
                                            required: true, 
                                            maxLength: 600,
                                            minLength: 100
                                        })} 
                                        />
                                    <label htmlFor="form" className="form__label">Descripción</label>
                                </div>
                                {
                                    errors?.form?.type === 'required' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        Este campo es requerido.
                                    </span>
                                }
                                {
                                    errors?.form?.type === 'maxLength' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        No se admite mas de 600 caracteres.
                                    </span>
                                }
                                {
                                    errors?.form?.type === 'minLength' && 
                                    <span style={{
                                        color: 'red',
                                        fontStyle: 'italic',
                                        fontWeight: '900'
                                    }}>
                                        Debes ingresar mas de 100 caracteres.
                                    </span>
                                }
                                <div>
                                </div>
                                <div className='FormButton'>
                                    <button type='submit'>Enviar</button>
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