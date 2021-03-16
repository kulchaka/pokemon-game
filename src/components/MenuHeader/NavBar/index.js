import n from './style.module.css'
import cn from 'classnames'

const NavBar = () => {
    return (
        <>
            <nav className={n.root}>
                <div className={n.navWrapper}>
                    <p className={n.brand}>
                        LOGO
                    </p>
                    <a className={cn(n.menuButton, n.active)}>
                        <span/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar