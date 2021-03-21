import {useHistory} from 'react-router-dom'
import s from './style.module.css'
import POKEMONS from "../../data/POKEMONS.json";
import PokemonCard from "../../components/PokemonCard";
import {useState} from 'react'


const GamePage = () => {

    const [pokemonz, setPokemons] = useState(() => POKEMONS.map(el => ({ ...el, active: false })))

    const handlerCard = (id) => {
        console.log('#### ID:', id)
        setPokemons(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))
    }

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
                        pokemonz.map(({ id, name, img, type, values, active}) => <PokemonCard
                            key={id}
                            name={name}
                            img={img}
                            id={id}
                            type={type}
                            values={values}
                            clickCard={handlerCard}
                            isActive={active}
                        />)
                    }
                </div>
            </div>

        </>
    )
}

export default GamePage