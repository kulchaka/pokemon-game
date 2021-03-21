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
        // console.log('#### KEY:', key)

        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const pokemonKey = item[0];
                // console.log('#### ID:', item[0])
                if (pokemonKey === key) {

                    database.ref('pokemons/' + pokemonKey).update({
                        active: !pokemonz[pokemonKey].active
                    }, (error) => {
                        if (error) {
                            console.log('ERROR')
                        } else {
                            console.log('Data saved successfully!')
                        }
                    });

                    pokemon.active = !pokemon.active;
                }
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    }

    useEffect(() => {
        database.ref('pokemons').on('value', (snapshot) => {
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


    const addPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        console.log(newKey)
        database.ref('pokemons/' + newKey).set({
            abilities: ["keen-eye","tangled-feet","big-pecks"],
            base_experience: 157,
            height: 8,
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            name: "dragon",
            stats: {
                ck: 49,
                defense: 49,
                hp: 45,
                "special-attack": 65,
                "special-defense": 65,
                speed: 45
            },
            type: "normal",
            values: {
                bottom: 7,
                left: 7,
                right: "H",
                top: 7
            },
            weight: 888
        });
    }

    return (
        <>
            <div className={s.container}>
                <>
                    <h1>This is our GAME PAGE!</h1>
                    <button onClick={addPokemon}>ADD NEW POKEMON</button>
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
                <>
                    <button onClick={handler}>BACK</button>
                </>
            </div>

        </>
    )
}

export default GamePage