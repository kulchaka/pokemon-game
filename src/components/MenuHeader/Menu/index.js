import m from './style.module.css'
import cn from 'classnames'
import LinksMenu from "./LinksMenu";

const arrMenuNav = [
    {
        text: 'HOME',
        link: '#welcome'
    },
    {
        text: 'GAME',
        link: '#game'
    },
    {
        text: 'ABOUT',
        link: '#about'
    },
    {
        text: 'CONTACT',
        link: '#contact'
    }
];

const Menu = ({navStatus}) => {

    console.log(navStatus, 'MENU')

    const navActive = navStatus ? m.active : m.deactive;

    return (
        <div className={cn(m.menuContainer, navActive)}>
            <div className={m.overlay}/>
            <div className={m.menuItems}>
                <ul>
                    {
                        arrMenuNav.map(el => <LinksMenu
                            text={el.text}
                            link={el.link}
                            key={el.text}
                        />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu