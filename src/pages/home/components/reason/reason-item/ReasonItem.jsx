export default function ReasonItem({img, title, desc }) {
  desc = "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa";

  return (
    <div className="reason_item">
      <div>
        <img src={img} alt="Icon" />

      </div>
      <h2 style={{fontSize: "20px"}}>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
