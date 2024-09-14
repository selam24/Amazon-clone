import React from "react";
import classes from './Header.module.css'
import { Link } from "react-router-dom";
import amazon from "../../assets/images/amazon.png";
import flag from "../../assets/images/flag.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";


function Header() {
  const [{basket},dispatch]=useContext(DataContext)
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img src={amazon} alt="Amazon logo" />
          </Link>
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
            <Link
              to="https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2Famazonprime&ref_=topnav_lang"
              className={classes.language}
            >
              <img src={flag} alt="Flag" />
              <section name="" id="">
                <option value="">EN</option>
              </section>
            </Link>
          </div>
          {/* 3rd components */}
          <Link
            to="https://www.amazon.com/gp/css/homepage.html?ref_=nav_youraccount_btn"
            className={classes.sign}
          >
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          {/* orders */}
          <Link to="/Orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to="/Cart" className={classes.cart}>
            {/* icon */}
            <AddShoppingCartIcon />
            <span>{basket.length}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
