import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { setIsShowWishlist } from "../Wishlist/wishlistSlice";

// material ui core
import Avatar from "@mui/material/Avatar";
// material ui icons
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

import "./BurgerNavbar.scss";

function BurgerNavbar(props) {
  const { user, isShow, showBurgerNav, handleLogOut, handleLogIn } = props;

  const dispatch = useDispatch();

  const openWishlist = () => {
    const action = setIsShowWishlist(true);

    dispatch(action);
  };

  const onHandleLogIn = () => {
    if (!user) {
      handleLogIn();
      showBurgerNav();
    }
  };

  return (
    <div className="burger-nav">
      <div
        className={
          isShow ? "burger-nav__content active" : "burger-nav__content"
        }
      >
        <div className="burger-nav__top">
          <div onClick={onHandleLogIn} className="burger-nav__account">
            <Avatar src={user?.photoURL} className="burger-nav__icon" />
            <div className="burger-nav__username">
              {user?.displayName ?? "Sign In"}
            </div>
          </div>
          {user && (
            <div onClick={handleLogOut} className="burger-nav__logout">
              Log Out
            </div>
          )}
        </div>

        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <HomeIcon />
            Pages
          </li>
          <li className="burger-nav__item">
            <RestaurantMenuIcon /> Order online
          </li>
          <li className="burger-nav__item">
            <LibraryBooksIcon /> News
          </li>
          <li className="burger-nav__item">
            <StoreMallDirectoryIcon /> Store locations
          </li>
        </ul>

        <div onClick={openWishlist} className="burger-nav__favourite">
          <LoyaltyIcon />
          <span>Your wishlist</span>
        </div>
      </div>

      <span
        className={
          isShow ? "burger-nav__overlay active" : "burger-nav__overlay"
        }
        onClick={showBurgerNav}
      ></span>
    </div>
  );
}

BurgerNavbar.propsTypes = {
  user: PropTypes.object,

  isShow: PropTypes.bool.isRequired,
  showBurgerNav: PropTypes.func.isRequired,
  setIsShowWishlist: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

export default BurgerNavbar;
