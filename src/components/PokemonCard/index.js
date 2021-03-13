import p from './index.module.css';
import cardImg from './assets/card-back-side.jpg'

const PokemoCard = ({name, img, id, type, values, ...props}) => {
    console.log(props)
    return (
        <div className={p.root}>
            <div className={p.pokemonCard}>
                <div className={p.cardFront}>
                    <div className={`${p.wrap} ${p.front}`}>
                        <div className={`${p.pokemon}`}>
                            <div className={p.values}>
                                <div className={`${p.count} ${p.top}`}>{values.top}</div>
                                <div className={`${p.count} ${p.right}`}>{values.right}</div>
                                <div className={`${p.count} ${p.bottom}`}>{values.bottom}</div>
                                <div className={`${p.count} ${p.left}`}>{values.left}</div>
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
                    <div className={`${p.wrap} ${p.back}`}>
                        <img src={cardImg} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemoCard