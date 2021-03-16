const GamePage = () => {

    const handler = ({onChangePage}) => {
        onChangePage && onChangePage('app')
    }

    return (
        <div>
            <h1>This is our GAME PAGE!</h1>
            <button onClick={handler}>BACK</button>
        </div>
    )
}

export default GamePage