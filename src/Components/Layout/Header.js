import { Fragment } from "react";
import mealsImage from "../../Images/meals.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Meals</h1>
        <HeaderButton onClick={props.onShowCart}/>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!! " />
      </div>
    </Fragment>
  );
};

export default Header;
