import {useHistory} from 'react-router-dom'
import s from './style.module.css'


const GamePage = ({onChangePage}) => {

    const history = useHistory();

    const handler = () => {
        // console.log('<GamePage />')
        // onChangePage && onChangePage('app')
        history.push('/')
    }

    return (
        <>
            <div className={s.container}>
                <h1>This is our GAME PAGE!</h1>
                <button onClick={handler}>BACK</button>
            </div>

        </>
    )
}

export default GamePage