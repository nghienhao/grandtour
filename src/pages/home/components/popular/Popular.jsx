import PopularItem from "./popular-item/PopularItem";
import Title from "../../../../blocks/title/Title";

const list = [
  {
    imgLink:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
    name: "Tokyo",
    href: "https://themes.themegoods.com/grandtour/demo/destination/tokyo/",
  },
  {
    imgLink:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
    name: "Seoul",
    href: "https://themes.themegoods.com/grandtour/demo/destination/tokyo/",
  },
  {
    imgLink:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
    name: "Paris",
    href: "https://themes.themegoods.com/grandtour/demo/destination/tokyo/",
  },
  {
    imgLink:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
    name: "London",
    href: "https://themes.themegoods.com/grandtour/demo/destination/tokyo/",
  },
];

export default function Popular() {
  return (
    <div className="popular row">
      <Title main={"Popular Destinations"} sub="World's best tourist destinations" />
      <div className="popular_list">
      {list.map((item) => (
        <PopularItem
          key={item.name}
          imgLink={item.imgLink}
          name={item.name}
          href={item.href}
        />
      ))}
      </div>

    </div>
  );
}
