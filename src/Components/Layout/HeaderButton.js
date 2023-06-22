import { useContext, useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import CartContext from "../../Store/CartContext";
import classes from "./HeaderButton.module.css";
const HeaderButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer=setTimeout(()=>{setBtnIsHighLighted(false)},300)
    return()=>{clearTimeout(timer)}
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <MdShoppingCart className={classes.cart} />
      </span>
      <span className={classes.font}> you cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
