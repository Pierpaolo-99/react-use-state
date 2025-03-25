export default function Card({ ActiveButton, description, title }) {
    return (
        <div className="card">
            <h2>{ActiveButton && title}</h2>
            <p className="card-text">{ActiveButton && description}</p>
        </div>
    )
}