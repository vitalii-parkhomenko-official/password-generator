import classes from "./Button.module.scss";

function Button(props) {
  return (
    <button
      className={classes.root}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
