import AppointmentForm from "./components/AppointmentForm";
import ServiceList from "./components/ServiceList";
import "./App.css";
import "./styles/styles.css";
import { Profiler, useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";
import SpecialtyView from "./views/SpecialtyView";
import DoctorList from "./components/DoctorList";

function App() {
	const [servicesList, setServicesList] = useState([]);
	const [doctorList, setDoctorList] = useState([]);

	const onRenderCallback = (id, phase, actualDuration) => {
		console.log(`${id} (${phase}) tomó ${actualDuration}ms para renderizar`);
	};

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
				<a className="navbar-brand" href="#home">Hello I'm CX-7</a>
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
		<Profiler id="specialtiesProfiler" onRender={onRenderCallback}>
			<SpecialtyView />
		</Profiler>
		<ServiceList services={servicesList} />
		<DoctorList doctors={doctorList} />
		<AppointmentForm />
	</div>
  );
}

export default App;
