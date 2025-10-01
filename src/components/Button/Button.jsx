export default function Button({ name, handleOpen, className }) {
    return (
        <div>

            <button
                type="button"
                className={`btn ${className}`}
                onClick={handleOpen}
            >
                {name}
            </button>

        </div>
    )
}