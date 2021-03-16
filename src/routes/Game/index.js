const GamePage = ({onChangePage}) => {

    const handler = () => {
        console.log('<GamePage />')
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