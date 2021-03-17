import MenuHeader from "../../components/MenuHeader";

const GamePage = ({onChangePage}) => {

    const handler = () => {
        console.log('<GamePage />')
        onChangePage && onChangePage('app')
    }

    return (
        <>
            <MenuHeader bgActive={true} />
            <h1>This is our GAME PAGE!</h1>
            <button onClick={handler}>BACK</button>

        </>
    )
}

export default GamePage