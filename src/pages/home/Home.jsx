import Navbar from "../../blocks/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Popular from "./components/popular/Popular";
import Trip from "./components/trip/Trip";
import Reason from "./components/reason/Reason";
import Tips from "./components/tips/Tips";
import Footer from "../../blocks/footer/Footer";

export default function Home() {
    return <>
        <Navbar />
        <Banner />
        <Popular />
        <Trip />
        <Reason />
        <div className="background-img"></div>
        <Tips />
        <Footer />
    </>
}