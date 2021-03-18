import MenuHeader from "../../components/MenuHeader";
import s from './style.module.css'
import Footer from "../../components/Footer";

const GamePage = ({onChangePage}) => {

    const handler = () => {
        console.log('<GamePage />')
        onChangePage && onChangePage('app')
    }

    return (
        <>
            <MenuHeader bgActive />
            <div className={s.container}>
            <h1>This is our GAME PAGE!</h1>
            <button onClick={handler}>BACK</button>
            </div>
            <Footer />

        </>
    )
}

export default GamePage