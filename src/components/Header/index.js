import h from './style.module.css'

const Header = (props) => {
    return (
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.container}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
        </header>
    )
}

export default Header;