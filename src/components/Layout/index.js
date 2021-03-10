import l from './style.module.css'

const Layout = (props) => {
    const bgStyle = props.urlBg ? `url(${props.urlBg})` : props.colorBg;
    console.log(bgStyle);
    return (
        <section className={l.root} style={{background: bgStyle}}>
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>
                            {props.title}
                        </h3>
                        <span className={l.separator}></span>
                    </div>
                    <div className={`${l.desc} ${l.full}`}>
                        <p>
                            {props.descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
