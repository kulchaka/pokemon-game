import {useHistory} from 'react-router-dom'
import s from './style.module.css'
import POKEMONS from "../../data/POKEMONS.json";
import PokemonCard from "../../components/PokemonCard";
import {useEffect, useState} from 'react'

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmYiwrKAK4VuMaxmQXZzD5CYdUOLx6078",
    authDomain: "pokemon-cardz.firebaseapp.com",
    databaseURL: "https://pokemon-cardz-default-rtdb.firebaseio.com",
    projectId: "pokemon-cardz",
    storageBucket: "pokemon-cardz.appspot.com",
    messagingSenderId: "258144951272",
    appId: "1:258144951272:web:53b2060a3ca2ba60b2625d"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
    console.log('####DATABase:', snapshot.val())
})


const GamePage = () => {

    const [pokemonz, setPokemons] = useState(() => POKEMONS.map(el => ({ ...el, active: false })))

    const handlerCard = (id) => {
        // console.log('#### ID:', id)
        setPokemons(prevState => prevState.map(item => item.id === id ? { ...item, active: !item.active } : item))
    }

    useEffect(() => {
        console.log(pokemonz)
    })

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