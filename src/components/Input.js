export default function Input({ id, name, type, style, value, onchange }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      style={style}
      value={value}
      onChange={onchange}
    />
  );
}
