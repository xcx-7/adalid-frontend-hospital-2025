import ShowInfoComponent from './ShowInfoComponent'
import withPhoto from '../hoc/withPhoto'

const DoctorComponent = withPhoto(ShowInfoComponent);

export default function ShowDoctorComponent() {
    return <DoctorComponent imageUrl={"images/medico_01.jpg"} name={"Dr House"} description={"Todo es lupus"} />
};