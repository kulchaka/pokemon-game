import {useState} from 'react';
import cn from 'classnames'

import p from './index.module.css';
import cardImg from './assets/card-back-side.jpg';

const PokemoCard = ({name, img, id, type, values}) => {

    const [isActive, setActive] = useState(false);

    const handler = () => {
        // setActive(true);
        // isActive ? setActive(false) : setActive(true)
        setActive(!isActive)
    }


    return (
        <div className={p.root} onClick={handler}>
            <div className={cn(p.pokemonCard, {[p.active]: isActive})}>
                <div className={p.cardFront}>
                    <div className={cn(p.wrap, p.front)}>
                        <div className={cn(p.pokemon, p[type])}>
                            <div className={p.values}>
                                <div className={cn(p.count, p.top)}>{values.top}</div>
                                <div className={cn(p.count, p.right)}>{values.right}</div>
                                <div className={cn(p.count, p.bottom)}>{values.bottom}</div>
                                <div className={cn(p.count, p.left)}>{values.left}</div>
                            </div>
                            <div className={p.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={p.info}>
                                <span className={p.number}>#{id}</span>
                                <h3 className={p.name}>{name}</h3>
                                <small className="type">Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={p.cardBack}>
                    <div className={cn(p.wrap, p.back)}>
                        <img src={cardImg} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemoCard;