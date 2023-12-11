import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
// import MailImg from '../assets/MailImg';

function Contact () {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {        
        // const serviceId = "service_hf2gixf";
        // const templateId = "template_pr27x19";

        // const apiKey = "-5Oi1SkA8rEheBOEo";
        // emailjs.sendForm(serviceId, templateId)
        // .then(result => console.log(result.text))
        // .catch(e => console.log(e));
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }
    return (
        <>
            <section className='ContactSection' data-bs-spy="scroll" id="scrollspyHeading5">
                <h2>Contacto</h2>
                <div className='ContactContainer'>
                    <div className='ContactImage'>
                    <svg className="envelope" height="457" viewBox="0 0 466 457" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg className="ContactImageSvg" height="457" viewBox="0 0 466 457" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="314" y="189.465" width="147" height="44.7479" rx="22.374" fill="#1B1B31" fillOpacity="0.4" />
                            <rect x="121.5" y="117.606" width="258" height="174.183" rx="18.5" fill="#D9D9D9" stroke="black" />
                            <path d="M246.952 169.984C249.574 167.767 253.416 167.779 256.024 170.012L326 229.928L365 262.299L377.133 272.465C377.376 272.668 377.576 272.916 377.722 273.195C377.905 273.543 378 273.929 378 274.321V274.78C378 275.028 377.979 275.275 377.936 275.519L377.599 277.444C377.533 277.819 377.437 278.189 377.311 278.55L376.784 280.054C376.595 280.592 376.342 281.106 376.029 281.582L374.618 283.731C374.209 284.355 373.702 284.909 373.117 285.373L369.126 288.54C368.383 289.129 367.528 289.562 366.613 289.811L361.902 291.092C361.303 291.255 360.686 291.338 360.065 291.338H141L137.94 290.973C137.316 290.899 136.705 290.741 136.123 290.504L133.985 289.631C133.662 289.5 133.35 289.344 133.05 289.166L130.177 287.456C129.727 287.188 129.309 286.871 128.93 286.51L127.506 285.155C127.17 284.834 126.866 284.481 126.599 284.1L125.43 282.43C125.144 282.022 124.903 281.585 124.71 281.126L124 279.437L123.718 278.631C123.573 278.217 123.467 277.79 123.402 277.356L123.131 275.551C122.743 272.966 123.828 270.381 125.943 268.846L143.5 256.11L180 226.596L246.952 169.984Z" fill="white" />
                            <path d="M256.048 239.412C253.426 241.628 249.584 241.617 246.976 239.383L177 179.468L138 147.097L127 137.1L123.519 134.2C123.176 133.914 122.894 133.565 122.686 133.17C122.249 132.337 122.177 131.359 122.488 130.47L122.856 129.42C122.952 129.145 123.068 128.878 123.204 128.62L124.115 126.884C124.371 126.397 124.683 125.942 125.045 125.528L126.614 123.737C126.871 123.443 127.152 123.171 127.455 122.924L129.747 121.053C130.247 120.645 130.8 120.309 131.393 120.052L134.67 118.634C135.547 118.254 136.494 118.058 137.45 118.058L253.5 118.058L312.5 118.058L342.5 118.058L358.5 118.058L362.179 118.058C362.724 118.058 363.268 118.122 363.799 118.249L367 119.01L369.602 119.939C370.524 120.268 371.366 120.787 372.075 121.462L374.138 123.426C374.379 123.656 374.604 123.902 374.81 124.164L376.485 126.291C377.153 127.138 377.615 128.128 377.837 129.184L378 129.959L378.282 130.765C378.427 131.179 378.533 131.606 378.598 132.04L378.943 134.339C378.981 134.592 379 134.849 379 135.105C379 136.668 378.293 138.146 377.076 139.126L359.5 153.285L323 182.8L256.048 239.412Z" fill="#FF3F66" />
                            <rect x="54.0001" y="306.571" width="147" height="44.7479" rx="22.374" fill="#1B1B31" fillOpacity="0.4" />
                            <rect x="165" y="428.438" width="170" height="28.5625" rx="14.2812" fill="#1B1B31" fillOpacity="0.78" />
                            <rect x="139" y="0.952026" width="215" height="44.7479" rx="22.374" fill="#1B1B31" fillOpacity="0.4" />
                            <path d="M417.161 294.215L443.655 281.764L444.796 309.873L417.161 294.215Z" stroke="#FF3F66" strokeWidth="4" />
                            <path d="M12.1615 61.9069L38.6554 49.4555L39.7961 77.5647L12.1615 61.9069Z" stroke="#FF3F66" strokeWidth="4" />
                            <rect x="298.5" y="70.05" width="14" height="12.2333" stroke="#FF0000" strokeWidth="3" />
                            <rect x="219.5" y="364.244" width="14" height="12.2333" stroke="#FF0000" strokeWidth="3" />
                            <ellipse cx="91.5" cy="22.374" rx="23.5" ry="22.374" fill="#1B1B31" fillOpacity="0.4" />
                            <path d="M429 54.2687C429 58.7762 424.927 62.7416 419.5 62.7416C414.073 62.7416 410 58.7762 410 54.2687C410 49.7612 414.073 45.7958 419.5 45.7958C424.927 45.7958 429 49.7612 429 54.2687Z" stroke="#343AC8" strokeWidth="4" />
                            <path d="M18.0001 326.565C18.0001 330.029 15.0066 333.085 11.0001 333.085C6.99355 333.085 4.00006 330.029 4.00006 326.565C4.00006 323.1 6.99355 320.044 11.0001 320.044C15.0066 320.044 18.0001 323.1 18.0001 326.565Z" stroke="#343AC8" strokeWidth="6" />
                        </svg>
                    </svg>
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