import m from './style.module.css'
import cn from 'classnames'
import LinksMenu from "./LinksMenu";

const arrMenuNav = [
    {
        text: 'HOME',
        link: '/'
    },
    {
        text: 'GAME',
        link: 'game'
    },
    {
        text: 'ABOUT',
        link: 'about'
    },
    {
        text: 'CONTACT',
        link: 'contact'
    }
];

const Menu = ({ isOpen }) => {

    console.log(isOpen, 'MENU')

    return (
        <div className={cn(m.menuContainer, {
            [m.active]: isOpen === true,
            [m.deactive]: isOpen === false
        })}>
            <div className={m.overlay}/>
                <ul>
                    {
                        arrMenuNav.map(({text, link}, index) => (<LinksMenu
                            text={text}
                            link={link}
                            key={index}
                        />))
                    }
                </ul>
        </div>
    )
}

export default Menu