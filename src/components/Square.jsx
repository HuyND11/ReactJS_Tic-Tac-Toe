const Square = ({ value, onClick }) => {
    return (
        <div className="btn" onClick={onClick}>{value}</div>
    )
}

export default Square;