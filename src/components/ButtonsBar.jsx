import classes from "./ButtonsBar.module.scss";

function ButtonsBar(props) {
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default ButtonsBar;
