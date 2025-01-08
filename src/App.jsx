import AppointmentForm from "./components/AppointmentForm";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import "./App.css";
import "./styles/styles.css";
import { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";

function App() {
	const [servicesList, setServicesList] = useState([]);
	const [doctorList, setDoctorList] = useState([]);

	useEffect(() => {
		fetch("data/services.json")
			.then((response) => response.json())
			.then((services) => setServicesList(services))
			.catch((error) => {
			console.error(error);
		});
	}, []);

	useEffect(() => {
		fetch("data/doctors.json")
			.then((response) => response.json())
			.then((doctors) => setDoctorList(doctors))
			.catch((error) => {
			console.error(error);
		});
	}, []);

  return (
	<div className="App" id="home">
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary hospital-menu">
			<div className="container-fluid">
				<a className="navbar-brand" href="#home">⚕️ Hospital San Itario</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" href="#home">Inicio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#staff">Médicos</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="#contact">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
			<a className="appt-link" href="#contact">Reservar cita</a>
		</nav>

		<SearchComponent />
		<ServiceList services={servicesList} />
		<div id="#staff">
			<h2>Equipo médico</h2>
			<ul className="services-list">
				{doctorList.map((dr) => (
					<li key={dr.id}>
						<DoctorCard doctor={dr} />
					</li>
				))}
			</ul>
		</div>
		<AppointmentForm />
	</div>
  );
}

export default App;
