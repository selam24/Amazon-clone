import React from "react";
import classes from './Header.module.css'
import amazon from "../../assets/images/amazon.png";
import flag from "../../assets/images/flag.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LowerHeader from "./LowerHeader";


function Header() {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <a href="https://www.amazon.com/ref=nav_logo">
            <img src={amazon} alt="Amazon logo" />
          </a>
          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              {/* icon */}
              <PlaceIcon />
            </span>
            <div>
              <p>Delivered to Selam</p>
              <span>Alexandria 22304</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          {/* icon */}
          <SearchIcon />
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <div>
            <a
              className={classes.language}
              href="https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2Famazonprime&ref_=topnav_lang"
            >
              <img src={flag} alt="Flag" />
              <section name="" id="">
                <option value="">EN</option>
              </section>
            </a>
          </div>
          {/* 3rd components */}
          <a
            className={classes.sign}
            href="https://www.amazon.com/gp/css/homepage.html?ref_=nav_youraccount_btn"
          >
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          {/* orders */}
          <a href="https://www.amazon.com/gp/css/order-history?ref_=nav_orders_first">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a
            href="https://www.amazon.com/gp/cart/view.html?ref_=nav_cart"
            className={classes.cart}
          >
            {/* icon */}
            <AddShoppingCartIcon />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header;
