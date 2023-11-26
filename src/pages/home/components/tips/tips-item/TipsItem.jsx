import { IoIosStar, IoIosTimer } from "react-icons/io";

const starColor = <IoIosStar color="#1EC6B6" size={14} />;

export default function TipsItem({ item }) {
  return (
    <a className="trip_item tips_item">
      <div className="trip_item_img">
        <img src={item.imgLink} alt={item.name} />
        {/* <div>${item.price.toLocaleString()}</div> */}
      </div>
      <div className="trip_item_info">
        <a href="">{item.date}</a>
        <h4 style={{ fontSize: "20px" }}>{item.name}</h4>
        <p
          style={{
            fontSize: "15px",
            paddingTop: ".7em",
            paddingBottom: "1.3em",
          }}
        >
          {item.desc}
        </p>
        <a href="">Read More {">"}</a>
      </div>
    </a>
  );
}
