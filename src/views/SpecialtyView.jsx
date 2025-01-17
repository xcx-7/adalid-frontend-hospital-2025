import SpecialtyList from "../components/SpecialtyList";
import SpecialtyProvider from "../context/SpecialtyContext";

export default function SpecialtyView() {
    return (
        <SpecialtyProvider>
            <div className='card mt-5 card-body'>
                <h2>Especialidades</h2>
                <SpecialtyList />
            </div>
        </SpecialtyProvider>
    );
}