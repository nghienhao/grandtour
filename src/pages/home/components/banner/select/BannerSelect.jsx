

export default function Select({name, value, icon}) {
  return (
    <div className="banner_group_item">
      <select name={name} id="">
        <option value="" disabled selected hidden>
          {name}
        </option>
        {value.map(i => <option key={i} value={i}>{i}</option>)}
      </select>
      {icon}
    </div>
  );
}
