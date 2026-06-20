export default function Stats({ items }) {
  return (
    <div className="stats">
      {items.map((s, i) => (
        <div className="stat" key={i}>
          <div className="num">{s.num}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
