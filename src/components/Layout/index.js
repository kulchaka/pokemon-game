import cn from 'classnames'
import l from './style.module.css'

const Layout = ({title, colorBg, urlBg, children}) => {
    // const bgStyle = urlBg ? `url(${urlBg})` : colorBg;
    // console.log(bgStyle);
    const style = {};
    if(colorBg) {
        style.backgroundColor = colorBg
    }
    if (urlBg) {
        style.backgroundImage = `url(${urlBg})`
    }
    return (
        <section className={l.root} style={style}>
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={l.separator}></span>
                    </div>
                    <div className={cn(l.desc, l.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
