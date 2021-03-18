import n from './style.module.css'
import cn from 'classnames'

const NavBar = ({isOpen, bgActive= false, onClickNav}) => {
    return (
        <>
            <nav id={n.navbar} className={cn(n.root, {
                [n.bgActive]: bgActive
            })}>
                <div className={n.navWrapper}>
                    <p className={n.brand}>
                        LOGO
                    </p>
                    <div onClick={onClickNav} className={cn(n.menuButton, {[n.active] : isOpen})}>
                        <span/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar