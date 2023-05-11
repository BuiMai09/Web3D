import NewProduct from "./NewProduct"
import AllItem from "../Product/AllItem";
import Exploer from "./Exploer";
import Review from "./Review";
import Footer from "./footer";
import Search from "./Search"

const Home = () => {
    return (
        <>
            <NewProduct />
            <Search />
            <div className="text-2xl mt-10 mb-10 p-4 font-bold text-black text-center">
                Trending Near You
            </div>
            <div>
                <AllItem />
            </div>
            <Exploer />
            <Review />
            <Footer />
        </>
    )
}

export default Home;