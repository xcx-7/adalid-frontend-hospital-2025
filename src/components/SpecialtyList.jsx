import { useContext } from "react";
import { SpecialtyContext } from "../context/SpecialtyContext";

export default function SpecialtyList() {

    const { specialties } = useContext(SpecialtyContext);
    
    return (
        <ul className="services-list">
            {specialties.map(specialty => (
                <li className='card text-white bg-primary mb-3' key={specialty.id}>{specialty.name}</li>
            ))}
        </ul>
    );
}