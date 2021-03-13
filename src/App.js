import Header from "./components/Header";
import Layout from "./components/Layout";
import PokemoCard from "./components/PokemonCard";
import Footer from "./components/Footer";

import bgImg from './assets/bg1.jpg';

import POKEMONS from './data/POKEMONS.json';


const App = () => {
    return (
        <>
            <Header
                title="This is TITLE"
                descr="This is Description"
            />
            <Layout
                title="Title-1"
                colorBg="#e2e2e2"
                urlBg={bgImg}
            >
                <p>Some Text...</p>
                <p>Some Text...</p>
                <p>Some Text...</p>
            </Layout>
            <Layout
                title="Title-2"
                colorBg="#e2e2e2"
            >
            <div className="flex">
              {
                POKEMONS.map(items => <PokemoCard {...items} />)
              }
            </div>
            </Layout>
            <Layout
                title="Title-3"
                colorBg="#e2e2e2"
                urlBg={bgImg}
            >
                <p>Some Text...</p>
                <p>Some Text...</p>
                <p>Some Text...</p>
            </Layout>
            <Footer />
        </>
    )
}

export default App;
