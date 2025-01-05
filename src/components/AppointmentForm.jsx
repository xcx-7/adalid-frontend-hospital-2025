import { useState } from "react";

export default function AppointmentForm() {
    
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        specialty: "",
        message: ""
    });

    const updateForm = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    }
    
    const submitData = (e) => {
        e.preventDefault();
        console.log('Formulario envaido:', contactData);
        setContactData({ name: "", email: "", message: "", specialty: "" });
    }

    return (
        <div className='card mt-5' id="contact">
            <h2>Reserva de hora médica</h2>
            <div className="card-body">
                <form className="contact-form" onSubmit={submitData}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Nombre"
                            value={contactData.name} onChange={updateForm} required/>
                    </div>
                    <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Email"
                            value={contactData.email} onChange={updateForm} required/>
                    </div>
                    <div className="mb-3">
                        <input type="text" name="specialty" className="form-control" placeholder="Especialidad"
                            value={contactData.specialty} onChange={updateForm} required/>
                    </div>
                    <div className="mb-3">
                        <textarea name="message" rows="4" className="form-control" placeholder="Mensaje"
                            value={contactData.message} onChange={updateForm} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )
};

