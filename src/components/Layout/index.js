import l from './style.module.css'

const Layout = ({title, descr, colorBg, urlBg}) => {
    const bgStyle = urlBg ? `url(${urlBg})` : colorBg;
    console.log(bgStyle);
    return (
        <section className={l.root} style={{background: bgStyle}}>
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={l.separator}></span>
                    </div>
                    <div className={`${l.desc} ${l.full}`}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
