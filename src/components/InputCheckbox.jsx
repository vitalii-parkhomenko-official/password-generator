import classes from "./InputCheckbox.module.scss";

function InputCheckbox(props) {
  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        id={props.id}
        name={props.name}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className={classes.check} />
      <label
        className={classes.label}
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
}

export default InputCheckbox;
