import {useHistory} from 'react-router-dom'
import h from './style.module.css'

const Header = ({title, descr, onClickButton}) => {

    const history = useHistory();

    const handler = () => {
        // console.log('<Header />')
        // onClickButton && onClickButton('game');
        history.push('/game')
    }

    return (
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.silhouette}></div>
            <div className={h.moon}></div>
            <div className={h.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handler}>Start Game</button>
            </div>
        </header>
    )
}

export default Header;