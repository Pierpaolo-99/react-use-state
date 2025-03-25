export default function Button({ name, ActiveButton, handleOpen, children }) {
    return (
        <div>

            <button
                type="button"
                className="btn btn-primary"
                onClick={handleOpen}
            >
                {name}
            </button>

        </div>
    )
}