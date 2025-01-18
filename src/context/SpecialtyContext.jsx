import { createContext, useState } from "react";

export const SpecialtyContext = createContext();

export default function SpecialtyProvider({ children }) {
    const [specialties, setSpecialties] = useState([
        {id: 1, name: "Urgencias"},
        {id: 2, name: "Laboratorio"},
        {id: 3, name: "Maternidad"},
        {id: 4, name: "Imagenología"}
    ]);

    const addSpecialty = (specialty) => {
        setSpecialties((prev) => [...prev, specialty]);
    };

    return (
        <SpecialtyContext.Provider value={{specialties, addSpecialty}}>
            {children}
        </SpecialtyContext.Provider>
    );
}