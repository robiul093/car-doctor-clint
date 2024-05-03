import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div className="space-y-10">
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;