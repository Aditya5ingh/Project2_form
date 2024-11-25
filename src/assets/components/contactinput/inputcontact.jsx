import "./inputcontact.css";
export default function InputContact(props) {
  return (
    <div className="input-format">
      <span className="input-text">{props.text}</span>
      <input className="input-field" type={props.type} />
    </div>
  );
}
