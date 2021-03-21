import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import s from './style.module.css'
import cn from 'classnames'

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

const App = () => {
    const match = useRouteMatch('/');
    // console.log('match:', match)
    return (
        <Switch>
            <Route path="/404" render={() => (
                <h1>404 error</h1>
            )}/>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(s.wrap, {
                        [s.isHomePage]: match.isExact
                    })}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={() => (
                                <h1>this is page ABOUT</h1>
                            )}/>
                            <Route render={() => (
                                <Redirect to="/404"/>
                            )}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )


    // const [page, setPage] = useState('app');
    //
    // const handlerChangePage = (page) => {
    //     console.log('<Main />')
    //     setPage(page)
    // }
    //
    //
    // switch (page) {
    //     case 'app':
    //         return <HomePage onChangePage={handlerChangePage} />
    //     case 'game':
    //         return <GamePage onChangePage={handlerChangePage} />
    //     default:
    //         return <HomePage />
    // }
}

export default App