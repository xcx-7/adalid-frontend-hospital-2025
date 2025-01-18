import { useRef } from "react";

export default function AppointmentForm() {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const specialtyInputRef = useRef();
    const messageInputRef = useRef();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const specialty = specialtyInputRef.current.value;
        const message = messageInputRef.current.value;
        console.log(`Nombre: ${name}, Email: ${email}, Especialidad: ${specialty}, Mensaje: ${message}`);
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        specialtyInputRef.current.value = "";
        messageInputRef.current.value = "";
    };
  
    return (
        <div className='card mt-5' id="contact">
            <h2>Reserva de hora médica</h2>
            <div className="card-body">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" id="name" className="form-control" placeholder="Nombre" ref={nameInputRef} />
                    </div>
                    <div className="mb-3">
                        <input type="email" id="email" className="form-control" placeholder="Email" ref={emailInputRef} />
                    </div>
                    <div className="mb-3">
                        <input type="text" id="specialty" className="form-control" placeholder="Especialidad" ref={specialtyInputRef} />
                    </div>
                    <div className="mb-3">
                        <textarea rows="4" id="message" className="form-control" placeholder="Mensaje" ref={messageInputRef} />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}