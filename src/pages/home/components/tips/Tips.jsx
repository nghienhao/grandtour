import TipsItem from "./tips-item/TipsItem"
import Title from "../../../../blocks/title/Title"

const list = [
    {
        imgLink: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
        name: "Memorial Day to Someone Told Me to Travel",
        desc: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
        date: "DECEMBER 10, 2016",
    },
    {
        imgLink: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
        name: "7 Tips For Nomads On A Budget Trips",
        desc: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..",
        date: "DECEMBER 10, 2016",
    },
    {
        imgLink: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
        name: "Taking A Travel Blog Victory Lap",
        desc: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..",
        date: "DECEMBER 10, 2016",
    }
]

export default function Tips() {
    return (<div className="tips row">
        <Title main={"Articles & Tips"} sub="Explore some of the best tips from around the world" />
        <div className="tips_list">
        {list.map(i => <TipsItem item={i} key={i.name} />)}
        </div>
    </div>)
}