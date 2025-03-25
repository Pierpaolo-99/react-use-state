export default function Button({ name, ActiveButton, handleOpen, children }) {
    return (
        <div>
            <div>
                <button className="Button" onClick={handleOpen}>{name}</button>
            </div>
            <div className="card">
                <p className="card-text">{ActiveButton && children}</p>
            </div>
        </div>
    )
}