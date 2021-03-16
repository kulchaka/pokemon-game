import m from './style.module.css'
import cn from 'classnames'

const Menu = ({state}) => {

    console.log(state, 'MENU')

    return (
        <div className={cn(m.menuContainer, { [m.active]: state })}>
            <div className={m.overlay}/>
            <div className={m.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu