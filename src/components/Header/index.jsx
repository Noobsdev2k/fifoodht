import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthProvider";
import { auth } from "../../configs/firebaseConfig";
import { setIsAtCheckout, setIsShowCart } from "./headerSlice";
import { setIsShowWishlist } from "../Wishlist/wishlistSlice";

// material ui core

// material ui icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Dialog from "../Dialog";
import BurgerNavbar from "./BurgerNavbar";
import Cart from "../Cart";
import Wishlist from "../Wishlist";

import Logo from "../../assets/svgs/Common/logo.svg";
import "./styles.scss";
import { Avatar, Container } from "@mui/material";

function Header() {
  const [isStickyTop, setIsStickyTop] = useState(false);
  const [isShowBurgerNav, setIsShowBurgerNav] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [totalQnt, setTotalQnt] = useState(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, setUser, hasHeader } = useContext(AuthContext);
  const cartProducts = useSelector((state) => state.cart);
  const { isAtCheckout } = useSelector((state) => state.header);

  const showBurgerNav = () => {
    setIsShowBurgerNav(!isShowBurgerNav);
  };

  const handleBackToHome = () => {
    const action = setIsAtCheckout(false);

    navigate("/home");
    setIsAtCheckout(false);
    dispatch(action);
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    auth.signOut().then(() => {
      setUser(false);
    });
  };

  const toggleCart = () => {
    const action = setIsShowCart(true);

    user && dispatch(action);
    !user && setIsShowDialog(true);
  };

  const toggleWishlist = () => {
    const action = setIsShowWishlist(true);

    dispatch(action);
  };

  // handle scroll
  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 100) {
        setIsStickyTop(true);
      } else {
        setIsStickyTop(false);
      }
    };

    window.addEventListener("scroll", scrollShowNav);

    return window.addEventListener("scroll", scrollShowNav);
  }, []);

  // handle products quanity
  useEffect(() => {
    const totalQnt = cartProducts.reduce(
      (accumulator, item) => accumulator + item.qnt,
      0
    );

    setTotalQnt(totalQnt);
  }, [cartProducts]);

  return (
    <>
      <header
        className={isStickyTop ? "navbar active" : "navbar"}
        style={{ display: hasHeader ? "block" : "none" }}
      >
        <Container>
          <div
            className={
              isAtCheckout ? "navbar__container checkout" : "navbar__container"
            }
          >
            {/* mobile */}
            <EmojiFoodBeverageIcon
              onClick={showBurgerNav}
              className="hamburger-btn"
            />

            {/* desktop */}
            <div onClick={handleBackToHome} className="navbar__link">
              <img className="navbar__logo" src={Logo} alt="logo" />
            </div>

            <div className="navbar--left">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <HomeIcon />
                  Pages
                </li>
                <li className="navbar__item">
                  <RestaurantMenuIcon />
                  Order online
                </li>
                <li className="navbar__item">
                  <LibraryBooksIcon />
                  News
                </li>
                <li className="navbar__item">
                  <StoreMallDirectoryIcon />
                  Store locations
                </li>
              </ul>
            </div>

            <div className="navbar--right">
              <div onClick={toggleCart} className="navbar__cart">
                <ShoppingCartIcon />
                <div className="navbar__cart-qnt">{user ? totalQnt : 0}</div>
              </div>

              {user ? (
                <div className="navbar__account">
                  <Avatar src={user.photoURL} />
                  <div className="navbar__username">{user.displayName}</div>

                  <ul className="navbar__account-options">
                    <li className="navbar__account-option">
                      <PermContactCalendarIcon />
                      <span>My account</span>{" "}
                    </li>
                    <li
                      onClick={toggleWishlist}
                      className="navbar__account-option"
                    >
                      <LoyaltyOutlinedIcon />
                      <span>My wishlist</span>{" "}
                    </li>
                    <li
                      onClick={handleLogOut}
                      className="navbar__account-option"
                    >
                      <ExitToAppIcon />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div onClick={handleLogIn} className="navbar__account">
                  <Avatar />
                  <div className="navbar__username navbar__username--signed-out">
                    Sign In
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* mobile */}
      <BurgerNavbar
        isShow={isShowBurgerNav}
        showBurgerNav={showBurgerNav}
        user={user}
        handleLogOut={handleLogOut}
        handleLogIn={handleLogIn}
      />

      <Cart />
      <Wishlist setIsShowWishlist={setIsShowWishlist} />

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default Header;
