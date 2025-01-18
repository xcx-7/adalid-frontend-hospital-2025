import React from "react";
import SpecialtyList from "../components/SpecialtyList";
import SpecialtyProvider from "../context/SpecialtyContext";

const SpecialtyView = () => {
    return (
        <SpecialtyProvider>
            <div className='card mt-5 card-body'>
                <h2>Especialidades</h2>
                <SpecialtyList />
            </div>
        </SpecialtyProvider>
    );
}

export default React.memo(SpecialtyView);