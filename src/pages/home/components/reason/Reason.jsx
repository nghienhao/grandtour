import ReasonItem from "./reason-item/ReasonItem"
import Title from "../../../../blocks/title/Title"
const list = [
    {
        img: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
        title: "Handpicked Hotels"
    },
    {
        img: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
        title: "World Class Service"
    },
    {
        img: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
        title: "Best Price Guarantee"
    }
]

export default function Reason() {
    return (<div className="reason row">
        <Title main="Why Choose Us" sub="Here are reasons you should plan trip with us" />
        <div className="reason_list">
            {list.map(i => <ReasonItem key={i.title} title={i.title} img={i.img} />)}
        </div>
    </div>)
}