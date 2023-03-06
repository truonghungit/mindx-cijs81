import "./Light.css";

export default function Light(props) {
  return (
    <div className={`light ${props.color} ${props.on ? "on" : "off"}`}></div>
  );
}
