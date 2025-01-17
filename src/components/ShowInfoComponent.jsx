export default function ShowInfoComponent({ name, description }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}