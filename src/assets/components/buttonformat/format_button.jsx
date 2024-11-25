import { IcBaselineMessage } from "../../svg/icon";
import "./format_button.css";
export default function ButtonFormat(props) {
  return (
    <div className="button-format">
      <button>
        <div>
          <span class={props.spanclass} />
          <p>{props.text}</p>
        </div>
      </button>
    </div>
  );
}
