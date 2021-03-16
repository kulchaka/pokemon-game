import m from './style.module.css'
import cn from 'classnames'

const Menu = ({navStatus}) => {

    console.log(navStatus, 'MENU')

    const navActive = navStatus ? m.active : m.deactive;

    return (
        <div className={cn(m.menuContainer, navActive)}>
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