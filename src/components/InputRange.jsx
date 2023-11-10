import classes from "./InputRange.module.scss";

function InputRange(props) {
  return (
    <div className={classes.root}>
      <label
        className={classes.label}
        htmlFor={props.id}
      >
        {props.label} - {props.value}
      </label>
      <input
        className={classes.input}
        type="range"
        id={props.id}
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step || 1}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputRange;
