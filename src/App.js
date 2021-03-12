import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bgImg from './assets/bg1.jpg';

const App = () => {
    return (
        <>
            <Header
                title="This is TITLE"
                descr="This is Description"
            />
            <Layout
                title="Title-1"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi inventore sed nobis modi, neque quaerat at maxime ratione, officia nulla ducimus, impedit expedita suscipit? Debitis rerum neque maiores eaque?"
                colorBg="#e2e2e2"
                urlBg={bgImg}
            />
            <Layout
                title="Title-2"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi inventore sed nobis modi, neque quaerat at maxime ratione, officia nulla ducimus, impedit expedita suscipit? Debitis rerum neque maiores eaque?"
                colorBg="#e2e2e2"
            />
            <Layout
                title="Title-3"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi inventore sed nobis modi, neque quaerat at maxime ratione, officia nulla ducimus, impedit expedita suscipit? Debitis rerum neque maiores eaque?"
                colorBg="#e2e2e2"
                urlBg={bgImg}
            />
            <Footer />
        </>
    )
}

export default App;
