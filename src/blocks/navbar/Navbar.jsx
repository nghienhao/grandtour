import ItemNavbar from "./items/ItemNavbar";
import { IoMdMenu, IoMdCart } from "react-icons/io";
import "./Navbar.scss";

import { useEffect, useRef, useState } from "react";


const itemList = [
  {
    title: "Home",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Tours",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Booking",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Destinations",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Pages",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Blog",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Shortcodes",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
  {
    title: "Shop",
    childrens: ["Home 1 - Background Image", "Home 2 - Background Image"],
  },
];

export default function Navbar() {
  const ref = useRef(null)
  const [height, setHeight] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [color, setColor] = useState("white");


  const listenScrollEvent = ( ) => {
    if(window.scrollY > 200) {
      ref.current.classList.add("moveDown");
      setBgColor("white");
      setColor("black");
    } else {
      ref.current.classList.remove("moveDown");
      ref.current.classList.add("hideFade");
      setBgColor("transparent");
      setColor("white");
    }
  }

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    window.addEventListener("scroll", listenScrollEvent);
  })


  return (
    <div className="navbar" ref={ref} style={{backgroundColor: bgColor}}>
      <div className="navbar_wrapper row">
        <img src={"logo.png"} alt="Logo" width="92px" height="22px"></img>
        <ul className="navbar_wrapper_list" >
          {itemList.map((i) => (
            <ItemNavbar key={i.title} title={i.title} childrens={i.childrens} color={color} />
          ))}
          <li className="mobile_menu">
            <IoMdMenu color={color} />
          </li>
          <li className="mobile_menu">
            <IoMdCart color={color} />
          </li>
        </ul>
      </div>
    </div>
  );
}
