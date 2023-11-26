import TripItem from "./trip-item/TripItem"
import Title from "../../../../blocks/title/Title"

const list = [
    {
        imgLink: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
        name: "French Autumn",
        desc: "City Tours, Urban",
        price: 5000,
    },
    {
        imgLink: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
        name: "Grand Switzerland",
        desc: "Shopping, Mountain, Snow & Ice",
        price: 5000,
    },
    {
        imgLink: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
        name: "Discover Japan",
        desc: "City Tours, Iconic",
        price: 6000,
    }
]

export default function Trip() {
    return (<div className="trip row ">
        <Title main="Best Value Trips" sub="Best offers trips from us" />
        <div className="trip_list">
        {list.map(i => <TripItem item={i} key={i.name}  />)}
        </div>
    </div>)
}