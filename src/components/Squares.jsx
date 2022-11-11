const Squares = ({value, onClick}) => {
    return (
        <button className="btn" onClick={() => onClick()}>{value}</button>
    )
}

export default Squares;