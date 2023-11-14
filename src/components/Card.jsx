import classes from "./Card.module.scss";

function Card(props) {
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default Card;
