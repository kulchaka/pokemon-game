import cn from 'classnames'

import s from './index.module.css';
import cardImg from './assets/card-back-side.jpg';

const PokemonCard = ({name, img, id, type, values, isActive, clickCard, minimize, className}) => {

    const onClickCard = () => {
        clickCard && clickCard(id)
    }

    // const [isActive, setActive] = useState(false);

    // const handler = () => {
    //     // setActive(true);
    //     // isActive ? setActive(false) : setActive(true)
    //     setActive(!isActive)
    // }


    return (
        // <div className={p.root} onClick={onClickCard}>
        //     <div className={cn(p.pokemonCard, {[p.active]: isActive})}>
        //         <div className={p.cardFront}>
        //             <div className={cn(p.wrap, p.front)}>
        //                 <div className={cn(p.pokemon, p[type])}>
        //                     <div className={p.values}>
        //                         <div className={cn(p.count, p.top)}>{values.top}</div>
        //                         <div className={cn(p.count, p.right)}>{values.right}</div>
        //                         <div className={cn(p.count, p.bottom)}>{values.bottom}</div>
        //                         <div className={cn(p.count, p.left)}>{values.left}</div>
        //                     </div>
        //                     <div className={p.imgContainer}>
        //                         <img src={img} alt={name}/>
        //                     </div>
        //                     <div className={p.info}>
        //                         <span className={p.number}>#{id}</span>
        //                         <h3 className={p.name}>{name}</h3>
        //                         <small className="type">Type: <span>{type}</span></small>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //
        //         <div className={p.cardBack}>
        //             <div className={cn(p .wrap, p.back)}>
        //                 <img src={cardImg} alt="Сard Backed"/>
        //             </div>
        //         </div>
        //
        //     </div>
        // </div>

        <div className={cn(className, s.pokemonCard, {[s.active]: isActive})}>
            <div className={s.cardFront}>
                <div className={cn(s.wrap, s.front)}>
                    <div className={cn(s.pokemon, s[type])}>
                        <div className={s.values}>
                            <div className={cn(s.count, s.top)}>{values.top}</div>
                            <div className={cn(s.count, s.right)}>{values.right}</div>
                            <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                            <div className={cn(s.count, s.left)}>{values.left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name}/>
                        </div>
                        {!minimize && (<div className={s.info}>
                            <span className={s.number}>#{id}</span>
                            <h3 className={s.name}>
                                {name}
                            </h3>
                            <small className={s.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={cn(s.wrap, s.back)}/>
            </div>

        </div>
    )
}

export default PokemonCard;