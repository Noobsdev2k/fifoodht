import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { ApiContext } from "../../contexts/ApiProvider";
import { setIsAtCheckout, setIsShowCart } from "../Header/headerSlice";
import { setIsShowWishlist } from "../Wishlist/wishlistSlice";

// material ui core

import "./styles.scss";
import { Button } from "@mui/material";

function PrimaryButton(props) {
  const { page, subClass, children, type } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { getProducts } = useContext(ApiContext);

  const handleMovePage = () => {
    const cartAction = setIsShowCart(false);
    const wishlistAction = setIsShowWishlist(false);

    dispatch(cartAction);
    dispatch(wishlistAction);

    if (page === "shop") {
      const action = setIsAtCheckout(false);

      navigate("/shop/best-foods");
      getProducts("best-foods");
      dispatch(action);
    } else if (page === "checkout") {
      const action = setIsAtCheckout(true);

      navigate("/checkout");
      dispatch(action);
    } else if (page === "login") {
      const action = setIsAtCheckout(false);

      navigate("/login");
      dispatch(action);
    }
  };

  return (
    <Button
      onClick={handleMovePage}
      type={type ? "submit" : "button"}
      className={`primary-btn ${subClass || ""}`}
    >
      {children}
    </Button>
  );
}

PrimaryButton.propsTypes = {
  type: PropTypes.string,
  page: PropTypes.string,
  subClass: PropTypes.string,
};

export default PrimaryButton;
