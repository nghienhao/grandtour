import { IoIosArrowDown } from "react-icons/io";


export default function ItemNavbar({ title, childrens, color }) {
  return (
    <li>
      <a href="" style={{color}}>{title}
      </a>
      <IoIosArrowDown style={{color}} />
      <ul className="sub-menu">
        {childrens.map((i) => (
          <li key={i}><a href="">{i}</a></li>
        ))}
      </ul>
    </li>
  );
}
