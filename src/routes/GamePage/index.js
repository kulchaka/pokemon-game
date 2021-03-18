import {useHistory} from 'react-router-dom'
import s from './style.module.css'
import POKEMONS from "../../data/POKEMONS.json";
import PokemonCard from "../../components/PokemonCard";


const GamePage = () => {

    const history = useHistory();

    const handler = () => {
        // console.log('<GamePage />')
        // onChangePage && onChangePage('app')
        history.push('/')
    }

    return (
        <>
            <div className={s.container}>
                <>
                <h1>This is our GAME PAGE!</h1>
                <button onClick={handler}>BACK</button>
                </>
                <div className={s.flex}>
                    {
                        POKEMONS.map(items => <PokemonCard
                            key={items.id}
                            name={items.name}
                            img={items.img}
                            id={items.id}
                            type={items.type}
                            values={items.values}
                        />)
                    }
                </div>
            </div>

        </>
    )
}

export default GamePage