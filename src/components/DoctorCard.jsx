function DoctorCard({ doctor }) {

    return (
        <div>
            <img src={doctor.imageUrl} className="service__img" alt={doctor.name} />
            <div className="card-body">
                <h5 className="service__department">{doctor.name}</h5>
                <p className="card-text"><small className="text-muted">{doctor.specialty}</small></p>
                <p className="card-text">{doctor.experience}</p>
            </div>
        </div>
    );
};

export default DoctorCard;