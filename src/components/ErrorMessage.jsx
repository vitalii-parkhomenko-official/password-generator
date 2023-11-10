import classes from "./ErrorMessage.module.scss";

function ErrorMessage(props) {
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default ErrorMessage;
