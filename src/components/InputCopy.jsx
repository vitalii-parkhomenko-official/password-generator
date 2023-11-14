import Copy from "../icons/Copy";
import classes from "./InputCopy.module.scss";

function InputCopy(props) {
  const handleClick = () => {
    navigator.clipboard.writeText(props.value);
  };

  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        readOnly
        type="text"
        value={props.value}
      />
      <span
        className={classes.icon}
        onClick={handleClick}
      >
        <Copy />
      </span>
    </div>
  );
}

export default InputCopy;
