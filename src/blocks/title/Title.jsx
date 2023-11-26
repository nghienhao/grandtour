export default function Title({ main, sub }) {
  return (
    <>
      <h2 className="banner_title" style={{ color: "black" }}>
        {main}
      </h2>
      <p className="banner_tagline">
        {sub}
      </p>
    </>
  );
}
