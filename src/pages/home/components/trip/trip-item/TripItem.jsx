import { IoIosStar, IoIosTimer } from "react-icons/io";

const starColor = <IoIosStar color="#1EC6B6" size={14} />;

export default function TripItem({ item }) {
  return (
    <a className="trip_item">
      <div className="trip_item_img">
        <img src={item.imgLink} alt={item.name} />
        <div>${item.price.toLocaleString()}</div>
      </div>
      <div className="trip_item_info">
        <h4 style={{ fontSize: "20px" }}>{item.name}</h4>
        <p style={{ fontSize: "13px", paddingTop: ".7em", paddingBottom: "1.3em" }}>{item.desc}</p>
        <div className="rating">
          <div style={{display: "flex", alignItems: "center", marginRight: "2px"}}>
            <div>
              {Array(4)
                .fill()
                .map((e) => starColor)}
              <IoIosStar color="gray" />
            </div>
            <p>4 reviews</p>
          </div>

          <div className="rating_days">
            <IoIosTimer />
            <p>5 days</p>
          </div>
        </div>
        <div></div>
      </div>
    </a>
  );
}
