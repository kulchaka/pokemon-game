import {useHistory} from 'react-router-dom'
import s from './style.module.css'
// import POKEMONS from "../../data/POKEMONS.json";
import PokemonCard from "../../components/PokemonCard";
import {useEffect, useState} from 'react'
import database from "../../service/firebase";

const GamePage = () => {

    // const [pokemonz, setPokemons] = useState(() => POKEMONS.map(el => ({ ...el, active: false })))
    const [pokemonz, setPokemons] = useState({})
    const handlerCard = (key) => {
        console.log('#### KEY:', key)

        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const pokemonKey = item[0];
                // console.log('#### ID:', item[0])
                if (pokemonKey === key) {
                    pokemon.active = !pokemon.active;
                }


                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            console.log('####DATABase:', snapshot.val())
            setPokemons(snapshot.val())
        })
    }, [])

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
                        Object.entries(pokemonz).map(([key, {id, name, img, type, values, active}]) => <PokemonCard
                            key={key}
                            name={name}
                            img={img}
                            id={key}
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